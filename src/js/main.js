const btnAddTask = document.querySelector('.add-task-btn-min'),
      modal = document.querySelector('.modal'),
      modalClose = document.querySelector('.modal-cancel'),
      modalSubmit = document.querySelector('.modal-submit'),
      modalCancel = document.querySelector('.modal-cancel');


btnAddTask.addEventListener('click', () => {
    modal.classList.add('modal-active');
});

modalClose.addEventListener('click', () => {
    modal.classList.remove('modal-active');
});
