<script setup>
import { ref, onMounted } from 'vue'
import { guildInfo } from '../data/members.js'
import { Shield, Swords, Users, TrendingUp, Info, ChevronRight } from 'lucide-vue-next'

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')
const el   = ref(null)
const show = ref(false)
const hovered = ref(null)

onMounted(() => {
  const io = new IntersectionObserver(([e]) => {
    if (e.isIntersecting) { show.value = true; io.disconnect() }
  }, { threshold: 0.07 })
  if (el.value) io.observe(el.value)
})

const values = [
  { label: 'Solid',           desc: 'Kekompakan di atas segalanya.',            icon: Shield,      num: '01' },
  { label: 'Kompetitif',      desc: 'Bermain untuk menang.',                     icon: Swords,      num: '02' },
  { label: 'Casual-Friendly', desc: 'Tidak ada tekanan — tempo masing-masing.', icon: Users,       num: '03' },
  { label: 'Berkembang',      desc: 'Lebih baik setiap hari.',                  icon: TrendingUp,  num: '04' },
]
</script>

<template>
  <section id="about" ref="el" class="relative bg-[#020609] overflow-hidden">
    <div class="h-px bg-gradient-to-r from-transparent via-[#1a3a5c]/35 to-transparent" />

    <div
      class="max-w-[1400px] mx-auto px-8 md:px-14 lg:px-20 py-32 md:py-48
             transition-all duration-1000"
      :class="show ? 'opacity-100' : 'opacity-0'"
    >
      <div class="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-20 lg:gap-28 items-start">

        <!-- Left: guild identity -->
        <div
          class="transition-all duration-1000"
          :class="show ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'"
          style="transition-delay:100ms;"
        >
          <div class="flex items-center gap-2 mb-12">
            <Info class="w-3.5 h-3.5 text-[#22d3ee]" />
            <p class="text-[11px] tracking-[.45em] uppercase font-mono text-[#2a4a5e]">About Guild</p>
          </div>

          <!-- Logo + name -->
          <div class="flex items-start gap-5 mb-10">
            <div
              class="w-14 h-14 flex-shrink-0 overflow-hidden"
              style="border:1px solid rgba(34,211,238,.15);
                     box-shadow:inset 0 1px 0 rgba(255,255,255,.05), 0 0 24px rgba(34,211,238,.06);"
            >
              <img :src="`${BASE}/assets/guild/logo.jpg`" alt="Z-One"
                   class="w-full h-full object-cover" style="mix-blend-mode:screen;" />
            </div>
            <div class="pt-1">
              <h2
                class="font-black text-[#dde8f5] leading-none mb-2"
                style="font-family:'Outfit',sans-serif;font-size:2rem;letter-spacing:-.03em;"
              >Guild Z-One</h2>
              <p class="text-[11px] text-[#2a4a5e] font-mono tracking-widest">
                {{ guildInfo.tag }} &ensp;·&ensp; Est. {{ guildInfo.founded }}
              </p>
            </div>
          </div>

          <p class="text-[15px] text-[#4a7a9b] leading-[1.75] mb-14 max-w-lg">
            {{ guildInfo.description }}
          </p>

          <!-- Stat row -->
          <div class="flex items-start gap-12">
            <div>
              <p class="text-2xl font-black text-[#22d3ee] font-mono leading-none mb-1.5"
                 style="font-family:'Outfit',sans-serif;">2024</p>
              <p class="text-[10px] text-[#1a3050] tracking-[.4em] uppercase font-mono">Founded</p>
            </div>
            <div>
              <p class="text-2xl font-black text-[#22d3ee] font-mono leading-none mb-1.5"
                 style="font-family:'Outfit',sans-serif;">Active</p>
              <p class="text-[10px] text-[#1a3050] tracking-[.4em] uppercase font-mono">Status</p>
            </div>
            <div>
              <p class="text-2xl font-black text-[#22d3ee] font-mono leading-none mb-1.5"
                 style="font-family:'Outfit',sans-serif;">Open</p>
              <p class="text-[10px] text-[#1a3050] tracking-[.4em] uppercase font-mono">Recruit</p>
            </div>
          </div>
        </div>

        <!-- Right: values -->
        <div
          class="transition-all duration-1000"
          :class="show ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'"
          style="transition-delay:200ms;"
        >
          <div class="flex items-center gap-2 mb-10">
            <Shield class="w-3.5 h-3.5 text-[#22d3ee]" />
            <p class="text-[11px] tracking-[.45em] uppercase font-mono text-[#2a4a5e]">Nilai Guild</p>
          </div>

          <div class="divide-y divide-[#0d1e2e]">
            <div
              v-for="(val, i) in values"
              :key="val.label"
              class="py-6 cursor-default group transition-all duration-700 flex items-baseline justify-between gap-4"
              :class="show ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'"
              :style="`transition-delay:${240 + i*90}ms;`"
              @mouseenter="hovered = val.label"
              @mouseleave="hovered = null"
            >
              <div class="flex-1">
                <div class="flex items-center gap-2.5 mb-2">
                  <component
                    :is="val.icon"
                    class="w-3.5 h-3.5 flex-shrink-0 transition-colors duration-200"
                    :style="{ color: hovered === val.label ? '#22d3ee' : '#1a3a5c' }"
                  />
                  <h3
                    class="font-black uppercase leading-none transition-colors duration-200"
                    :class="[
                      i === 0 ? 'text-3xl' : i < 3 ? 'text-2xl' : 'text-xl',
                      hovered === val.label ? 'text-white' : 'text-[#c8d8ea]',
                    ]"
                    style="font-family:'Outfit',sans-serif;letter-spacing:-.02em;"
                  >{{ val.label }}</h3>
                </div>
                <p
                  class="text-[13px] leading-relaxed transition-colors duration-200 ml-6"
                  :class="hovered === val.label ? 'text-[#4a7a9b]' : 'text-[#1e3a4e]'"
                >{{ val.desc }}</p>
              </div>
              <span
                class="text-[10px] font-mono flex-shrink-0 transition-colors duration-200"
                :class="hovered === val.label ? 'text-[#22d3ee]' : 'text-[#0d1a28]'"
              >{{ val.num }}</span>
            </div>
          </div>

          <div
            class="mt-10 pt-6 border-t border-[#0d1e2e] transition-all duration-700"
            :class="show ? 'opacity-100' : 'opacity-0'"
            style="transition-delay:660ms;"
          >
            <p class="text-[11px] text-[#1a3050] font-mono tracking-widest">
              Rekrutmen: <span class="text-[#22d3ee]">Terbuka</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
