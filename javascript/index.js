(function(){
  const topBar = document.getElementById("top-strip-container");
  const bannerSection = document.getElementById("banner-section");
  let isMenuOpen = false;

  // sticky-header
  document.onscroll = function() {
    const { y } = bannerSection.getBoundingClientRect();
    console.log("dssd")
    if(y < 0) {
      topBar.classList.remove("transparent");
    } else {
      !isMenuOpen && topBar.classList.add("transparent");
    }
  }
})();