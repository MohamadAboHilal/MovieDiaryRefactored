export const favoritesManager = {
  getFavorites: () => JSON.parse(localStorage.getItem("favorites")) || [],

  isFavorite: (movieId) => {
    const favorites = favoritesManager.getFavorites();
    return favorites.some((fav) => fav.id === movieId);
  },

  addFavorite: (movie) => {
    const favorites = favoritesManager.getFavorites();
    favorites.push(movie);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  },

  removeFavorite: (movieId) => {
    const favorites = favoritesManager.getFavorites();
    const updatedFavorites = favorites.filter((fav) => fav.id !== movieId);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  },

  toggle: (movie, button) => {
    if (favoritesManager.isFavorite(movie.id)) {
      favoritesManager.removeFavorite(movie.id);
      button.classList.remove("text-red-500");
      button.classList.add("text-white");
    } else {
      favoritesManager.addFavorite(movie);
      button.classList.remove("text-white");
      button.classList.add("text-red-500");
    }
  },
};
