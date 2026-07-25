<script setup>
import { guildInfo } from '../data/members.js'
</script>

<template>
  <footer class="relative border-t border-[#1a3a5c]/60 py-12 overflow-hidden">
    <div class="absolute inset-0 bg-[#020408]"></div>

    <div class="relative z-10 max-w-5xl mx-auto px-6">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">

        <!-- Brand -->
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded border border-[#22d3ee]/40 flex items-center justify-center bg-[#06b6d4]/8">
            <span class="text-[#22d3ee] font-bold font-mono text-xs">Z1</span>
          </div>
          <div>
            <p class="text-sm font-bold text-[#e8f4ff] tracking-widest uppercase"
               style="font-family:'Arial Narrow','Arial',sans-serif;">Guild Z-One</p>
            <p class="text-[10px] text-[#3d6b8f] tracking-widest uppercase font-mono">{{ guildInfo.tag }}</p>
          </div>
        </div>

        <!-- Motto -->
        <p class="text-xs text-[#3d6b8f] tracking-[0.3em] uppercase text-center">
          {{ guildInfo.motto }}
        </p>

        <!-- Est -->
        <p class="text-xs text-[#3d6b8f] font-mono">Est. {{ guildInfo.founded }}</p>
      </div>

      <!-- Bottom line -->
      <div class="mt-8 pt-8 border-t border-[#1a3a5c]/40 text-center">
        <p class="text-[10px] text-[#3d6b8f] tracking-widest uppercase font-mono">
          Built with ⚔️ — Z-One, satu guild satu tujuan.
        </p>
      </div>
    </div>
  </footer>
</template>
