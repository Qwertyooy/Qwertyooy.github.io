
let currentAudio = null;
let currentCard = null;

function playmusic(audioUrl, cardElement) {
    const audioPlayer = document.getElementById('wedding-audio');
    const allIndicators = document.querySelectorAll('.play-indicator');
    const allCards = document.querySelectorAll('.music-card');

    
    if (currentCard === cardElement && !audioPlayer.paused) {
        audioPlayer.pause();
        cardElement.querySelector('.play-indicator').classList.add('opacity-0');
        cardElement.querySelector('.play-indicator').classList.remove('opacity-100');
        return;
    }

    
    allIndicators.forEach(indicator => {
        indicator.classList.add('opacity-0');
        indicator.classList.remove('opacity-100');
    });
    allCards.forEach(card => {
        card.classList.remove('border-amber-500', 'bg-white/70');
    });

    
    audioPlayer.src = audioUrl;
    audioPlayer.play()
        .then(() => {
            
            const indicator = cardElement.querySelector('.play-indicator');
            indicator.classList.remove('opacity-0');
            indicator.classList.add('opacity-100');
            
            
            cardElement.classList.add('border-amber-500', 'bg-white/70');
            
          
            currentCard = cardElement;
        })
        .catch(error => {
            console.error("Gagal memutar audio. Pastikan path file benar atau user sudah berinteraksi dengan halaman.", error);
        });
}

document.addEventListener("DOMContentLoaded", () => {
    const rsvp = document.getElementById('btn-rsvp');
    const modal = document.getElementById('rsvp-modal');

    if (rsvp && modal) {
        rsvp.addEventListener('click', (e) => {
            e.preventDefault();

            modal.classList.remove('hidden')
        })
    }
})

function closeevent(){
    const modal = document.getElementById('rsvp-modal');
    if (modal){
        modal.classList.add('hidden')
    }
}