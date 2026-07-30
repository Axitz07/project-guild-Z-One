<script setup>
import { guildInfo } from '../data/members.js'
import { ArrowUpRight } from 'lucide-vue-next'

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')

const navLinks = [
  { href: '#hero',    label: 'Home'    },
  { href: '#about',   label: 'About'   },
  { href: '#members', label: 'Members' },
]
</script>

<template>
  <footer class="relative bg-[#020609] border-t border-[#0d1e2e]">
    <div class="max-w-[1400px] mx-auto px-8 md:px-14 lg:px-20 py-20 md:py-24">

      <!-- Top row: brand left, nav right -->
      <div class="flex flex-col md:flex-row items-start md:items-end justify-between gap-12 mb-16">

        <!-- Brand -->
        <div class="max-w-sm">
          <div class="flex items-center gap-4 mb-5">
            <div
              class="w-10 h-10 overflow-hidden flex-shrink-0"
              style="border:1px solid rgba(34,211,238,.12);box-shadow:inset 0 1px 0 rgba(255,255,255,.04);"
            >
              <img :src="`${BASE}/assets/guild/logo.jpg`" alt="Z-One"
                   class="w-full h-full object-cover" style="mix-blend-mode:screen;" />
            </div>
            <div>
              <h3
                class="font-black text-[#dde8f5] leading-none"
                style="font-family:'Outfit',sans-serif;font-size:1.2rem;letter-spacing:-.02em;"
              >Guild Z-One</h3>
              <p class="text-[10px] text-[#1e3050] font-mono tracking-widest mt-0.5">
                {{ guildInfo.tag }} · Est. {{ guildInfo.founded }}
              </p>
            </div>
          </div>
          <p class="text-[14px] text-[#2a4a5e] leading-relaxed">
            {{ guildInfo.description }}
          </p>
        </div>

        <!-- Nav links -->
        <div class="flex flex-col gap-2.5 md:items-end">
          <p class="text-[10px] tracking-[.5em] uppercase font-mono text-[#1a3050] mb-2">Navigate</p>
          <a
            v-for="l in navLinks"
            :key="l.href"
            :href="l.href"
            class="text-[14px] text-[#2a4a5e] hover:text-[#dde8f5]
                   transition-colors duration-200 font-mono tracking-wide"
          >{{ l.label }}</a>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="border-t border-[#0d1e2e] pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p class="text-[12px] text-[#0d1a28] font-mono tracking-wide">
          {{ guildInfo.motto }}
        </p>
        <a
          href="mailto:guild.zone@gmail.com"
          class="inline-flex items-center gap-1.5 text-[12px] text-[#0d1a28]
                 hover:text-[#22d3ee] transition-colors duration-200 font-mono group"
        >
          guild.zone@gmail.com
          <ArrowUpRight class="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </div>
  </footer>
</template>
