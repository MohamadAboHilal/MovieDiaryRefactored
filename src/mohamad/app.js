import { updateCarousel, populateMovieGrid } from "./ui.js";
import { fetchPopularMovies, fetchMovieDetails } from "./network.js";
import { favoritesManager } from "./localstorage.js";

document.addEventListener("DOMContentLoaded", () => {
  const carouselWrapper = document.getElementById("carousel-wrapper");
  const movieGrid = document.getElementById("movie-grid");

  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjhhODEyNWFjM2JmMmNlOGIzNzE0NWRlNGI3NzZjMiIsIm5iZiI6MTczMzE1NDM2Mi4xOTgwMDAyLCJzdWIiOiI2NzRkZDYzYTA1YWYxMDAxNWZiODQ0OGMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.wDJPDhA6FadKoAJxohE13cB9BISD1In84Z0LjenSQtU",
    },
  };

  const showItem = (index) => {
    const carouselItems = carouselWrapper.querySelectorAll(
      "[data-carousel-item]"
    );
    carouselItems.forEach((item, i) => {
      item.classList.toggle("hidden", i !== index);
    });
  };

  let currentIndex = 0;

  document.getElementById("carousel-prev").addEventListener("click", () => {
    currentIndex =
      currentIndex > 0 ? currentIndex - 1 : carouselWrapper.children.length - 1;
    showItem(currentIndex);
  });

  document.getElementById("carousel-next").addEventListener("click", () => {
    currentIndex =
      currentIndex < carouselWrapper.children.length - 1 ? currentIndex + 1 : 0;
    showItem(currentIndex);
  });

  fetchPopularMovies(url, options)
    .then((movies) => {
      const carouselMovies = movies.slice(0, 5);
      updateCarousel(carouselWrapper, carouselMovies);
      populateMovieGrid(movieGrid, movies, favoritesManager, (id) =>
        fetchMovieDetails(id, options)
      );
    })
    .catch((error) => {
      console.error("Error fetching popular movies:", error);
    });
});
