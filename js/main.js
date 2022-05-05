import NotesAPI from "./notesAPI.js";

console.log(NotesAPI.getAllNotes())

NotesAPI.saveNote({
    title: 'New note',
    body: 'This is new note'
})
