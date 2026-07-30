<script setup>
import { ref, onMounted } from 'vue'
import { members, roles, guildInfo } from '../data/members.js'
import { Users, UserPlus, Crown, Shield, Swords, Star, Sprout, AlertCircle } from 'lucide-vue-next'

const el   = ref(null)
const show = ref(false)

onMounted(() => {
  const io = new IntersectionObserver(([e]) => {
    if (e.isIntersecting) { show.value = true; io.disconnect() }
  }, { threshold: 0.06 })
  if (el.value) io.observe(el.value)
})

const roleIcon = {
  LEADER:  Crown,
  OFFICER: Shield,
  VETERAN: Swords,
  MEMBER:  Star,
  RECRUIT: Sprout,
}
</script>

<template>
  <section id="members" ref="el" class="relative bg-[#020609] overflow-hidden">
    <div class="h-px bg-gradient-to-r from-transparent via-[#1a3a5c]/35 to-transparent" />

    <div
      class="max-w-[1400px] mx-auto px-8 md:px-14 lg:px-20 py-32 md:py-48
             transition-all duration-1000"
      :class="show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
    >
      <!-- Header -->
      <div class="flex items-center gap-2 mb-16">
        <Users class="w-3.5 h-3.5 text-[#22d3ee]" />
        <p class="text-[11px] tracking-[.45em] uppercase font-mono text-[#2a4a5e]">Members</p>
      </div>

      <!-- Empty state — asymmetric, not centered -->
      <div v-if="members.length === 0" class="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-14">
        <div>
          <h2
            class="font-black text-[#dde8f5] leading-none mb-5"
            style="font-family:'Outfit',sans-serif;font-size:clamp(2.5rem,6vw,4rem);letter-spacing:-.03em;"
          >Roster Coming Soon</h2>
          <p class="text-[15px] text-[#3d6b8f] leading-relaxed mb-8 max-w-md">
            Data member sedang disiapkan. Tambahkan di
            <code class="text-[#22d3ee] bg-[#060d18] px-1.5 py-0.5 rounded text-[13px] font-mono">
              src/data/members.js
            </code>
          </p>

          <!-- Role legend — horizontal, not grid -->
          <div class="flex flex-wrap gap-4">
            <div v-for="(role, key) in roles" :key="key"
                 class="flex items-center gap-2">
              <component :is="roleIcon[key] ?? Star" class="w-3 h-3 flex-shrink-0"
                         :style="{ color: role.color }" />
              <span class="text-[11px] font-mono tracking-widest uppercase"
                    :style="{ color: role.color }">{{ role.label }}</span>
            </div>
          </div>
        </div>

        <!-- Decorative placeholder -->
        <div class="hidden lg:flex items-center justify-center">
          <div
            class="w-40 h-40 rounded-sm flex items-center justify-center"
            style="border:1px dashed rgba(26,58,92,.5);background:rgba(6,13,24,.5);"
          >
            <Users class="w-12 h-12 text-[#0d1e2e]" />
          </div>
        </div>
      </div>

      <!-- Member grid -->
      <div v-else class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-20">
        <div
          v-for="(member, i) in members"
          :key="member.id"
          class="p-5 border border-[#0d1e2e] bg-[#030810]
                 hover:border-[#1a3a5c] transition-all duration-200 group"
          :class="show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
          :style="`transition-delay:${i*60}ms;`"
        >
          <div class="flex items-start gap-3 mb-3">
            <div class="w-px h-10 flex-shrink-0 rounded"
                 :style="{ background: roles[member.role]?.color }" />
            <div>
              <h4 class="text-sm font-semibold text-[#c8d8ea] tracking-wide mb-0.5">{{ member.username }}</h4>
              <div class="flex items-center gap-1.5">
                <component :is="roleIcon[member.role] ?? Star"
                           class="w-3 h-3 flex-shrink-0"
                           :style="{ color: roles[member.role]?.color ?? '#4a7a9b' }" />
                <span class="text-[10px] tracking-widest uppercase font-mono"
                      :style="{ color: roles[member.role]?.color ?? '#4a7a9b' }">
                  {{ roles[member.role]?.label ?? member.role }}
                </span>
              </div>
            </div>
          </div>
          <p v-if="member.bio" class="text-[13px] text-[#2a4a5e] leading-relaxed ml-4">{{ member.bio }}</p>
        </div>
      </div>

      <!-- Recruitment CTA — asymmetric layout -->
      <div class="border-t border-[#0d1e2e] pt-16">
        <div class="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-end">
          <div>
            <div class="flex items-center gap-2 mb-4">
              <UserPlus class="w-3.5 h-3.5 text-[#22d3ee]" />
              <p class="text-[11px] tracking-[.45em] uppercase font-mono text-[#2a4a5e]">Rekrutmen</p>
            </div>
            <h3
              class="font-black text-[#dde8f5] leading-none mb-3"
              style="font-family:'Outfit',sans-serif;font-size:clamp(1.8rem,4vw,3rem);letter-spacing:-.03em;"
            >Bergabung dengan Z-One</h3>
            <p class="text-[14px] text-[#3d6b8f] max-w-sm">
              Kami selalu terbuka untuk member baru yang solid.
            </p>
          </div>

          <a
            href="mailto:guild.zone@gmail.com"
            class="flex-shrink-0 inline-flex items-center gap-3
                   border border-[#1a3a5c] px-6 py-3
                   text-[13px] font-medium tracking-wide text-[#4a7a9b]
                   hover:border-[#22d3ee]/40 hover:text-[#22d3ee] hover:bg-[#22d3ee]/5
                   transition-all duration-200 group font-mono"
          >
            Hubungi Guild Master
            <UserPlus class="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
