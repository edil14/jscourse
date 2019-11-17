
let student = function(name,mid,final){

    let total = mid + final;
    
    let lettergrade ='';

    if (total>=90){
        
      lettergreade ='A'
    } else if(total >= 80){
        lettergrade ='B';
      

    }else if(total >= 70){
        lettergrade = 'C'
       
    }else {
        console.log( name + ' Failed');
    }

    return name + ' Got grade of ' + lettergrade;
}


let value = student('gashaw',30,40);
console.log(value);

