/*
lexical means -> in order or hireachy

function a(){
     function b()
}
 
here function b is lexicaly inside a and a is lexicaly inside global

lexical memrory = local memory + lexical enviroment of its parent

 */

/*
  closurer -> functon along with its lexical scope 
*/

// function add(){
//     let a = 5;
//     sub();
//     function sub(){
//         console.log(a)
//     }
//     return sub;
// }

// let temp  = add();
// temp();
// add()

// let cy = 67

// function add(){
//     var a =0

//     // block scope -> let and const
//     let b = 6
//     let c = 56
// }
// add()

function tem() {
  setTimeout(function () {
    console.log("tet");
  }, 2000);
  console.log("hello");
}

function tel() {
  console.log("hello");
}
tem();
tel();
