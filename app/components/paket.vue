<script setup lang="ts">
import { ref } from 'vue'

const PaketLayanan = [
{
    id: 'premium',
    badge: 'Paling Populer',
    title: 'Premium Template',
    icon: '✨',
    desc: 'Akses ke koleksi template eksklusif dengan animasi modern, transisi sinematik, dan tata letak mewah yang memanjakan mata tamu undangan.',
    features: [
      'Pilihan Tema Eksklusif & Modern',
      'Integrasi Musik Pengiring (Maks. 3 Lagu)',
      'Galeri Foto & Video Unlimited',
      'Countdown Timer & Navigasi Peta'
    ],
    isPremium: false,
    actionText: 'Pilih Premium',
    class: 'bg-white/80 backdrop-blur-md border border-white/95 shadow-xl shadow-sky-950/5 hover:shadow-2xl hover:-translate-y-1.5 h-[460px]',
    route:'/',
    iconBg: 'bg-gradient-to-br from-amber-500 to-amber-600 text-white flex items-center justify-center rounded-2xl shadow-sm'
  },
  {
    id: 'signature',
    badge: 'Eksklusif & Ultimate',
    title: 'Signature Custom',
    icon: '👑',
    desc: 'Website dibangun khusus dari nol (from scratch) lewat baris kode murni. Kebebasan total mewujudkan konsep impian tanpa batasan template.',
    features: [
      '100% Desain Unik (Bespoke Hand-Coded)',
      'Sistem Manajemen Tamu & RSVP Pintar',
      'Optimasi Performa Super Cepat & Ringan',
      'Fitur Spesial Kustom Sesuai Request'
    ],
    isPremium: true,
    actionText: 'Konsultasi Privat',
    class: 'bg-gradient-to-br f     rom-sky-950 to-slate-900 shadow-2xl shadow-sky-950/30 min-h-[500px] border border-sky-800/80 text-white hover:shadow-sky-950/40 hover:-translate-y-2 md:scale-105',
    route:'/',
    iconBg: 'bg-gradient-to-br from-amber-500 to-yellow-400 text-sky-950 flex items-center justify-center rounded-2xl shadow-md',
    hoverImg : ''
  },
  {
    id: 'essential',
    badge: 'Simpel & Rapi',
    title: 'Essential Design',
    icon: '📐',
    desc: 'Solusi praktis bagi pasangan yang menginginkan undangan digital dengan tampilan bersih, elegan, fungsional, dan selesai dalam waktu singkat.',
    features: [
      'Desain Minimalis & Clean',
      'Informasi Inti Pernikahan Lengkap',
      'Fitur Buku Tamu Digital Dasar',
      'Format Standar Siap Pakai'
    ],
    isPremium: false,
    actionText: 'Pilih Essential',
    class: 'bg-white/60 backdrop-blur-sm border border-white/50 shadow-lg shadow-sky-950/5 hover:shadow-xl hover:-translate-y-1 h-[460px] opacity-90 hover:opacity-100',
    route:'/',
    iconBg: 'bg-slate-200 text-slate-700 flex items-center justify-center rounded-2xl'
  }
]



</script>

<template>
    <section class="bg-[#EAEFF9] py-32 px-8 sm:px-12 relative overflow-hidden">
    <div class="absolute top-1/4 left-1/10 w-96 h-96 bg-amber-200/20 blur-3xl rounded-full pointer-events-none"></div>
    <div class="absolute bottom-1/4 right-1/10 w-96 h-96 bg-sky-200/30 blur-3xl rounded-full pointer-events-none"></div>

    <div class="max-w-6xl mx-auto relative z-10">
      <div class="text-center mb-20">
        <span class="text-xs font-extrabold tracking-widest text-amber-600 uppercase bg-amber-500/10 px-4 py-1.5 rounded-full">
          Our Premium Services
        </span>
        <h2 class="text-4xl sm:text-5xl font-black text-sky-950 mt-4 mb-4 tracking-tight">
          Layanan Website <span class="bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">Eksklusif</span>
        </h2>
        <p class="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Kami tidak hanya membuat website yang indah, melainkan merancang sebuah mahakarya digital yang interaktif, cepat, dan memberikan impresi tak terlupakan bagi tamu undangan Anda.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <NuxtLink
        v-for = "paket in PaketLayanan"
        :key = "paket.id"
        :to="paket.route"
        :class = "paket.class"
        class="p-8 rounded-2xl transition-all duration-200 flex flex-col justify-between group cursor-pointer"
        >

        <div>
            <div 
            :class = "paket.iconBg"
            class="w-12 h-12 flex items-center justify-center rounded-2xl shadow-md mb-6 transform group-hover:scale-110 transition-transform duration-300 text-xl">
            {{paket.icon}}
            </div>
            <span
            :class = "[paket.isPremium ? paket.badgeClass : 'text-xs font-bold tracking-wider uppercase' + paket.badgeClass]"
            class="text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded-md"
            >{{paket.badge}}</span>
            <h3 :class="paket.textClass" class="text-2xl font-black mt-2 mb-3 tracking-wide">
              {{ paket.title }}
            </h3>
            
            <p :class="paket.descClass" class="text-sm leading-relaxed mb-6">
              {{ paket.desc }}
            </p>

            <ul class="text-xs space-y-2.5 font-medium" :class="paket.isPremium ? 'bg-white/5 p-4 rounded-xl border border-white/10' : ''">
              <li 
                v-for="(feature, idx) in paket.features" 
                :key="idx"
                class="flex items-center gap-2"
                :class="paket.isPremium ? 'text-slate-200' : 'text-slate-700'"
              >
                <span v-if="paket.isPremium" class="font-mono text-amber-400">⚡</span>
                <span v-else class="text-amber-600">✓</span>
                {{ feature }}
              </li>
            </ul>   
        </div>
            <div 
            class="pt-4 border-t flex items-center justify-between text-xs font-bold tracking-wider uppercase mt-6"
            :class="paket.isPremium ? 'border-white/10 text-amber-400' : 'border-slate-100 text-amber-600'"
          >
            <span>{{ paket.actionText }}</span>
            <span class="transform group-hover:translate-x-1.5 transition-transform">→</span>
          </div>

        </NuxtLink>        
        </div>
    </div>
  </section>
</template>