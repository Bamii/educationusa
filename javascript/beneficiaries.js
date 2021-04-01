(function() {
  const beneficiaries = document.querySelectorAll('[data-beneficiary]')
  const maskClose = document.querySelector('[data-modal-close]')
  const beneficiaryModal = document.getElementById('beneficiary-details-modal')

  maskClose.onclick = function(el) {
    beneficiaryModal.classList.remove('visible');
  }

  Array.from(beneficiaries).forEach(el => {
    el.onclick = function() {
      beneficiaryModal.classList.add('visible')
    }
  })
})()