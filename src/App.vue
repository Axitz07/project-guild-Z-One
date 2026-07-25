<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import MemberSection from './components/MemberSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div class="min-h-screen bg-[#020408]">
    <NavBar />
    <main>
      <HeroSection />
      <AboutSection />
      <MemberSection />
    </main>
    <FooterSection />
  </div>
</template>
