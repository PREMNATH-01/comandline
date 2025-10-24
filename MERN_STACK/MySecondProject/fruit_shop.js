let appleprice = 20;
let bananaprice = 10;
let mangoprice = 25;
let shopname = "palamudir";
let isOpen = true;

console.log("welcome to " + shopname);
console.log("are we open? " + isOpen);

// ARITHMETIC OPERATOR: CALCULATING TOATL COST
let totalcost = (5*appleprice) + (3*bananaprice);
console.log("Total price = " +totalcost+ "RS.")

// FUNCTIONS: A REUSABLE CALCULATOR
function calculateTotalCost(apples, bananas, mangoes) {
    return(apples*appleprice) + (bananas*bananaprice) + (mangoes*mangoprice);
}

var customerCost = calculateTotalCost(4,2,1);
console.log("The customer needs to pay = " + customerCost + " Rs.");

customerCost = calculateTotalCost(4,2,1);
console.log("The customer needs to pay = " + customerCost + " Rs.");

// IF ELSE CONDITION : APPLYING FOR DISCOUNTS
if(totalcost >100){
    console.log("You're eligible for a discount!");
    totalcost = totalcost*0.9; // 10% discount
}
else{
    console.log("Not eligible for discount");
}

// LOGICAL Operators: Deciding to open or close

if(totalFruits < 10 || isHoliday) {
    isOpen = false;
    console.log("The shop is closed today.");
}

// FOR LOOP : CHECKING FRUIT STOCK


for(let i=0; i<5; i++){
    bananaCount -= 2;
    console.log("Bananas left : "+ bananaCount);
}

// WHILE LOOP : RESTOCKING apples

while(appleCount < 150){
    appleCount += 30;
    console.log("Apples restocked. Now we have: " + appleCount);
}

// DO - WHILE LOOP: CHECKING SHOP STATUS

do{
    isOpen = false;
    console.log("The shop is closed.")
}while(isOpen);