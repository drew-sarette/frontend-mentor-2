// event listeners
window.onload = function() {initialize()};
let ratingButtons = document.querySelectorAll(".rating-button");
ratingButtons.forEach(element => {
    element.addEventListener("click", storeSelectedRating);
});
document.getElementById("submit").addEventListener("click", submit);

// initialize the page
function initialize() {
    document.querySelector("div.rating").classList.add("show");
}

// stores the selected rating as a variable, applies css to show selected rating
let selectedRating = null
function storeSelectedRating(e) {
    if (selectedRating != null) {
        document.querySelector(".selected-button").classList.remove("selected-button");
    }
  selectedRating = parseInt(e.target.id);
  e.target.classList.add("selected-button");
}

// check for a selected rating, then show the thank-you state
function submit() {
    if (selectedRating === null) {
        alert("Please make a selection");
        return
    }
    document.querySelector("div.rating").classList.toggle("show");
    document.querySelector("div.ty").classList.toggle("show");
    document.querySelector("p.confirmation-message").textContent = `You selected ${selectedRating} out of 5`;
}

