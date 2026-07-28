<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { guildInfo } from '../data/members.js'

const BASE    = import.meta.env.BASE_URL.replace(/\/$/, '')
const loaded  = ref(false)
const imgOk   = ref(false)
const scrolled = ref(false)

function onScroll() { scrolled.value = window.scrollY > 48 }
onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  requestAnimationFrame(() => setTimeout(() => { loaded.value = true }, 80))
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const navLinks = [
  { href: '#about',   label: 'About'   },
  { href: '#members', label: 'Members' },
]
</script>

<template>
  <header class="fixed top-0 inset-x-0 z-50 transition-all duration-500"
          :class="scrolled?'border-b border-[#1a3a5c]/40 backdrop-blur-md bg-[#02050c]/88':'bg-transparent'">
    <div class="max-w-6xl mx-auto px-8 md:px-14 lg:px-20 h-16 flex items-center justify-between">

      <!-- Logo + wordmark -->
      <a href="#hero" class="flex items-center gap-3">
        <div class="w-8 h-8 overflow-hidden flex-shrink-0 border border-[#1a3a5c]/60">
          <img :src="`${BASE}/assets/guild/logo.jpg`" alt="Z-One"
               class="w-full h-full object-cover" style="mix-blend-mode:screen;" />
        </div>
        <div class="leading-none">
          <span class="text-[#dde8f5] font-bold text-sm tracking-tight block"
                style="font-family:'Arial Narrow','Arial',sans-serif;letter-spacing:.04em;">
            Guild Z-One
          </span>
          <span class="text-[#2a4a5e] text-[9px] font-mono tracking-widest">{{ guildInfo.tag }}</span>
        </div>
      </a>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-1">
        <a v-for="l in navLinks" :key="l.href" :href="l.href"
           class="px-4 py-2 text-xs tracking-[.3em] uppercase text-[#4a7a9b] hover:text-[#dde8f5] transition-colors duration-200 relative group">
          {{ l.label }}
          <span class="absolute bottom-1.5 left-4 right-4 h-px bg-[#22d3ee] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </a>
      </nav>

      <!-- CTA -->
      <a href="#members"
         class="hidden md:flex items-center gap-2 px-4 py-1.5 border border-[#1a3a5c] text-xs tracking-[.3em] uppercase text-[#4a7a9b] hover:border-[#22d3ee]/40 hover:text-[#22d3ee] transition-all duration-200 font-mono">
        <span class="w-1.5 h-1.5 rounded-full bg-[#22d3ee] animate-pulse"></span>
        Rekrut
      </a>
    </div>
  </header>
</template>
