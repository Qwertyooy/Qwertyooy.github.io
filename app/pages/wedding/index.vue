<script setup>
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
  // If the same song is clicked while playing, pause it
  if (currentPlayingId.value === id) {
    currentAudio.value.pause()
    currentPlayingId.value = null
    return
  }

  // If a different song was playing, stop it first
  if (currentAudio.value) {
    currentAudio.value.pause()
  }

  // Play the new track
  currentAudio.value = new Audio(songfile)
  currentAudio.value.play()
  currentPlayingId.value = id

  // Reset when song finishes playing naturally
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
    <div v-show ="isContentVisible" class="z-30   absolute bg-amber-400">
     <a
          class="absolute text-2xl font-bold left-72 mt-4"
          @click.prevent="toggleContent"    
          >X</a
        >
        <h1 class="mt-14 text-white font-bold text-2xl">Hubungi melalui :</h1>
        <ul class="mt-4">
          <li>
            <a
              class="font-bold text-lg mb-2 text-white underline"
              href="/"
              >KanvasDigital.my.id</a
            >
          </li>
          <li>
            <a
              class="font-bold text-lg mb-2 text-white underline"
              href="../index.html"
              >WhatsApp</a
            >
          </li>
        </ul>

  </div>
    <div class="absolute inset-0 -z-10 h-full w-full">
      <img src="/img/backgwed.avif" alt="" class="h-full w-full object-cover object-center">
    </div>

    <div class="z-10 justify-center h-full w-full flex items-center">
      <div class="relative gap-36 flex items-center bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl h-[450px] mx-32 p-10 shadow-xl pointer-events-auto">
        
        <div class="mx-6 w-1/2">
          <h1 class="text-5xl font-extrabold tracking-wide leading-tight text-slate-900 mb-1">
            KANVAS DIGITAL / <br />
            <span class="text-amber-500">WEDDING</span>
          </h1>
          <p class="mb-5 text-slate-600">
            BUAT MOMEN MOMEN PERNIKAHAN MU MENJADI BERMAKNA DAN BERALUR DENGAN
            KAMI SPESIALIS PEMBUATAN WEBSITE. BUKAN WEBSITE BIASA YANG SEKEDAR
            INDAH DI LIHAT
          </p>
          <a href="#" @click.prevent="toggleContent" class="border px-48 py-3 border-black transition-all duration-300 ease-in-out rounded-2xl bg-amber-500 shadow-md hover:shadow-lg hover:bg-amber-600 hover:text-white underline hover:no-underline">
            RSVP
          </a>
        </div>

        <div class="w-1/2 bg-blue-200 flex-col justify-center border border-white/20 p-6 rounded-xl backdrop-blur-sm shadow-sm">
          <h2 class="text-xl font-bold text-slate-900 mb-3 ml-2">
            PILIH <span class="text-amber-600">MUSIKMU</span>
          </h2>
          
          <div class="flex gap-4 overflow-x-auto overflow-hidden pb-4 scrollbar-none snap-x snap-mandatory">
            <button
              v-for="musik in MusikMu" 
              :key="musik.id"
              @click="playmusic(musik.songfile, musik.id)"
              class="shrink-0 w-40 bg-white/40 border border-white/40 p-3 rounded-xl cursor-pointer snap-center transition-all duration-300 hover:scale-95 hover:bg-white/60 shadow-sm"
            >
              <div class="relative w-full h-32 rounded-lg overflow-hidden mb-2">
                <img
                  :src="musik.img"
                  alt=""
                  class="w-full h-full object-cover transition-all duration-300 ease-in-out"
                  :class="currentPlayingId === musik.id ? 'opacity-100' : 'opacity-60 hover:opacity-100'"
                />
                
                <div
                  class="absolute inset-0 bg-amber-600/40 flex items-center justify-center transition-opacity duration-300"
                  :class="currentPlayingId === musik.id ? 'opacity-100' : 'opacity-0'"
                >
                  <span class="text-white text-xs font-semibold tracking-wider animate-pulse">PLAYING</span>
                </div>
              </div>
              
              <h3 class="font-bold text-sm text-slate-950 truncate text-left">{{ musik.name }}</h3>
              <p class="text-xs text-slate-700 truncate text-left">{{ musik.song }}</p>
            </button>
          </div>
        </div>

      </div>
    </div>
  </UMain>
</template> 