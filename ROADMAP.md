# 🗺️ ROADMAP — Guild Z-One Web Portal

> Rencana pengembangan web portal resmi untuk guild Z-One.
> Isi dan fitur masih open — roadmap ini akan terus diperbarui sesuai kebutuhan guild.

---

## ✅ Sudah Selesai

- [x] Setup proyek (Vue 3 + Vite)
- [x] Struktur folder dasar
- [x] Setup Tailwind CSS v4 dengan `@tailwindcss/vite`
- [x] Design system — token warna modern esports (dark navy, cyan neon, blue)
- [x] Global styles dengan glow utilities (`glow-blue`, `glow-cyan`, `glow-neon`) dan scan-line effect
- [x] `NavBar` — scroll-aware, logo asli guild, animated underline, smooth mobile menu
- [x] `HeroSection` — logo parallax + mouse tracking, grid overlay, rotating ring decoration, stats row
- [x] `AboutSection` — guild identity card + guild values grid
- [x] `MemberSection` — member roster dengan role badges + empty state
- [x] `FooterSection` — brand footer dengan motto guild
- [x] `src/data/members.js` — struktur data guild info, roles, placeholder member & achievements
- [x] Assets logo dan info guild diintegrasikan ke UI
- [x] Deploy ke GitHub Pages (`https://axitz07.github.io/project-guild-Z-One/`)

---

## 🔄 Sedang Dikerjakan

- [ ] Pengisian data member aktif di `src/data/members.js`
- [ ] Polish responsivitas mobile semua section

---

## 📌 Backlog — Prioritas Tinggi

### 🏠 Fondasi Web
- [ ] **Responsif mobile** — semua halaman tampil baik di HP
- [ ] **Animasi masuk** — section reveal saat scroll

### 👥 Konten Guild
- [ ] **Isi data member** — tambahkan member aktif ke `src/data/members.js`
- [ ] **Achievements section** — pencapaian guild: ranking, event menang, milestone
- [ ] **RecruitSection** — syarat bergabung, cara daftar, kontak recruiter
- [ ] **GallerySection** — screenshot momen guild war, event bersama, foto squad

---

## 🧩 Ide & Eksplorasi

> Fitur-fitur ini masih dalam tahap ide, belum tentu semua diimplementasikan.

- [ ] **Leaderboard internal** — ranking member berdasarkan kontribusi atau stats
- [ ] **Event calendar** — jadwal guild war, raid, event game yang akan datang
- [ ] **Pengumuman** — section berita / update terbaru dari guild master
- [ ] **Forum ringan** — diskusi internal member (bisa pakai Discord embed sebagai alternatif)
- [ ] **Dark/light mode** — toggle tema sesuai selera
- [ ] **Animasi masuk halaman** — page transition yang smooth
- [ ] **Integrasi Discord** — tampilkan status server Discord guild secara live

---

## ❓ Masih Perlu Diputuskan

- Game apa yang jadi fokus guild? (satu game atau multi-game?)
- Apakah website ini publik atau khusus member?
- Perlu fitur login/autentikasi untuk member?
- Deploy ke mana? (GitHub Pages, Vercel, Netlify?)

---

## 🚀 Rilis

| Versi | Target | Deskripsi |
|-------|--------|-----------|
| v0.1 | ✅ Done | Setup proyek |
| v0.2 | ✅ Done | Tailwind CSS, design system, NavBar, HeroSection, AboutSection, MemberSection |
| v0.3 | Sekarang | Isi data member, Achievements, RecruitSection, polish mobile |
| v0.4 | TBD | GallerySection + animasi + fitur tambahan |
| v1.0 | TBD | Launch publik, mobile-ready, domain kustom |

---

> Update roadmap ini setiap ada keputusan baru soal arah guild atau fitur website.
