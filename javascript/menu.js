(function() {  
  const menuWrapper = document.getElementById("menu-wrapper");
  const mobileMenu = document.getElementById("mobile-menu-button");

  const loginNavButton = document.getElementById('login-nav-btn');
  const loginModal = document.getElementById("login-modal")
  const closeModals = document.querySelectorAll('[data-close-modal]');
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

  Array.from(closeModals).forEach(closeModal => {
    closeModal.onclick = function() {
      toggleModal()
    }
  })
  
  function toggleModal() {
    loginModal.classList.toggle('visible');
  }

  signUpBtn.onclick = function(el) {
    document.querySelector('[data-auth-target="signin"]').classList.remove('active')
    document.querySelector('[data-auth-target="signup"]').classList.add('active')
  }
})()