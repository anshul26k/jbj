// setTimeout(function(){
//     console.log("timeout")
// },3000)

function x(y){
    console.log("x");
    y();
}

x(function(){
    console.log("y");
})




// document.getElementById("ak")
// .addEventListener("click",function(){
//     console.log("button is clicked")
// })

// var akElement = document.getElementById("ak");

// akElement.addEventListener("click", function() {
//     console.log("button is clicked");
// });







/*
why callback ? =>  to make asyn operation


callback prob->
callback hell and inversion of control
*/


// let cart = [4,5,5];

// function addtocart(cart,payment,item){
//     cart.push(item)
//     console.log("added to card ur cart is")

//     payment(cart,function(){
//         console.log("list is",cart)
//     })
// }

// addtocart(cart,function(listofitem,showlist){
//     console.log("payement done")
//     showlist()
// },32)










