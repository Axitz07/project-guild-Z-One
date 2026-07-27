<script setup>
import { members, roles, guildInfo } from '../data/members.js'
</script>

<template>
  <section id="members" class="relative py-24 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-[#060d18] via-[#020408] to-[#060d18]"></div>

    <div class="relative z-10 max-w-5xl mx-auto px-6">

      <!-- Section header — left-anchored, no symmetrical dividers -->
      <div class="mb-16">
        <p class="text-[10px] text-[#3d6b8f] tracking-[0.6em] uppercase font-mono mb-1">Members</p>
        <div class="w-8 h-px bg-[#22d3ee]/50"></div>
      </div>

      <!-- Empty state — no emoji, clean -->
      <div v-if="members.length === 0"
           class="border border-dashed border-[#1a3a5c] p-16 text-center">
        <div class="w-12 h-px bg-[#1a3a5c] mx-auto mb-8"></div>
        <h3 class="text-[#7ab3d9] font-medium mb-3 tracking-widest uppercase text-sm font-mono">Roster Coming Soon</h3>
        <p class="text-[#3d6b8f] text-sm leading-relaxed max-w-sm mx-auto mb-8">
          Data member sedang disiapkan. Tambahkan member di
          <code class="text-[#22d3ee] bg-[#0a1628] px-1 font-mono text-xs">src/data/members.js</code>
        </p>

        <!-- Role legend — no emoji, just text -->
        <div class="flex flex-wrap items-center justify-center gap-3">
          <div v-for="(role, key) in roles" :key="key"
               class="flex items-center gap-2 px-3 py-1 border border-[#1a3a5c]/50 bg-[#060d18]">
            <span class="text-xs tracking-widest uppercase" :style="{ color: role.color }">{{ role.label }}</span>
          </div>
        </div>
      </div>

      <!-- Member grid — sharp corners, no rounded-lg -->
      <div v-else class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="member in members" :key="member.id"
             class="border border-[#1a3a5c] bg-[#0a1628] p-5 hover:border-[#22d3ee]/30 transition-all duration-200"
             style="box-shadow: 0 0 20px rgba(37,99,235,0.05)">
          <div class="flex items-center gap-3 mb-3">
            <!-- Sharp avatar, no rounded -->
            <div class="w-10 h-10 border border-[#1a3a5c] flex items-center justify-center bg-[#0f2040] flex-shrink-0">
              <span class="text-lg">{{ roles[member.role]?.icon ?? '🎮' }}</span>
            </div>
            <div>
              <h4 class="text-sm font-semibold text-[#e8f4ff] tracking-wide">{{ member.username }}</h4>
              <span class="text-xs tracking-widest uppercase" :style="{ color: roles[member.role]?.color ?? '#7ab3d9' }">
                {{ roles[member.role]?.label ?? member.role }}
              </span>
            </div>
          </div>
          <p v-if="member.bio" class="text-xs text-[#3d6b8f] leading-relaxed">{{ member.bio }}</p>
        </div>
      </div>

      <!-- Recruitment CTA — asymmetric layout, no rounded, no centered -->
      <div class="mt-16 border-t border-[#1a3a5c]/60 pt-12">
        <div class="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div>
            <p class="text-[10px] text-[#3d6b8f] tracking-[0.6em] uppercase font-mono mb-3">Rekrutmen</p>
            <h3 class="text-2xl font-black text-[#e8f4ff] leading-none mb-2"
                style="font-family:'Arial Narrow','Arial',sans-serif; letter-spacing: -0.02em;">
              Bergabung dengan Z-One
            </h3>
            <p class="text-[#4a7a9b] text-sm">Kami selalu terbuka untuk member baru yang solid.</p>
          </div>
          <a href="#"
             class="flex-shrink-0 flex items-center gap-3 px-6 py-3 border border-[#22d3ee]/50 bg-transparent hover:bg-[#22d3ee]/5 transition-colors duration-200 group"
             style="box-shadow: 0 0 20px rgba(34,211,238,0.08)">
            <span class="text-[#22d3ee] text-xs tracking-[0.3em] uppercase font-mono">Hubungi Guild Master</span>
            <span class="text-[#22d3ee]/60 group-hover:text-[#22d3ee] transition-colors text-xs">→</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
