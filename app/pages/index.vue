<script setup>
import { ref } from 'vue'

const skills = [
  { num: '01', title: 'Visual Design', sub: 'Figma · Canva', level: 'Expert', progress: '85%' },
  { num: '02', title: 'Frontend Dev', sub: 'HTML · CSS · Tailwind · JS', level: 'Advanced', progress: '75%' },
  { num: '03', title: 'Photography', sub: 'Portrait · Editorial · Product', level: 'Advanced', progress: '80%' }
]

const works = [
  {
    title: 'ANTRIAN-TGX',
    tag: 'Frontend-Backend · 2026',
    desc: 'Sebuah website yang membantu UMKM mendigitalisasi layanan dan data bisnis.',
    href: './Antrian-tgx/index.html',
    img: '/img/kasir.png',
    isLarge: true
  },
  {
    title: 'DOKUMENTER DAN WAWANCARA',
    tag: 'Dokumenter · 2026',
    desc: 'Mempublikasi manfaat dan dampak real yang terjadi di lapangan.',
    href: 'https://youtu.be/_lq3Wl4GdSk?si=Mym4vGb9QwyTFG2X',
    img: '/img/youtbe2.avif',
    isLarge: false
  },
  {
    title: 'KANVAS DIGITAL / WEDDING (development)',
    tag: 'Web Development · 2026',
    desc: 'Spesialis pembuatan website undangan pernikahan interaktif dengan fitur musik.',
    href: './wedding/index.html',
    img: '/img/wedding.avif',
    isLarge: false
  }
]

</script>

<template>
  <navbar/>
  <hero/>
    

    <section class="pt-32 pb-32 bg-brand-mid flex justify-center items-center">
      <div class="flex justify-between items-start max-w-[1200px] gap-20 " >
        <div class="">
          <p class="mb-4">01 — Tentang</p>
          <h2 class="mb-2.5 text-6xl font-bold">
            Bercerita<br>lewat <em class="text-brand-gold">visual</em><br>dan gerak.
          </h2>
          <p class="mb-8 max-w-[600px]">
            Aku Endra Nayottama Giovanni Lulusan SMAN 1 Trenggalek Angkatan 2026. Aku mempunyai mimpi sebagai Frontend-Backend developer dan ini adalah sebuah langkah awal ku untuk menunjukkan kepada dunia bahwa aku bisa menggapai mimpiku. 
          </p>
          <blockquote class="p-5 bg-black/35 max-w-[420px]">
            "Kita masing-masing punya lagu yang belum selesai ditulis."<br>
            <span class="">— Baskara Putra</span>
          </blockquote>
        </div>

        <div class="">
          <p>TRACKLIST KEMAMPUAN</p>
          <ul>
            <li class="group flex items-center gap-5 py-[18px]
               border-b border-white/5
               relative transition-all duration-300
               hover:pl-2 cursor-default" v-for = "skill in skills" :key = "skill.num">
              <span class="w-6 shrink-0 font-playfair text-[11px]
                  text-gray-400 transition-colors duration-300
                  group-hover:text-amber-600">{{skill.num}}</span>
              <div class="">
                <p>{{skill.title}}</p>
                <p>{{skill.sub}}</p>
              </div>
              <span class="text-[10px] tracking-[2px]
                  uppercase text-amber-600 opacity-60">{{skill.level}}</span>
              <div class="w-20 h-0.5 bg-white/10 rounded overflow-hidden">
                <div class="h-full 
                    rounded
                    bg-gradient-to-r
                    from-amber-600
                    to-amber-600/40" :style="{width : `${skill.progress}%`}"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

<section class="max-w-6xl mx-auto px-4 py-16 bg-[var(--color-brand-dark)] text-[var(--color-brand-cream)]">
  <!-- HEADER SECTION -->
  <div class="mb-12 text-center md:text-left">
    <h1 class="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-[var(--color-brand-gold)]">
      Album Terbaik
    </h1>
    <p class="text-[var(--color-brand-muted)] text-sm md:text-base lowercase">
      semua karyaku
    </p>
  </div>
  
  <!-- GRID CONTAINER (3 Kolom) -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    <a 
      v-for="work in works" 
      :key="work.title"
      :href="work.href"
      class="group relative block bg-[var(--color-brand-mid)] border border-[var(--color-brand-warm)] rounded-2xl overflow-hidden hover:border-[var(--color-brand-gold)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
    >
      <div>
        <!-- IMAGE CONTAINER -->
        <div class="relative aspect-video w-full overflow-hidden bg-[var(--color-brand-dark)]">
          <img 
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            :src="work.img" 
            :alt="work.title"
          >
          
          <!-- ICON LINK NUXT UI (Muncul saat di-hover) -->
          <div class="absolute top-4 right-4 p-2 bg-[var(--color-brand-dark)]/80 rounded-full text-[var(--color-brand-muted)] group-hover:text-[var(--color-brand-gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <!-- Menggunakan icon arrow-up-right dari Iconify via Nuxt UI -->
            <UIcon name="i-heroicons-arrow-up-right-20-solid" class="w-5 h-5" />
          </div>
        </div>
        
        <!-- VINYL DEKORASI (Jika isLarge bernilai true) -->
        <div v-if="work.isLarge" class="flex justify-center my-6 text-[var(--color-brand-muted)] animate-[spin_10s_linear_infinite]">
          <!-- Menggunakan icon piringan hitam/disc dari Nuxt UI -->
          <UIcon name="i-heroicons-disc" class="w-24 h-24 text-[var(--color-brand-warm)]" />
        </div>
      </div>
      
      <!-- CONTENT TEXT -->
      <div class="p-6">
        <span class="text-xs font-semibold text-[var(--color-brand-gold)] uppercase tracking-wider">
          {{ work.tag }}
        </span>
        <h3 class="text-xl font-bold mt-2 mb-2 group-hover:text-[var(--color-brand-gold)] transition-colors">
          {{ work.title }}
        </h3>
        <p class="text-[var(--color-brand-muted)] text-sm leading-relaxed">
          {{ work.desc }}
        </p>
      </div>

    </a>
  </div>
</section>
</template>