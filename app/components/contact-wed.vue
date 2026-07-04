<script setup>

const form = reactive({
    name:"",
    service:"",
    cataran:""
})

const sentwa = () => {
    const nomor = '6282256690579'
    const text = `Halo Kak 
    
    Nama : ${form.name}
    service : ${form.service}
    kebutuhan : ${form.service}`

    window.open(
    `https://wa.me/${nomor}?text=${encodeURIComponent(text)}`,
    "_blank")
    
}
</script>

<template>
      <section class="py-10 ">
        <form
  @submit.prevent="sentwa"
  class="w-full max-w-xl mx-auto bg-amber-500 rounded-3xl p-8 shadow-xl space-y-6"
>
  <!-- Heading -->
  <div>
    <p class="text-sm font-semibold tracking-[0.2em] text-amber-600 uppercase">
      Contact
    </p>

    <h2 class="text-3xl font-bold text-sky-950 mt-2">
      Let's Build Your Wedding Website
    </h2>

    <p class="text-slate-600 mt-2 text-sm leading-relaxed">
      Isi formulir singkat di bawah ini, lalu kami akan membuka WhatsApp dengan
      pesan yang sudah terisi otomatis.
    </p>
  </div>

  <!-- Nama -->
  <div>
    <label class="block text-sm font-semibold text-sky-950 mb-2">
      Nama
    </label>

    <input
      v-model="form.name"
      type="text"
      placeholder="Masukkan nama Anda"
      class="w-full rounded-2xl border border-white/70 bg-white/70 px-5 py-4 outline-none transition-all duration-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-200"
    />
  </div>

  <!-- Jenis Bisnis -->
  <div>
    <label class="block text-sm font-semibold text-sky-950 mb-2">
      Jenis Bisnis Wedding
    </label>

    <select 
      v-model="form.service"
      class="w-full rounded-2xl border border-white/70 bg-white/70 px-5 py-4 outline-none transition-all duration-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-200"
    >
      <option value="">Pilih jenis bisnis</option>
      <option>Wedding Organizer</option>
      <option>Photographer</option>
      <option>Videographer</option>
      <option>Make Up Artist</option>
      <option>Decoration</option>
      <option>Wedding Invitation</option>
      <option>Wedding Venue</option>
    </select>
  </div>

  <!-- Pesan -->
  <div>
    <label class="block text-sm font-semibold text-sky-950 mb-2">
      Ceritakan Kebutuhan Anda
    </label>

    <textarea
      v-model="form.catatan"
      rows="5"
      placeholder="Contoh: Saya ingin website yang memiliki galeri, paket harga, RSVP, dan SEO..."
      class="w-full resize-none rounded-2xl border border-white/70 bg-white/70 px-5 py-4 outline-none transition-all duration-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-200"
    ></textarea>
  </div>

  <!-- Button -->
  <button
    type="submit"
    class="w-full rounded-2xl bg-gradient-to-r from-amber-600 to-yellow-500 py-4 font-bold tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/30"
  >
    Konsultasi via WhatsApp
  </button>
</form>
    </section>
</template>