/*
 why promise?
 we can use callback funtion for async operations 
 but we have a prob there becose we may lose control of code
 because its now the responsibilty of api to call funtion
 which he may have or not called or called twice

 what is promise?
 empty object {value:undefine} which will take its vlaue in future
  then we can attack callback function

  promise if immutble


  1) A placeholed for furte vlaue
  2) container for aync operation
  3) A object which represtn evental completion or
     failure of asyn operation
*/

let cart = [3,4,5,7]

 // createorderid(cart) -> procedtopayemrt(orderid);


function procedtopayemrt(temp){
    console.log("paye compe")
}

 function createorderid(temp){
    console.log("id created")
    let id = temp[0];
     return id
}


// createorderid(cart,function(orderid){
//     procedtopayemrt(orderid)
// })

/*
  temp is empty object 
*/


// let temp = new Promise((resolve,reject)=>{ 
//                let id = createorderid(cart);
//                resolve(id)
// }).then(function (it){
//              procedtopayemrt(it)
// })
// console.log(typeof temp)
// console.log("sdfs")
// console.log("Sfs")
// console.log(typeof temp)

let temp = fetch("https://api.github.com/users/anshul26k")

temp.then((it)=>console.log(it))
console.log(temp)