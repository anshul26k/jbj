 
// function statement and funtion declaration
function add(para) {
  let a = 4;
  console.log(a);
}
// add(argument)

// function declaration
let x = function (){
    console.log(35)
}
// x()

// anonymous function
// function (){
//     console.log(35)
// }

// names funtion
let y = function sub(){
    console.log(35)
    // console.log(this)
}
// y()
// sub()  -> can't do it


// first class function
/*
 the ability of function to use as value
 they can be passed to funtion and 
 can also be returned from funtion
*/
// Higher order function
/*
 the funtion which takes another function as arguments
 or return a function
*/

// console.log(this)


// filter

let logic = function(it){
        return it*2
}

let arr = [3,5,6,10,12,5,67]

// let res1 = arr.map(logic)
let res1 = arr.map((it)=>it*2)
let res2 = arr.filter((it)=>it%2==0)
let res3 = arr.reduce((acc,cur)=>{
  acc = acc + cur
  return acc
},0)
console.log(res1)
console.log(res2)
console.log(res3)