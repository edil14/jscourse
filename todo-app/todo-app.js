const todo =  getSavedTodo()
     const filters ={
        
         textfilter:'',
         hideCompleted: false
     }
    renderTodo(todo,filters)
    // const p = document.createElement('h1')
    // p.textContent = incompleteTodo.length + ' todo left'
    // document.querySelector('body').appendChild(p)

    // todo.forEach( function(todos){
    //     const ps = document.createElement('p')
    //     ps.textContent = todos.text
    //     document.querySelector('body').appendChild(ps)
    // }
    // )
    document.querySelector('#click-button').addEventListener('click', function(e){
          e.target.textContent = 'button clicked'
    }

    )
    // document.querySelector('#remove-all').addEventListener('click', function(){
    //     document.querySelectorAll('.todo').forEach(function(todo){
    //       todo.remove()
    //       console.log('work')
    //     })
    // })
    document.querySelector('#text-box').addEventListener('input', function(e){
              filters.textfilter = e.target.value
              renderTodo(todo,filters)

    })
 document.querySelector('#newtodo').addEventListener('submit', function(e){
        e.preventDefault()
        todo.push({
            id: uuidv4(),
            text: e.target.elements.name.value,
            completed: false
        })
        saveTodo(todo)
        renderTodo(todo,filters)
      //console.log(e.target.elements.name.value)  
      e.target.elements.name.value =''
  
    })
document.querySelector('#hide-completed').addEventListener('change', function(e){
    filters.hideCompleted = e.target.checked
    renderTodo(todo,filters)

})
// const p= document.querySelectorAll('p')

// p.forEach(
//     function(ps){
//         if(ps.textContent.includes('java')){
//             ps.remove(ps)
//         }
       
//     }
// )
