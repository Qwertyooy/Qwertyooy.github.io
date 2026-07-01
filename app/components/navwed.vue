<script setup>
const NavLink = [
  { text: 'Home', href: 'hero' },
  { text: 'About', href: 'about' },
  { text: 'Work', href: 'work' },
  { text: 'Contact', href: 'contac' },
]

const scrollsection = (elementId) => {
  const element = document.getElementById(elementId)
  if(element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full px-12 py-2 bg-white/10 backdrop-blur-md border-b border-white/20 transition-all duration-300">
    
    <div class="text-xl font-black tracking-tight text-sky-950">
      Wedding<span class="text-amber-600">Ku.</span>
    </div>

   
    <ul class="flex gap-10 text-sm font-semibold text-sky-950/80">
      <li 
        v-for="link in NavLink" 
        :key="link.text" 
        class="hover:text-amber-600 transition-colors duration-300"
      >
        <a @click.prevent="scrollsection(link.href)" href="#" class="cursor-pointer">
          {{ link.text }}
        </a>
      </li>
    </ul>

   
    <a 
      @click.prevent="scrollsection('contac')" 
      href="#" 
      class="bg-gradient-to-r from-amber-600 to-amber-500 text-white font-bold text-sm px-6 py-2.5 rounded-full shadow-md shadow-amber-600/20 hover:shadow-lg hover:shadow-amber-600/30 hover:scale-105 active:scale-95 transition-all duration-300 tracking-wide"
    >
      Lets Start
    </a>
  </nav>
</template>