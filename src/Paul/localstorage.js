export function getFavorites() {
  return JSON.parse(localStorage.getItem("favorites")) || [];
}

export function setFavorites(favorites) {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

export function getNoteForMovie(movieId) {
  const notes = JSON.parse(localStorage.getItem("movieNotes")) || {};
  return notes[movieId];
}

export function saveNoteForMovie(movieId, noteText) {
  let notes = JSON.parse(localStorage.getItem("movieNotes")) || {};
  if (noteText.trim() === "") {
    delete notes[movieId];
  } else {
    notes[movieId] = noteText.trim();
  }
  localStorage.setItem("movieNotes", JSON.stringify(notes));
}
