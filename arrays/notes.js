//const notes =['Note 1','note 2', 'note 3']

const notes =[
{
title: 'engineer',
body: ' learning java scripy'
},
{
title: 'testing',
body:'testing using java script'
},
{
title: 'Love',
body: 'loving coding using java script'
}
]

const sortNotes = function(notes){
    notes.sort(function(a,b){
        if(a.title.toLowerCase() < b.title.toLowerCase()){
            return -1

        } else if(b.title.toLowerCase() < a.title.toLowerCase()){
            return 1
        } else {
            return 0
        }
    }

    )

}
sortNotes(notes)
console.log(notes)

console.log('*********************************************************************')
const findNote = function(notes,noteTitle){
    return notes.find(function(note,index){
 return note.title.toLowerCase()===noteTitle.toLowerCase()
    })
}

const findNotes = function(notes, query){
   return  notes.filter(function(note,index){
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch||isBodyMatch
    }

    )

}
console.log(findNotes(notes,'te'))
// const findNote = function(notes,noteTitle){
//     const index = notes.findIndex(function(notes,index){
//  return notes.title.toLowerCase()===noteTitle.toLowerCase()
//     })

//     return notes[index]

// }
console.log('***************************************************')
const note = findNote(notes,'Love')
console.log(note)
//console.log(notes.pop())
//notes.push ('note 4')
//console.log(notes.shift())
//console.log(notes.unshift('note1'))

//console.log (notes.length)
//notes[0]
//notes.splice(1,0,' this is second item')
//notes.splice(1,1,' this is second item')
//  notes[1]= 'replace index 1'

// notes.forEach( function (item,index){
//     console.log( index +1 + '.' +item)
//     //console.log(item)
// })
// console.log(notes)
// //counting
// for(let count=0; count<=2; count++){

//     console.log('notes' + '[' + count+ '] = ' + notes[count])
    
// }
 
//console.log(notes.indexOf('note 3'))

// const index = notes.findIndex (function(note,index){

//     return note.title === 'testing'

// })

// console.log(index)