<script setup>
import { ref, onMounted } from 'vue'
import { guildInfo } from '../data/members.js'

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')
const el   = ref(null)
const show = ref(false)

onMounted(() => {
  const io = new IntersectionObserver(([e]) => {
    if (e.isIntersecting) { show.value = true; io.disconnect() }
  }, { threshold: 0.08 })
  if (el.value) io.observe(el.value)
})

const values = [
  { label: 'Solid',           desc: 'Kekompakan di atas segalanya.',              num: '01' },
  { label: 'Kompetitif',      desc: 'Bermain untuk menang.',                       num: '02' },
  { label: 'Casual-Friendly', desc: 'Tidak ada tekanan — tempo masing-masing.',   num: '03' },
  { label: 'Berkembang',      desc: 'Lebih baik setiap hari.',                    num: '04' },
]
</script>

<template>
  <section id="about" ref="el" class="relative bg-[#02050c] overflow-hidden">
    <div class="h-px bg-gradient-to-r from-transparent via-[#1a3a5c]/40 to-transparent"></div>

    <div
      class="max-w-6xl mx-auto px-8 md:px-14 lg:px-20 py-24 md:py-32 transition-all duration-1000"
      :style="show ? 'opacity:1; transform:translateY(0)' : 'opacity:0; transform:translateY(20px)'"
    >
      <!-- Two-column: identity left, values right -->
      <div class="grid lg:grid-cols-[1fr_420px] gap-16 lg:gap-24 items-start">

        <!-- Left: guild identity -->
        <div>
          <p class="text-[10px] tracking-[.55em] uppercase font-mono text-[#2a4a5e] mb-10 leading-none">About</p>

          <!-- Logo + name -->
          <div class="flex items-start gap-5 mb-10">
            <div class="w-14 h-14 flex-shrink-0 overflow-hidden border border-[#1a3a5c]/50"
                 style="box-shadow: 0 8px 32px rgba(0,0,0,0.5);">
              <img :src="`${BASE}/assets/guild/logo.jpg`"
                   alt="Z-One"
                   class="w-full h-full object-cover"
                   style="filter: brightness(0.9);" />
            </div>
            <div class="pt-1">
              <h2 class="font-black text-[#dde8f5] leading-none tracking-tight mb-1.5"
                  style="font-family:'Arial Narrow','Arial',sans-serif; font-size: 2rem; letter-spacing:-0.02em;">
                Guild Z-One
              </h2>
              <p class="text-xs text-[#2a4a5e] font-mono tracking-widest">{{ guildInfo.tag }} · Est. {{ guildInfo.founded }}</p>
            </div>
          </div>

          <p class="text-[#4a7a9b] text-base leading-relaxed mb-16 max-w-lg">
            {{ guildInfo.description }}
          </p>

          <!-- Stats row — clean, no borders/cards -->
          <div class="flex items-start gap-12">
            <div>
              <p class="text-2xl font-bold text-[#22d3ee] font-mono leading-none mb-1">2024</p>
              <p class="text-[10px] text-[#2a4a5e] tracking-[.4em] uppercase font-mono">Founded</p>
            </div>
            <div>
              <p class="text-2xl font-bold text-[#22d3ee] font-mono leading-none mb-1">Active</p>
              <p class="text-[10px] text-[#2a4a5e] tracking-[.4em] uppercase font-mono">Status</p>
            </div>
          </div>
        </div>

        <!-- Right: values — typographic list with scale contrast -->
        <div class="lg:pt-2">
          <p class="text-[10px] tracking-[.55em] uppercase font-mono text-[#2a4a5e] mb-10 leading-none">Nilai Guild</p>

          <div class="divide-y divide-[#0d1e2e]">
            <div
              v-for="val in values" :key="val.label"
              class="py-6 group cursor-default flex items-baseline justify-between gap-4"
            >
              <div>
                <h3
                  class="font-black uppercase leading-none text-[#c8d8ea] group-hover:text-white transition-colors duration-200 mb-2"
                  style="font-family:'Arial Narrow','Arial',sans-serif; font-size: clamp(1.4rem, 3vw, 2rem); letter-spacing:-0.01em;"
                >{{ val.label }}</h3>
                <p class="text-xs text-[#2a4a5e] group-hover:text-[#4a7a9b] transition-colors duration-200 leading-relaxed">
                  {{ val.desc }}
                </p>
              </div>
              <span class="text-[10px] text-[#1a3050] font-mono flex-shrink-0">{{ val.num }}</span>
            </div>
          </div>

          <div class="mt-10 pt-6 border-t border-[#0d1e2e]">
            <p class="text-[10px] text-[#1a3050] font-mono tracking-widest">
              Status: <span class="text-[#22d3ee]">Rekrutmen Terbuka</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
