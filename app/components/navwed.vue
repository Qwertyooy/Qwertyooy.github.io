  <script setup   >

  const NavLink = [
    {text : 'Home',href : 'hero'},
    {text : 'About',href : 'about'},
    {text : 'Work',href : 'work'},
    {text : 'Contact',href : 'contac'},
  ]

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
        <nav class="fixed top-0 items-center left-0 right-0 z-50  flex justify-between w-full p-2 pt-3 backdrop-blur-2xl"">
      <div class="text-xl font-bold">WeddingKu.</div>

        <ul class="flex gap-10 text-sm font-medium">
          <li v-for = "link in NavLink" :key=link.text class="hover:opacity-50 transition-opacity duration-300" >
            <a @click.prevent="scrollsection(link.href)" href="#" class="cursor-pointer">
            {{ link.text }}
          </a>
          </li>
        </ul>
      <a @click.prevent="scrollsection('contac')" href="#" class="uppercase text-brand-gold font-light py-0.5 px-5 border border-brand-gold  hover:bg-brand-gold hover:text-brand-warm transition-colors duration-300">Lets Start</a>
        </nav>

  </template>