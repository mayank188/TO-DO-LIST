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
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        inputbox.value = ''; 
        saved();
    }
}

listco.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
e.target.classList.toggle("checked");
        saved();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saved();
    }
},false);

function saved(){
    localStorage.setItem("data",listco.innerHTML);
}
function show(){
    listco.innerHTML = localStorage.getItem("data");
    
}
show();