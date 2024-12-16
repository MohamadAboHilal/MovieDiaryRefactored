//Hier Funktionen reinschreiben die abrufbar sind, dass sie exportiert werden können
//die sollen aufgerufen werden wenn man auf die journalseite kommt

import { getFavorites, createMovieCard } from "./favorites.js";

document.addEventListener("DOMContentLoaded", () => {
  const favorites = getFavorites();
  favorites.forEach((movie) => createMovieCard(movie));
});
