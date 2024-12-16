import { fetchMovieDetails } from "../mohamad/network.js"; // needs to get movie from main
import { createMovieCard, createNotePopup, removeMovieCard } from "./ui.js";
import {
  getFavorites,
  setFavorites,
  getNoteForMovie,
  saveNoteForMovie,
} from "./localstorage.js";

document.addEventListener("DOMContentLoaded", async () => {
  const favoritesList = document.getElementById("favorites-list");

  // check weather favorite or not
  function isFavorite(movieId) {
    const favorites = getFavorites();
    return favorites.includes(movieId);
  }

  // favorite status
  function toggleFavorite(movieId, favBtn) {
    let favorites = getFavorites();

    if (isFavorite(movieId)) {
      //
      favorites = favorites.filter((id) => id !== movieId);
      favBtn.classList.remove("text-red-500");
      removeMovieCard(movieId);
    } else {
      favorites.push(movieId);
      favBtn.classList.add("text-red-500");
    }

    setFavorites(favorites);
  }

  // favorite movies
  async function renderFavorites() {
    const favorites = getFavorites();
    favoritesList.innerHTML = "";

    for (const movieId of favorites) {
      try {
        // get details for movie
        const movie = await fetchMovieDetails(movieId);

        // create card for movie
        const card = createMovieCard(
          movie,
          true,
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

        // Append to list
        favoritesList.appendChild(card);
      } catch (error) {
        console.error(`Error fetching movie details for ID ${movieId}:`, error);
      }
    }
  }

  // render on page
  await renderFavorites();
});
