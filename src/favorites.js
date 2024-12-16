export function getFavorites() {
  return JSON.parse(localStorage.getItem("favorites")) || [];
}

export function createMovieCard(movie) {
  console.log(`Creating card for movie: ${movie.title}`);
}
