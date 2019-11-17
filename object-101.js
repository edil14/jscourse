let info = {
    name: 'Gashaw',
    age: 32,
    location: 'Iowa'
}

//console.log(info.name + ' is ' + info.age + ' and lives in ' + info.locatiuon);
//info.age = info.age + 1;
//console.log(info.name + ' is ' + info.age + ' and lives in ' + info.locatiuon);
let adress = {
    name: 'tom',
    age: 42,
    location: 'Maryland'
}

let adressSummary = function(add){
//console.log(add.name + ' is ' + add.age + ' and lives in ' + add.locatiuon)
return {
    summary : add.name + ' is ' + add.age + ' and lives in ' + add.location
}

}

 let info1 = adressSummary(info);
let info2 = adressSummary(adress);

console.log(info1.summary)
console.log(info2.summary)

let convertTemp = function(faranite){

    return {
        faranite: faranite,
        celecius: (faranite -32)*5/9,
        kelvin: (faranite+460)*5/9
    }

}

let result = convertTemp(65);
console.log(result);