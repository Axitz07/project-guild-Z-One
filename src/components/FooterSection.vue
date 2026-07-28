<script setup>
import { guildInfo } from '../data/members.js'
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')
</script>

<template>
  <footer class="relative bg-[#02050c] border-t border-[#0d1e2e]">
    <div class="max-w-6xl mx-auto px-8 md:px-14 lg:px-20">

      <!-- Main content -->
      <div class="grid md:grid-cols-[1fr_auto] gap-12 py-16 md:py-20">

        <!-- Left: identity -->
        <div class="max-w-md">
          <div class="flex items-center gap-4 mb-5">
            <div class="w-10 h-10 overflow-hidden flex-shrink-0 border border-[#1a3a5c]/50">
              <img :src="`${BASE}/assets/guild/logo.jpg`" alt="Z-One"
                   class="w-full h-full object-cover" style="mix-blend-mode:screen;" />
            </div>
            <div>
              <h3 class="font-black text-[#dde8f5] text-xl leading-none tracking-tight"
                  style="font-family:'Arial Narrow','Arial',sans-serif;">
                Guild Z-One
              </h3>
              <p class="text-[#2a4a5e] text-[10px] font-mono tracking-widest mt-0.5">
                {{ guildInfo.tag }} · Est. {{ guildInfo.founded }}
              </p>
            </div>
          </div>
          <p class="text-[#3d6b8f] text-sm leading-relaxed">
            {{ guildInfo.description }}
          </p>
        </div>

        <!-- Right: nav -->
        <div class="flex flex-col gap-3 md:items-end">
          <p class="text-[10px] tracking-[.5em] uppercase font-mono text-[#1e3050] mb-2">Navigate</p>
          <a href="#hero"    class="text-sm text-[#3d6b8f] hover:text-[#dde8f5] transition-colors duration-200 font-mono tracking-wide">Home</a>
          <a href="#about"   class="text-sm text-[#3d6b8f] hover:text-[#dde8f5] transition-colors duration-200 font-mono tracking-wide">About</a>
          <a href="#members" class="text-sm text-[#3d6b8f] hover:text-[#dde8f5] transition-colors duration-200 font-mono tracking-wide">Members</a>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="border-t border-[#0d1e2e] py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p class="text-[#1e3050] text-xs font-mono tracking-wide">
          {{ guildInfo.motto }}
        </p>
        <p class="text-[#1e3050] text-xs font-mono tracking-wide">
          Fan-made guild portal. Not affiliated with any publisher.
        </p>
      </div>
    </div>
  </footer>
</template>
