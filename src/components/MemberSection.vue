<script setup>
import { members, roles, guildInfo } from '../data/members.js'
</script>

<template>
  <section id="members" class="relative py-24 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-[#060d18] via-[#020408] to-[#060d18]"></div>

    <div class="relative z-10 max-w-5xl mx-auto px-6">

      <!-- Section header -->
      <div class="flex items-center gap-4 mb-16">
        <div class="h-px flex-1 bg-gradient-to-r from-transparent to-[#1a3a5c]"></div>
        <span class="text-xs text-[#22d3ee] tracking-[0.4em] uppercase font-mono">— Members —</span>
        <div class="h-px flex-1 bg-gradient-to-l from-transparent to-[#1a3a5c]"></div>
      </div>

      <!-- Empty state -->
      <div v-if="members.length === 0"
           class="border border-dashed border-[#1a3a5c] rounded-lg p-16 text-center">
        <div class="w-16 h-16 mx-auto mb-6 rounded border border-[#1a3a5c] flex items-center justify-center bg-[#0a1628]">
          <span class="text-2xl">🎮</span>
        </div>
        <h3 class="text-[#e8f4ff] font-semibold mb-2 tracking-wide">Roster Coming Soon</h3>
        <p class="text-[#3d6b8f] text-sm leading-relaxed max-w-sm mx-auto">
          Data member sedang disiapkan. Tambahkan member di
          <code class="text-[#22d3ee] bg-[#0a1628] px-1 rounded font-mono text-xs">src/data/members.js</code>
        </p>

        <!-- Role legend -->
        <div class="flex flex-wrap items-center justify-center gap-3 mt-8">
          <div v-for="(role, key) in roles" :key="key"
               class="flex items-center gap-1.5 px-3 py-1 rounded border border-[#1a3a5c]/50 bg-[#060d18]">
            <span class="text-xs">{{ role.icon }}</span>
            <span class="text-xs tracking-widest uppercase" :style="{ color: role.color }">{{ role.label }}</span>
          </div>
        </div>
      </div>

      <!-- Member grid (when populated) -->
      <div v-else class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="member in members" :key="member.id"
             class="border border-[#1a3a5c] bg-[#0a1628] rounded-lg p-5 hover:border-[#22d3ee]/30 transition-all duration-200"
             style="box-shadow: 0 0 20px rgba(37,99,235,0.05)">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-10 h-10 rounded border border-[#1a3a5c] flex items-center justify-center bg-[#0f2040]">
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

      <!-- Recruitment CTA -->
      <div class="mt-16 border border-[#1a3a5c] bg-[#0a1628] rounded-lg p-8 text-center relative overflow-hidden"
           style="box-shadow: 0 0 40px rgba(37,99,235,0.06)">
        <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22d3ee]/40 to-transparent"></div>
        <h3 class="text-xl font-bold text-[#e8f4ff] mb-2 tracking-wide"
            style="font-family:'Arial Narrow','Arial',sans-serif;">
          Bergabung dengan Z-One
        </h3>
        <p class="text-[#3d6b8f] text-sm mb-6">Kami selalu terbuka untuk member baru yang solid.</p>
        <div class="inline-flex items-center gap-2 px-6 py-2.5 border border-[#22d3ee]/40 bg-[#06b6d4]/8 rounded text-[#22d3ee] text-sm tracking-widest uppercase"
             style="box-shadow: 0 0 20px rgba(34,211,238,0.12)">
          Hubungi Guild Master
        </div>
      </div>
    </div>
  </section>
</template>
