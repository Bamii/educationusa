(function() {  
  const menuWrapper = document.getElementById("menu-wrapper");
  const mobileMenu = document.getElementById("mobile-menu-button");

  const loginNavButton = document.getElementById('login-nav-btn');
  const loginModal = document.getElementById("login-modal")
  const closeModal = document.getElementById('close-modal');
  const signUpBtn = document.getElementById('signup-btn')
  const loginBtn = document.getElementById('login-btn')

  /* menu SHIT! */
  mobileMenu.onclick = function(e) {
    openMobileMenu(e);
  }

  function openMobileMenu() {
    menuWrapper.classList.toggle("visible");
  }

  loginNavButton.onclick = function() {
    toggleModal()
  }

  closeModal.onclick = function() {
    toggleModal()
  }
  
  function toggleModal() {
    loginModal.classList.toggle('visible');
  }

  signUpBtn.onclick = function() {
    
  }
})()