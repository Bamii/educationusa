(function(){
  const topBar = document.getElementById("top-strip-container");
  const bannerSection = document.getElementById("banner-section");

  /* sticky-header */
  document.onscroll = function() {
    const { y } = bannerSection.getBoundingClientRect();
    if(y < 0) {
      topBar.classList.remove("transparent");
    } else {
      topBar.classList.add("transparent");
    }
  }
})();