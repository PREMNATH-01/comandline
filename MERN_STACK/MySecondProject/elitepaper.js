var tissuesPrice = 100;
var cartonPrice = 101.23;
var corrugationBoxesPrice = 2000

var order_num = 30;
let mName = "elite paper recycling";

console.log("Welcome to " + mName);

let cusName = "Prem";
let showCusName = true; // boolean flag

if (showCusName) {
    console.log("Customer Name: " + cusName);
} else {
    console.log("Customer name is hidden.");
}


function epr() {
    
    var carton = 2*cartonPrice;
    var tissue = 5*tissuesPrice;

    if (carton === 202.46) {
        return "Order Confirm order num 30";
    }
     else if (tissue === 500){
         return "Order Confirm";
     }   
   
    else {
        return "cancel";
    }
}
var order = epr();
console.log(order);




if(order_num <= 30){
    console.log("Dear Customer, Your Order ready to dispatch")
}
    
else if(order_num <= 32){
    console.log( "Dear Customer, You will be receive your order details as soon as possible")
}

else{
    console.log("Dear Customer, You have facing any issues to find your order. Please be get in touch with our support")
}
