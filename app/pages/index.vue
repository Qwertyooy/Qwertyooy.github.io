<script setup>
import { ref } from 'vue'

useHead({
  bodyAttrs: {
    class: 'portfolio-site'
  }
})


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
    href: '/wedding',
    img: '/img/wedding.avif',
    isLarge: false
  }
]


</script>

<template>
  <div class="portfolio-theme min-h-screen w-full overflow-x-hidden">
  <navbar/>
  <hero/>
    

    <section id="about" class="pt-32 pb-32 bg-brand-mid flex justify-center items-center">
      <div class="flex justify-between items-start max-w-[1200px] gap-20 " >
        <div class="">
          <p class="mb-4 tracking-widest text-brand-gold opacity-45 uppercase text-sm">01 — Tentang</p>
          <h2 class="mb-2.5 text-6xl font-bold">
            Bercerita<br>lewat <em id="text-utama" class="text-brand-gold">visual</em><br>dan gerak.
          </h2>
          <p class="mb-8 max-w-[600px]">
            Aku Endra Nayottama Giovanni Lulusan SMAN 1 Trenggalek Angkatan 2026. Aku mempunyai mimpi sebagai Frontend-Backend developer dan ini adalah sebuah langkah awal ku untuk menunjukkan kepada dunia bahwa aku bisa menggapai mimpiku. 
          </p>
          <div class="p-5 relative">
            <div class="h-20 absolute w-1 bg-amber-300">
            </div>
            <blockquote class="mx-9">
            "Kita masing-masing punya lagu yang belum selesai ditulis."<br>
            <span class="">— Baskara Putra</span>
          </blockquote>
          </div>
          
        </div>

        <div class="">
          <p class="mb-4 tracking-widest text-brand-gold opacity-45 text-sm">TRACKLIST KEMAMPUAN</p>
          <div class=" justify-between items-center w-xl ">
          <ul class="mx-3">
            <li class="group flex items-center gap-2 py-[18px]
               border-b border-white/5
               relative transition-all duration-300
               hover:pl-2 justify-between cursor-default" v-for = "skill in skills" :key = "skill.num">
               <div class="flex items-center justify-center">
                <span class="w-6 shrink-0 font-playfair text-[11px]
                  text-brand-muted transition-colors duration-300
                  group-hover:text-brand-gold">{{skill.num}}</span>
              <div class="text-brand-muted transition-colors duration-300
                  group-hover:text-brand-gold ">
                <p>{{skill.title}}</p>
                <p>{{skill.sub}}</p>
              </div>

               </div>
              
              <div class="group-hover:translate-x-[-4px] mx-3 transition-transform duration-200">
                <span class="text-[10px] tracking-[2px]
                  uppercase text-brand-gold opacity-60">{{skill.level}}</span>
              <div class="w-20 h-0.5 bg-white/10 rounded overflow-hidden">
                <div class="h-full 
                    rounded
                    bg-gradient-to-r
                    from-brand-muted
                    to-brand-gold" :style="{width : `${skill.progress}`}"></div>
              </div>
              </div>
              
            </li>
          </ul>
          </div>
        </div>
      </div>
    </section>

<section id="work" class="max-w-6xl mx-auto px-4 py-16 bg-[var(--color-brand-dark)] text-[var(--color-brand-cream)]">
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
</section >

  <section id="contac" class="relative flex flex-col items-center justify-center bg-brand-mid px-4 py-32 text-center">
  <p class="mb-4 text-xs font-semibold tracking-[4px] text-brand-muted uppercase">
    03 — Contact
  </p>
  
  <h2 id="text-utama" class="max-w-4xl font-bold text-6xl md:text-8xl tracking-tighter leading-none mb-6">
    Mari kita <br /> 
    <em class="text-brand-gold not-italic">berkolaborasi.</em>
  </h2>
  
  <p class="max-w-md text-sm md:text-base text-brand-muted opacity-80 mb-12">
    Punya proyek menarik, ide gila, atau cuma mau ngobrol santai soal musik? Pintu selalu terbuka.
  </p>

  <div class="flex flex-col items-center gap-6">
    <a 
      href="mailto:xyznayo@gmail.com" 
      class="group relative text-3xl md:text-5xl font-medium tracking-tight text-brand-cream transition-colors duration-300 hover:text-brand-gold"
    >
      xyznayo@gmail.com
      <span class="absolute left-0 bottom-0 h-[2px] w-full bg-brand-gold scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
    </a>

    <a 
      href="https://wa.me/62xxxxxxxxxxx" 
      target="_blank"
      rel="noopener noreferrer"
      class="mt-4 flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-dark/40 px-6 py-2.5 text-sm uppercase tracking-widest text-brand-gold transition-all duration-300 hover:bg-brand-gold hover:text-brand-dark hover:scale-105"
    >
      <span>Ping me on WhatsApp</span>
      <svg class="h-4 w-4 fill-current" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.66.986 3.288 1.487 4.904 1.488 5.424 0 9.835-4.417 9.838-9.842.002-2.628-1.01-5.1-2.851-6.944C16.638 2.012 14.174.993 11.543.993c-5.429 0-9.84 4.417-9.843 9.844-.002 2.03.53 4.015 1.543 5.751L2.23 21.93l5.417-1.422z"/>
      </svg>
    </a>
  </div>
</section>

<footerku/> 
</div>
</template>