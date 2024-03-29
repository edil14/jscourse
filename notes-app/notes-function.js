
// get saved note
let getSavedItem = function(){
    const userJson=localStorage.getItem('notes')
    if(userJson !=null){
       return JSON.parse(userJson)
    }else{
        return []
    }
}
// save note
let saveNote = function(notes){
    localStorage.setItem('notes',JSON.stringify(notes))
}

// remove note
const removeNote = function(id){
  const noteIndex = notes.findIndex(function(note){
     return note.id===id
  })

  if(noteIndex >-1){
      notes.splice(noteIndex,1)
  }
}
// create DOM
const createDOM = function(note){
    const noteEl = document.createElement('div')
    const textEl = document.createElement('a')
    const button = document.createElement('button')
    button.textContent = ' x'
    noteEl.appendChild(button)
    button.addEventListener('click',function(){
        removeNote(note.id)
        saveNote(notes)
        renderNotes(notes,filters)
    })
    if(note.title.length>0){
        textEl.textContent = note.title
    }else{
        textEl.textContent='un named'
    }
    textEl.setAttribute('href','/notes-app/edit.html#'+note.id)
    noteEl.appendChild(textEl)
    return noteEl
    }
    // sort notes from some option in dropdown
    const sortNote = function(notes,sortBy){
        if(sortBy==='byEdited'){
            return notes.sort(function(a,b){
     if(a.updatedAt > b.updatedAt){
            return -1
     }else if(a.updatedAt < b.updatedAt){

        return 1
     } else{
         return 0

     }
            })
        } else if(sortBy==='byCreated'){
            return notes.sort(function(a,b){
                if(a.createdAt>b.createdAt){
                    return -1

                }else if (a.createdAt > b.createdAt){
                    return 1
                } else{
                    return 0
                }

            })

        }else if(sortBy==='alphabetical'){
            return notes.sort(function(a,b){
                if(a.title.toLowerCase() < b.title.toLowerCase()){
                    return -1

                }else if(a.title.toLowerCase()>b.title.toLowerCase()){
                    return 1

                }else{
                    return 0
                }

            })
          
        } else {
            return notes
        }

    }
// render note
const renderNotes = function (notes,filters){
    notes = sortNote(notes, filters.sortBy)
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())

    })
    document.querySelector('#notes').innerHTML =''
    filteredNotes.forEach(function(note){
       const noteEl = createDOM(note)
        document.querySelector('#notes').appendChild(noteEl)

    })
}

// last updated time
const generateEditedTime = function(timestamp){
    return 'Last edited ' + moment(timestamp).fromNow()

}