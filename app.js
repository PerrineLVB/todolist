let submitBtn = document.querySelector("#submitBtn");
let currentTasks = document.querySelector("#currentTasks");
let doneTasks = document.querySelector("#doneTasks");
let currentContainer = document.querySelector(".currentContainer");
let doneContainer = document.querySelector(".doneContainer");

// comportement lorsqu'on clique sur le bouton ajouter
submitBtn.addEventListener("click", () => {
    // stocker la valeur de l'input dans une variable
    let newTask = document.querySelector("#newTask").value;

    if (newTask == '') {
        alert("Vous ne pouvez pas ajouter une tâche vide !")
    } else {
        // créer un nouvel élément dans la liste
        let newItem = document.createElement("li");
        // gérer le contenu de l'élément
        newItem.innerHTML = newTask;
        // ajouter l'élément enfant (l'item de la liste) à l'élément parent (la liste ul) pour qu'il s'affiche
        currentTasks.appendChild(newItem);

        if (currentTasks.childNodes.length > 1) {
            currentContainer.classList.remove("d-none");
        }

        // créer tous les boutons/icônes potentiels dans des variables et leur attribuer des classes et id
        let checkBtn = document.createElement("i");
        checkBtn.classList.add("btn", "btn-outline-success", "fa-solid", "fa-check", "ms-1", "my-1");
        checkBtn.setAttribute('id', 'checkBtn');

        let editBtn = document.createElement("i");
        editBtn.classList.add("btn", "btn-outline-primary", "fa-solid", "fa-pen-to-square", "ms-1", "my-1");
        editBtn.setAttribute('id', 'editBtn');

        let deleteBtn = document.createElement("i");
        deleteBtn.classList.add("btn", "btn-outline-danger", "fa-solid", "fa-trash-can", "ms-1", "my-1");
        deleteBtn.setAttribute('id', 'deleteBtn');

        let updateBtn = document.createElement("i");
        updateBtn.classList.add("btn", "btn-outline-success", "fa-solid", "fa-floppy-disk", "ms-1", "my-1");
        updateBtn.setAttribute('id', 'updateBtn');

        // fonction qui affiche les boutons
        let showButtons = function () {
            newItem.appendChild(checkBtn);
            newItem.appendChild(editBtn);
            newItem.appendChild(deleteBtn);
        }

        showButtons();

        // vider l'input une fois la tâche envoyée
        document.querySelector("#newTask").value = "";

        // comportement au clic du bouton VALIDER
        checkBtn.addEventListener("click", () => {
            doneTasks.appendChild(newItem);
            newItem.removeChild(checkBtn);
            newItem.removeChild(editBtn);
            if (doneTasks.childNodes.length > 1) {
                doneContainer.classList.remove("d-none");
            }
        });

        // comportement au clic du bouton EDITER
        editBtn.addEventListener("click", () => {
            // afficher un input affichant le contenu de l'item 
            newItem.innerHTML = "<div class='d-flex'><input type='text' class='form-control w-75 me-1' id='updatedTask' value='" + newItem.innerText + "'></div>";
            // affichage du bouton qui enregistre les modifications
            newItem.appendChild(updateBtn);
            // comportement au clic du bouton
            updateBtn.addEventListener("click", () => {
                let updatedTask = document.getElementById("updatedTask").value;
                newItem.innerHTML = updatedTask;
                showButtons();
            });
        });

        // comportement au clic du bouton SUPPRIMER
        deleteBtn.addEventListener('click', () => {
            newItem.remove();
            if (currentTasks.childNodes.length <= 1) {
                currentContainer.classList.add("d-none");
            }
            if (doneTasks.childNodes.length <= 1) {
                doneContainer.classList.add("d-none");
            }
        });
    }
});