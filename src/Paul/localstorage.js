export function getFavorites() {
  return JSON.parse(localStorage.getItem("favorites")) || [];
}

export function saveFavorites(favorites) {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

export function getNotes() {
  return JSON.parse(localStorage.getItem("movieNotes")) || {};
}

export function saveNoteForMovie(movieId, noteText) {
  const notes = getNotes();

  if (noteText.trim() === "") {
    delete notes[movieId];
  } else {
    notes[movieId] = noteText.trim();
  }

  localStorage.setItem("movieNotes", JSON.stringify(notes));
}
