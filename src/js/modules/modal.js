function modal() {
    const btnAddTask = document.querySelector('.add-task-btn-min'),
          modal = document.querySelector('.modal'),
          modalClose = document.querySelector('.modal-cancel');


    btnAddTask.addEventListener('click', () => {
        modal.classList.add('modal-active');
    });

    const closeModal = () => {
        modal.classList.remove('modal-active');
    }


    modalClose.addEventListener('click', () => {
        closeModal();
    });
}

export default modal;

