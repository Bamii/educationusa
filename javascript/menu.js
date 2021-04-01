(function() {  
  const menuWrapper = document.getElementById("menu-wrapper");
  const mobileMenu = document.getElementById("mobile-menu-button");

  const loginNavButton = document.getElementById('login-nav-btn');
  const mobileLoginNavButton = document.getElementById('mobile-login-nav-btn');
  const loginModal = document.getElementById("login-modal")
  const closeModals = document.querySelectorAll('[data-close-modal]');
  const signUpBtn = document.getElementById('signup-btn')
  const loginBtn = document.getElementById('login-btn')

  /* menu SHIT! */
  mobileMenu.onclick = function(e) {
    toggleMenuModal(e);
  }

  loginNavButton.onclick = function() {
    toggleLoginModal()
  }

  mobileLoginNavButton.onclick = function() {
    toggleMenuModal();
    toggleLoginModal()    
  }

  signUpBtn.onclick = function(el) {
    document.querySelector('[data-auth-target="signin"]').classList.remove('active')
    document.querySelector('[data-auth-target="signup"]').classList.add('active')
  }

  Array.from(closeModals).forEach(closeModal => {
    closeModal.onclick = function() {
      toggleLoginModal()
    }
  })
  
  function toggleLoginModal() {
    loginModal.classList.toggle('visible');
  }

  function toggleMenuModal() {
    menuWrapper.classList.toggle("visible");
  }
})()