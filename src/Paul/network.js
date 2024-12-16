export async function fetchMovies(apiUrl) {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Network error! Status code ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch movies:", error);
    return [];
  }
}
