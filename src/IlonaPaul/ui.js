export function renderFavoriteMovies(favorites, container) {
  favorites.forEach((movie) => {
    const card = createMovieCard(movie);
    container.appendChild(card);
  });
}

export function createMovieCard(
  movie,
  isFavorite,
  toggleFavorite,
  createNotePopup,
  getNoteForMovie
) {
  const card = document.createElement("div");
  card.classList.add(
    "bg-gray-800",
    "rounded-lg",
    "shadow-lg",
    "overflow-hidden",
    "relative",
    "flex",
    "flex-col",
    "h-full",
    "m-[20px]",
    "mb-[20px]"
  );
  card.setAttribute("data-movie-id", movie.id);

  // rest of create function

  return card;
}

export function createNotePopup(
  movieId,
  noteBtn,
  existingNote,
  saveNoteForMovie
) {
  const notePopup = document.createElement("div");
  // rest of note function
}

export function removeMovieCard(movieId) {
  const card = document.querySelector(`[data-movie-id="${movieId}"]`);
  if (card) {
    card.remove();
  }
}
