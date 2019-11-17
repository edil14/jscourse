let greetUser = function(){
    console.log('Welcome users');
}

greetUser();

let square = function (num){
let result = num*num;
return result;
}
let value = square(3);
console.log(value);

let faranite = function(celecius){

    let val = (celecius -32)*5/9;
    return val;
}
let converted = faranite(32);
let con2 = faranite(68);
console.log(converted);
console.log(con2);
