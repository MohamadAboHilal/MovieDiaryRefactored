document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  // Inject the HTML structure
  app.innerHTML = `
        <main>
            <div style="max-width: 1200px; margin: 0 auto; padding: 2rem;">
                <h2 style="font-size: 1.875rem; font-weight: 600; color: white; margin-bottom: 1.5rem;">My Favorite Movies</h2>
                <div id="favorites-list" style="display: grid; grid-template-columns: repeat(1, 1fr); gap: 1.5rem;">
                    <!-- Favorite movie cards appear here-->
                </div>
            </div>
        </main>
    `;

  const favoritesList = document.getElementById("favorites-list");

  function getFavorites() {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  }

  function createMovieCard(movie) {
    const card = document.createElement("div");
    card.style.cssText = `
            background-color: #2d3748;
            border-radius: 0.5rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            overflow: hidden;
            position: relative;
            display: flex;
            flex-direction: column;
            height: 100%;
            margin: 20px;
            margin-bottom: 20px;
        `;
    card.setAttribute("data-movie-id", movie.id);

    const movieImage = document.createElement("img");
    movieImage.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    movieImage.alt = movie.title;
    movieImage.style.cssText = `
            width: 100%;
            height: 16rem;
            object-fit: cover;
        `;
    card.appendChild(movieImage);

    const movieInfo = document.createElement("div");
    movieInfo.style.cssText = `
            padding: 1rem;
            display: flex;
            flex-direction: column;
            flex-grow: 1;
        `;

    const movieTitle = document.createElement("h3");
    movieTitle.textContent = movie.title;
    movieTitle.style.cssText = `
            font-size: 1.125rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
            color: #ffffff;
        `;
    movieInfo.appendChild(movieTitle);

    const movieRating = document.createElement("p");
    movieRating.textContent = `Rating: ${movie.vote_average}`;
    movieRating.style.cssText = `
            color: #a0aec0;
            margin-bottom: 0.5rem;
        `;
    movieInfo.appendChild(movieRating);

    const favBtn = document.createElement("button");
    favBtn.style.cssText = `
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            color: #a0aec0;
            transition: color 0.3s;
        `;
    favBtn.innerHTML = `<i class="fas fa-heart"></i>`;
    if (isFavorite(movie.id)) {
      favBtn.style.color = "#f56565";
    }

    favBtn.addEventListener("click", () => {
      toggleFavorite(movie, favBtn);
    });

    card.appendChild(favBtn);

    const noteBtn = document.createElement("button");
    noteBtn.style.cssText = `
            margin-top: auto;
            background-color: #38b2ac;
            color: #ffffff;
            padding: 0.5rem 1rem;
            border-radius: 0.375rem;
            transition: background-color 0.3s;
            align-self: flex-start;
        `;
    const note = getNoteForMovie(movie.id);
    noteBtn.textContent = note ? "View Note" : "Create Note";
    noteBtn.addEventListener("click", () => {
      createNotePopup(movie.id, noteBtn);
    });

    movieInfo.appendChild(noteBtn);
    card.appendChild(movieInfo);

    favoritesList.appendChild(card);
  }

  const CREATE_NOTE_COLOR = "#38b2ac";
  const VIEW_NOTE_COLOR = "#4299e1";

  function isFavorite(movieId) {
    const favorites = getFavorites();
    return favorites.some((fav) => fav.id === movieId);
  }

  function toggleFavorite(movie, favBtn) {
    let favorites = getFavorites();

    if (isFavorite(movie.id)) {
      favorites = favorites.filter((fav) => fav.id !== movie.id);
      favBtn.style.color = "#a0aec0";
      removeMovieCard(movie.id);
    } else {
      favorites.push(movie);
      favBtn.style.color = "#f56565";
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
  }

  function getNoteForMovie(movieId) {
    const notes = JSON.parse(localStorage.getItem("movieNotes")) || {};
    return notes[movieId];
  }

  function createNotePopup(movieId, noteBtn) {
    const existingNote = getNoteForMovie(movieId);

    const notePopup = document.createElement("div");
    notePopup.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(26, 32, 44, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
        `;
    notePopup.innerHTML = `
            <div style="background-color: #2d3748; padding: 1.5rem; border-radius: 0.5rem; width: 24rem;">
                <h3 style="color: #ffffff; font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;">Movie Note</h3>
                <textarea id="note-text" style="width: 100%; height: 8rem; padding: 0.5rem; background-color: #4a5568; color: #ffffff; border-radius: 0.5rem;" placeholder="Write a note...">${
                  existingNote || ""
                }</textarea>
                <button id="save-note" style="margin-top: 1rem; background-color: #38b2ac; color: #ffffff; padding: 0.5rem 1rem; border-radius: 0.375rem;">Save Note</button>
                <button id="close-popup" style="margin-top: 0.5rem; background-color: #f56565; color: #ffffff; padding: 0.5rem 1rem; border-radius: 0.375rem;">Close</button>
            </div>
        `;

    document.body.appendChild(notePopup);

    document.getElementById("save-note").addEventListener("click", () => {
      const noteText = document.getElementById("note-text").value;
      saveNoteForMovie(movieId, noteText);

      noteBtn.textContent = noteText.trim() ? "View Note" : "Create Note";
      noteBtn.style.backgroundColor = noteText.trim()
        ? VIEW_NOTE_COLOR
        : CREATE_NOTE_COLOR;

      document.body.removeChild(notePopup);
    });

    document.getElementById("close-popup").addEventListener("click", () => {
      document.body.removeChild(notePopup);
    });
  }

  function saveNoteForMovie(movieId, noteText) {
    let notes = JSON.parse(localStorage.getItem("movieNotes")) || {};
    if (noteText.trim() === "") {
      delete notes[movieId];
    } else {
      notes[movieId] = noteText.trim();
    }
    localStorage.setItem("movieNotes", JSON.stringify(notes));
  }

  const favorites = getFavorites();
  favorites.forEach((movie) => createMovieCard(movie));

  // Add media queries for responsive grid
  const style = document.createElement("style");
  style.textContent = `
        @media (min-width: 640px) {
            #favorites-list { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 768px) {
            #favorites-list { grid-template-columns: repeat(3, 1fr); }
        }
        @media (min-width: 1024px) {
            #favorites-list { grid-template-columns: repeat(4, 1fr); }
        }
    `;
  document.head.appendChild(style);
});

function removeMovieCard(movieId) {
  const card = document.querySelector(`[data-movie-id="${movieId}"]`);
  if (card) {
    card.remove();
  }
}

/* for
the 
index.js
*/

document.addEventListener("DOMContentLoaded", async () => {
  const journalElement = document.getElementById("journal");

  if (!journalElement) {
    console.error("Element with id 'journal' not found");
    return;
  }

  journalElement.innerHTML = `
      <main>
          <div style="max-width: 1200px; margin: 0 auto; padding: 2rem;">
              <h2 style="font-size: 1.875rem; font-weight: 600; color: white; margin-bottom: 1.5rem;">My Favorite Movies</h2>
              <div id="favorites-list" style="display: grid; grid-template-columns: repeat(1, 1fr); gap: 1.5rem;">
                  <!-- Favorite movie cards appear here -->
              </div>
          </div>
      </main>
    `;

  const favoritesListContainer = document.getElementById("favorites-list");

  // Example API URL (replace with your actual API endpoint)
  const apiUrl = "https://api.example.com/movies";

  // Fetch movies and render them
  const movies = await fetchMovies(apiUrl);

  // Get favorites from storage
  let favorites = getFavorites();

  function toggleFavorite(movie, favBtn) {
    if (favorites.some((fav) => fav.id === movie.id)) {
      favorites = favorites.filter((fav) => fav.id !== movie.id);
      favBtn.style.color = "#a0aec0"; // Reset heart color
    } else {
      favorites.push(movie);
      favBtn.style.color = "#f56565"; // Highlight heart
    }

    saveFavorites(favorites);

    // Re-render favorites list if needed
    renderMovieList(
      favorites,
      favoritesListContainer,
      toggleFavorite,
      handleNoteButtonClick
    );
  }

  function handleNoteButtonClick(movieId) {
    alert(`Handle note creation for Movie ID ${movieId}`);
  }

  renderMovieList(
    movies,
    favoritesListContainer,
    toggleFavorite,
    handleNoteButtonClick
  );
});
