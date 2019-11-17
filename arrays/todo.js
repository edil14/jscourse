
const todo = [
{
    text : 'father',
    complete : true
},
{
    text : 'Mother',
    complete : false
},
{
    text : ' automation',
    complete: false
}
]

const sorttodo = function(todo){
    todo.sort(function(a,b){
        if(!a.complete && b.complete){
            return -1

        } else if(!b.complete && b.complete){
            return 1
        } else {
            return 0
        }

    }

    )
}
 sorttodo(todo)
 console.log(todo)
 console.log('************************************************')
const filterTodo = function(todo){

    return todo.filter( function(todo){
        return ! todo.complete
    }

    )

}


console.log(filterTodo(todo))
console.log('*******************************************************')

const deleteTodo = function(todo,todotitle){

    const index = todo.findIndex(function(todo){
        return todo.text.toLowerCase()===todotitle.toLowerCase()
    }
    )
if(index> -1){
    todo.splice(index,1)

}
}
deleteTodo(todo, 'Mother') 
console.log(todo)

console.log('******************************************')
const findTodo = function(todo,findTitle){
    return todo.filter ( function(todo){
        const findMatchTitle = todo.text.toLowerCase().includes(findTitle.toLowerCase())
        const findMatchBody = todo.text.toLowerCase().includes(findTitle.toLowerCase())
        return findMatchTitle||findMatchBody
    }
    )
}
console.log(findTodo(todo,'father'))



