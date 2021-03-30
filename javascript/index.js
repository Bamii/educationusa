(function(){
  const topBar = document.getElementById("top-strip-container");
  const bannerSection = document.getElementById("banner-section");

  const updateSectionPrev = document.getElementById('updates-slider-prev')
  const updateSectionNext = document.getElementById('updates-slider-next');
  const ITEM_RIGHT_MARGIN = 20;

  /* sticky-header */
  document.onscroll = function() {
    const { y } = bannerSection.getBoundingClientRect();
    if(y < 0) {
      topBar.classList.remove("transparent");
    } else {
      topBar.classList.add("transparent");
    }
  }

  function movePortfolio(direction) {
    const updates = document.getElementById('updates-slider');
    const childrenLength = updates.children.length;
    const width = Array.from(updates.children)[0].width;
    let index = 0;

    if (
      (index === childrenLength - 1 && direction === 'right') ||
      (index === 0 && direction === 'left')
    ) {
      return;
    }
    
    direction === 'right' ? ++index : --index;
    updates.scrollLeft = index * (width + ITEM_RIGHT_MARGIN);
  }

  updateSectionNext.onclick = function() {
    movePortfolio('right');
  }

  updateSectionPrev.onclick = function() {
    movePortfolio('left');
  }
})();