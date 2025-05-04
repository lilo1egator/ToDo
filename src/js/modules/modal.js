const closeModal = (modalSelector) => {
    const modal = document.querySelector(modalSelector);
    modal.classList.remove('modal-active');
}

const openModal = (modalSelector) => {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('modal-active');
}

function modal(modalSelector) {
    const btnAddTask = document.querySelector('.modal-open'),
          modalClose = document.querySelector('.modal-cancel');

    btnAddTask.addEventListener('click', () => {
        openModal(modalSelector) 
    });


    modalClose.addEventListener('click', () => {
        closeModal(modalSelector);
    });
}

export default modal;
export {closeModal, openModal};

