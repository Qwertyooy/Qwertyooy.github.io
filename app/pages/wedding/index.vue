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

  <section class="bg-[#EAEFF9] py-32 px-8">
    <div class="max-w-5xl mx-auto text-center">
      <h2 class="text-3xl font-bold text-[#16213E] mb-4">Tamplate Web Services</h2>
      <div class="w-full min-h-60 rounded-3xl bg-amber-200 ">
        <div class="w-full sm:w-1/3 h-48 sm:h-full min-h-[14rem] bg-slate-300 relative">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500" alt="Web Development" class="w-full h-full object-cover">
          <div>

          </div>
        
        </div>
      
      </div>
    </div>
  </section>
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