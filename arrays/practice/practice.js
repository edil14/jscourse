
const infos = [
    { 
        title: 'Engineer',
        body: 'what engineer do'
    },
   {
       title: ' Doctor',
       body: ' what doctor do'
   },
  {
    title:' Tester',
    body: ' what tester do'

  } 
]

const filters = {
    searchFilters:''
}
const renderFilters = function(infos,filters){
    const getinfos = infos.filter(function(info){
        return info.title.toLowerCase().includes(filters.searchFilters.toLowerCase())

    })

     document.querySelector('#infos').innerHTML=''
    getinfos.forEach(function(info){
      const element = document.createElement('p')
          element.textContent = info.title
        document.querySelector('#infos').appendChild(element)
    })

}

renderFilters(infos,filters)
// document.querySelector('#button').addEventListener('click', function(e){
// e.target.textContent = "clicked"
// })

// document.querySelector('#removebutton').addEventListener('click',function(){
//     document.querySelectorAll('.class').forEach(function(x){
//         x.remove()

//     })
// })

document.querySelector('#name').addEventListener('input',function(e){
  filters.searchFilters = e.target.value
  renderFilters(infos,filters)
})