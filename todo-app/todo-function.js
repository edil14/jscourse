
// get saved todo
let getSavedTodo = function(){
    const todoJson = localStorage.getItem('todo')
     if(todoJson !=null){
      return JSON.parse(todoJson)
     }else{
         return []
     }
}
// save todo
const saveTodo = function(todo){
    localStorage.setItem('todo',JSON.stringify(todo))
}
const removeTodo = function(id){
   const todoIndex = todo.findIndex(function(todos){
      return todos.id ===id
   })

   if(todoIndex >-1){
     todo.splice(todoIndex,1)
   }
}
// check box todo
const toggleTodo = function(id){
    const todos = todo.find(function(todos){
     return todos.id===id
    })
  if(todos!==undefined){
  todos.complete = !todos.complete
  }
}
// render todo
    const renderTodo = function(todo,filters){
        let filtersTodo = todo.filter(
              function(todos){
                  return todos.text.toLowerCase().includes(filters.textfilter.toLowerCase())
              }
          )
          filtersTodo = filtersTodo.filter(function(todos){
              return !filters.hideCompleted
          })
          const incompleteTodo = filtersTodo.filter(function(todos){
              return !todos.complete
          })
  
          document.querySelector('#app').innerHTML =''
          document.querySelector('#app').appendChild(createDOMSummary(incompleteTodo))
      
          filtersTodo.forEach(function(todos){
              document.querySelector('#app').appendChild(createDOM(todos))
  
          })
       }
// create DOM elements individual
const createDOM = function(todos){
       
        const todoEl = document.createElement('div')
        const checkbox = document.createElement('input')
        const textEl = document.createElement('span')
        const removebutton = document.createElement('button')

        checkbox.setAttribute('type','checkbox')
        // how to check ..checkbox checked or not
        checkbox.checked=todos.complete
        todoEl.appendChild(checkbox)
       checkbox.addEventListener('change',function(){
           toggleTodo(todos.id)
           saveTodo(todo)
           renderTodo(todo,filters)
       }) 
       
//setup todo text
textEl.textContent = todos.text
 todoEl.appendChild(textEl)

 removebutton.textContent = 'x'
 todoEl.appendChild(removebutton)

 removebutton.addEventListener('click', function(){
    removeTodo(todos.id)
    saveTodo(todo)
    renderTodo(todo,filters)
})
        return todoEl
    }
//get DOM element for list of summary
const createDOMSummary = function(incompleteTodo){
    const p = document.createElement('h1')
    p.textContent = incompleteTodo.length + ' todo left'
    
    return p
}