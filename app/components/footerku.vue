<template>
  <footer class="bg-brand-dark text-brand-muted border-t border-white/5 pt-12 pb-8">
    <div class="max-w-6xl mx-auto px-6">
      
      <div class="flex flex-col md:flex-row justify-between items-center gap-6 pb-8 border-b border-white/[0.05]">
        
        <div class="flex items-center gap-2 text-xs uppercase tracking-wider text-brand-cream">
          <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
          <span>Available for Collaboration</span>
        </div>

        <div class="flex items-center gap-6 text-xs uppercase tracking-widest font-medium">
          <a 
            href="https://instagram.com/username_kamu" 
            target="_blank" 
            rel="noopener noreferrer"
            class="transition-colors duration-200 hover:text-brand-gold"
          >
            Instagram
          </a>
          <a 
            href="https://github.com/username_kamu" 
            target="_blank" 
            rel="noopener noreferrer"
            class="transition-colors duration-200 hover:text-brand-gold"
          >
            Github
          </a>
          <a 
            href="https://linkedin.com/in/username_kamu" 
            target="_blank" 
            rel="noopener noreferrer"
            class="transition-colors duration-200 hover:text-brand-gold"
          >
            LinkedIn
          </a>
        </div>

      </div>

      <div class="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-[11px] opacity-60">
        <p>&copy; 2026 Endra Nayottama. All rights reserved.</p>
        <div class="flex gap-4">
          <p>Trenggalek, Indonesia</p>
          <span>·</span>
          <p>Built with Nuxt 3</p>
        </div>
      </div>

    </div>
  </footer>
</template>