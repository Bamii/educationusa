(function() {  
  const menuWrapper = document.getElementById("menu-wrapper");
  const mobileMenu = document.getElementById("mobile-menu-button");

  /* menu SHIT! */
  mobileMenu.onclick = function(e) {
    openMobileMenu(e);
  }

  function openMobileMenu() {
    menuWrapper.classList.toggle("visible");
  }
})()