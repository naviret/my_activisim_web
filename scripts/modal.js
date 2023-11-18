const petitionFormModal = document.querySelector('.modal');
const exitModalBtn = document.querySelector('.modal-exit');

let modalAlreadyAppeared = false;
function openModal() {
    petitionFormModal.style.display = 'flex';
}

function closeModal() {
    petitionFormModal.style.display = 'none';
}

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500 && !modalAlreadyAppeared) {
        modalAlreadyAppeared = true;
        openModal();
    }
});

exitModalBtn.addEventListener('click', closeModal);
