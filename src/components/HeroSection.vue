<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const mouseX = ref(0)
const mouseY = ref(0)
const isLoaded = ref(false)

function handleMouseMove(e) {
  mouseX.value = (e.clientX / window.innerWidth - 0.5) * 30
  mouseY.value = (e.clientY / window.innerHeight - 0.5) * 15
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
  setTimeout(() => { isLoaded.value = true }, 100)
})
onUnmounted(() => window.removeEventListener('mousemove', handleMouseMove))

const stats = [
  { value: '∞', label: 'Grinding' },
  { value: '2024', label: 'Founded' },
  { value: '100%', label: 'Solid' },
]
</script>

<template>
  <section id="hero" class="relative min-h-screen overflow-hidden bg-[#020408] flex items-center">

    <!-- Background logo large blurred -->
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none"
         :style="{ transform: `translate(${mouseX * 0.2}px, ${mouseY * 0.2}px)` }"
         style="transition: transform 1s cubic-bezier(0.25,0.46,0.45,0.94)">
      <img src="/assets/guild/logo.jpg"
           alt=""
           class="w-[600px] h-[600px] object-contain opacity-[0.04]"
           style="filter: blur(2px) saturate(0);" />
    </div>

    <!-- Grid -->
    <div class="absolute inset-0 opacity-[0.025]"
         style="background-image: linear-gradient(rgba(34,211,238,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,1) 1px, transparent 1px); background-size: 80px 80px;"></div>

    <!-- Animated glow orbs -->
    <div class="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
         style="background: radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%); filter: blur(60px); animation: pulse-slow 6s ease-in-out infinite;"></div>
    <div class="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full pointer-events-none"
         style="background: radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%); filter: blur(40px); animation: pulse-slow 8s ease-in-out infinite 2s;"></div>

    <!-- Corner brackets — decorative -->
    <div v-for="pos in ['top-20 left-8', 'top-20 right-8', 'bottom-10 left-8', 'bottom-10 right-8']" :key="pos"
         class="absolute w-12 h-12 pointer-events-none"
         :class="pos">
      <div class="absolute inset-0 border-[#22d3ee]/20"
           :class="pos.includes('top') ? 'border-t border-l' : pos.includes('right') ? 'border-b border-r' : ''"
           style=""></div>
    </div>
    <div class="absolute top-20 left-8 w-12 h-12 border-t border-l border-[#22d3ee]/25 pointer-events-none"></div>
    <div class="absolute top-20 right-8 w-12 h-12 border-t border-r border-[#22d3ee]/25 pointer-events-none"></div>
    <div class="absolute bottom-10 left-8 w-12 h-12 border-b border-l border-[#22d3ee]/25 pointer-events-none"></div>
    <div class="absolute bottom-10 right-8 w-12 h-12 border-b border-r border-[#22d3ee]/25 pointer-events-none"></div>

    <!-- Scan line overlay -->
    <div class="absolute inset-0 pointer-events-none scan-line"></div>

    <!-- Main content -->
    <div class="relative z-10 w-full max-w-5xl mx-auto px-8 py-24"
         :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
         style="transition: all 1s cubic-bezier(0.16,1,0.3,1)">

      <div class="flex flex-col lg:flex-row items-center lg:items-start gap-12">

        <!-- Left: logo + text -->
        <div class="flex-1 text-center lg:text-left">

          <!-- Tag -->
          <div class="inline-flex items-center gap-2 mb-8 px-3 py-1.5 border border-[#1a3a5c] bg-[#0a1628]/80 rounded-sm backdrop-blur-sm">
            <span class="w-1.5 h-1.5 rounded-full bg-[#22d3ee] animate-pulse"></span>
            <span class="text-[10px] text-[#7ab3d9] tracking-[0.5em] uppercase font-mono">Est. 2024</span>
          </div>

          <!-- Guild name — big editorial -->
          <h1 class="font-black uppercase leading-none mb-6 select-none"
              style="font-size: clamp(3.5rem, 12vw, 10rem); letter-spacing: -0.03em; font-family: 'Arial Narrow','Arial',sans-serif;">
            <span class="block text-transparent"
                  style="
                    -webkit-text-stroke: 1px rgba(34,211,238,0.4);
                    background: linear-gradient(135deg, #e8f4ff 0%, #22d3ee 50%, #2563eb 100%);
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    filter: drop-shadow(0 0 40px rgba(34,211,238,0.3));
                  ">
              Guild
            </span>
            <span class="block text-transparent"
                  style="
                    -webkit-text-stroke: 1px rgba(34,211,238,0.3);
                    background: linear-gradient(135deg, #22d3ee 0%, #06b6d4 50%, #0ea5e9 100%);
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    filter: drop-shadow(0 0 60px rgba(6,182,212,0.4));
                  ">
              Z-One
            </span>
          </h1>

          <!-- Tagline -->
          <p class="text-[#7ab3d9] text-base md:text-lg tracking-widest uppercase mb-10 font-mono">
            Satu Guild — Satu Tujuan
          </p>

          <!-- Stats row -->
          <div class="flex flex-wrap items-center gap-8 mb-10 justify-center lg:justify-start">
            <div v-for="stat in stats" :key="stat.label" class="text-center">
              <div class="text-2xl font-bold text-[#22d3ee] font-mono leading-none mb-1"
                   style="text-shadow: 0 0 20px rgba(34,211,238,0.5)">{{ stat.value }}</div>
              <div class="text-[10px] text-[#3d6b8f] tracking-widest uppercase">{{ stat.label }}</div>
            </div>
          </div>

          <!-- CTA -->
          <div class="flex flex-wrap items-center gap-4 justify-center lg:justify-start">
            <a href="#about"
               class="px-8 py-3 text-xs tracking-widest uppercase border border-[#22d3ee]/50 text-[#22d3ee] hover:bg-[#22d3ee]/10 transition-all duration-300 rounded-sm"
               style="box-shadow: 0 0 20px rgba(34,211,238,0.1)">
              About Guild
            </a>
            <a href="#members"
               class="px-8 py-3 text-xs tracking-widest uppercase border border-[#1a3a5c] text-[#3d6b8f] hover:border-[#22d3ee]/30 hover:text-[#7ab3d9] transition-all duration-300 rounded-sm">
              Members →
            </a>
          </div>
        </div>

        <!-- Right: logo with glow effect -->
        <div class="flex-shrink-0 relative"
             :style="{ transform: `translate(${mouseX * -0.4}px, ${mouseY * -0.3}px)` }"
             style="transition: transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)">
          <div class="relative w-56 h-56 lg:w-72 lg:h-72">
            <!-- Glow ring -->
            <div class="absolute inset-0 rounded-full"
                 style="background: radial-gradient(circle, rgba(34,211,238,0.15) 0%, transparent 70%); filter: blur(20px); animation: pulse-slow 4s ease-in-out infinite;"></div>
            <!-- Border ring -->
            <div class="absolute inset-2 rounded-full border border-[#22d3ee]/20 animate-spin"
                 style="animation-duration: 20s;"></div>
            <div class="absolute inset-4 rounded-full border border-[#1a3a5c]/50 animate-spin"
                 style="animation-duration: 30s; animation-direction: reverse;"></div>
            <!-- Logo -->
            <div class="absolute inset-6 rounded-full overflow-hidden border border-[#22d3ee]/30"
                 style="box-shadow: 0 0 40px rgba(34,211,238,0.2), inset 0 0 40px rgba(34,211,238,0.05)">
              <img src="/assets/guild/logo.jpg"
                   alt="Guild Z-One Logo"
                   class="w-full h-full object-cover"
                   style="filter: saturate(1.2) brightness(0.9);" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom line -->
    <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22d3ee]/30 to-transparent"></div>
  </section>
</template>

<style scoped>
@keyframes pulse-slow {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
}
</style>
