<script setup>
import { guildInfo } from '../data/members.js'
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')
</script>

<template>
  <footer class="relative bg-[#020408] border-t border-[#1a3a5c]/40">
    <div class="max-w-6xl mx-auto px-8 md:px-14 lg:px-20">

      <!-- Main footer content -->
      <div class="grid md:grid-cols-[1fr_auto] gap-12 py-16 md:py-20">

        <!-- Left: guild identity -->
        <div class="max-w-sm">
          <!-- Logo + name -->
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 overflow-hidden flex-shrink-0 border border-[#1a3a5c]/60">
              <img :src="`${BASE}/assets/guild/logo.jpg`"
                   alt="Z-One"
                   class="w-full h-full object-cover"
                   style="filter: brightness(0.85) saturate(1.1);" />
            </div>
            <div>
              <h3 class="font-black text-[#e8f4ff] text-xl leading-none tracking-tight"
                  style="font-family:'Arial Narrow','Arial',sans-serif;">
                Guild Z-One
              </h3>
              <p class="text-[#3d6b8f] text-xs font-mono tracking-widest mt-0.5">{{ guildInfo.tag }} · Est. {{ guildInfo.founded }}</p>
            </div>
          </div>

          <p class="text-[#2a4a5e] text-sm leading-relaxed max-w-xs mt-6">
            {{ guildInfo.description }}
          </p>
        </div>

        <!-- Right: quick nav -->
        <div class="flex flex-col gap-3 md:items-end">
          <p class="text-[10px] tracking-[.55em] uppercase font-mono text-[#2a4a5e] mb-2">Navigate</p>
          <a href="#hero"    class="text-sm text-[#4a7a9b] hover:text-[#e8f4ff] transition-colors duration-200 font-mono tracking-wide">Home</a>
          <a href="#about"   class="text-sm text-[#4a7a9b] hover:text-[#e8f4ff] transition-colors duration-200 font-mono tracking-wide">About</a>
          <a href="#members" class="text-sm text-[#4a7a9b] hover:text-[#e8f4ff] transition-colors duration-200 font-mono tracking-wide">Members</a>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="border-t border-[#1a3a5c]/40 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p class="text-[#1a3a5c] text-xs font-mono tracking-wide">
          {{ guildInfo.motto }}
        </p>
        <p class="text-[#1a3a5c] text-xs font-mono tracking-wide">
          Fan-made guild portal. Not affiliated with any publisher.
        </p>
      </div>
    </div>
  </footer>
</template>
