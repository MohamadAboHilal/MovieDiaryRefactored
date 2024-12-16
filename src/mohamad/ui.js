export function updateCarousel(carouselWrapper, movies) {
  movies.forEach((movie, index) => {
    const carouselElement = document.createElement("div");
    index === 0
      ? carouselElement.classList.add("duration-700", "ease-in-out")
      : carouselElement.classList.add("hidden");
    carouselElement.setAttribute("data-carousel-item", "");

    const carouselImage = document.createElement("img");
    carouselImage.src = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
    carouselImage.classList.add(
      "absolute",
      "block",
      "w-full",
      "h-full",
      "object-cover",
      "top-0",
      "left-0"
    );
    carouselImage.alt = "...";

    carouselElement.appendChild(carouselImage);
    carouselWrapper.appendChild(carouselElement);
  });
}

export function populateMovieGrid(
  movieGrid,
  movies,
  addToFavorites,
  fetchMovieDetails
) {
  movies.forEach((movie) => {
    const movieElement = document.createElement("div");
    movieElement.classList.add(
      "bg-[#22252E]",
      "rounded-lg",
      "shadow-lg",
      "overflow-hidden",
      "relative",
      "flex",
      "flex-col",
      "transition",
      "transform",
      "hover:scale-105",
      "hover:shadow-2xl",
      "m-[20px]",
      "mb-[20px]"
    );

    const movieImage = document.createElement("img");
    movieImage.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    movieImage.classList.add("w-full", "h-64", "object-cover");
    movieElement.appendChild(movieImage);

    const movieInfo = document.createElement("div");
    movieInfo.classList.add(
      "p-4",
      "flex-grow",
      "flex",
      "flex-col",
      "justify-between"
    );

    const movieTitle = document.createElement("h3");
    movieTitle.textContent = movie.title;
    movieTitle.classList.add("text-lg", "font-semibold", "mb-2", "text-white");
    movieInfo.appendChild(movieTitle);

    const movieRating = document.createElement("p");
    movieRating.textContent = `Rating: ${movie.vote_average}`;
    movieRating.classList.add("text-white", "mb-2");
    movieInfo.appendChild(movieRating);

    fetchMovieDetails(movie.id).then((details) => {
      const movieLength = document.createElement("p");
      movieLength.textContent = `Length: ${details.runtime} mins`;
      movieLength.classList.add("text-white", "mb-2");
      movieInfo.appendChild(movieLength);
    });

    movieElement.appendChild(movieInfo);

    const favBtnContainer = document.createElement("div");
    favBtnContainer.classList.add("absolute", "bottom-3", "right-2");

    const favBtn = document.createElement("button");
    favBtn.innerHTML = '<i class="fas fa-heart"></i>';
    favBtn.classList.add("text-white", "hover:text-red-500", "transition");

    if (addToFavorites.isFavorite(movie.id)) {
      favBtn.classList.add("text-red-500");
    }

    favBtn.addEventListener("click", () =>
      addToFavorites.toggle(movie, favBtn)
    );

    favBtnContainer.appendChild(favBtn);
    movieElement.appendChild(favBtnContainer);

    movieGrid.appendChild(movieElement);
  });
}
