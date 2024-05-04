document.addEventListener('DOMContentLoaded', function() {
    const loginModal = document.getElementById('loginModal');
    const loginForm = document.getElementById('loginForm');
    const closeLoginBtn = document.querySelector('#loginModal .close');
    const imageList = document.getElementById('imageList');
  
    const isAdmin = localStorage.getItem('adm') === '1';
  
    function showLoginModal() {
      if (!isAdmin) {
        loginModal.style.display = 'block';
      }
    }
  
    closeLoginBtn.addEventListener('click', function() {
      loginModal.style.display = 'none';
    });
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      localStorage.setItem('adm', '1');
      loginModal.style.display = 'none';
    });
  
    showLoginModal();
  
    const images = imageList.querySelectorAll('img');
    images.forEach(function(image) {
      image.addEventListener('click', function() {
        const modalId = image.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = 'flex';
      });
    });
  
    const closeBtns = document.querySelectorAll('.modal .close');
    closeBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        const modal = btn.closest('.modal');
        modal.style.display = 'none';
      });
    });
  });