<script setup>
import { guildInfo } from '../data/members.js'

const values = [
  { icon: '🤝', title: 'Solid', desc: 'Guild yang solid bukan soal jumlah member, tapi soal kekompakan.' },
  { icon: '⚔️', title: 'Kompetitif', desc: 'Kami bermain untuk menang, tapi selalu dengan sportivitas tinggi.' },
  { icon: '🎮', title: 'Casual-Friendly', desc: 'Tidak ada tekanan — main sesuai tempo masing-masing.' },
  { icon: '📈', title: 'Berkembang', desc: 'Selalu mencari cara baru untuk menjadi lebih baik bersama.' },
]
</script>

<template>
  <section id="about" class="relative py-24 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-[#020408] via-[#060d18] to-[#020408]"></div>
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_20%_50%,rgba(37,99,235,0.06),transparent)]"></div>

    <div class="relative z-10 max-w-5xl mx-auto px-6">

      <!-- Section header -->
      <div class="flex items-center gap-4 mb-16">
        <div class="h-px flex-1 bg-gradient-to-r from-transparent to-[#1a3a5c]"></div>
        <span class="text-xs text-[#22d3ee] tracking-[0.4em] uppercase font-mono">— About Guild —</span>
        <div class="h-px flex-1 bg-gradient-to-l from-transparent to-[#1a3a5c]"></div>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-start">

        <!-- Left: guild identity -->
        <div class="border border-[#1a3a5c] bg-[#0a1628] rounded-lg p-8 relative overflow-hidden"
             style="box-shadow: 0 0 40px rgba(37,99,235,0.08)">
          <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22d3ee]/50 to-transparent"></div>

          <div class="flex items-center gap-3 mb-6">
            <div class="w-12 h-12 rounded border border-[#22d3ee]/40 flex items-center justify-center bg-[#06b6d4]/8"
                 style="box-shadow: 0 0 20px rgba(34,211,238,0.1)">
              <span class="text-[#22d3ee] font-bold font-mono text-sm">Z1</span>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-[#e8f4ff] tracking-tight"
                  style="font-family:'Arial Narrow','Arial',sans-serif;">
                {{ guildInfo.name }}
              </h2>
              <p class="text-[#7ab3d9] text-xs tracking-widest font-mono">{{ guildInfo.tag }}</p>
            </div>
          </div>

          <p class="text-[#7ab3d9] text-sm leading-relaxed mb-8">{{ guildInfo.description }}</p>

          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 text-xs rounded border border-[#1a3a5c] bg-[#0f2040] text-[#22d3ee] tracking-widest uppercase font-mono">
              Est. {{ guildInfo.founded }}
            </span>
            <span class="px-3 py-1 text-xs rounded border border-[#1a3a5c] bg-[#0f2040] text-[#7ab3d9] tracking-widest uppercase">
              Active
            </span>
          </div>
        </div>

        <!-- Right: values -->
        <div class="flex flex-col gap-4">
          <h3 class="text-xs text-[#3d6b8f] tracking-[0.4em] uppercase font-mono mb-2">Guild Values</h3>
          <div v-for="(item, i) in values" :key="i"
               class="flex items-start gap-4 p-4 border border-[#1a3a5c]/50 bg-[#060d18] rounded hover:border-[#22d3ee]/20 transition-colors duration-200">
            <div class="w-8 h-8 rounded flex items-center justify-center bg-[#06b6d4]/8 border border-[#1a3a5c] flex-shrink-0">
              <span class="text-sm">{{ item.icon }}</span>
            </div>
            <div>
              <h4 class="text-sm font-semibold text-[#e8f4ff] tracking-wide mb-1">{{ item.title }}</h4>
              <p class="text-xs text-[#3d6b8f] leading-relaxed">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
