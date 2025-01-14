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