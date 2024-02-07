// asyn function-> it alwars returns a promise
// if promsie not returned it convert it into promise

// let ad = new Promise(function(resolve,reject){
//     resolve("hello")

// })

// async function add(){
//     return ad
// }

// let temp = add()
// console.log(temp)

// temp.then((it)=>console.log(it))

let pr = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("hello");
  }, 2000);
});

function work() {
  pr.then((it) => console.log(it));
}

// work()

// 2nd way
/*
  await can only be used insdie async
*/

async function sub() {
    console.log("oye");
  let temp = await pr;
  console.log("namaste");
  console.log(temp);
}

sub();

console.log("fuck off");


 