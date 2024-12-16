function getFavorites() {
  return JSON.parse(localStorage.getItem("favorites")) || []; //added a code
  //legt einen benannten Eintrag an oder ersetzt
}

function getNoteForMovie(movieId) {
  const notes = JSON.parse(localStorage.getItem("movieNotes")) || {};
  return notes[movieId];
}

function saveNoteForMovie(movieId, noteText) {
  let notes = JSON.parse(localStorage.getItem("movieNotes")) || {};
  if (noteText.trim() === "") {
    delete notes[movieId]; // Remove the note if it's empty
  } else {
    notes[movieId] = noteText.trim();
  }
  localStorage.setItem("movieNotes", JSON.stringify(notes));
}

function toggleFavorite(movie, favBtn) {
  let favorites = getFavorites();

  if (isFavorite(movie.id)) {
    // Remove from favorites
    favorites = favorites.filter((fav) => fav.id !== movie.id);
    favBtn.classList.remove("text-red-500"); // Update the heart color
    removeMovieCard(movie.id);
  } else {
    // Add to favorites
    favorites.push(movie);
    favBtn.classList.add("text-red-500"); // Update the heart color
  }

  // Update localStorage immediately
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

// Check if a movie is in favorites
function isFavorite(movieId) {
  const favorites = getFavorites();
  return favorites.some((fav) => fav.id === movieId);
}

export {
  getFavorites,
  getNoteForMovie,
  saveNoteForMovie,
  toggleFavorite,
  isFavorite,
};
