<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { guildInfo } from '../data/members.js'

const BASE     = import.meta.env.BASE_URL.replace(/\/$/, '')
const loaded   = ref(false)
const scrolled = ref(false)

function onScroll() { scrolled.value = window.scrollY > 48 }
onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  requestAnimationFrame(() => setTimeout(() => { loaded.value = true }, 60))
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <section id="hero" class="relative w-full bg-[#02050c] overflow-hidden" style="min-height: 100svh;">

    <!-- Very subtle grid texture -->
    <div class="absolute inset-0 opacity-[0.018]"
         style="background-image: linear-gradient(rgba(34,211,238,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,1) 1px, transparent 1px); background-size: 64px 64px;"></div>

    <!-- Atmospheric glow — top right -->
    <div class="absolute top-0 right-0 w-[50%] h-[60%] pointer-events-none"
         style="background: radial-gradient(ellipse at 80% 20%, rgba(6,182,212,0.05) 0%, transparent 65%);"></div>

    <!-- Main content: 2-col desktop, stacked mobile -->
    <div
      class="relative z-10 flex flex-col lg:flex-row items-center lg:items-end justify-between gap-16 lg:gap-24 px-8 md:px-14 lg:px-20 pb-20 pt-28"
      style="min-height: 100svh;"
    >
      <!-- Left: text -->
      <div
        class="flex-1 max-w-xl w-full transition-all duration-1000"
        :style="loaded ? 'opacity:1; transform:translateY(0)' : 'opacity:0; transform:translateY(24px)'"
      >
        <!-- Eyebrow -->
        <div class="flex items-center gap-3 mb-10">
          <span class="text-xs tracking-[0.5em] uppercase font-mono text-[#2a4a5e]">Guild</span>
          <span class="w-6 h-px bg-[#1a3a5c]"></span>
          <span class="text-xs tracking-[0.4em] uppercase font-mono text-[#1a3050]">Est. {{ guildInfo.founded }}</span>
        </div>

        <!-- Name — huge editorial -->
        <h1
          class="font-black uppercase leading-none select-none mb-8"
          style="
            font-family: 'Arial Narrow', 'Arial', sans-serif;
            font-size: clamp(5rem, 16vw, 13rem);
            letter-spacing: -0.04em;
            color: #dde8f5;
            text-shadow: 0 0 80px rgba(34,211,238,0.08);
          "
        >Z-One</h1>

        <!-- Motto -->
        <p class="text-base tracking-[0.3em] uppercase font-mono text-[#3d6b8f] mb-14">
          {{ guildInfo.motto }}
        </p>

        <!-- Actions -->
        <div class="flex items-center gap-10">
          <a href="#about" class="group flex items-center gap-3">
            <span class="h-px bg-[#22d3ee] transition-all duration-500 group-hover:w-12" style="width:28px;"></span>
            <span class="text-xs tracking-[0.35em] uppercase font-mono text-[#4a7a9b] group-hover:text-white transition-colors duration-300">
              About
            </span>
          </a>
          <a href="#members" class="text-xs tracking-[0.35em] uppercase font-mono text-[#1e3a4e] hover:text-[#4a7a9b] transition-colors duration-300">
            Members →
          </a>
        </div>
      </div>

      <!-- Right: logo -->
      <div
        class="flex-shrink-0 transition-all duration-1000"
        :style="loaded ? 'opacity:1; transform:translateY(0)' : 'opacity:0; transform:translateY(20px)'"
        style="transition-delay:300ms;"
      >
        <div class="relative" style="width: clamp(160px, 24vw, 260px); aspect-ratio: 1;">
          <!-- Glow behind logo -->
          <div class="absolute inset-0 pointer-events-none"
               style="background: radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%); filter: blur(28px); transform: scale(1.4);"></div>
          <!-- Logo image -->
          <img
            :src="`${BASE}/assets/guild/logo.jpg`"
            alt="Guild Z-One"
            class="relative w-full h-full object-cover"
            style="box-shadow: 0 24px 72px rgba(0,0,0,0.8), 0 0 0 1px rgba(34,211,238,0.1);"
          />
          <!-- Tag below -->
          <p class="absolute -bottom-8 left-0 right-0 text-center text-[10px] tracking-[0.5em] uppercase font-mono text-[#1a3050]">[Z1]</p>
        </div>
      </div>
    </div>

    <!-- Bottom separator -->
    <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1a3a5c]/40 to-transparent"></div>
  </section>
</template>
