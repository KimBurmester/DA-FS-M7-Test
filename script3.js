let allNotes = {
  'notesTitles' : [],
  'notes': [],
  'archivNotesTitles': [],
  'archivNotes': [],
  'trashNotesTitles': [],
  'trashNotes': []
}

//FUNC: renderNotes()
function renderNotes() {
  let contentRef = document.getElementById('content');
  contentRef.innerHTML = "";
  for (let indexNote = 0; indexNote < allNotes.notes.length; indexNote++) {
    contentRef.innerHTML += getNoteTemplate(indexNote);
  }
}
function getNoteTemplate(indexNote) {
  return`<div>class="note">
  <h3>${notesTitles[indexNote]}</h3>
  <p>${notes[indexNote]}</p>
  <button onclick="noteToTrash(${indexNote})" class="btn"></button>
  <button onclick="noteToArchiv(${indexNote})" class="btn"></button>
  </div>
  </div>`;
}





//FUNC: renderArchivNotes()

//FUNC: renderTrashNotes()

//FUNC: addNote()










