console.log("Welcome to notes app");
// If user adds a note add it to local storage.
showNotes();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let addText = document.getElementById('addText');
    let notes = localStorage.getItem("notes");// key value pair
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addText.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addText.value = "";
    console.log(notesObj);
    showNotes();// Fn to show the notes.
})



function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += ` <div class="noteCard my-2 mx-2 card " style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button  id='${index}' onclick='deleteNote(this.id)' class="btn btn-primary">Delete Notes</button>
        </div>
    </div>`
    })
    let notesElm = document.getElementById("notes");
    if (notesObj.length !== 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show in notes Add the note section above to add the note.`
    }
}

// Function to delete a note
function deleteNote(index) {
    console.log("I am deleting", index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);

    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();

}
let search = document.getElementById("searchTxt");
search.addEventListener('input', function () {
    let inputVal = search.value.toLowerCase();
    console.log("search event is searching", inputVal);
    let noteCard = document.getElementsByClassName("noteCard");

    Array.from(noteCard).forEach(function (element,index) {
        let cardTxt = document.getElementsByTagName("p")[index].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })

})