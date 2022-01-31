console.log("This is index.js");
// Todos"
// 1. Store all the data to the localStorage
// 2. Give another column as an option to delete the book
// 3. Add a scroll bar to the view

// Constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display Constructor
function Display() {

}

// Add methods to display prototype
Display.prototype.add = function (book) {
    console.log("Adding to UI");
    tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;
    tableBody.innerHTML += uiString;
}

// Implement the clear function
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

// Implement the validate function
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false
    }
    else {
        return true;
    }
}
Display.prototype.show = function (type, displayMessage) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Messge:</strong> ${displayMessage}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>`;
    setTimeout(function () {
        message.innerHTML = ''
    }, 2000);

}


// Add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log('YOu have submitted library form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {

        display.add(book);
        display.clear();
        display.show('success', 'Your book has been successfully added')
    }
    else {
        // Show error to the user
        display.show('danger', 'Sorry you cannot add this book');
    }

    e.preventDefault();
}

Display.prototype.setObject = function(key, value) {
    
let libraryFormobj = localStorage.getItem("libraryForm");
if (libraryForm == null) {
    libraryFormobj = [];
} 
else 
{
    libraryFormobj = JSON.parse(libraryForm);
}
libraryFormobj.push(libraryForm.value);
    this.setItem(libraryForm, JSON.stringify(libraryFormobj));
    
}
 
Display.prototype.getObject = function(key) {
    var libraryFormobj = this.getItem(libraryForm);
    return JSON.parse(libraryFormobj);
}


// Save data to local storage:
// Display.prototype.saveData = function () {
//     let BookName = document.getElementById("bookName");
//     let authorName = document.getElementById("author");
//     let fictionType = document.getElementById("fiction");
//     let programmingType = document.getElementById("programming");
//     let cookingType = document.getElementById("cooking");
   
  
//     let Name = localStorage.getItem("Name");
//     let Author = localStorage.getItem("Author");
//     let Type = localStorage.getItem("Type");
//     if (Name == null && Author == null && Type == null) {
//       NameObj = [];
//       AuthorObj = [];
//       TypeObj = [];
//     } else {
//       NameObj = JSON.parse(Name);
//       AuthorObj = JSON.parse(Author);
//       TypeObj = JSON.parse(Type);
//     }
//     NameObj.push(BookName.value);
//     AuthorObj.push(authorName.value);
//     TypeObj.push(life.value);
  
//     localStorage.setItem("Name", JSON.stringify(NameObj));
//     localStorage.setItem("Author", JSON.stringify(AuthorObj));
//     localStorage.setItem("Type", JSON.stringify(TypeObj));
//   };