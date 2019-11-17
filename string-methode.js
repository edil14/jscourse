let name = ' gashaw b'
//length
console.log(name.length);
//upper case
console.log(name.toUpperCase())
//password
let password = '123abdfgpwopassword'
console.log(password.includes('password'))
//MDN String  ...to know about string methode in java script

let isValidPassword = function(pass){
    return pass.length >=8 && pass.includes('password');

}

console.log(isValidPassword('asd12'))
console.log(isValidPassword('asd1234password'))