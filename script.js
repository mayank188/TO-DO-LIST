const inputbox = document.getElementById("input");
const listco = document.getElementById("list");

function add() {
    if (inputbox.value === '') {
        alert("You must write something!");
    } else {
        const li = document.createElement("li");
        li.innerHTML = inputbox.value;
        li.addEventListener("click", function () {
            li.classList.toggle("check");
        });

        listco.appendChild(li);
        inputbox.value = ''; 
    }
}
