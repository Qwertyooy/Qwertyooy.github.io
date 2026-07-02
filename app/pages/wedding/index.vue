<script setup lang="ts">
import { ref } from 'vue'

useHead({
  bodyAttrs: {
    class: 'wedding-site'
  }
})


const MusikMu = ref([
    {id:1, name:'hindia', song:'cincin', img:'/img/1.avif', songfile:'/music/hind.mp3'},
    {id:2, name:'bernadya', song:'kita buat', img:'/img/2.avif', songfile:'/music/ber.mp3'},
    {id:3, name:'reality club', song:'lupaw', img:'/img/3.avif', songfile:'/music/reality.mp3'}
])

const isContentVisible = ref(false)

// Track state for the audio player
const currentAudio = ref(null)
const currentPlayingId = ref(null)

const playmusic = (songfile, id) => {
  if (currentPlayingId.value === id) {
    currentAudio.value.pause()
    currentPlayingId.value = null
    return
  }

  if (currentAudio.value) {
    currentAudio.value.pause()
  }

  currentAudio.value = new Audio(songfile)
  currentAudio.value.play()
  currentPlayingId.value = id

  currentAudio.value.onended = () => {
    currentPlayingId.value = null
  }
}

const toggleContent = () => {
  isContentVisible.value = !isContentVisible.value
}


</script>

<template>
  <navwed />
  
  <UMain class="min-h-screen relative items-center flex justify-center">
    <!-- MODAL POPUP CONTACT -->
    <div v-show="isContentVisible" class="z-50 fixed inset-0 flex items-center justify-center bg-slate-950/40 backdrop-blur-sm">
      <div class="relative bg-white border border-slate-100 p-8 rounded-2xl shadow-2xl w-80 text-center">
        <a
          class="absolute text-xl text-slate-400 hover:text-slate-600 font-bold right-4 top-4 cursor-pointer"
          @click.prevent="toggleContent"    
          >✕</a
        >
        <h1 class="text-slate-900 font-bold text-xl mb-4">Hubungi melalui :</h1>
        <ul class="space-y-3">
          <li>
            <a class="block font-bold text-base text-amber-600 hover:underline" href="/">KanvasDigital.my.id</a>
          </li>
          <li>
            <a class="block font-bold text-base text-emerald-600 hover:underline" href="../index.html">WhatsApp</a>
          </li>
        </ul>
      </div>
    </div>

   
    <div class="absolute inset-0 -z-10 h-full w-full">
      <img src="/img/backgwed.avif" alt="Sky Background" class="h-full w-full object-cover object-center">
    </div>

    
    <div class="z-10 justify-center h-full w-full flex items-center">
      <div class="relative gap-16 flex items-center bg-white/20 backdrop-blur-xl border border-white/40 rounded-3xl h-[460px] mx-32 p-12 shadow-2xl shadow-sky-950/20 pointer-events-auto">
        
        
        <div class="w-1/2 flex flex-col items-start">
          <h1 class="text-5xl font-black tracking-wide leading-tight text-sky-950 mb-2 drop-shadow-sm">
            KANVAS DIGITAL / <br />
            <span class="bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent font-black">WEDDING</span>
          </h1>
          <p class="mb-8 text-slate-700 font-medium leading-relaxed text-sm">
            BUAT MOMEN MOMEN PERNIKAHAN MU MENJADI BERMAKNA DAN BERALUR DENGAN
            KAMI SPESIALIS PEMBUATAN WEBSITE. BUKAN WEBSITE BIASA YANG SEKEDAR
            INDAH DI LIHAT
          </p>
          <a 
            href="#" 
            @click.prevent="toggleContent" 
            class="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white font-bold text-sm tracking-widest px-12 py-4 rounded-xl shadow-lg shadow-amber-600/30 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 uppercase"
          >
            RSVP
          </a>
        </div>

        
        <div class="w-1/2 bg-white/40 border border-white/60 p-6 rounded-2xl backdrop-blur-md shadow-sm h-full flex flex-col justify-center">
          <h2 class="text-base font-bold tracking-wider text-sky-950 mb-4">
            🎵 PILIH <span class="text-amber-600 font-extrabold">MUSIKMU</span>
          </h2>
          
          <div class="flex flex-col gap-3 max-h-[280px] overflow-y-auto pr-1 scrollbar-none">
            <button
              v-for="musik in MusikMu" 
              :key="musik.id"
              @click="playmusic(musik.songfile, musik.id)"
              class="w-full border p-3 rounded-xl cursor-pointer transition-all duration-300 flex items-center gap-4 text-left group"
              :class="currentPlayingId === musik.id 
                ? 'bg-amber-500/10 border-amber-500/40 shadow-sm' 
                : 'bg-white/60 border-white/40 hover:bg-white/90 hover:border-white'"
            >
              
              <div class="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 shadow-sm bg-slate-100">
                <img
                  :src="musik.img"
                  alt=""
                  class="w-full h-full object-cover transition-opacity duration-300"
                  :class="currentPlayingId === musik.id ? 'opacity-100' : 'opacity-80 group-hover:opacity-100'"
                />
                
                <div
                  class="absolute inset-0 bg-amber-600/30 flex items-center justify-center transition-opacity duration-300"
                  :class="currentPlayingId === musik.id ? 'opacity-100' : 'opacity-0'"
                >
                  <span class="text-white text-[9px] font-black tracking-wider bg-amber-600 px-1.5 py-0.5 rounded animate-pulse">PLAY</span>
                </div>
              </div>
              
              
              <div class="flex-1 min-w-0">
                <h3 class="font-bold text-sm text-sky-950 truncate capitalize">{{ musik.name }}</h3>
                <p class="text-xs text-slate-600 truncate mt-0.5 capitalize">{{ musik.song }}</p>
              </div>
            </button>
          </div>
        </div>

      </div>
    </div>
    
    
    <div class="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#EAEFF9] pointer-events-none"></div>
  </UMain>
