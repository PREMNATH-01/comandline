//for in - for of - for loop - for each

//for loop = used for array iteration

var array = [1, 2, 3, "prem", "amar"];
for (var i=0;i<array.length;i++){
    console.log(i)
}

//for in loop : arrays and objects

var obj ={
    name:"prem",
    city:"svg",
}

for (var key in obj){
    console.log(key)
    console.log(obj.name,obj.city)
}

// for of loop 
// most used in array 

var cars =["audi","benz","bmw"]
for (var index of cars){
    console.logO(index)
}
for (var key in cars){
    console.log(key)
    console.log(cars[key])
}

//foreach
//it works on each and every index of an array

let arr =[1,2,3,4,5]
arr.forEach((Element)=> console.log(element*2))