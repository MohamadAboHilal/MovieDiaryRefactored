import { renderMovieList } from "./ui.js";
import { fetchMovies } from "./network.js";
import { getFavorites, saveFavorites, saveNoteForMovie } from "./storage.js";

// Inject HTML main
app.innerHTML = `
        <main>
            <div style="max-width: 1200px; margin: 0 auto; padding: 2rem;">
                <h2 style="font-size: 1.875rem; font-weight: 600; color: white; margin-bottom: 1.5rem;">My Favorite Movies</h2>
                <div id="favorites-list" style="display: grid; grid-template-columns: repeat(1, 1fr); gap: 1.5rem;">
                    <!-- Favorite movie cards appear here-->
                </div>
            </div>
        </main>
    `;
