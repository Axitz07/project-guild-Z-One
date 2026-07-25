<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { guildInfo } from '../data/members.js'

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')
const loaded = ref(false)
const logoLoaded = ref(false)

onMounted(() => setTimeout(() => { loaded.value = true }, 60))
</script>

<template>
  <section id="hero" class="relative w-full overflow-hidden bg-[#02050c]" style="min-height: 100svh;">

    <!-- Background — subtle, foto info sebagai texture gelap -->
    <div class="absolute inset-0">
      <img
        :src="`${BASE}/assets/guild/info.jpg`"
        alt=""
        aria-hidden="true"
        class="absolute inset-0 w-full h-full object-cover"
        style="filter: brightness(0.08) saturate(0.3);"
      />
    </div>
    <!-- Subtle top-right glow -->
    <div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(ellipse 60% 60% at 75% 40%, rgba(6,182,212,0.04) 0%, transparent 70%);"></div>

    <!-- Content: two-column on desktop, stacked on mobile -->
    <div
      class="relative z-10 flex flex-col lg:flex-row items-center lg:items-end justify-between px-8 md:px-16 lg:px-20 pb-16 pt-28 gap-12 lg:gap-0"
      style="min-height: 100svh;"
    >

      <!-- Left: text -->
      <div
        class="w-full lg:max-w-[520px] order-2 lg:order-1 transition-all duration-900"
        :style="loaded ? 'opacity:1; transform:translateY(0)' : 'opacity:0; transform:translateY(20px)'"
      >
        <p class="text-[11px] tracking-[0.55em] uppercase text-[#3d6b8f] font-mono mb-6">
          Guild&nbsp;&nbsp;—&nbsp;&nbsp;Est. {{ guildInfo.founded }}
        </p>

        <h1
          class="font-black leading-[0.88] select-none mb-6"
          style="
            font-family: 'Arial Narrow', 'Arial', sans-serif;
            font-size: clamp(4.5rem, 15vw, 11rem);
            letter-spacing: -0.04em;
            color: #e2f0ff;
          "
        >
          Z-One
        </h1>

        <p class="text-[#4a7a9b] text-sm tracking-widest uppercase font-mono mb-10">
          {{ guildInfo.motto }}
        </p>

        <div class="flex items-center gap-8">
          <a href="#about" class="flex items-center gap-3 group">
            <span class="block h-px bg-[#22d3ee] transition-all duration-500 group-hover:w-10" style="width:28px;"></span>
            <span class="text-[11px] tracking-[0.35em] uppercase text-[#7ab3d9] group-hover:text-white transition-colors duration-300 font-mono">
              About Guild
            </span>
          </a>
          <a href="#members" class="text-[11px] tracking-[0.35em] uppercase text-[#253a4a] hover:text-[#7ab3d9] transition-colors duration-300 font-mono">
            Members
          </a>
        </div>
      </div>

      <!-- Right: logo — real, prominent, not decorative -->
      <div
        class="order-1 lg:order-2 flex-shrink-0 transition-all duration-1000"
        :style="loaded ? 'opacity:1; transform:translateY(0)' : 'opacity:0; transform:translateY(16px)'"
        style="transition-delay: 200ms;"
      >
        <div class="relative" style="width: clamp(180px, 28vw, 280px); aspect-ratio: 1;">
          <!-- Glow underneath -->
          <div
            class="absolute inset-0 rounded-full pointer-events-none"
            style="background: radial-gradient(circle, rgba(34,211,238,0.1) 0%, transparent 70%); filter: blur(24px); transform: scale(1.2);"
          ></div>
          <!-- Logo — clean square, no ring decoration -->
          <img
            :src="`${BASE}/assets/guild/logo.jpg`"
            alt="Guild Z-One"
            @load="logoLoaded = true"
            class="relative w-full h-full object-cover rounded-sm transition-opacity duration-700"
            :class="logoLoaded ? 'opacity-100' : 'opacity-0'"
            style="box-shadow: 0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(34,211,238,0.12);"
          />
          <!-- Tag under logo -->
          <p
            class="absolute -bottom-7 left-0 right-0 text-center text-[10px] tracking-[0.5em] uppercase text-[#2a4a5e] font-mono"
          >[Z1]</p>
        </div>
      </div>
    </div>
  </section>
</template>
