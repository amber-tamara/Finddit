import reddit from "./redditapi";
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

// Form Event Listener
searchForm.addEventListener("submit", e => {
  // Get search term
  const searchTerm = searchInput.value;
  // Get sort
  const sortBy = document.querySelector('input[name="sortby"]:checked').value;

  // Get limit
  const searchLimit = document.getElementById("limit").value;

  //check input
  if (searchTerm === "") {
    // Show message
    showMessage("Please add a search term", "alert-danger");
  }

  // Clear input
  searchInput.value = "";

  // Search Reddit
  reddit.search(searchTerm, searchLimit, sortBy);

  e.preventDefault();
});

// Show Message
function showMessage(message, className) {
  // Creat div
  const div = document.createElement("div");
  // Add classes
  div.className = `alert ${className}`;
  // Add text
  div.appendChild(document.createTextNode(message));
  // Get parent
  const searchContainer = document.getElementById("search-container");
  // Get search
  const search = document.getElementById("search");
  const myHtml = "<h1>Hey you</h1>";

  //Insert message
  searchContainer.insertBefore(div, search);
  searchContainer.innerHTML += myHtml;

  // Timeout alert {}
  setTimeout(() => document.querySelector(".alert").remove(), 3000);
}
