<script setup>
import { ref, onMounted } from 'vue'
import { guildInfo } from '../data/members.js'
import { Shield, Swords, Users, TrendingUp, Info } from 'lucide-vue-next'

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
  { label: 'Solid',           desc: 'Kekompakan di atas segalanya.',             size: 'xl', icon: Shield    },
  { label: 'Kompetitif',      desc: 'Bermain untuk menang.',                      size: 'lg', icon: Swords    },
  { label: 'Casual-Friendly', desc: 'Tidak ada tekanan — tempo masing-masing.',  size: 'lg', icon: Users     },
  { label: 'Berkembang',      desc: 'Lebih baik setiap hari.',                   size: 'md', icon: TrendingUp },
]
</script>

<template>
  <section id="about" ref="el" class="relative bg-[#02050c] overflow-hidden">
    <div class="h-px bg-gradient-to-r from-transparent via-[#1a3a5c]/40 to-transparent" />

    <div class="max-w-6xl mx-auto px-8 md:px-14 lg:px-20 py-24 md:py-32">
      <div class="grid lg:grid-cols-[1fr_380px] gap-16 lg:gap-24 items-start">

        <!-- Left: identity — slide from left -->
        <div
          class="transition-all duration-1000"
          :class="show ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'"
        >
          <div class="flex items-center gap-2 mb-10">
            <Info class="w-3.5 h-3.5 text-[#22d3ee]" />
            <p class="text-[11px] tracking-[.45em] uppercase font-mono text-[#2a4a5e]">About</p>
          </div>

          <!-- Logo + name -->
          <div class="flex items-start gap-5 mb-10">
            <div
              class="w-14 h-14 flex-shrink-0 overflow-hidden border border-[#1a3a5c]/60"
              style="box-shadow: 0 0 20px rgba(34,211,238,.08), inset 0 0 0 1px rgba(34,211,238,.06);"
            >
              <img
                :src="`${BASE}/assets/guild/logo.jpg`"
                alt="Z-One"
                class="w-full h-full object-cover"
                style="mix-blend-mode: screen;"
              />
            </div>
            <div class="pt-1">
              <h2
                class="font-black text-[#dde8f5] leading-none tracking-tight mb-2"
                style="font-family:'Arial Narrow','Arial',sans-serif; font-size:2rem; letter-spacing:-.02em;"
              >Guild Z-One</h2>
              <p class="text-xs text-[#2a4a5e] font-mono tracking-widest">
                {{ guildInfo.tag }} · Est. {{ guildInfo.founded }}
              </p>
            </div>
          </div>

          <p class="text-[15px] text-[#4a7a9b] leading-relaxed mb-12 max-w-lg">
            {{ guildInfo.description }}
          </p>

          <!-- Stats -->
          <div class="flex items-start gap-10">
            <div class="group cursor-default">
              <p class="text-2xl font-bold text-[#22d3ee] font-mono leading-none mb-1 group-hover:text-white transition-colors duration-200">
                2024
              </p>
              <p class="text-[10px] text-[#2a4a5e] tracking-[.4em] uppercase font-mono">Founded</p>
            </div>
            <div class="group cursor-default">
              <p class="text-2xl font-bold text-[#22d3ee] font-mono leading-none mb-1 group-hover:text-white transition-colors duration-200">
                Active
              </p>
              <p class="text-[10px] text-[#2a4a5e] tracking-[.4em] uppercase font-mono">Status</p>
            </div>
          </div>
        </div>

        <!-- Right: values — stagger from right -->
        <div class="lg:pt-2">
          <div
            class="flex items-center gap-2 mb-10 transition-all duration-700"
            :class="show ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'"
          >
            <Shield class="w-3.5 h-3.5 text-[#22d3ee]" />
            <p class="text-[11px] tracking-[.45em] uppercase font-mono text-[#2a4a5e]">Nilai Guild</p>
          </div>

          <div class="divide-y divide-[#0d1e2e]">
            <div
              v-for="(val, i) in values"
              :key="val.label"
              class="py-6 group cursor-default flex items-baseline justify-between gap-4 transition-all duration-700"
              :class="show ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'"
              :style="{ transitionDelay: `${200 + i * 100}ms` }"
              @mouseenter="hovered = val.label"
              @mouseleave="hovered = null"
            >
              <div class="flex-1">
                <!-- Icon + label -->
                <div class="flex items-center gap-2 mb-2">
                  <component
                    :is="val.icon"
                    class="w-3.5 h-3.5 flex-shrink-0 transition-colors duration-200"
                    :style="{ color: hovered === val.label ? '#22d3ee' : '#1a3a5c' }"
                  />
                  <h3
                    class="font-black uppercase leading-none transition-colors duration-200"
                    :class="{
                      'text-4xl': val.size === 'xl',
                      'text-2xl': val.size === 'lg',
                      'text-xl':  val.size === 'md',
                      'text-white':    hovered === val.label,
                      'text-[#c8d8ea]': hovered !== val.label,
                    }"
                    style="font-family:'Arial Narrow','Arial',sans-serif; letter-spacing:-.01em;"
                  >{{ val.label }}</h3>
                </div>
                <p
                  class="text-[13px] leading-relaxed transition-colors duration-200 ml-5"
                  :class="hovered === val.label ? 'text-[#4a7a9b]' : 'text-[#2a4a5e]'"
                >{{ val.desc }}</p>
              </div>
              <span
                class="text-[10px] font-mono flex-shrink-0 transition-colors duration-200"
                :class="hovered === val.label ? 'text-[#22d3ee]' : 'text-[#1a3050]'"
              >0{{ i + 1 }}</span>
            </div>
          </div>

          <div
            class="mt-10 pt-6 border-t border-[#0d1e2e] transition-all duration-700"
            :class="show ? 'opacity-100' : 'opacity-0'"
            style="transition-delay: 600ms;"
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