<paket/>

<!-- CONTAINER UTAMA SETELAH DAFTAR PAKET -->
<!-- Efek gradasi dari abu-abu terang ke warna biru malam pekat (#0F172A ke #0B0F19) -->
<div class="-full bg-gradient-to-b from-slate-50 via-slate-700 via-[#1a2333] to-[#111827] transition-all duration-1000 relative overflow-hidden">
  <!-- ELEMEN DEKORASI LANGIT MALAM (Awan & Bintang Background) -->
  <div class="absolute inset-0 pointer-events-none opacity-40">
    <!-- Pendaran bintang samar di background menggunakan text hiasan -->
    <div class="absolute top-20 left-10 text-white text-xs opacity-50 animate-pulse">✦</div>
    <div class="absolute top-40 right-20 text-amber-200 text-sm opacity-30 animate-pulse" style="animation-delay: 1s">✦</div>
    <div class="absolute bottom-1/2 left-1/4 text-white text-lg opacity-20 animate-pulse" style="animation-delay: 2s">✦</div>
    <div class="absolute bottom-1/3 right-1/3 text-amber-100 text-xs opacity-40 animate-pulse" style="animation-delay: 1.5s">✦</div>
  </div>

  <!-- ================= SECTION: ABOUT (Transisi teks dari Gelap ke Terang) ================= -->
  <div class="max-w-4xl mx-auto px-4 py-20 text-center relative z-10">
    <!-- Tag diubah menjadi warna kontras karena background mulai menggelap -->
    <span class="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-500/20">Who We Are</span>
    
    <!-- Judul H2 menggunakan text-white agar menyala di langit malam -->
    <h2 class="text-3xl font-bold text-white mt-4 mb-6">Dibalik Layanan Web Berkualitas</h2>
    
    <p class="text-slate-300 max-w-2xl mx-auto mb-14 leading-relaxed text-sm md:text-base">
      Kami adalah tim pengembang web dan desainer digital yang berfokus pada penciptaan platform modern, cepat, dan berdampak tinggi bagi bisnis Anda. Kami percaya bahwa website bukan sekadar kode, melainkan kanvas digital yang merepresentasikan kredibilitas bisnis Anda di dunia maya.
    </p>

    <!-- Card Alur Kerja (Dibuat semi-transparan transparan agar menyatu dengan langit malam) -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
      <div class="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-amber-400/40 transition-all duration-300">
        <div class="text-lg font-bold text-amber-400 mb-2">01. Konsultasi</div>
        <p class="text-slate-400 text-sm leading-relaxed">Mendiskusikan kebutuhan bisnis Anda dan merancang konsep desain yang paling sesuai.</p>
      </div>
      <div class="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cyan-400/40 transition-all duration-300">
        <div class="text-lg font-bold text-cyan-400 mb-2">02. Pengerjaan</div>
        <p class="text-slate-400 text-sm leading-relaxed">Proses coding dan desain menggunakan standar teknologi terbaru yang responsif dan cepat.</p>
      </div>
      <div class="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-400/40 transition-all duration-300">
        <div class="text-lg font-bold text-purple-400 mb-2">03. Serah Terima</div>
        <p class="text-slate-400 text-sm leading-relaxed">Website Anda resmi online, dioptimasi SEO, dan siap mendatangkan pelanggan baru.</p>
      </div>
    </div>
  </div>
<div class="z-10  h-full absolute w-full items-center justify-center">
      <img src="/img/malam.avif" class="w-full h-full object-cover">
    </div>  
  <!-- ================= SECTION: CONTACT (Berada di bagian terdalam langit malam) ================= -->
  <div class="max-w-4xl mx-auto px-4 pb-24 pt-4 relative z-10">
    
    <div class="bg-[#111827]/80 backdrop-blur-md text-white rounded-3xl p-8 md:p-12 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row gap-8 items-center">
      
      <!-- Sisi Kiri: Ajakan Bertindak -->
      <div class="w-full md:w-1/2 text-left">
        <h3 class="text-2xl font-bold mb-3 text-amber-300">Siap Memulai Proyek Anda?</h3>
        <p class="text-slate-300 text-sm leading-relaxed mb-6">
          Pilih paket yang sesuai atau konsultasikan kebutuhan custom Anda secara gratis. Isi formulir di samping, dan tim kami akan segera menghubungi Anda dalam waktu 24 jam.
        </p>
        <div class="space-y-3 text-sm text-slate-400">
          <p class="flex items-center gap-2">🟢 <span class="font-semibold text-white">Respons Cepat:</span> Pukul 08.00 - 21.00 WIB</p>
          <p class="flex items-center gap-2">💬 <span class="font-semibold text-white">WhatsApp:</span> +62 8xx-xxxx-xxxx</p>
        </div>
      </div>

      <!-- Sisi Kanan: Formulir Input -->
      <div class="w-full md:w-1/2 bg-white/5 p-6 rounded-2xl border border-white/5">
        <form class="space-y-4 text-left">
          <div>
            <label class="block text-xs font-semibold text-slate-400 uppercase mb-1">Nama Lengkap</label>
            <input type="text" placeholder="Masukkan nama Anda" class="w-full px-4 py-2.5 bg-slate-900/60 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm transition-all">
          </div>
          
          <div>
            <label class="block text-xs font-semibold text-slate-400 uppercase mb-1">Pilihan Paket</label>
            <select class="w-full px-4 py-2.5 bg-[#111827] border border-white/10 rounded-lg text-white focus:outline-none focus:border-amber-400 text-sm transition-all">
              <option class="bg-[#111827]">Pilih Layanan...</option>
              <option class="bg-[#111827]">Essential Plan</option>
              <option class="bg-[#111827]">Premium Plan</option>
              <option class="bg-[#111827]">Custom Request</option>
            </select>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-400 uppercase mb-1">Catatan Tambahan</label>
            <textarea rows="3" placeholder="Ceritakan singkat tentang bisnis atau web yang Anda inginkan..." class="w-full px-4 py-2.5 bg-slate-900/60 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm transition-all resize-none"></textarea>
          </div>

          <button type="submit" class="w-full py-3 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-sm rounded-lg shadow-lg shadow-amber-500/10 transition-all transform active:scale-95">
            Kirim Penawaran Sekarang
          </button>
        </form>
      </div>

    </div>
  </div>

</div>
</template>

<style scoped>
.scrollbar-none::-webkit-scrollbar {
  display: none;
}
.scrollbar-none {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>