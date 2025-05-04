function tasks() {
    class Task {
        constructor(title, description) {
            this.title = title;
            this.description = description;
            this.status = 'to-do';
        }
        
        render() {
            const element = document.createElement('li');
            element.classList.add('task-card');
            element.innerHTML = `
                <div class="task-card__header">
                    <strong class="task-card__title">${this.title}</strong>
                    <button class="task-card__menu" title="Actions" type="button">⋮</button>
                </div>
                <div class="task-card__desc">${this.description}</div>
            `;
            document.querySelector('.task-list').append(element);
        }
    }
        
        
    document.querySelector('.modal-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.querySelector('[name="title"]').value,
        description = document.querySelector('[name="description"]').value;
        if (!title.trim() || !description.trim()) return;
    
        new Task(title, description).render();
        e.target.reset();
        closeModal();
    })
}

export default tasks;