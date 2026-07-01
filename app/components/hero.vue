<script setup>
import { ref } from 'vue'

const artists = ref([
  { id: 1, name: 'Baskara Putra', img: '/img/2hover.avif', audio: '/img/hindia.mp3',song: 'rumah kerumah' },
  { id: 2, name: 'Bernadya', img: '/img/3hover.avif', audio: '/img/bernadya.mp3', song:'kita buat menyenangkan' },
])

const currentAudio = ref(null)
const currentPlaying = ref('')

const playAudio = (audioUrl, songName) => {
  
  if (currentPlaying.value === songName) {
    currentAudio.value?.pause()
    currentPlaying.value = ''
    return
  }

  
  currentAudio.value?.pause()

  currentAudio.value = new Audio(audioUrl)
  currentAudio.value.play()
  currentPlaying.value = songName
}

const scrollToSection = (elementId) => {
  document.getElementById(elementId)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}
</script>

<template>
  <UMain id="hero" class="min-h-screen flex justify-center items-center">
    <section class="w-full max-w-4xl px-4 flex items-center justify-center">
      <div class="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">

        <template v-for="(artist, index) in artists" :key="artist.id">
         
          <div class="w-[220px] relative">
            <button
              type="button"
              class="card w-[220px] aspect-square relative overflow-hidden rounded group border-brand-muted"
              :class="{ 'active-card': currentPlaying === artist.name }"
              :aria-pressed="currentPlaying === artist.name"
              :aria-label="`Play ${artist.name}`"
              @click="playAudio(artist.audio, artist.name)"
            >
              <img
                :src="artist.img"
                :alt="artist.name"
                :class="[
                  'w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100',
                  currentPlaying === artist.name
                    ? 'scale-105 grayscale-0 brightness-100 ring-4 ring-brand-gold'
                    : 'grayscale brightness-[0.85]',
                ]"
              />

              <div
                class="absolute inset-0 flex flex-col justify-end p-4 opacity-0
                       transition-opacity duration-300 group-hover:opacity-100
                       bg-gradient-to-t from-[rgba(17,16,8,0.8)] to-transparent"
              >
                <div class="font-playfair text-[15px] text-amber-50">
                  {{artist.name}}
                </div>
                <div class="text-[10px] text-amber-600 tracking-[2px] uppercase mt-0.5">
                  {{artist.song}}
                </div>
              </div>

              <div
                class="absolute top-3 right-3 w-8 h-8 rounded-full
                       border border-[rgba(200,169,110,0.6)]
                       flex items-center justify-center
                       opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                <!-- Swaps between play / pause depending on state, and pulses while active -->
                <svg
                  v-if="currentPlaying !== artist.name"
                  class="w-[10px] ml-[2px] fill-amber-600"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                <svg
                  v-else
                  class="w-[10px] fill-amber-600 pulse-icon"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
                </svg>
              </div>
            </button>
          </div>

          <!-- Hero copy sits between the two cards -->
          <div v-if="index === 0" class="justify-center flex flex-col items-center">
            <p class="text-lg uppercase tracking-wide text-brand-gold opacity-80">
              Creative &amp; Multimedia
            </p>
            <h1
              id="text-utama"
              class="justify-center px-32 relative text-9xl tracking-tighter text-center font-bold"
            >
              Porto<br /><em class="text-brand-gold">folio</em>
            </h1>
            <div
              class="flex text-brand-muted uppercase text-lg mt-2.5 gap-14 tracking-tighter opacity-80 justify-center text-center"
            >
              <p>Visual</p>
              <p class="dot">·</p>
              <p>Motion</p>
              <p class="dot">·</p>
              <p>Story</p>
            </div>
            <p class="max-w-[320px] text-brand-muted font-bold mt-5 text-sm text-center justify-center">
              Seperti lirik yang menghantui — karya yang aku buat dirancang untuk terasa, bukan sekadar dilihat.
            </p>
            <a
              href="#"
              class="relative mt-8 py-2 px-10 border-2 border-brand-gold text-brand-cream transition-all text-lg uppercase duration-400 overflow-hidden z-10
                     before:absolute before:inset-0 before:bg-brand-gold before:-translate-x-[101%] before:transition-transform before:duration-400 before:ease-out before:-z-10
                     hover:text-brand-dark hover:border-brand-gold hover:before:translate-x-0"
              @click.prevent="scrollToSection('work')"
            >
              Lihat Karya
            </a>
          </div>
        </template>

      </div>
    </section>
  </UMain>
</template>

<style scoped>
/* Subtle lift + glow on the currently playing card, purely cosmetic */
.card {
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.active-card {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px -10px rgba(200, 169, 110, 0.45);
}

.pulse-icon {
  animation: pulse-icon 1.4s ease-in-out infinite;
}

@keyframes pulse-icon {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
}
</style>