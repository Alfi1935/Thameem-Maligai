// Function to show the popup
function showPopup() {
    document.getElementById("popup").style.display = "flex";
}

// Function to hide the popup
function hidePopup() {
    document.getElementById("popup").style.display = "none";
}

// Set the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear(); 