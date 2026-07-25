# ⚔️ Guild Z-One — Portal Guild

Website resmi untuk guild **Z-One**. Portal komunitas guild game yang menampilkan informasi, aktivitas, dan segala hal seputar guild — dibuat buat para member dan siapa saja yang ingin bergabung.

## 🎯 Tujuan Website

- Jadi pusat informasi resmi guild Z-One
- Menampilkan profil dan pencapaian guild
- Memudahkan rekrutmen member baru
- Menyimpan history & momen penting guild

## 📋 Konten yang Akan Ada

- **Beranda** — hero section dengan branding guild
- **Tentang Guild** — sejarah, visi, aturan guild
- **Anggota** — daftar member aktif dan peran masing-masing
- **Pencapaian** — prestasi, ranking, dan momen penting guild
- **Rekrutmen** — info cara bergabung dan syarat member
- **Galeri** — screenshot gameplay, momen guild war, event

## 🛠️ Tech Stack

| Tool | Kegunaan |
|------|----------|
| [Vue 3](https://vuejs.org/) | Framework utama (Composition API) |
| [Vite 8](https://vite.dev/) | Build tool & dev server |
| Tailwind CSS | Utility-first styling |

## 🚀 Cara Menjalankan

```bash
# Install dependencies
npm install

# Jalankan dev server (http://localhost:5173)
npm run dev

# Build untuk production
npm run build

# Preview hasil build
npm run preview
```

## 📁 Struktur Proyek (Target)

```
guild-Z-One/
├── src/
│   ├── components/
│   │   ├── HeroSection.vue       # Landing hero guild
│   │   ├── AboutGuild.vue        # Info & sejarah guild
│   │   ├── MemberList.vue        # Daftar anggota guild
│   │   ├── Achievements.vue      # Pencapaian & ranking
│   │   ├── RecruitSection.vue    # Info rekrutmen
│   │   ├── GallerySection.vue    # Galeri momen guild
│   │   └── NavBar.vue            # Navigasi
│   ├── data/
│   │   ├── members.js            # Data member guild
│   │   └── achievements.js      # Data pencapaian
│   ├── App.vue
│   └── main.js
├── public/
│   └── assets/                   # Logo, banner guild
└── index.html
```

## 🌐 Live Demo

> _(Tambahkan link setelah deploy)_

---

Made with ⚔️ — Z-One, satu guild satu tujuan.
