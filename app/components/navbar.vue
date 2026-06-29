<script setup   >

const NavLink = [
  {text : 'Home',href : '#hero'},
  {text : 'About',href : '#about'},
  {text : 'Work',href : '#work'},
  {text : 'Contact',href : '#contac'},
]

</script>

<template>
      <nav class="fixed top-0 items-center left-0 right-0 z-50  flex justify-between w-full p-2 pt-3 backdrop-blur-2xl"">
    <div class="text-3xl font-bold">Portofolio.</div>

      <ul class="flex gap-10 text-sm font-medium">
        <li v-for = "link in NavLink" :key=link.text class="mt-1.5" >
          <a :href="link.href">{{link.text}}</a>
        </li>
        <UButton>helow</UButton>
      </ul>
      <UButton icon="i-lucide-sun" variant="subtle"></UButton>
  </nav>

</template>