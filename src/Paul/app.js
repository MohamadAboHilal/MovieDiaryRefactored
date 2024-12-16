import { createMovieCard, createNotePopup, removeMovieCard } from "./ui.js";
import {
  getFavorites,
  setFavorites,
  getNoteForMovie,
  saveNoteForMovie,
} from "./localstorage.js";

document.addEventListener("DOMContentLoaded", () => {
  const favoritesList = document.getElementById("favorites-list");

  function isFavorite(movieId) {
    const favorites = getFavorites();
    return favorites.some((fav) => fav.id === movieId);
  }

  function toggleFavorite(movie, favBtn) {
    let favorites = getFavorites();

    if (isFavorite(movie.id)) {
      favorites = favorites.filter((fav) => fav.id !== movie.id);
      favBtn.classList.remove("text-red-500");
      removeMovieCard(movie.id);
    } else {
      favorites.push(movie);
      favBtn.classList.add("text-red-500");
    }

    setFavorites(favorites);
  }

  function renderFavorites() {
    const favorites = getFavorites();
    favoritesList.innerHTML = ""; // Clear existing content
    favorites.forEach((movie) => {
      const card = createMovieCard(
        movie,
        isFavorite(movie.id),
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
      favoritesList.appendChild(card);
    });
  }

  renderFavorites();
});
