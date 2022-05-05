export default class NotesAPI {
    static getAllNotes() {
        const notes = JSON.parse(localStorage.getItem('developer-notes') || '[]')

        return notes
    }

    static saveNote(note) {
        const notes = NotesAPI.getAllNotes() || []

        note.id = Math.floor(Math.random() * 1000000)
        note.updated = new Date().toISOString()
        notes.push(note)

        localStorage.setItem('developer-notes', JSON.stringify(notes))
    }

    static deleteNote(id) {

    }
}
