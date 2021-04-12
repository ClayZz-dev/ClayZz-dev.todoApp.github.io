//inputbar
const inputbar = document.querySelector(".input-bar");
const addBtn = document.querySelector(".add-btn")

// * todo element
const todoBox = document.querySelectorAll(".todo-box");
const todoListUl = document.querySelector(".todo-list");

let todoArr = [];

let LOCAL_STORAGE_KEY = "todo.name";
let LOCAL_STORAGE_ID_KEY = "todo.id";
let todos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY,)) || [];

let idNumber = 0;

// * PHONE VARIABLES
// selections
const addNew = document.querySelector(".add-new");
const addNewPhoneContainer = document.querySelector(".add-new-phone");
// sidebar 
const toggle = document.querySelector(".menu-icon")
const sidebar = document.querySelector(".sidebar")
const close = document.getElementById("close-btn")

// All

// * event listener
// * PHONES


addBtn.addEventListener("click", () => {
    createTodo();
    inputbar.value = "";
});

inputbar.addEventListener("keypress", e => {
    if (e.keyCode == 13) {
        createTodo();
        inputbar.value = "";
    }
})


// * SIDEBAR ADD EVENT LISTNER
toggle.addEventListener("click", () => {
    // scroll effect
    sidebar.style.transform = `translateX(0)`;
    console.log("test")
})

close.addEventListener("click", () => {
    sidebar.style.transform = `translateX(-100%)`;

})

// showing todolist if there's todo in localstorage
window.addEventListener("DOMContentLoaded", showingLocalStorageTodo);
todoListUl.addEventListener("click", checkMark);
// todoListUl.addEventListener("click", optionDots);

// todoListUl.addEventListener("click", e => {
//     const target = e.target;
//     const parent = target.parentElement;
//     const selected = parent.parentElement;

//     if (target.classList.contains("dots")) {
//         parent.nextSibling.classList.toggle("clicked");
//     }
//     else if (target.classList.contains("delete-todo")) {
//         selected.parentElement.style.display = "none";
//         clearTodo(selected.parentElement.innerText);
//     }
// });


// *ALL FUNCTION


function generateNumber(todoName) {
    let random = Math.random(11);

    const num = todoName.length;

    return num * Math.round(random) + Math.random();
}

// creating todo element in html
function createTodo() {
    // if user input null or noting, it ownt invoked
    if (inputbar.value == null || inputbar.value === "") return;

    // creating new todo using templates
    // * TODO TEMPLATE
    const todoTemplate = document.querySelector("#newTodo").content;
    const newTodoList = document.importNode(todoTemplate, true);

    const todoText = newTodoList.querySelector(".todo-text")
    const inputText = inputbar.value;
    todoText.innerText = inputText;

    // saving todo 
    const newTodo = saveTodo(inputText);
    // save to local storage
    saveToLocalStorage(inputText)

    // push new todo into todoArray
    todoArr.push(newTodo);

    todoListUl.appendChild(newTodoList)
}

// saving todo as object to push it to an array later
function saveTodo(todoName) {
    return { id: generateNumber(todoName), name: todoName, completeStatus: false }
}

// saving to local storage
function saveToLocalStorage(todo) {
    // checking if there's no items in local storage, create new one 
    if (localStorage.getItem(LOCAL_STORAGE_KEY) === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    }
    todos.push(todo);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
}

// showing todo when there's item in localstorage
function showingLocalStorageTodo() {
    if (localStorage.getItem(LOCAL_STORAGE_KEY) === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    }

    // *if there's item in local storage, add it right away
    todos.forEach(list => {

    // creating new todo using templates
    // * TODO TEMPLATE
    const todoTemplate = document.querySelector("#newTodo").content;
    const newTodoList = document.importNode(todoTemplate, true);

    const todoText = newTodoList.querySelector(".todo-text")
    const inputText = list;
    todoText.innerText = inputText;

    const newTodo = saveTodo(inputText);

    todoArr.push(newTodo);

    todoListUl.appendChild(newTodoList)
    })
}

// check mark function
function checkMark(e) {
    const todo = e.target.parentElement;
    const target = e.target;

    if (target.classList.contains("checkmark")) {
        todo.parentElement.classList.toggle("checked");
        target.classList.toggle("fi-rr-check")
    } else {
        return;
    }
}


// function optionDots(e) {
//     const todoTemplate = document.querySelector("#newTodo").content;
//     const newTodoList = document.importNode(todoTemplate, true);
//     const optionContainer = newTodoList.querySelector(".option-dots");
//     const target = e.target;

//     if (target.classList.contains("dots")) {
//         optionContainer.sytle.display = "";
//         console.log(target)
//         console.log(optionContainer)
//     } else {
//         return;
//     }
// }
// clearing todo from llocalstorage and array
function clearTodo(todo) {
    if (localStorage.getItem(LOCAL_STORAGE_KEY) === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    }
    todos.splice(todo, 1)
    todoArr.splice(todo, 1);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
}




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

