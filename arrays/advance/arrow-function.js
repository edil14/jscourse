const square = (num)=> num*num
console.log(square(5))

const people = [{
    name: 'Gashaw',
    age: 32
},
{
    name:'Tom',
    age:25
},
{
   name:'love',
   age:22 
}]

const under30 = people.filter((person)=>person.age < 30)
console.log(under30)

const findage22= people.find((person)=>person.age===22)
console.log(findage22.name)
