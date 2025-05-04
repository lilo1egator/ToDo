import { closeModal } from "./modal";

function tasks() {
    class Task {
        constructor(title, description) {
            this.title = title;
            this.description = description;
            this.status = 'to-do';
        }

        createElement() {
            const element = document.createElement('li');
            element.classList.add('task-card');
            element.innerHTML = `
                <div class="task-card__header">
                    <strong class="task-card__title">${this.title}</strong>
                    <button class="task-card__menu" title="Actions" type="button">⋮</button>
                </div>
                <div class="task-card__desc">${this.description}</div>
            `;
            return element;
        }
        
        render() {
            document.querySelector('#todo-list').append(this.createElement());
        }
    }
        
        
    document.querySelector('.modal-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.querySelector('[name="title"]').value,
              description = form.querySelector('[name="description"]').value;
        if (!title.trim() || !description.trim()) return;
    
        new Task(title, description).render();
        form.reset();
        closeModal('.modal');
    })
}

export default tasks;