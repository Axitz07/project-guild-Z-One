<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const scrolled = ref(false)

function handleScroll() {
  scrolled.value = window.scrollY > 40
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#members', label: 'Members' },
]
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
       :class="scrolled
         ? 'border-b border-[#1a3a5c]/60 backdrop-blur-xl bg-[#020408]/90'
         : 'bg-transparent'">
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

      <!-- Logo with actual image -->
      <a href="#hero" class="flex items-center gap-3 group">
        <div class="w-9 h-9 rounded-full overflow-hidden border border-[#22d3ee]/40 flex-shrink-0"
             style="box-shadow: 0 0 15px rgba(34,211,238,0.2)">
          <img src="/assets/guild/logo.jpg"
               alt="Z-One"
               class="w-full h-full object-cover"
               style="filter: saturate(1.1) brightness(0.9);" />
        </div>
        <div class="flex flex-col leading-none">
          <span class="text-[#e8f4ff] font-bold text-sm tracking-widest uppercase"
                style="font-family:'Arial Narrow','Arial',sans-serif; letter-spacing: 0.15em;">Guild Z-One</span>
          <span class="text-[#3d6b8f] text-[9px] tracking-[0.4em] uppercase font-mono">[Z1]</span>
        </div>
      </a>

      <!-- Desktop nav -->
      <ul class="hidden md:flex items-center gap-1">
        <li v-for="link in navLinks" :key="link.href">
          <a :href="link.href"
             class="px-4 py-2 text-xs text-[#7ab3d9] hover:text-[#22d3ee] tracking-widest uppercase transition-colors duration-200 relative group">
            {{ link.label }}
            <span class="absolute bottom-1 left-4 right-4 h-px bg-[#22d3ee] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
        </li>
      </ul>

      <!-- Join button -->
      <a href="#members"
         class="hidden md:flex items-center gap-2 px-5 py-2 text-xs tracking-widest uppercase border border-[#22d3ee]/40 text-[#22d3ee] hover:bg-[#22d3ee]/10 transition-all duration-300 rounded-sm"
         style="box-shadow: 0 0 15px rgba(34,211,238,0.1)">
        <span class="w-1.5 h-1.5 rounded-full bg-[#22d3ee] animate-pulse"></span>
        Rekrut
      </a>

      <!-- Mobile toggle -->
      <button class="md:hidden text-[#7ab3d9] hover:text-[#22d3ee] p-1"
              @click="isMenuOpen = !isMenuOpen"
              aria-label="Toggle menu">
        <div class="w-5 flex flex-col gap-1.5 transition-all">
          <span class="h-px bg-current transition-all duration-300"
                :class="isMenuOpen ? 'rotate-45 translate-y-2' : ''"></span>
          <span class="h-px bg-current transition-all duration-300"
                :class="isMenuOpen ? 'opacity-0' : ''"></span>
          <span class="h-px bg-current transition-all duration-300"
                :class="isMenuOpen ? '-rotate-45 -translate-y-2' : ''"></span>
        </div>
      </button>
    </div>

    <!-- Mobile menu -->
    <div class="md:hidden overflow-hidden transition-all duration-300"
         :class="isMenuOpen ? 'max-h-48 border-t border-[#1a3a5c]/60' : 'max-h-0'">
      <div class="bg-[#060d18] px-6 py-4 flex flex-col gap-1">
        <a v-for="link in navLinks" :key="link.href"
           :href="link.href"
           class="py-2 text-sm text-[#7ab3d9] hover:text-[#22d3ee] tracking-widest uppercase transition-colors font-mono"
           @click="isMenuOpen = false">
          {{ link.label }}
        </a>
      </div>
    </div>
  </nav>
</template>
