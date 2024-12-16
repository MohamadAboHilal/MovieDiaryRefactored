import { createMovieCard, createNotePopup, removeMovieCard } from "./ui.js";
import {
  getFavorites,
  setFavorites,
  getNoteForMovie,
  saveNoteForMovie,
} from "./localstorage.js";

document.addEventListener("DOMContentLoaded", async () => {
  const favoritesList = document.getElementById("favorites-list");

  // Check if movie is in favorites
  function isFavorite(movieId) {
    const favorites = getFavorites();
    return favorites.includes(movieId);
  }

  // Toggle favorite status for a movie
  function toggleFavorite(movieId, favBtn) {
    let favorites = getFavorites();

    if (isFavorite(movieId)) {
      favorites = favorites.filter((id) => id !== movieId);
      favBtn.classList.remove("text-red-500");
      removeMovieCard(movieId);
    } else {
      favorites.push(movieId);
      favBtn.classList.add("text-red-500");
    }

    setFavorites(favorites);
    renderFavorites(); // Re-render to update the list dynamically
  }

  // Render favorite movies
  async function renderFavorites() {
    const favorites = getFavorites();
    favoritesList.innerHTML = ""; // Clear the existing list

    for (const movieId of favorites) {
      try {
        // Fetch details for each favorite movie
        const movie = await fetchMovieDetails(movieId);

        // Create the movie card
        const card = createMovieCard(
          movie,
          true, // isFavorite
          toggleFavorite,
          (movieId, noteBtn) =>
            createNotePopup(
              movieId,
              noteBtn,
              getNoteForMovie(movieId),
              saveNoteForMovie
            ),
          getNoteForMovie
        );

        // Append card to the list
        favoritesList.appendChild(card);
      } catch (error) {
        console.error(`Error fetching movie details for ID ${movieId}:`, error);
      }
    }
  }

  // Initial render of favorites
  await renderFavorites();
});
