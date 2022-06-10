(() => {
    const menuBtn = document.querySelector('[data-menu-button]')
    const mobileMenu = document.querySelector('[data-menu]')

    menuBtn.addEventListener('click', () => {
        // атрибут который изменяеться на кнопке 
        const expanded = menuBtn.getAttribute('aria-expanded') === 'true' || false
        menuBtn.classList.toggle("is-open")
        menuBtn.setAttribute('aria-expanded', !expanded)
        
        mobileMenu.classList.toggle('is-open');
    })
})();

function onCloseModal(e) {
    refs.backdropElt.innerHTML = '';
    refs.backdropElt.classList.remove('show-modal');
    document.body.parentNode.style.overflow = 'visible'; //Анна: скролл работает при закрытой модалке
    refs.bodyElt.classList.remove('fixed-body');
    window.removeEventListener('keydown', onEscKeyDown);
    if (
      refs.libraryBtn.classList.contains('current') &&
      refs.watchedBtnLibrary.classList.contains('activeBtn')
    ) {
      showWatchedList();
    }
    if (
      refs.libraryBtn.classList.contains('current') &&
      refs.queueBtnLibrary.classList.contains('activeBtn')
    ) {
      showQueueList();
    }
  }

// закрытие модального окна по клику на бекдроп
// function onBackdropClick(e) {
//     if (e.currentTarget === e.target) {
//       onCloseModal();
//     }
//   }
  
//   // закрытие модального окна при нажатии на escape
//   function onEscKeyDown(e) {
//     // console.log(e.key);
//     if (e.code === 'Escape') {
//       onCloseModal();
//     }
//   }