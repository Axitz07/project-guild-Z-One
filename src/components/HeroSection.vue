<script setup>
import { guildInfo } from '../data/members.js'
</script>

<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">

    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-b from-[#060d18] via-[#020408] to-[#020408]"></div>
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(37,99,235,0.12),transparent)]"></div>

    <!-- Grid overlay -->
    <div class="absolute inset-0 opacity-[0.03]"
         style="background-image: linear-gradient(rgba(34,211,238,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,1) 1px, transparent 1px); background-size: 60px 60px;"></div>

    <!-- Scan line -->
    <div class="absolute inset-0 scan-line pointer-events-none"></div>

    <!-- Glow orbs -->
    <div class="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-[#2563eb]/6 blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-[#06b6d4]/6 blur-3xl pointer-events-none"></div>

    <!-- Corner decorations -->
    <div class="absolute top-24 left-8 w-16 h-16 border-t-2 border-l-2 border-[#22d3ee]/30"></div>
    <div class="absolute top-24 right-8 w-16 h-16 border-t-2 border-r-2 border-[#22d3ee]/30"></div>
    <div class="absolute bottom-12 left-8 w-16 h-16 border-b-2 border-l-2 border-[#22d3ee]/30"></div>
    <div class="absolute bottom-12 right-8 w-16 h-16 border-b-2 border-r-2 border-[#22d3ee]/30"></div>

    <!-- Content -->
    <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">

      <!-- Tag badge -->
      <div class="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-[#22d3ee]/30 bg-[#06b6d4]/5 rounded"
           style="box-shadow: 0 0 20px rgba(34,211,238,0.1)">
        <span class="text-[#22d3ee] font-mono text-xs tracking-widest">{{ guildInfo.tag }}</span>
        <span class="w-px h-3 bg-[#1a3a5c]"></span>
        <span class="text-[#7ab3d9] text-xs tracking-widest uppercase">Est. {{ guildInfo.founded }}</span>
      </div>

      <!-- Guild name -->
      <h1 class="text-6xl md:text-8xl font-black tracking-tight mb-4 uppercase select-none"
          style="font-family:'Arial Narrow','Arial',sans-serif; letter-spacing: -0.02em;">
        <span class="text-transparent bg-clip-text bg-gradient-to-b from-[#e8f4ff] via-[#22d3ee] to-[#2563eb]"
              style="text-shadow: none; filter: drop-shadow(0 0 30px rgba(34,211,238,0.4))">
          Guild Z-One
        </span>
      </h1>

      <!-- Divider -->
      <div class="flex items-center justify-center gap-4 mb-6">
        <div class="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-[#22d3ee]/50"></div>
        <span class="text-[#22d3ee]/60 text-xs tracking-[0.5em] uppercase font-mono">Z · O · N · E</span>
        <div class="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-[#22d3ee]/50"></div>
      </div>

      <!-- Motto -->
      <p class="text-[#7ab3d9] tracking-widest uppercase text-sm mb-10">
        {{ guildInfo.motto }}
      </p>

      <!-- Stats row -->
      <div class="flex items-center justify-center gap-8 mb-12">
        <div class="text-center">
          <div class="text-2xl font-bold text-[#22d3ee] font-mono">—</div>
          <div class="text-xs text-[#3d6b8f] tracking-widest uppercase mt-1">Members</div>
        </div>
        <div class="w-px h-8 bg-[#1a3a5c]"></div>
        <div class="text-center">
          <div class="text-2xl font-bold text-[#22d3ee] font-mono">{{ guildInfo.founded }}</div>
          <div class="text-xs text-[#3d6b8f] tracking-widest uppercase mt-1">Founded</div>
        </div>
        <div class="w-px h-8 bg-[#1a3a5c]"></div>
        <div class="text-center">
          <div class="text-2xl font-bold text-[#22d3ee] font-mono">∞</div>
          <div class="text-xs text-[#3d6b8f] tracking-widest uppercase mt-1">Grinding</div>
        </div>
      </div>

      <!-- CTA -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="#about"
           class="px-8 py-3 rounded border border-[#22d3ee]/50 bg-[#22d3ee]/8 text-[#22d3ee]
                  text-sm tracking-widest uppercase hover:bg-[#22d3ee]/15 transition-all duration-300"
           style="box-shadow: 0 0 20px rgba(34,211,238,0.15)">
          Tentang Guild
        </a>
        <a href="#members"
           class="px-8 py-3 rounded border border-[#1a3a5c] text-[#3d6b8f]
                  text-sm tracking-widest uppercase hover:border-[#22d3ee]/30 hover:text-[#7ab3d9]
                  transition-all duration-300">
          Lihat Member
        </a>
      </div>
    </div>

    <!-- Bottom line -->
    <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22d3ee]/30 to-transparent"></div>
  </section>
</template>
