export function createMovieCard(movie, onFavoriteToggle, onNoteButtonClick) {
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

  // Favorite button
  const favBtn = document.createElement("button");
  favBtn.style.cssText = `
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        color: #a0aec0;
        transition: color 0.3s;
    `;
  favBtn.innerHTML = `<i class="fas fa-heart"></i>`;
  favBtn.addEventListener("click", () => onFavoriteToggle(movie, favBtn));
  card.appendChild(favBtn);

  // Note button
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
  noteBtn.textContent = "Create Note";
  noteBtn.addEventListener("click", () => onNoteButtonClick(movie.id));
  movieInfo.appendChild(noteBtn);

  card.appendChild(movieInfo);

  return card;
}

export function renderMovieList(
  movies,
  container,
  onFavoriteToggle,
  onNoteButtonClick
) {
  container.innerHTML = "";
  movies.forEach((movie) => {
    const card = createMovieCard(movie, onFavoriteToggle, onNoteButtonClick);
    container.appendChild(card);
  });
}
