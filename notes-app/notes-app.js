let notes = getSavedItem()
    const filters = {
        searchText: '',
        sortBy:'byCreated'
    }
      
  
 renderNotes(notes,filters)

   
document.querySelector('#create-button').addEventListener('click', function(e){
 //e.target.textContent = 'the button is clicked'
 const id = uuidv4()
 const timestamp = moment().valueOf()
 notes.push({
    id: id,
    title:'',
    body:'',
    createdAt: timestamp,
    updatedAt: timestamp
 })
 saveNote(notes)
 //renderNotes(notes,filters)
 location.assign('/notes-app/edit.html#'+id)
}

)

// document.querySelector('#remove-all').addEventListener('click',function(){
//    document.querySelectorAll('.note').forEach(function(note){
//    note.remove()
//    })
// })
document.querySelector('#search-key').addEventListener('input', function(e){
     filters.searchText= e.target.value
     renderNotes(notes,filters)
})
// document.querySelector('#form').addEventListener('submit',function(e){
//     e.preventDefault()
//    console.log(e.target.elements.name.value) 
//    e.target.elements.name.value = ''
// })
//drop down
document.querySelector('#select-by').addEventListener('change', function(e){
    filters.sortBy = e.target.value
    renderNotes(notes,filters)
    

})

window.addEventListener('storage',function(e){
 if(e.key==='notes'){
     notes = JSON.parse(e.newValue)
     renderNotes(notes,filters)
 }
})
// deal with date using moment...https://cdnjs.com/libraries/moment.js
const now = moment()
now.subtract(1,'week').subtract(10, 'days')
console.log(now.format('MMMM Do , YYYY'))
console.log(now.fromNow())
const nowTimestamp = now.valueOf()
console.log(moment(nowTimestamp).toString())
console.log(now.toString())
now.minute(1)
console.log(now.minute())
// challenge 
const date = moment()
date.year(1987).month(6).date(22)
console.log(date.format('MMM Do YY'))
// deal with date
// const date = new Date()

// const timestamp = date.getTime()
// const myDate = new Date(timestamp)
// console.log(myDate.getFullYear())

// // challenge compare and print date
// const dateOne = new Date('January 1 2020 12:01:00')
// const dateTwo = new Date()// show current date
// const dateOneTimestamp = dateOne.getTime()
// const dateTwoTimestamp = dateTwo.getTime()

// if(dateOneTimestamp < dateTwoTimestamp ){
//  console.log(dateOne.toString())
// }else if(dateTwoTimestamp < dateOneTimestamp){
// console.log(dateTwo.toString())
// }

// console.log(date.toString())
// console.log('Year is ' + date.getFullYear())
// console.log('Month is ' + date.getMonth())
// console.log('Day is ' + date.getDate())

// const ps = document.querySelectorAll('p')
// ps.forEach(
//     function(p){
//         p.textContent = '*****************'
//        // console.log(p.textContent)
//        // p.remove()
//     }
// )
// const newparagraph = document.createElement('p')
// newparagraph.textContent = 'This is a newly added element from javascript'
// document.querySelector('body').appendChild(newparagraph)
// document.querySelector('body').appendChild(notes)