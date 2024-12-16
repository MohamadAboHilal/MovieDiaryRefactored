// -------------------------------------------------
import { updateCarousel, populateMovieGrid } from "./mohamad/ui.js";
import { fetchPopularMovies, fetchMovieDetails } from "./mohamad/network.js";
import { favoritesManager } from "./mohamad/localstorage.js";

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

// -------------------------------------------------
// To the Top
$(document).ready(function () {
  var back_to_top_button = [
    '<a href="#top" class="back-to-top" style="',
    "position: fixed; ",
    "bottom: 8px; ",
    "right: 1px; ",
    "padding: 1em; ",
    "z-index: 100; ",
    "color: white; ",
    "text-align: center; ",
    "border-radius: 5px; ",
    "font-family: Arial, sans-serif; ",
    "font-size: 50px; ",
    "text-decoration: none; ",
    "display: none; ",
    '">⇧</a>',
  ].join("");

  $("body").append(back_to_top_button);

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn().addClass("flash-effect");
    } else {
      $(".back-to-top").fadeOut().removeClass("flash-effect");
    }
  });

  // Smooth scroll
  $(".back-to-top").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });
});
// ----------------------------------------
// search
import { setupSearch } from "./Alireza/searchBar/search.js";

document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("default-search");
  const movieGrid = document.getElementById("movie-grid");

  setupSearch(searchForm, searchInput, movieGrid);
});
