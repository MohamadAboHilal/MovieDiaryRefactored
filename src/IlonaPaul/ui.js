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

  // Add movie details
  const title = document.createElement("h3");
  title.textContent = movie.title;
  title.classList.add("text-white", "text-lg", "font-bold", "p-4");
  card.appendChild(title);

  // Add favorite button
  const favBtn = document.createElement("button");
  favBtn.classList.add("absolute", "top-2", "right-2", "text-gray-300");
  if (isFavorite) favBtn.classList.add("text-red-500"); // Highlight if already favorite
  favBtn.innerHTML = "❤️";
  favBtn.addEventListener("click", () => toggleFavorite(movie.id, favBtn));
  card.appendChild(favBtn);

  // Add notes popup button
  const noteBtn = document.createElement("button");
  noteBtn.classList.add("absolute", "bottom-2", "right-2", "text-gray-300");
  noteBtn.textContent = "📝";
  noteBtn.addEventListener("click", () =>
    createNotePopup(
      movie.id,
      noteBtn,
      getNoteForMovie(movie.id),
      saveNoteForMovie
    )
  );
  card.appendChild(noteBtn);

  return card;
}
