document.getElementById("addBookBtn").addEventListener("click", function () {
    document.getElementById("bookForm").style.display = "block";
});

document.getElementById("bookFormElement").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var bookImage = document.getElementById("bookImage").value;
    var bookTitle = document.getElementById("bookTitle").value;
    var bookCost = document.getElementById("bookCost").value;

    // Create book element
    var newBook = document.createElement("div");
    newBook.innerHTML = "<img src='" + bookImage + "' alt='Book Image'>" +
        "<h3>" + bookTitle + "</h3>" +
        "<p>Cost: $" + bookCost + "</p>";

    // Append book to book list
    document.getElementById("bookList").appendChild(newBook);

    // Clear form fields
    document.getElementById("bookImage").value = "";
    document.getElementById("bookTitle").value = "";
    document.getElementById("bookCost").value = "";

    // Hide the form
    document.getElementById("bookForm").style.display = "none";
});

function openForm(bookTitle) {
    document.getElementById("buyForm").style.display = "block";
    document.getElementById("selectedBook").value = bookTitle;
}

function buyBooks() {
    var selectedBook = document.getElementById("selectedBook").value;
    var quantity = document.getElementById("quantity").value;
    // Handle buying logic here, e.g., send to server or display a confirmation message
    alert("Buying " + quantity + " copies of " + selectedBook);
    // Optionally, you can hide the form after buying
    document.getElementById("buyForm").style.display = "none";
}

function buySelectedBooks() {
    var selectedBooks = [];
    var selectElement = document.getElementById("bookSelection");
    for (var i = 0; i < selectElement.options.length; i++) {
        var option = selectElement.options[i];
        if (option.selected) {
            selectedBooks.push(option.value);
        }
    }
    // Handle buying logic here, e.g., send to server or display a confirmation message
    if (selectedBooks.length > 0) {
        alert("Buying the following books: " + selectedBooks.join(", "));
    } else {
        alert("Please select at least one book to buy.");
    }
}

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btns = document.querySelectorAll(".buy-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function openModal(bookTitle) {
    modal.style.display = "block";
    document.getElementById("bookSelection").value = bookTitle;
}

// When the user clicks on <span> (x), close the modal
function closeModal() {
    modal.style.display = "none";
}

// When the user clicks outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Function to buy books
function buyBooks() {
    var selectedBook = document.getElementById("bookSelection").value;
    var quantity = document.getElementById("quantity").value;
    // Handle buying logic here, e.g., display a message
    alert("You have bought " + quantity + " of " + selectedBook);
    // Close the modal
    closeModal();
}