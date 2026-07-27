<script setup>
import { ref, onMounted } from 'vue'
import { members, roles, guildInfo } from '../data/members.js'

const el   = ref(null)
const show = ref(false)

onMounted(() => {
  const io = new IntersectionObserver(([e]) => {
    if (e.isIntersecting) { show.value = true; io.disconnect() }
  }, { threshold: 0.06 })
  if (el.value) io.observe(el.value)
})
</script>

<template>
  <section id="members" ref="el" class="relative bg-[#02050c] overflow-hidden">
    <div class="h-px bg-gradient-to-r from-transparent via-[#1a3a5c]/40 to-transparent"></div>

    <div
      class="max-w-6xl mx-auto px-8 md:px-14 lg:px-20 py-24 md:py-32 transition-all duration-1000"
      :style="show ? 'opacity:1; transform:translateY(0)' : 'opacity:0; transform:translateY(20px)'"
    >
      <!-- Section label -->
      <div class="mb-16">
        <p class="text-[10px] tracking-[.55em] uppercase font-mono text-[#2a4a5e] mb-3 leading-none">Members</p>
        <div class="w-6 h-px bg-[#1a3a5c]"></div>
      </div>

      <!-- Empty state — clean, no emoji -->
      <div v-if="members.length === 0">
        <div class="border border-dashed border-[#0d1e2e] p-16 mb-16 text-center">
          <div class="w-8 h-px bg-[#1a3a5c] mx-auto mb-8"></div>
          <h3 class="text-[#4a7a9b] text-sm font-mono tracking-widest uppercase mb-3">Roster Coming Soon</h3>
          <p class="text-[#2a4a5e] text-sm leading-relaxed max-w-sm mx-auto mb-6">
            Data member sedang disiapkan.
          </p>
          <p class="text-[#1a3050] text-xs font-mono">
            Tambahkan member di
            <code class="text-[#22d3ee] bg-[#0a1628] px-1.5 py-0.5">src/data/members.js</code>
          </p>

          <!-- Role legend — text only, no emoji -->
          <div class="flex flex-wrap justify-center gap-4 mt-10">
            <div v-for="(role, key) in roles" :key="key" class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full flex-shrink-0" :style="{ background: role.color }"></span>
              <span class="text-xs font-mono tracking-widest uppercase" :style="{ color: role.color }">{{ role.label }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Member grid — when populated -->
      <div v-else class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-16">
        <div
          v-for="member in members" :key="member.id"
          class="border border-[#0d1e2e] bg-[#030810] p-5 hover:border-[#1a3a5c] transition-all duration-200 group"
        >
          <div class="flex items-start gap-3 mb-3">
            <!-- Role color indicator -->
            <div class="w-0.5 h-full self-stretch flex-shrink-0 mt-1" :style="{ background: roles[member.role]?.color }"></div>
            <div>
              <h4 class="text-sm font-semibold text-[#c8d8ea] tracking-wide mb-0.5">{{ member.username }}</h4>
              <span class="text-[10px] tracking-widest uppercase font-mono" :style="{ color: roles[member.role]?.color ?? '#4a7a9b' }">
                {{ roles[member.role]?.label ?? member.role }}
              </span>
            </div>
          </div>
          <p v-if="member.bio" class="text-xs text-[#2a4a5e] leading-relaxed">{{ member.bio }}</p>
        </div>
      </div>

      <!-- Recruitment CTA -->
      <div class="border-t border-[#0d1e2e] pt-14">
        <div class="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div>
            <p class="text-[10px] tracking-[.55em] uppercase font-mono text-[#2a4a5e] mb-4 leading-none">Rekrutmen</p>
            <h3
              class="font-black text-[#dde8f5] leading-none mb-3"
              style="font-family:'Arial Narrow','Arial',sans-serif; font-size: clamp(1.8rem, 4vw, 2.8rem); letter-spacing:-0.02em;"
            >Bergabung dengan Z-One</h3>
            <p class="text-[#3d6b8f] text-sm">Kami selalu terbuka untuk member baru yang solid.</p>
          </div>
          <a
            href="#"
            class="flex-shrink-0 flex items-center gap-3 border border-[#1a3a5c] px-6 py-3 text-[#4a7a9b] hover:border-[#22d3ee]/40 hover:text-[#22d3ee] hover:bg-[#22d3ee]/4 transition-all duration-200 group"
          >
            <span class="text-xs tracking-[0.3em] uppercase font-mono">Hubungi Guild Master</span>
            <span class="group-hover:translate-x-1 transition-transform duration-200 text-xs">→</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
