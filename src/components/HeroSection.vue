<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { guildInfo } from '../data/members.js'

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')
const mouseX = ref(0)
const mouseY = ref(0)
const isLoaded = ref(false)

function handleMouseMove(e) {
  mouseX.value = (e.clientX / window.innerWidth - 0.5) * 25
  mouseY.value = (e.clientY / window.innerHeight - 0.5) * 12
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
  setTimeout(() => { isLoaded.value = true }, 80)
})
onUnmounted(() => window.removeEventListener('mousemove', handleMouseMove))
</script>

<template>
  <section id="hero" class="relative min-h-screen overflow-hidden bg-[#020408]">

    <!-- Background: foto info guild sebagai atmosphere -->
    <div class="absolute inset-0"
         :style="{ transform: `translate(${mouseX * 0.15}px, ${mouseY * 0.1}px) scale(1.05)` }"
         style="transition: transform 1.2s cubic-bezier(0.25,0.46,0.45,0.94)">
      <img :src="`${BASE}/assets/guild/info.jpg`"
           alt=""
           class="w-full h-full object-cover object-center"
           style="filter: brightness(0.15) saturate(0.4) blur(2px);" />
    </div>

    <!-- Gradient overlays -->
    <div class="absolute inset-0 bg-gradient-to-r from-[#020408] via-[#020408]/70 to-[#020408]/30"></div>
    <div class="absolute inset-0 bg-gradient-to-t from-[#020408] via-transparent to-[#020408]/60"></div>

    <!-- Subtle cyan atmospheric glow -->
    <div class="absolute top-0 right-1/3 w-[600px] h-[600px] pointer-events-none"
         style="background: radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 65%); filter: blur(40px);"></div>

    <!-- Horizontal line accent top -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22d3ee]/20 to-transparent"></div>

    <!-- Main layout: full height, content kiri bawah, logo kanan -->
    <div class="relative z-10 min-h-screen flex items-end pb-20 pt-24">
      <div class="w-full max-w-6xl mx-auto px-8">
        <div class="flex items-end justify-between gap-12">

          <!-- Left: text content -->
          <div class="flex-1 max-w-xl"
               :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
               style="transition: all 1s cubic-bezier(0.16,1,0.3,1)">

            <!-- Eyebrow -->
            <div class="flex items-center gap-3 mb-8">
              <span class="text-[#22d3ee]/60 text-[10px] tracking-[0.6em] uppercase font-mono">Guild</span>
              <div class="w-8 h-px bg-[#1a3a5c]"></div>
              <span class="text-[#3d6b8f] text-[10px] tracking-[0.4em] uppercase font-mono">Est. {{ guildInfo.founded }}</span>
            </div>

            <!-- Guild name — dominant, left-anchored -->
            <h1 class="font-black uppercase leading-[0.9] mb-8 select-none"
                style="font-size: clamp(4.5rem, 14vw, 12rem); letter-spacing: -0.04em; font-family: 'Arial Narrow','Arial',sans-serif;">
              <span class="block text-[#e8f4ff]"
                    style="text-shadow: 0 0 60px rgba(34,211,238,0.15);">Z</span>
              <span class="block text-transparent"
                    style="
                      -webkit-text-stroke: 1.5px rgba(34,211,238,0.35);
                      background: linear-gradient(135deg, #22d3ee 0%, #06b6d4 60%, #0284c7 100%);
                      -webkit-background-clip: text;
                      background-clip: text;
                      -webkit-text-fill-color: transparent;
                      filter: drop-shadow(0 0 30px rgba(34,211,238,0.25));
                    ">One</span>
            </h1>

            <!-- Tagline -->
            <p class="text-[#7ab3d9] text-base tracking-widest uppercase font-mono mb-12">
              {{ guildInfo.motto }}
            </p>

            <!-- CTA row — minimal, directional -->
            <div class="flex items-center gap-8">
              <a href="#about"
                 class="group flex items-center gap-4 text-[#22d3ee] hover:text-[#e8f4ff] transition-colors duration-300">
                <span class="w-12 h-px bg-[#22d3ee] group-hover:w-20 transition-all duration-500"></span>
                <span class="text-xs tracking-[0.3em] uppercase font-mono">Tentang Guild</span>
              </a>
              <a href="#members"
                 class="text-[10px] text-[#3d6b8f] hover:text-[#7ab3d9] tracking-[0.3em] uppercase font-mono transition-colors duration-300">
                Members →
              </a>
            </div>
          </div>

          <!-- Right: logo — besar, featured, bukan decorative -->
          <div class="flex-shrink-0 hidden lg:block"
               :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
               :style="{ transform: isLoaded ? `translate(${mouseX * -0.5}px, ${mouseY * -0.3}px)` : 'translateY(1.5rem)' }"
               style="transition: opacity 1.2s cubic-bezier(0.16,1,0.3,1) 0.2s, transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)">

            <!-- Logo container — clean, no gimmicks -->
            <div class="relative w-64 h-64">
              <!-- Subtle glow behind logo -->
              <div class="absolute inset-0 rounded-full pointer-events-none"
                   style="background: radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 70%); filter: blur(20px); transform: scale(1.3);"></div>

              <!-- Logo image — utama, clean -->
              <div class="relative w-full h-full rounded-sm overflow-hidden border border-[#1a3a5c]/60"
                   style="box-shadow: 0 0 60px rgba(34,211,238,0.08), 0 40px 80px rgba(0,0,0,0.6);">
                <img :src="`${BASE}/assets/guild/logo.jpg`"
                     alt="Guild Z-One"
                     class="w-full h-full object-cover"
                     style="filter: saturate(1.1) brightness(0.95);" />
                <!-- Corner accent top-right -->
                <div class="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#22d3ee]/50"></div>
                <div class="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#22d3ee]/50"></div>
              </div>

              <!-- Tag bawah logo -->
              <div class="absolute -bottom-5 left-0 right-0 flex justify-center">
                <span class="text-[10px] text-[#3d6b8f] tracking-[0.5em] uppercase font-mono bg-[#020408] px-3">[Z1]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom line -->
    <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1a3a5c]/60 to-transparent"></div>
  </section>
</template>

<style scoped>
</style>
