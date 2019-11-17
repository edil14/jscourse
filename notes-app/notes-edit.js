
const titleNote = document.querySelector('#note-title')
const bodyNote = document.querySelector('#note-body')
const removeNoteElement = document.querySelector('#remove-note')
const lastedittime= document.querySelector('#last-edited')
const noteId = location.hash.substring(1)
let notes = getSavedItem()
let note = notes.find(function(note){
    return note.id===noteId
})

if(note===undefined){
    location.assign('/notes-app/index.html')

}

titleNote.value = note.title
bodyNote.value = note.body
lastedittime.textContent = generateEditedTime(note.updatedAt)

titleNote.addEventListener('input', function(e){
    note.title =e.target.value
    note.updatedAt = moment().valueOf()
    lastedittime.textContent = generateEditedTime(note.updatedAt)
    saveNote(notes)
})

bodyNote.addEventListener('input', function(e){
 note.body = e.target.value
 note.updatedAt = moment().valueOf()
 lastedittime.textContent = generateEditedTime(note.updatedAt)
 saveNote(notes)
})
removeNoteElement.addEventListener('click', function(e){
    removeNote(note.id)
    saveNote(notes)
    location.assign('/notes-app/index.html')

})

// storage helps user to update
window.addEventListener('storage', function(e){
    if(e.key==='notes'){
  notes= JSON.parse(e.newValue)
   note = notes.find(function(note){
    return note.id===noteId
})

if(note===undefined){
    location.assign('/notes-app/index.html')

}

titleNote.value = note.title
bodyNote.value = note.body
lastedittime.textContent = generateEditedTime(note.updatedAt)
    }
})
