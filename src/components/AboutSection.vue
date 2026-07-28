<script setup>
import { ref, onMounted } from 'vue'
import { guildInfo } from '../data/members.js'

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')
const el   = ref(null)
const show = ref(false)

onMounted(() => {
  const io = new IntersectionObserver(([e]) => {
    if (e.isIntersecting) { show.value = true; io.disconnect() }
  }, { threshold: 0.07 })
  if (el.value) io.observe(el.value)
})

const values = [
  { label: 'Solid',           desc: 'Kekompakan di atas segalanya.',              size: 'xl'  },
  { label: 'Kompetitif',      desc: 'Bermain untuk menang.',                       size: 'lg'  },
  { label: 'Casual-Friendly', desc: 'Tidak ada tekanan — tempo masing-masing.',   size: 'lg'  },
  { label: 'Berkembang',      desc: 'Lebih baik setiap hari.',                    size: 'md'  },
]

const hovered = ref(null)
</script>

<template>
  <section id="about" ref="el" class="relative bg-[#02050c] overflow-hidden">
    <div class="h-px bg-gradient-to-r from-transparent via-[#1a3a5c]/40 to-transparent" />

    <div class="max-w-6xl mx-auto px-8 md:px-14 lg:px-20 py-24 md:py-32">

      <div class="grid lg:grid-cols-[1fr_380px] gap-16 lg:gap-24 items-start">

        <!-- Left: identity — slide in from left -->
        <div
          class="transition-all duration-1000"
          :class="show ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'"
        >
          <p class="text-[10px] tracking-[.55em] uppercase font-mono text-[#2a4a5e] mb-10">About</p>

          <div class="flex items-start gap-5 mb-10">
            <!-- Logo with subtle glow -->
            <div
              class="w-14 h-14 flex-shrink-0 overflow-hidden border border-[#1a3a5c]/50 relative"
              style="box-shadow: 0 0 20px rgba(34,211,238,.06);"
            >
              <img
                :src="`${BASE}/assets/guild/logo.jpg`"
                alt="Z-One"
                class="w-full h-full object-cover"
                style="mix-blend-mode: screen;"
              />
            </div>
            <div class="pt-1">
              <h2
                class="font-black text-[#dde8f5] leading-none tracking-tight mb-2"
                style="font-family:'Arial Narrow','Arial',sans-serif;font-size:2rem;letter-spacing:-.02em;"
              >Guild Z-One</h2>
              <p class="text-xs text-[#2a4a5e] font-mono tracking-widest">
                {{ guildInfo.tag }} · Est. {{ guildInfo.founded }}
              </p>
            </div>
          </div>

          <p class="text-[#4a7a9b] text-base leading-relaxed mb-12 max-w-lg">
            {{ guildInfo.description }}
          </p>

          <!-- Stats with animated underline on hover -->
          <div class="flex items-start gap-10">
            <div class="group cursor-default">
              <p class="text-2xl font-bold text-[#22d3ee] font-mono leading-none mb-1 group-hover:text-white transition-colors duration-200">
                2024
              </p>
              <p class="text-[10px] text-[#2a4a5e] tracking-[.4em] uppercase font-mono">Founded</p>
            </div>
            <div class="group cursor-default">
              <p class="text-2xl font-bold text-[#22d3ee] font-mono leading-none mb-1 group-hover:text-white transition-colors duration-200">
                Active
              </p>
              <p class="text-[10px] text-[#2a4a5e] tracking-[.4em] uppercase font-mono">Status</p>
            </div>
          </div>
        </div>

        <!-- Right: values — stagger from right -->
        <div class="lg:pt-2">
          <p
            class="text-[10px] tracking-[.55em] uppercase font-mono text-[#2a4a5e] mb-10 transition-all duration-700"
            :class="show ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'"
          >Nilai Guild</p>

          <div class="divide-y divide-[#0d1e2e]">
            <div
              v-for="(val, i) in values"
              :key="val.label"
              class="py-6 group cursor-default flex items-baseline justify-between gap-4 transition-all duration-700"
              :class="show ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'"
              :style="{ transitionDelay: `${200 + i * 100}ms` }"
              @mouseenter="hovered = val.label"
              @mouseleave="hovered = null"
            >
              <div>
                <h3
                  class="font-black uppercase leading-none mb-2 transition-colors duration-200"
                  :class="{
                    'text-4xl': val.size === 'xl',
                    'text-2xl': val.size === 'lg',
                    'text-xl':  val.size === 'md',
                    'text-white': hovered === val.label,
                    'text-[#c8d8ea]': hovered !== val.label,
                  }"
                  style="font-family:'Arial Narrow','Arial',sans-serif;letter-spacing:-.01em;"
                >{{ val.label }}</h3>
                <p
                  class="text-xs leading-relaxed transition-colors duration-200"
                  :class="hovered === val.label ? 'text-[#4a7a9b]' : 'text-[#2a4a5e]'"
                >{{ val.desc }}</p>
              </div>
              <span class="text-[10px] text-[#1a3050] font-mono flex-shrink-0 transition-colors duration-200"
                    :class="hovered === val.label ? 'text-[#22d3ee]' : ''">
                0{{ i + 1 }}
              </span>
            </div>
          </div>

          <div
            class="mt-10 pt-6 border-t border-[#0d1e2e] transition-all duration-700"
            :class="show ? 'opacity-100' : 'opacity-0'"
            style="transition-delay: 600ms;"
          >
            <p class="text-[10px] text-[#1a3050] font-mono tracking-widest">
              Rekrutmen: <span class="text-[#22d3ee]">Terbuka</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
