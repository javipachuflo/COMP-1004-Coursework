function loadPage(page) {
    fetch(page) // Fetch the content of the page
        .then(response => response.text()) // Convert the response to text
        .then(data => {
            document.getElementById('content').innerHTML = data; // Insert the content into the main element
            document.body.className = ''; // Clear any existing classes on the body
            document.body.classList.add(page.split('.')[0] + '-background'); // Add a class based on the page name
        })
        .catch(error => console.error('Error loading page:', error)); // Log any errors
}

// Load the home page by default
window.onload = () => loadPage('home.html');


// Games Page
function showPopup(gameId) {
    var popup = document.getElementById("popup");
    var popupInfo = document.getElementById("popup-info");

    // Add game-specific information here
    var gameInfo = {
        game1: "<h2>Game 1</h2><p>Details about Game 1...</p>",
        game2: "<h2>Game 2</h2><p>Details about Game 2...</p>"
        // Add more game information as needed
    };

    popupInfo.innerHTML = gameInfo[gameId];
    popup.style.display = "block";
}

function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}