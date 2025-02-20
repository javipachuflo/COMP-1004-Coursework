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

const titles = {
    game5: "Game 5",
    game4: "Game 4",
    game3: "Game 3",
    game2: "Game 2",
    game1: "Game 1"
};

const game_thumbnails = {
    game5: "imgs/Games_Placeholder_No_Background.png",
    game4: "imgs/Games_Placeholder_No_Background.png",
    game3: "imgs/Games_Placeholder_No_Background.png",
    game2: "imgs/Games_Placeholder_No_Background.png",
    game1: "imgs/Games_Placeholder_No_Background.png"
};

const video_URLs = {
    game5: "https://www.youtube.com/embed/gwMPzhgiTpc",
    game4: "https://www.youtube.com/embed/gwMPzhgiTpc",
    game3: "https://www.youtube.com/embed/gwMPzhgiTpc",
    game2: "https://www.youtube.com/embed/gwMPzhgiTpc",
    game1: "https://www.youtube.com/embed/gwMPzhgiTpc"
};

const descriptions = {
    game5: "Description for Game 5",
    game4: "Description for Game 4",
    game3: "Description for Game 3",
    game2: "Description for Game 2",
    game1: "Description for Game 1"
};

const steam_links = { 
    game5: "https://steamcommunity.com/profiles/76561199195693538/",
    game4: "https://steamcommunity.com/profiles/76561199195693538/",
    game3: "https://steamcommunity.com/profiles/76561199195693538/",
    game2: "https://steamcommunity.com/profiles/76561199195693538/",
    game1: "https://steamcommunity.com/profiles/76561199195693538/"
};

// Games Page
function showPopup(gameId, title, imageSrc, videoUrl, description, game_link) {
    const popupInfo = document.getElementById('popup-info');
    popupInfo.innerHTML = `
        <div class="popup-container">
            <h2>${title}</h2>

            <div class="image-container">
                <img src="${imageSrc}" alt="${gameId}">
            </div>

            <div class="video-and-buttons-container">

                <div class="video-container">
                    <iframe src="${videoUrl}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"></iframe>
                </div>

                <div class="buttons-container">
                    <a href="${game_link}" target="_blank">
                        <img src="imgs/Steam.png" alt="Steam">
                    </a>
                </div>

            </div>

            <div class="description-container">
                <p>${description}</p>
            </div>
        </div>
    `;

    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}