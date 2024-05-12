let addBtn = document.querySelector(".ban button");
    let inputField = document.querySelector(".ban input");
    let todoList = document.querySelector(".MainUl");
    let clearBtn = document.querySelector(".btn2");


document.addEventListener("DOMContentLoaded", function () {
    

    addBtn.addEventListener("click", function () {
        let todoText = inputField.value
        if (todoText !== "") {
            addTodoItem(todoText);
            inputField.value = "";
        } else {
            alert("Bir soz daxil edin!");
        }
    });

    clearBtn.addEventListener("click", function () {
        todoList.innerHTML = "";
    });

    function addTodoItem(text) {
        let todoItem = document.createElement("li");
        todoItem.textContent = text;

        let trashIcon = document.createElement("i");
        trashIcon.className = "fas fa-trash-alt";
        trashIcon.style.marginLeft = "5px"; 
        trashIcon.style.cursor = "pointer";
        trashIcon.addEventListener("click", function () {
            todoList.removeChild(todoItem);
        });

        todoItem.appendChild(trashIcon);

        todoList.appendChild(todoItem);
    }
});