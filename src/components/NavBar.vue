<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { guildInfo } from '../data/members.js'
import { Users, Menu, X } from 'lucide-vue-next'

const BASE     = import.meta.env.BASE_URL.replace(/\/$/, '')
const scrolled = ref(false)
const isOpen   = ref(false)

function onScroll() { scrolled.value = window.scrollY > 60 }
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const navLinks = [
  { href: '#about',   label: 'About'   },
  { href: '#members', label: 'Members' },
]
</script>

<template>
  <!--
    Floating glass pill nav — gpt-taste principle
    Not stuck to edges, breathes with the layout
  -->
  <header class="fixed top-0 inset-x-0 z-50 flex justify-center pt-5 px-6 transition-all duration-500">
    <nav
      class="w-full max-w-5xl flex items-center justify-between px-5 h-14 transition-all duration-500"
      :class="scrolled
        ? 'bg-[#020408]/80 backdrop-blur-xl border border-[#1a3a5c]/40 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
        : 'bg-transparent'"
    >
      <!-- Logo + wordmark -->
      <a href="#hero" class="flex items-center gap-3 group">
        <div
          class="w-7 h-7 overflow-hidden flex-shrink-0 border border-[#22d3ee]/20"
          style="box-shadow: 0 0 12px rgba(34,211,238,.1);"
        >
          <img
            :src="`${BASE}/assets/guild/logo.jpg`"
            alt="Z-One"
            class="w-full h-full object-cover"
            style="mix-blend-mode: screen;"
          />
        </div>
        <span
          class="text-sm font-bold text-[#dde8f5] tracking-tight"
          style="font-family: 'Outfit', sans-serif; letter-spacing: .02em;"
        >Guild Z-One</span>
      </a>

      <!-- Desktop nav -->
      <div class="hidden md:flex items-center gap-1">
        <a
          v-for="l in navLinks"
          :key="l.href"
          :href="l.href"
          class="px-4 py-2 text-[13px] font-medium text-[#4a7a9b]
                 hover:text-[#dde8f5] transition-colors duration-200 tracking-wide"
        >{{ l.label }}</a>
      </div>

      <!-- CTA -->
      <a
        href="#members"
        class="hidden md:inline-flex items-center gap-2
               px-4 py-2 rounded-lg border border-[#1a3a5c]
               text-[13px] font-medium tracking-wide
               text-[#22d3ee] hover:bg-[#22d3ee]/8 hover:border-[#22d3ee]/40
               transition-all duration-200"
      >
        <Users class="w-3.5 h-3.5" />
        Rekrut
      </a>

      <!-- Mobile toggle -->
      <button
        class="md:hidden text-[#4a7a9b] hover:text-[#dde8f5] p-1 transition-colors"
        @click="isOpen = !isOpen"
        aria-label="Menu"
      >
        <X v-if="isOpen" class="w-5 h-5" />
        <Menu v-else class="w-5 h-5" />
      </button>
    </nav>

    <!-- Mobile menu — drops below pill -->
    <div
      v-if="isOpen"
      class="absolute top-20 left-6 right-6 max-w-5xl mx-auto
             bg-[#020408]/95 backdrop-blur-xl border border-[#1a3a5c]/40
             rounded-2xl px-5 py-4 flex flex-col gap-1"
    >
      <a
        v-for="l in navLinks"
        :key="l.href"
        :href="l.href"
        class="py-2.5 text-sm font-medium text-[#7ab3d9] hover:text-[#dde8f5]
               border-b border-[#0d1e2e] last:border-0 transition-colors duration-200"
        @click="isOpen = false"
      >{{ l.label }}</a>
      <a
        href="#members"
        class="mt-2 py-2.5 text-sm font-medium text-[#22d3ee] hover:text-white transition-colors"
        @click="isOpen = false"
      >Bergabung →</a>
    </div>
  </header>
</template>
