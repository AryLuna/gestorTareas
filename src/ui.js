import { getTasks} from "./task";

// Función para mostrarlew al usuario las tareas
export const renderTasks = () => {
    const taskList = documnent.getElementById("task-list");
    taskList.innerHTML = '';
    const tasks = getTasks();

    tasks.forEach((task) => {
        const li = document.createElement("li");
        li.setAttribute("data-id", task.id);

        // Añadir clase spñp si la tarea esta completa
        if(task.completed === true) {
            li.classList.add("completed");
        }

        li.innerHTML = `
            ${task.text}
            <button class="delete"> Eliminar </button>
            <button clas="toggle"> ${ task.completed === false ? "Completar" : "" }  </button>  
        `;

        taskList.appendChild(li);
    });
};