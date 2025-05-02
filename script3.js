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
//NOTE:

//FUNC: renderArchivNotes()

//FUNC: renderTrashNotes()

//FUNC: addNote()










