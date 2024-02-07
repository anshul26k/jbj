
// rest operator covert infinite arg into array
function add(...arg){
    console.log(arg)
}
add(1,2,3,4)


function sub(a,b,c){
    console.log(a,b,c)
}

let ar = [1,2,4]

sub(...ar)
