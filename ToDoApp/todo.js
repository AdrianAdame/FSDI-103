const tasks = []

function renderListReversed(){
    let taskList = document.getElementById("todo-list")

    taskList.innerHTML = ""

    for(let i = tasks.length - 1; i >= 0; i--){
        taskList.innerHTML += `
            <div class="todo-element">
                <input type="checkbox" id="task-${i}" name="task-${i}">
                <label for="task-${i}">${tasks[i]}</label>
            </div>
        `
    }

    document.getElementById("total").innerHTML = tasks.length
}

function addTask(){
    let currentTask = document.getElementById("task")
    tasks.push(currentTask.value)
    renderListReversed();

    currentTask.value = ""
}