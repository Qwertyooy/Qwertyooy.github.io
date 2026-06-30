<script setup>
  import { ref } from 'vue'

  let currentAudio = ref(null);
  let curretPlayying = ref('');

  

  const playAudio = (audioUrl, songName) => {
    if (curretPlayying.value == songName){
      currentAudio.value.pause()
      curretPlayying.value = ''
      return
    }

    if (currentAudio.value){
      currentAudio.value.pause()
    }

    currentAudio.value =new Audio(audioUrl)
    currentAudio.value.play()
    curretPlayying.value = songName
  }


  const scrollsection = (elementId) => {
  const element = document.getElementById(elementId)
  if(element) {
    element.scrollIntoView({
      behavior :'smooth',
      block :'start'
        })
  }
}
</script>

<template>
    <UMain id="hero" class="min-h-screen flex justify-center items-center">
    <section  class="w-full max-w-4xl px-4 items-center  flex justify-center ">
      <div class="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
        
        
        <div class="w-[220px] relative">
        <div class="w-[220px] aspect-square z-50 relative overflow-hidden rounded group border-brand-muted" :class="{ 'active-card': currentPlaying === 'Baskara Putra' }" @click="playAudio('/img/hindia.mp3', 'Baskara Putra')" >
            
          
          <img src="/img/2hover.avif" alt="" 
          :class="[
              'w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100',
              curretPlayying === 'Baskara Putra' ? 'scale-105 grayscale-0 brightness-100 ring-4 ring-brand-gold' : 'grayscale brightness-[0.85]'
            ]"
             
             />

      <div class="absolute inset-0 flex flex-col justify-end p-4 opacity-0
                transition-opacity duration-300
                group-hover:opacity-100
                bg-gradient-to-t
                from-[rgba(17,16,8,0.8)]
                to-transparent">
        <div class="font-playfair text-[15px] text-amber-50">
        Artist Name
        </div>

        <div class="text-[10px] text-amber-600 tracking-[2px] uppercase mt-0.5">
        Song Title
        </div>
    </div>

    <div class="absolute top-3 right-3 w-8 h-8 rounded-full
                border border-[rgba(200,169,110,0.6)]
                flex items-center justify-center
                opacity-0 transition-opacity duration-300
                group-hover:opacity-100">

      <svg
        class="w-[10px] ml-[2px] fill-amber-600"
        viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z"/>
      </svg>

    </div>
        </div>
        
      </div>
      <div class="justify-center flex flex-col items-center">
           <p class="text-lg uppercase tracking-wide text-brand-gold opacity-80">Creative &amp; Multimedia</p>
          <h1 id="text-utama" class="justify-center px-32 relative text-9xl tracking-tighter text-center font-bold">Porto<br><em class="text-brand-gold">folio</em></h1>
          <div class="flex text-brand-muted uppercase text-lg mt-2.5 gap-14 tracking-tighter opacity-80 justify-center text-center ">
            <p>Visual</p>
            <p class="dot">·</p>
            <p>Motion</p>
            <p class="dot">·</p>
            <p>Story</p>
          </div>
          <p class="max-w-[320px] text-brand-muted font-bold mt-5 text-sm text-center justify-center ">
            Seperti lirik yang menghantui — karya yang aku buat dirancang untuk terasa, bukan sekadar dilihat.
          </p>
          <a @click.prevent="scrollsection('work')" href="#" class="relative mt-8 py-2 px-10 border-2 border-brand-gold text-brand-cream transition-all text-lg uppercase duration-400 overflow-hidden z-10 before:absolute before:inset-0 before:bg-brand-gold before:-translate-x-[101%] before:transition-transform before:duration-400 before:ease-out before:-z-10 hover:text-brand-dark hover:border-brand-gold hover:before:translate-x-0">Lihat Karya</a>
        </div>
        </div>


      <div class="w-[220px] relative">
        <div class="w-[220px] aspect-square relative overflow-hidden rounded group border-brand-muted" 
        :class="{ 'active-card': currentPlaying === 'Bernadya' }"
        @click="playAudio('/img/bernadya.mp3', 'Bernadya')"    
        >


            <img src="/img/3hover.avif" alt="" 
            
            :class="[
              'w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100',
              curretPlayying === 'Bernadya' ? 'scale-105 grayscale-0 brightness-100 ring-4 ring-brand-gold' : 'grayscale brightness-[0.85]'
            ]" 
             />

      <div class="absolute inset-0 flex flex-col justify-end p-4 opacity-0
                transition-opacity duration-300
                group-hover:opacity-100
                bg-gradient-to-t
                from-[rgba(17,16,8,0.8)]
                to-transparent">
        <div class="font-playfair text-[15px] text-amber-50">
        Artist Name
        </div>

        <div class="text-[10px] text-amber-600 tracking-[2px] uppercase mt-0.5">
        Song Title
        </div>
    </div>

    <div class="absolute top-3 right-3 w-8 h-8 rounded-full
                border border-[rgba(200,169,110,0.6)]
                flex items-center justify-center
                opacity-0 transition-opacity duration-300
                group-hover:opacity-100">

      <svg
        class="w-[10px] ml-[2px] fill-amber-600"
        viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z"/>
      </svg>

    </div>
        </div>

      </div>

    </section>
  </UMain>
  
</template>

