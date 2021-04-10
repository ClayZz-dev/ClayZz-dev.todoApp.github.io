// // TODO : DOM MANIPULATION, creating new element on event


// //filtering todo, variables
// const filterAll = document.querySelector("#all");
// const filterImportant = document.querySelector("#important");
// const filterDone = document.querySelector("#done");

// //date and day
// const day = document.querySelector("#date h1");
// const date = document.querySelector("#date h4");

// //inputbar
// const inputbar = document.querySelector(".input-bar");
// const addBtn = document.querySelector(".add-btn");

// const todoBox = document.querySelectorAll(".todo-box");
// const todoListUl = document.querySelectorAll(".todo-list");


// let todoArr = [];

// let LOCAL_STORAGE_KEY = "todo.name";
// let LOCAL_STORAGE_ID_KEY = "todo.id";
// let todos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY,)) || [];

// let idNumber = 0;
// let allIndex = 0;
// let importantIndex = 1;
// let doneIndex = 2;
// // *PHONE VARIABLES
// // selections
// const addNew = document.querySelector(".add-new");
// const addNewPhoneContainer = document.querySelector(".add-new-phone");
// // const filterImportant = document.querySelector("#important");
// // const filterDone = document.querySelector("#done");

// // date generator
// function dateGenerator() {

// }


// // All

// // *event listener
// // todoListUl[allIndex].addEventListener("click", (e) => {
// //     const get = localStorage.getItem(LOCAL_STORAGE_KEY);
// // });

// // ?phones
// addNew.addEventListener("click", phonesAdd)

// addBtn.addEventListener("click", () => {
//     createTodo();
//     phonesAdd();
//     inputbar.value = "";
// });
// inputbar.addEventListener("keypress", e => {
//     if (e.keyCode == 13) {
//         createTodo();
//         phonesAdd();
//         inputbar.value = "";
//     }
// })

// window.addEventListener("DOMContentLoaded", showingLocalStorageTodo);
// todoListUl[allIndex].addEventListener("click", checkMark);
// todoListUl[allIndex].addEventListener("click", e => {
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
//     console.log(target)
//     console.log(todoArr)

//     // todoArr.forEach(todo => {
//     //     const optionBox = document.querySelector(".option-dots").dataset.dotId;
//     //     const box = document.querySelector(`[data-dot-id]`)
//     //     if (optionBox == selected.dataset.todoId) {
//     //         console.log(optionBox)
//     //     } else return "mantap"
//     //     console.log(todo)
//     // })

//     // // console.log(target)
//     // // console.log(parent)
//     // // console.log(selected)
// });


// // *ALL FUNCTION

// // *PHONES
// function phonesAdd(){
//     if(addNewPhoneContainer.dataset.showed == "true"){
//         addNewPhoneContainer.dataset.showed = "false";
//         addNewPhoneContainer.style.display = "none";  
//     } else {
//         addNewPhoneContainer.style.display = "block";
//         addNewPhoneContainer.dataset.showed = "true";
//     }
// }

// function generateNumber(todoName) {
//     let random = Math.random(11);

//     const num = todoName.length;

//     return num * Math.round(random) + Math.random();
// }
// // todoListUl[allIndex].addEventListener("click", deleteTodo);

// function createTodo() {
//     if (inputbar.value == null || inputbar.value === "") return;
//     // creating li container with class of todo
//     const todo = document.createElement("li");
//     todo.classList.add("todo");
//     todo.setAttribute("draggable", "true");

//     const todoName = inputbar.value;
//     const newTodo = saveTodo(todoName);
//     saveToLocalStorage(todoName)
//     todoArr.push(newTodo);
//     todo.dataset.todoId = newTodo.id;

//     // creating CHECKMARK button
//     const checkIconBtn = document.createElement("button");
//     checkIconBtn.innerHTML = `<i class="far fa-square icon"></i>`;

//     // creating the text of the todo
//     const todoText = document.createElement("div");
//     todoText.classList.add("todo-text");

//     // the text is based on user input value
//     todoText.innerHTML = `<span>${todoName}</span>`;

//     // creating dots icon
//     const dotsIconBtn = document.createElement("button");
//     dotsIconBtn.innerHTML = `<i class="fas fa-ellipsis-h dots"></i>`;

//     // creting option when dots is cliced
//     const optionDots = document.createElement("div");
//     optionDots.classList.add("option-dots");
//     optionDots.dataset.dotId = newTodo.id;
//     const optContainer = document.createElement("ul");
//     optContainer.classList.add("option-container");

