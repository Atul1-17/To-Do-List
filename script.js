const addlist = document.querySelector(".addList");
const inputDiv = document.querySelector(".inputDiv");
const addBtn = document.querySelector(".addBtn");
const titleInput = document.querySelector(".Title");
const taskInput = document.querySelector(".task");
const container = document.querySelector(".container");
const titleValue = "";
const taskValue = "";


addlist.addEventListener("click",()=>{
        if(inputDiv.style.display === "none"){
            inputDiv.style.display = "flex";
            addlist.style.border = " 2px solid black";
        }
        else{
            inputDiv.style.display = "none";
            addlist.style.border = "";
        }
})

addBtn.addEventListener("click",()=>{
    const titleValue = titleInput.value;
    const taskValue = taskInput.value;

    const work = document.createElement("div");
    work.classList.add("work");
    const subWork = document.createElement("div");
    const heading = document.createElement("h1");
    heading.classList.add("heading");
    heading.innerText = titleValue;
    const toDo = document.createElement("p");
    toDo.classList.add("summary");
    toDo.innerText = taskValue;
    const button = document.createElement("button")
    button.classList.add("btn");
    button.innerText = "remove";

    button.addEventListener("click", () => {
        container.removeChild(work);
    });

    work.appendChild(subWork);
    subWork.appendChild(heading);
    subWork.appendChild(toDo);
    work.appendChild(button);

    container.appendChild(work);

    titleInput.value = "";
    taskInput.value = "";

     if(inputDiv.style.display === "none"){
            inputDiv.style.display = "flex";
            addlist.style.border = " 2px solid black";
        }
        else{
            inputDiv.style.display = "none";
            addlist.style.border = "";
        }

})
