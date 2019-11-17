let num = 103.941
console.log(num.toFixed(9))

let guess = function (num){

let min =10;
let max =20;
let randomnum =Math.floor(Math.random()*(max-min+1))+min;
console.log(randomnum)

return num === randomnum;

}

console.log(guess(11))