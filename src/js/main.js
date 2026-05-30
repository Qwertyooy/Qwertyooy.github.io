 
 let currentAudio = new Audio();
 let activehero = null;
    function playAudio(song,hero) {
      
      if(currentAudio.src.includes(song)){
        currentAudio.currentTime=0;
        currentAudio.play()

        return;
      };
      // hentikan lagu sebelumnya
      currentAudio.pause();

      // reset waktu lagu
      currentAudio.currentTime = 0;

      // ganti source
      currentAudio.src = song;

      currentAudio.loop= true;

      // play lagu baru
      currentAudio.play();
      activehero = hero;
      return;
    }

    function stopAudio(){
      currentAudio.pause();  
      currentAudio.currentTime=0;
    }


const cards = document.querySelectorAll('.image-cards');

cards.forEach(card => {
  
  card.addEventListener('click', () => {
    
    if (card.classList.contains('is-locked')) return;


    cards.forEach(c => c.classList.remove('is-locked'));
    card.classList.add('is-locked');

   
  });
});