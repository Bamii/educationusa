(function(){
  const topBar = document.getElementById("top-strip-container");
  const bannerSection = document.getElementById("banner-section");
  
  const menuWrapper = document.getElementById("menu-wrapper");
  const mobileMenu = document.getElementById("mobile-menu-button");
  
  let isMenuOpen = false;

  /* sticky-header */
  document.onscroll = function() {
    const { y } = bannerSection.getBoundingClientRect();
    console.log("dssd")
    if(y < 0) {
      topBar.classList.remove("transparent");
    } else {
      !isMenuOpen && topBar.classList.add("transparent");
    }
  }

  /* menu SHIT! */
  mobileMenu.onclick = function(e) {
    openMobileMenu(e);
  }

  function openMobileMenu() {
    menuWrapper.classList.toggle("visible");
  }
})();