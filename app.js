let submitBtn = document.getElementById("submitBtn");
let currentTasks = document.getElementById("currentTasks");
let doneTasks = document.getElementById("doneTasks");

// comportement lorsqu'on clique sur le bouton ajouter
submitBtn.addEventListener("click", () => {
    // stocker la valeur de l'input dans une variable
    let newTask = document.getElementById("newTask").value;
    // créer un nouvel élément dans la liste
    let newItem = document.createElement("li");
    // gérer le contenu de l'élément
    newItem.innerHTML = "<div class='mb-1'>" + newTask + "<button id='checkBtn' class='btn btn-outline-success ms-1'><i class='fa-solid fa-check'></i></button><button id='editBtn' class='btn btn-outline-primary ms-1'><i class='fa-regular fa-pen-to-square'></i></button><button id='deleteBtn' class='btn btn-outline-danger ms-1'><i class='fa-regular fa-trash-can'></i></button></div>";
    // ajouter l'élément enfant (l'item de la liste) à l'élément parent (la liste ul) pour qu'il s'affiche
    currentTasks.appendChild(newItem);
    // vider l'input
    document.getElementById("newTask").value = "";

    // stocker le bouton Edit dans une variable et gérer son comportement
    let editBtn = document.getElementById("editBtn");
    editBtn.addEventListener("click", () => {
        // afficher un input affichant le contenu de l'item 
        newItem.innerHTML = "<div class='d-flex'><input type='text' class='form-control w-75 me-1' id='updatedTask' value='" + newItem.innerText + "'><button id='updateBtn' class='btn btn-outline-success ms-2'><i class='fa-solid fa-floppy-disk'></i></button></div>";

        // stocker le bouton Update dans une variable et gérer son comportement
        let updateBtn = document.getElementById('updateBtn');
        updateBtn.addEventListener("click", () => {
            let updatedTask = document.getElementById('updatedTask').value;
            newItem.innerHTML = updatedTask + "<button id='checkBtn' class='btn btn-outline-success ms-2'><i class='fa-solid fa-check'></i></button><button id='editBtn' class='btn btn-outline-primary ms-2'><i class='fa-regular fa-pen-to-square'></i></button><button id='deleteBtn' class='btn btn-outline-danger ms-2'><i class='fa-regular fa-trash-can'></i></button>";
        });
    });

        // stocker le bouton Delete dans une variable et gérer son comportement
    let deleteBtn = document.getElementById("deleteBtn");
    deleteBtn.addEventListener("click", () => {
        currentTasks.removeChild(newItem)
    });

        // stocker le bouton Check dans une variable et gérer son comportement
    let checkBtn = document.getElementById("checkBtn");
    checkBtn.addEventListener("click", () => {
        doneTasks.appendChild(newItem);
        deleteBtn.addEventListener("click", () => {
            doneTasks.removeChild(newItem)
        });
    });
})