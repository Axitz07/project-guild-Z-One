<script setup>
import { guildInfo } from '../data/members.js'
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')

const values = [
  {
    label: 'Solid',
    desc: 'Kekompakan di atas segalanya.',
    size: 'large',
  },
  {
    label: 'Kompetitif',
    desc: 'Main untuk menang.',
    size: 'medium',
  },
  {
    label: 'Casual-Friendly',
    desc: 'Tidak ada tekanan — tempo masing-masing.',
    size: 'medium',
  },
  {
    label: 'Berkembang',
    desc: 'Lebih baik setiap hari.',
    size: 'small',
  },
]
</script>

<template>
  <section id="about" class="relative py-28 overflow-hidden bg-[#020408]">
    <div class="absolute inset-0 bg-gradient-to-b from-[#020408] via-[#060d18]/80 to-[#020408]"></div>

    <div class="relative z-10 max-w-6xl mx-auto px-8">

      <!-- Layout: 2 kolom asimetris — konten kiri lebih besar -->
      <div class="grid lg:grid-cols-[1fr_400px] gap-20 items-start">

        <!-- Left: identitas guild dengan foto info -->
        <div>
          <!-- Section label — minimalis, bukan centered divider -->
          <p class="text-[10px] text-[#3d6b8f] tracking-[0.6em] uppercase font-mono mb-12">About</p>

          <!-- Guild name + deskripsi — raw typography -->
          <div class="mb-12">
            <div class="flex items-start gap-6 mb-8">
              <!-- Logo kecil inline -->
              <div class="w-16 h-16 rounded-sm overflow-hidden border border-[#1a3a5c]/60 flex-shrink-0 mt-1">
                <img :src="`${BASE}/assets/guild/logo.jpg`"
                     alt="Z-One"
                     class="w-full h-full object-cover"
                     style="filter: brightness(0.9) saturate(1.1);" />
              </div>
              <div>
                <h2 class="text-3xl font-black text-[#e8f4ff] uppercase tracking-tight leading-none mb-2"
                    style="font-family:'Arial Narrow','Arial',sans-serif;">
                  {{ guildInfo.name }}
                </h2>
                <span class="text-xs text-[#3d6b8f] font-mono tracking-widest">{{ guildInfo.tag }} · Est. {{ guildInfo.founded }}</span>
              </div>
            </div>

            <p class="text-[#7ab3d9] text-base leading-relaxed max-w-lg">
              {{ guildInfo.description }}
            </p>
          </div>

          <!-- Foto info guild -->
          <div class="relative rounded-sm overflow-hidden"
               style="aspect-ratio: 16/7;">
            <img :src="`${BASE}/assets/guild/info.jpg`"
                 alt="Guild Z-One"
                 class="w-full h-full object-cover"
                 style="filter: brightness(0.7) saturate(0.8);" />
            <div class="absolute inset-0 bg-gradient-to-t from-[#020408]/80 via-transparent to-transparent"></div>
            <!-- Overlay text bottom -->
            <div class="absolute bottom-4 left-5">
              <p class="text-[10px] text-[#7ab3d9] tracking-widest uppercase font-mono">
                {{ guildInfo.motto }}
              </p>
            </div>
            <!-- Corner accent -->
            <div class="absolute top-3 right-3 w-6 h-6 border-t border-r border-[#22d3ee]/40"></div>
          </div>
        </div>

        <!-- Right: guild values — bukan card grid, tapi typographic list -->
        <div class="lg:pt-16">
          <p class="text-[10px] text-[#3d6b8f] tracking-[0.6em] uppercase font-mono mb-10">Nilai Guild</p>

          <!-- List dengan ukuran berbeda — bukan seragam -->
          <div class="space-y-0 divide-y divide-[#1a3a5c]/40">
            <div v-for="(val, i) in values" :key="val.label"
                 class="py-6 group cursor-default">
              <div class="flex items-baseline justify-between gap-4 mb-1">
                <h3 class="font-bold text-[#e8f4ff] uppercase tracking-tight transition-colors duration-200 group-hover:text-[#22d3ee]"
                    :style="{
                      fontSize: val.size === 'large' ? '2rem' : val.size === 'medium' ? '1.35rem' : '1.1rem',
                      fontFamily: '\'Arial Narrow\',\'Arial\',sans-serif',
                      lineHeight: 1,
                    }">
                  {{ val.label }}
                </h3>
                <span class="text-[10px] text-[#3d6b8f] font-mono flex-shrink-0">0{{ i + 1 }}</span>
              </div>
              <p class="text-xs text-[#3d6b8f] group-hover:text-[#7ab3d9] transition-colors duration-200 leading-relaxed">
                {{ val.desc }}
              </p>
            </div>
          </div>

          <!-- Bottom accent -->
          <div class="mt-10 pt-6 border-t border-[#1a3a5c]/40">
            <p class="text-[10px] text-[#3d6b8f] font-mono tracking-widest">
              Status: <span class="text-[#22d3ee]">Active</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
