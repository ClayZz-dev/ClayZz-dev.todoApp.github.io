// TODO : DOM MANIPULATION, creating new element on event


//filtering todo, variables
const filterAll = document.querySelector("#all");
const filterImportant = document.querySelector("#important");
const filterDone = document.querySelector("#done");

//date and day
const day = document.querySelector("#date h1");
const date = document.querySelector("#date h4");

//inputbar
const inputbar = document.querySelector(".input-bar");
const addBtn = document.querySelector(".add-btn");

const todoBox = document.querySelectorAll(".todo-box");
const todoListUl = document.querySelector(".todo-list");

// *PHONE VARIABLES
// selections
// const filterAll = document.querySelector("#all");
// const filterImportant = document.querySelector("#important");
// const filterDone = document.querySelector("#done");


addBtn.addEventListener("click", createTodo);
inputbar.addEventListener("keypress", e => {
    if (e.keyCode == 13) {
        createTodo();
    }
})
todoListUl.addEventListener("click", checkMark);
function createTodo() {
    // returning todo box when input is entered
    const todo = document.createElement("li");
    todo.classList.add("todo");
    todo.setAttribute("draggable", "true");

    const checkIconBtn = document.createElement("button");
    checkIconBtn.innerHTML = `<i class="far fa-square icon"></i>`;

    const todoText = document.createElement("div");
    todoText.classList.add("todo-text");
    let inputValue = inputbar.value;
    todoText.innerHTML = `<span>${inputValue}</span>`;

    const dotsIconBtn = document.createElement("button");
    dotsIconBtn.innerHTML = `<i class="fas fa-ellipsis-h icon"></i>`;

    todo.appendChild(checkIconBtn);
    todo.appendChild(todoText);
    todo.appendChild(dotsIconBtn);

    todoListUl.appendChild(todo);

    // clear value afer entering/add
    inputbar.value = "";
}





function checkMark(e){
    const todo = e.target.parentElement;
    const target = e.target;

    if(target.classList.contains("icon")){
        todo.parentElement.classList.toggle("checked");
        target.classList.toggle("fa-square");
        target.classList.toggle("fa-check-square");
    } else {
        return;
    }
}

// TODO : Variable for other ul to do list, ex : ultodolistALl
// TODO : create option box on dots when clicked
// TODO : Font
// TODO : phone optimization
// TODO : Drag and drop
// TODO : Git hub repo upload


// !NOT WORKING, FIX IT LATER WHEN YOU BECOME MORE CLEVER
// function dragAndDrop(){
//     const todo = document.querySelectorAll(".todo");
//     const draggedTodo = document.querySelector(".dragged");

//     todo.forEach(todos => {
//         todos.addEventListener("dragstart", () => {
//             todos.classList.add("dragged");
//             console.log("test");
//         })
//         todos.addEventListener("dragend", () => {
//             todos.classList.remove("dragged");
//             console.log(todos);
//         })
//     })
// }