//     // delete option
//     const optionList = document.createElement("li");
//     optionList.innerText = "Delete";
//     optionList.classList.add("delete-todo");

//     // append child to parent element
//     optContainer.appendChild(optionList);
//     optionDots.appendChild(optContainer);


//     todo.appendChild(checkIconBtn);
//     todo.appendChild(todoText);
//     todo.appendChild(dotsIconBtn);
//     todo.appendChild(optionDots);

//     todoListUl[allIndex].appendChild(todo);
//     // clear value afer entering/add
// }


// function saveTodo(todoName) {
//     return { id: generateNumber(todoName), name: todoName, completeStatus: false }
// }

// function saveToLocalStorage(todo) {
//     if (localStorage.getItem(LOCAL_STORAGE_KEY) === null) {
//         todos = []
//     } else {
//         todos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
//     }
//     todos.push(todo);
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
// }

// function showingLocalStorageTodo() {
//     let todos;
//     if (localStorage.getItem(LOCAL_STORAGE_KEY) === null) {
//         todos = []
//     } else {
//         todos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
//     }
//     // *if there's item in local storage, add it right away
//     todos.forEach(list => {
//         const todo = document.createElement("li");
//         todo.classList.add("todo");
//         todo.setAttribute("draggable", "true");

//         const todoName = list;
//         const newTodo = saveTodo(todoName);
//         todoArr.push(newTodo);
//         todo.dataset.todoId = newTodo.id;
//         // creating CHECKMARK button
//         const checkIconBtn = document.createElement("button");
//         checkIconBtn.innerHTML = `<i class="far fa-square icon"></i>`;

//         // creating the text of the todo
//         const todoText = document.createElement("div");
//         todoText.classList.add("todo-text");

//         // the text is based on user value in local storage
//         todoText.innerHTML = `<span>${list}</span>`;

//         // creating dots icon
//         const dotsIconBtn = document.createElement("button");
//         dotsIconBtn.innerHTML = `<i class="fas fa-ellipsis-h dots"></i>`;

//         // creting option when dots is cliced
//         const optionDots = document.createElement("div");
//         optionDots.classList.add("option-dots");
//         optionDots.dataset.dotId = newTodo.id;
//         const optContainer = document.createElement("ul");
//         optContainer.classList.add("option-container");

//         // delete option
//         const optionList = document.createElement("li");
//         optionList.innerText = "Delete";
//         optionList.classList.add("delete-todo");

//         // append child to parent element
//         optContainer.appendChild(optionList);
//         optionDots.appendChild(optContainer);


//         todo.appendChild(checkIconBtn);
//         todo.appendChild(todoText);
//         todo.appendChild(dotsIconBtn);
//         todo.appendChild(optionDots);

//         todoListUl[allIndex].appendChild(todo);
//     })
// }


// function checkMark(e) {
//     const todo = e.target.parentElement;
//     const target = e.target;

//     if (target.classList.contains("icon")) {
//         todo.parentElement.classList.toggle("checked");
//         target.classList.toggle("fa-square");
//         target.classList.toggle("fa-check-square");
//     } else {
//         return;
//     }
// }

// function clearTodo(todo) {
//     if (localStorage.getItem(LOCAL_STORAGE_KEY) === null) {
//         todos = []
//     } else {
//         todos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
//     }
//     todos.splice(todo, 1)
//     todoArr.splice(todo, 1);
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
// }




// // !NOT WORKING, FIX IT LATER WHEN YOU BECOME WAY MORE SMARTTT 
// // function dragAndDrop(){
// //     const todo = document.querySelectorAll(".todo");
// //     const draggedTodo = document.querySelector(".dragged");

// //     todo.forEach(todos => {
// //         todos.addEventListener("dragstart", () => {
// //             todos.classList.add("dragged");
// //             console.log("test");
// //         })
// //         todos.addEventListener("dragend", () => {
// //             todos.classList.remove("dragged");
// //             console.log(todos);
// //         })
// //     })
// // }

const toggle = document.querySelector(".menu-icon")
const sidebar = document.querySelector(".sidebar")
const close = document.getElementById("close-btn")

toggle.addEventListener("click", () => {
    sidebar.style.transform = `translateX(0)`;
    console.log("test")
})

close.addEventListener("click", () => {
    sidebar.style.transform = `translateX(-100%)`;

})