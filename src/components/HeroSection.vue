<!--
  GUILD Z-ONE HERO REDESIGN MOCKUP
  Design Read: esports portal, dark-navy, asymmetric split
  Signature: logo dengan inner refraction border, tidak decorative
  DESIGN_VARIANCE: 8 — asymmetric, left content / right logo
  MOTION_INTENSITY: 6 — entrance animate, parallax mouse
  VISUAL_DENSITY: 4 — airy but purposeful
-->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { guildInfo } from '../data/members.js'
import { ArrowRight, Users } from 'lucide-vue-next'

const BASE   = import.meta.env.BASE_URL.replace(/\/$/, '')
const loaded = ref(false)
const imgOk  = ref(false)
const mx     = ref(0)
const my     = ref(0)

function onMove(e) {
  mx.value = (e.clientX / window.innerWidth  - 0.5)
  my.value = (e.clientY / window.innerHeight - 0.5)
}

onMounted(() => {
  window.addEventListener('mousemove', onMove, { passive: true })
  requestAnimationFrame(() => setTimeout(() => { loaded.value = true }, 60))
})
onUnmounted(() => window.removeEventListener('mousemove', onMove))
</script>

<template>
  <!--
    Layout: asymmetric split
    Left 55%: stacked text block, left-anchored
    Right 45%: logo featured, parallax depth
  -->
  <section
    id="hero"
    class="relative w-full overflow-hidden bg-[#020609]"
    style="min-height: 100dvh;"
  >

    <!-- ── Base texture — very subtle, no scan-line gimmick ── -->
    <div
      class="absolute inset-0 pointer-events-none"
      style="
        background-image: radial-gradient(ellipse 80% 60% at 70% 40%,
          rgba(6,182,212,.055) 0%, transparent 65%),
          radial-gradient(ellipse 50% 40% at 15% 75%,
          rgba(37,99,235,.035) 0%, transparent 60%);
      "
    />

    <!-- ── Noise grain — fixed pseudo element, no GPU scroll cost ── -->
    <div
      class="fixed inset-0 pointer-events-none z-0 opacity-[.022]"
      style="
        background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n%22/%3E%3C/svg%3E');
        background-size: 160px 160px;
        mix-blend-mode: overlay;
      "
    />

    <!-- ── Main content — asymmetric grid ── -->
    <div
      class="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px]
             min-h-[100dvh] max-w-[1400px] mx-auto px-8 md:px-14 lg:px-16 xl:px-20"
    >

      <!-- LEFT: Content block — bottom-aligned on desktop -->
      <div class="flex flex-col justify-end pb-16 pt-28 lg:pt-0">

        <!-- Eyebrow — small, not screaming -->
        <div
          class="flex items-center gap-3 mb-9 transition-all duration-700"
          :class="loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
          style="transition-delay: 80ms;"
        >
          <div class="w-5 h-px bg-[#22d3ee]/50" />
          <span class="text-[11px] tracking-[.45em] uppercase font-mono text-[#3d6b8f]">
            Guild&ensp;—&ensp;Est. {{ guildInfo.founded }}
          </span>
        </div>

        <!-- Headline — large, left-anchored, not screaming -->
        <div
          class="mb-7 transition-all duration-700"
          :class="loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
          style="transition-delay: 160ms;"
        >
          <!--
            Two-weight split: thin "Guild" / heavy "Z-One"
            Creates hierarchy without being huge across the screen
          -->
          <h1
            class="leading-[.92] select-none"
            style="font-family: 'Arial Narrow', 'Arial', sans-serif;"
          >
            <span
              class="block font-light tracking-widest uppercase text-[#4a7a9b]"
              style="font-size: clamp(1rem, 2.5vw, 1.4rem); letter-spacing: .25em;"
            >Guild</span>
            <span
              class="block font-black text-[#dde8f5]"
              style="font-size: clamp(4.5rem, 12vw, 9rem); letter-spacing: -.04em;"
            >Z-One</span>
          </h1>
        </div>

        <!-- Tagline — proper size, not tiny tracking -->
        <p
          class="text-[15px] text-[#3d6b8f] tracking-wide leading-relaxed mb-12
                 max-w-sm transition-all duration-700"
          :class="loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
          style="transition-delay: 240ms;"
        >
          {{ guildInfo.motto }}
        </p>

        <!-- CTAs — directional, not pill buttons -->
        <div
          class="flex flex-wrap items-center gap-6 transition-all duration-700"
          :class="loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
          style="transition-delay: 320ms;"
        >
          <!-- Primary CTA -->
          <a
            href="#about"
            class="group inline-flex items-center gap-3 px-6 py-3
                   border border-[#1a3a5c] bg-transparent
                   hover:border-[#22d3ee]/50 hover:bg-[#22d3ee]/5
                   transition-all duration-250 text-[13px] tracking-[.2em] uppercase font-mono
                   text-[#4a7a9b] hover:text-[#dde8f5]"
          >
            <Users class="w-3.5 h-3.5" />
            About Guild
            <ArrowRight
              class="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </a>

          <!-- Secondary — text only, directional arrow -->
          <a
            href="#members"
            class="group inline-flex items-center gap-2
                   text-[13px] tracking-[.2em] uppercase font-mono
                   text-[#1a3a5c] hover:text-[#4a7a9b] transition-colors duration-200"
          >
            Members
            <ArrowRight
              class="w-3 h-3 transition-all duration-200 opacity-0 -translate-x-1
                     group-hover:opacity-100 group-hover:translate-x-0"
            />
          </a>
        </div>

        <!-- Bottom micro-stat row — inline, no grid -->
        <div
          class="flex items-center gap-6 mt-16 pt-8 border-t border-[#0d1e2e]
                 transition-all duration-700"
          :class="loaded ? 'opacity-100' : 'opacity-0'"
          style="transition-delay: 500ms;"
        >
          <div>
            <p class="text-xs font-mono text-[#22d3ee] font-bold mb-0.5">2024</p>
            <p class="text-[10px] text-[#1a3050] tracking-[.35em] uppercase font-mono">Founded</p>
          </div>
          <div class="w-px h-6 bg-[#0d1e2e]" />
          <div>
            <p class="text-xs font-mono text-[#22d3ee] font-bold mb-0.5">Open</p>
            <p class="text-[10px] text-[#1a3050] tracking-[.35em] uppercase font-mono">Recruit</p>
          </div>
          <div class="w-px h-6 bg-[#0d1e2e]" />
          <div>
            <p class="text-xs font-mono text-[#22d3ee] font-bold mb-0.5">Active</p>
            <p class="text-[10px] text-[#1a3050] tracking-[.35em] uppercase font-mono">Status</p>
          </div>
        </div>
      </div>

      <!-- RIGHT: Logo — featured, not decorative, parallax depth -->
      <div
        class="hidden lg:flex items-center justify-center pb-16 pt-28"
      >
        <div
          class="relative transition-all duration-1000"
          :class="loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
          style="transition-delay: 200ms;"
          :style="{
            transform: loaded
              ? `translate(${mx * -14}px, ${my * -8}px)`
              : 'translateY(1.5rem)',
            transition: 'transform .8s cubic-bezier(.25,.46,.45,.94)',
          }"
        >
          <!-- Outer glow — tinted to bg hue, not pure neon -->
          <div
            class="absolute -inset-8 rounded-sm pointer-events-none"
            style="
              background: radial-gradient(circle, rgba(6,182,212,.07) 0%, transparent 70%);
              filter: blur(32px);
            "
          />

          <!-- Logo frame — refraction border pattern -->
          <div
            class="relative overflow-hidden"
            style="
              width: clamp(200px, 26vw, 320px);
              aspect-ratio: 1;
              border: 1px solid rgba(34,211,238,.12);
              box-shadow:
                inset 0 1px 0 rgba(255,255,255,.06),
                inset 0 -1px 0 rgba(0,0,0,.4),
                0 32px 80px rgba(0,0,0,.75),
                0 0 0 1px rgba(6,182,212,.05);
            "
          >
            <img
              :src="`${BASE}/assets/guild/logo.jpg`"
              alt="Guild Z-One"
              @load="imgOk = true"
              class="w-full h-full object-cover transition-opacity duration-700"
              :class="imgOk ? 'opacity-100' : 'opacity-0'"
              style="mix-blend-mode: screen;"
            />
            <!-- Corner accent top-right -->
            <div
              class="absolute top-0 right-0 w-8 h-8 pointer-events-none"
              style="
                border-top: 2px solid rgba(34,211,238,.45);
                border-right: 2px solid rgba(34,211,238,.45);
              "
            />
            <!-- Corner accent bottom-left -->
            <div
              class="absolute bottom-0 left-0 w-8 h-8 pointer-events-none"
              style="
                border-bottom: 2px solid rgba(34,211,238,.25);
                border-left: 2px solid rgba(34,211,238,.25);
              "
            />
          </div>

          <!-- Tag below logo — not inside -->
          <p
            class="mt-5 text-center text-[10px] tracking-[.5em] uppercase font-mono text-[#1a3050]"
          >[Z1]</p>
        </div>
      </div>
    </div>

    <!-- Bottom hairline -->
    <div
      class="absolute bottom-0 left-0 right-0 h-px"
      style="background: linear-gradient(to right, transparent, rgba(26,58,92,.5), transparent);"
    />
  </section>
</template>
