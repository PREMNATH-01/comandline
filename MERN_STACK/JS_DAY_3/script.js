// named or normal function
function foo(){
    console.log("hi")
    return("hello world")
}
// console.log((foo));
//foo();

//actual syntax
// function foo(){
//    return ("hello world")
// }
// foo();

// normal function with parameters

function add(a,b){
    return a+b;
}
console.log((10,10));

//anonymous function:

var mul = function (x,y){
    return x*y;
}
console.log(mul(10,90));

//workables
var arr = [1, 2, 3, 4, 5, 6];

var odd = function(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!=0)
            console.log(arr[i])

    }
}
odd(arr);

var eve = function(arr){
    for(let i=0; i< arr.length;i++){
        if(arr[i]%2==0)
            console.log(arr[i])
    }
}
eve(arr);


var oe = function(arr){
    for(let i=0; i< arr.length;i++){
        if(arr[i]%2==0,1)
                console.log(arr[i])
    }
}
oe(arr);

// IIFE function (used rarely)

(function(){
    console.log("Hi Prem")
})();

(function(n,y){
    console.log(n-y)
})(75,75);

//arrow function
//single line
var comu = (u,v) => u+v
console.log(comu(255,3555));

//multi line
var res = (i,j) => {
    var result = 20
    var total = result+i+j
    return total;
}
console.log(res(10,15));