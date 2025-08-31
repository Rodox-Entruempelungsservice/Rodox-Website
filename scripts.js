<script>
  (function(){
    const track = document.querySelector('.slider-track');
    const prev  = document.querySelector('.slider-btn.prev');
    const next  = document.querySelector('.slider-btn.next');

    function getStep(){
      // Schrittweite = Breite einer Card + Gap
      const card = track.querySelector('.review-card');
      if(!card) return 300;
      const style = getComputedStyle(track);
      const gap = parseFloat(style.columnGap || style.gap || 16);
      return card.getBoundingClientRect().width + gap;
    }

    prev.addEventListener('click', () => track.scrollBy({ left: -getStep(), behavior: 'smooth' }));
    next.addEventListener('click', () => track.scrollBy({ left:  getStep(), behavior: 'smooth' }));

    // Keyboard-Navigation
    track.addEventListener('keydown', (e) => {
      if(e.key === 'ArrowLeft'){ track.scrollBy({ left: -getStep(), behavior:'smooth' }); }
      if(e.key === 'ArrowRight'){ track.scrollBy({ left:  getStep(), behavior:'smooth' }); }
    });
  })();
</script>
