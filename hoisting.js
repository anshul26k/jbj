/* let and const ->are also hoisting but in 
    seperate zone (scriot)

    temporal dead zone = time b/t hosting and actual intailzating

*/
// only in var and function -> hoisted in global memort

// what is hoisting ->  allocating memory 

/*

memory phase
 a = undefined
 add = { console.log(n*n) }
 ak = undefined
 temp = undefined

 execution phase
 a = 8
 ak = function
 temp = new exctuin context

 */


 /*
    --------CALL STACK-------
      GLOBAL EXECUTION CONTEXT->FUNCTION EXECUTION CONTEXT
 */



console.log(a)
// let a = 8;
var a = 8;

console.log(add)
temp = add(4)

function add(n){
    console.log(n*n)
}


// imp
console.log(ak)
// tt and ak both are npt function hence cant exectie ther are just variable
// ak(7)
// tt()
var tt = ()=>console.log("Gd")
var ak = function (nt){
    let temp=nt*nt
    console.log(temp)
    add(44)
    return temp
}
ak(4)


/*
console.log(at)  --> can not acces befor intial -> referemce error
let at = 5
*/


