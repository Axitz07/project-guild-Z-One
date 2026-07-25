<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#members', label: 'Members' },
]
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 border-b border-[#1a3a5c]/60 backdrop-blur-md bg-[#020408]/80">
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

      <!-- Logo -->
      <a href="#hero" class="flex items-center gap-3 group">
        <div class="w-8 h-8 rounded border border-[#22d3ee]/50 flex items-center justify-center bg-[#06b6d4]/10">
          <span class="text-[#22d3ee] text-sm font-bold">Z1</span>
        </div>
        <span class="text-[#e8f4ff] font-bold tracking-widest uppercase text-sm"
              style="text-shadow: 0 0 15px rgba(34,211,238,0.4)">
          Guild Z-One
        </span>
      </a>

      <!-- Desktop nav -->
      <ul class="hidden md:flex items-center gap-8">
        <li v-for="link in navLinks" :key="link.href">
          <a :href="link.href"
             class="text-sm text-[#7ab3d9] hover:text-[#22d3ee] tracking-widest uppercase transition-colors duration-200">
            {{ link.label }}
          </a>
        </li>
      </ul>

      <!-- Join button -->
      <a href="#members"
         class="hidden md:flex items-center gap-2 px-4 py-1.5 rounded border border-[#22d3ee]/50 text-[#22d3ee] text-xs tracking-widest uppercase hover:bg-[#22d3ee]/10 transition-all duration-200"
         style="box-shadow: 0 0 15px rgba(34,211,238,0.15)">
        Rekrut
      </a>

      <!-- Mobile toggle -->
      <button class="md:hidden text-[#7ab3d9] hover:text-[#22d3ee]"
              @click="isMenuOpen = !isMenuOpen"
              aria-label="Toggle menu">
        <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <div v-if="isMenuOpen" class="md:hidden border-t border-[#1a3a5c]/60 bg-[#060d18]">
      <ul class="px-6 py-4 flex flex-col gap-4">
        <li v-for="link in navLinks" :key="link.href">
          <a :href="link.href"
             class="text-sm text-[#7ab3d9] hover:text-[#22d3ee] tracking-widest uppercase transition-colors"
             @click="isMenuOpen = false">
            {{ link.label }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
