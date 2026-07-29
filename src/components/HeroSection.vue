<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { guildInfo } from '../data/members.js'

const BASE   = import.meta.env.BASE_URL.replace(/\/$/, '')
const loaded = ref(false)
const imgOk  = ref(false)
const px     = ref(0)
const py     = ref(0)

function onMove(e) {
  px.value = (e.clientX / window.innerWidth  - 0.5) * 12
  py.value = (e.clientY / window.innerHeight - 0.5) * 7
}
onMounted(() => {
  window.addEventListener('mousemove', onMove, { passive: true })
  requestAnimationFrame(() => setTimeout(() => { loaded.value = true }, 80))
})
onUnmounted(() => window.removeEventListener('mousemove', onMove))
</script>

<template>
  <section id="hero" class="relative w-full bg-[#02050c] overflow-hidden" style="min-height:100svh;">

    <!-- Subtle grid texture -->
    <div class="absolute inset-0 opacity-[0.018]"
         style="background-image:linear-gradient(rgba(34,211,238,1) 1px,transparent 1px),linear-gradient(90deg,rgba(34,211,238,1) 1px,transparent 1px);
                background-size:72px 72px;pointer-events:none;"></div>

    <!-- Atmospheric glow -->
    <div class="absolute top-0 right-0 w-[50%] h-[60%] pointer-events-none"
         style="background:radial-gradient(ellipse at 75% 20%,rgba(6,182,212,.07) 0%,transparent 65%);"></div>
    <div class="absolute bottom-0 left-0 w-[40%] h-[40%] pointer-events-none"
         style="background:radial-gradient(ellipse at 25% 80%,rgba(37,99,235,.05) 0%,transparent 65%);"></div>

    <!-- Content: 2-col desktop -->
    <div class="relative z-10 flex flex-col lg:flex-row items-center lg:items-end justify-between
                gap-12 lg:gap-16 px-8 md:px-14 lg:px-20 pb-20 pt-28"
         style="min-height:100svh;">

      <!-- Left: text -->
      <div class="flex-1 max-w-xl w-full transition-all duration-1000"
           :style="loaded?'opacity:1;transform:translateY(0)':'opacity:0;transform:translateY(24px)'">

        <!-- Eyebrow -->
        <div class="flex items-center gap-3 mb-8">
          <span class="text-xs tracking-[.5em] uppercase font-mono text-[#2a4a5e]">Guild</span>
          <span class="w-6 h-px bg-[#1a3a5c]"></span>
          <span class="text-xs tracking-[.4em] uppercase font-mono text-[#1e3050]">Est. {{ guildInfo.founded }}</span>
        </div>

        <!-- Name — controlled size, no overflow -->
        <h1 class="font-black uppercase leading-none select-none mb-7"
            style="font-family:'Arial Narrow','Arial',sans-serif;
                   font-size:clamp(4rem,12vw,9rem);
                   letter-spacing:-.04em;
                   color:#dde8f5;">
          Z-One
        </h1>

        <!-- Motto -->
        <p class="text-sm tracking-widest uppercase font-mono text-[#3d6b8f] mb-12">
          {{ guildInfo.motto }}
        </p>

        <!-- Actions -->
        <div class="flex items-center gap-8">
          <a href="#about" class="group flex items-center gap-3">
            <span class="h-px bg-[#22d3ee]/50 group-hover:w-10 group-hover:bg-[#22d3ee]
                         transition-all duration-500"
                  style="width:20px;"></span>
            <span class="text-xs tracking-[.35em] uppercase font-mono text-[#4a7a9b]
                         group-hover:text-[#dde8f5] transition-colors duration-300">
              About
            </span>
          </a>
          <a href="#members"
             class="text-xs tracking-[.35em] uppercase font-mono text-[#1e3050]
                    hover:text-[#4a7a9b] transition-colors duration-300">
            Members →
          </a>
        </div>
      </div>

      <!-- Right: logo — properly sized, not decorative -->
      <div class="flex-shrink-0 transition-all duration-1000"
           :style="loaded?'opacity:1;transform:translateY(0)':'opacity:0;transform:translateY(20px)'"
           style="transition-delay:250ms;">
        <div class="relative" style="width:clamp(160px,22vw,240px);aspect-ratio:1;">
          <!-- Glow behind -->
          <div class="absolute inset-0 pointer-events-none rounded-sm"
               style="background:radial-gradient(circle,rgba(34,211,238,.07) 0%,transparent 70%);
                      filter:blur(24px);transform:scale(1.3);"></div>
          <img :src="`${BASE}/assets/guild/logo.jpg`"
               alt="Guild Z-One"
               @load="imgOk=true"
               class="relative w-full h-full object-cover transition-opacity duration-700"
               :class="imgOk?'opacity-100':'opacity-0'"
               style="mix-blend-mode:screen;" />
          <!-- Corner accents -->
          <div class="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[#22d3ee]/40 pointer-events-none"></div>
          <div class="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-[#22d3ee]/40 pointer-events-none"></div>
          <!-- Tag -->
          <p class="absolute -bottom-7 left-0 right-0 text-center text-[10px]
                    tracking-[.5em] uppercase font-mono text-[#1a3050]">
            [Z1]
          </p>
        </div>
      </div>
    </div>

    <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1a3a5c]/40 to-transparent"></div>
  </section>
</template>
