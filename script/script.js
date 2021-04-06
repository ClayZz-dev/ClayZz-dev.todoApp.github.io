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
const todoListUl = document.querySelectorAll(".todo-list");


let todoArr = [];

let LOCAL_STORAGE_KEY = "todo.id";
let todos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY, )) || [];

let idNumber = 0;
let allIndex = 0;
let importantIndex = 1;
let doneIndex = 2;
// *PHONE VARIABLES
// selections
// const filterAll = document.querySelector("#all");
// const filterImportant = document.querySelector("#important");
// const filterDone = document.querySelector("#done");


addBtn.addEventListener("click", createTodo);
inputbar.addEventListener("keypress", e => {
    if (e.keyCode == 13) {
        createTodo();
        inputbar.value = "";
    }
})

// All

// *event listener
// todoListUl[allIndex].addEventListener("click", (e) => {
//     const get = localStorage.getItem(LOCAL_STORAGE_KEY);
// });
window.addEventListener("DOMContentLoaded", showingLocalStorageTodo);
todoListUl[allIndex].addEventListener("click", checkMark);
todoListUl[allIndex].addEventListener("click", dotsOption);

// todoListUl[allIndex].addEventListener("click", deleteTodo);

function render(){
    todoArr.forEach(todos => {

    })
}


function createTodo() {
    if(inputbar.value == null || inputbar.value === "") return;
    // creating li container with class of todo
    const todo = document.createElement("li");
    todo.classList.add("todo");
    todo.setAttribute("draggable", "true");

    const todoName = inputbar.value;
    const newTodo = saveTodo(todoName);
    todoArr.push(newTodo);  
    todo.dataset.todoId = newTodo.id;
    console.log(newTodo.id)

    // creating CHECKMARK button
    const checkIconBtn = document.createElement("button");
    checkIconBtn.innerHTML = `<i class="far fa-square icon"></i>`;

    // creating the text of the todo
    const todoText = document.createElement("div");
    todoText.classList.add("todo-text");

    // the text is based on user input value
    todoText.innerHTML = `<span>${todoName}</span>`;

    // creating dots icon
    const dotsIconBtn = document.createElement("button");
    dotsIconBtn.innerHTML = `<i class="fas fa-ellipsis-h dots"></i>`;

    // creting option when dots is cliced
    const optionDots = document.createElement("div");
    optionDots.classList.add("option-dots");
    const optContainer = document.createElement("ul");
    optContainer.classList.add("option-container");

    // delete option
    const optionList = document.createElement("li");
    optionList.innerText = "Delete";
    optionList.classList.add("delete-todo");

    // append child to parent element
    optContainer.appendChild(optionList);
    optionDots.appendChild(optContainer);


    todo.appendChild(checkIconBtn);
    todo.appendChild(todoText);
    todo.appendChild(dotsIconBtn);
    todo.appendChild(optionDots);

    todoListUl[allIndex].appendChild(todo);
    // clear value afer entering/add
}


function saveTodo(todoName){
    if(localStorage.getItem(LOCAL_STORAGE_KEY) === null){
        todos = []    
    } else {
        todos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    }
    todos.push(todoName);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    return {id : Date.now().toString(), name: todoName, completeStatus: false}
}

function showingLocalStorageTodo(){
    let todos;
    if(localStorage.getItem(LOCAL_STORAGE_KEY) === null){
        todos = []    
    } else {
        todos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    } 
    todos.forEach(list => {
        const todo = document.createElement("li");
        todo.classList.add("todo");
        todo.dataset.todoId;
        todo.setAttribute("draggable", "true");
    
        // creating CHECKMARK button
        const checkIconBtn = document.createElement("button");
        checkIconBtn.innerHTML = `<i class="far fa-square icon"></i>`;
    
        // creating the text of the todo
        const todoText = document.createElement("div");
        todoText.classList.add("todo-text");
    
        // the text is based on user input value
        todoText.innerHTML = `<span>${list}</span>`;
    
        // creating dots icon
        const dotsIconBtn = document.createElement("button");
        dotsIconBtn.innerHTML = `<i class="fas fa-ellipsis-h dots"></i>`;
    
        // creting option when dots is cliced
        const optionDots = document.createElement("div");
        optionDots.classList.add("option-dots");
        const optContainer = document.createElement("ul");
        optContainer.classList.add("option-container");
    
        // delete option
        const optionList = document.createElement("li");
        optionList.innerText = "Delete";
        optionList.classList.add("delete-todo");
    
        // append child to parent element
        optContainer.appendChild(optionList);
        optionDots.appendChild(optContainer);
    
    
        todo.appendChild(checkIconBtn);
        todo.appendChild(todoText);
        todo.appendChild(dotsIconBtn);
        todo.appendChild(optionDots);
    
        todoListUl[allIndex].appendChild(todo);
    })
}


function checkMark(e) {
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



function dotsOption(e) {
  
}

function deleteTodo(e) {

}



// TODO : create option box on dots when clicked
// TODO : Font
// TODO : phone optimization
// TODO : Drag and drop


// !NOT WORKING, FIX IT LATER WHEN YOU BECOME WAY MORE SMARTTT 
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

// const dotsButton = document.querySelectorAll(".dots")
// const optionBox = document.querySelectorAll(".option-dots")

// dotsButton.forEach(e => {
//     e.addEventListener("click", dotsOption);
// })

// function dotsOption(){
//     for(let i = 0; i < dotsButton.length; i++){
//         optionBox[i].onclick = () => {
//             this.classList.toggle("clicked");
//         }

//         console.log(this);
//     }
// }
