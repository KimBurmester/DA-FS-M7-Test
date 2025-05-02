let allNotes = {
  'notesTitles' : [],
  'notes': [],
  'archivNotesTitles': [],
  'archivNotes': [],
  'trashNotesTitles': [],
  'trashNotes': []
}

function renderNotes() {
  let contentRef = document.getElementById('content');
  contentRef.innerHTML = "";
  for (let indexNote = 0; indexNote < allNotes.notes.length; indexNote++) {
    contentRef.innerHTML += getNoteTemplate(indexNote);
  }
}
function getNoteTemplate(indexNote) {
  return`<div>class="note">
  <h3>${allNotes.notesTitles[indexNote]}</h3>
  <p>${allNotes.notes[indexNote]}</p>
  <button onclick="noteToTrash(${indexNote})" class="btn"></button>
  <button onclick="noteToArchiv(${indexNote})" class="btn"></button>
  </div>
  </div>`;
}

function getArchiveNoteTemplate(indexArchivNote) {
  return 
  `<div class="note">
    <h3>${allNotes.archivNotesTitles[indexArchivNote]}</h3>
    <p>${allNotes.archivNotes[indexArchivNote]}</p>
    <div>
        <button onclick="archivToTrash(${indexArchivNote})" class="btn"></button>
  <button onclick="archivToNote(${indexArchivNote})" class="btn"></button>
    </div>
  </div>`;
}

function getTrashNoteTemplate(indexTrashNote) {
  return 
  `<div class="note">
    <h3>${allNotes.trashNotesTitles[indexTrashNote]}</h3>
    <p>${allNotes.trashNotes[indexTrashNote]}</p>
    <div>
        <button onclick="deleteNote(${indexTrashNote})" class="btn"></button>
  <button onclick="trashToNote(${indexTrashNote})" class="btn"></button>
    </div>
  </div>`;
}




//FUNC: renderArchivNotes()

//FUNC: renderTrashNotes()

//FUNC: addNote()










