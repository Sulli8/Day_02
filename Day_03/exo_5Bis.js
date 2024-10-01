// Write your function here ...

let array_fruits = []
let number_fruits = 0
function getBasketContent(strawberries,apple,limes,peach,pears) {

if(strawberries > 0){
	number_fruits+=strawberries
}
if(apple > 0){
	number_fruits+=apple
}
if(limes > 0){
	number_fruits+=limes
}
if(peach > 0){
	number_fruits+=peach
}
if(pears > 0){
	number_fruits+=pears
}
console.log(number_fruits+ " fruit(s) selected")
return array_fruits
}

// DO NOT TOUCH, this will do the call your function for you and display the fruits if you've done it well
if (typeof getBasketContent === "function") {
	const fruits = getBasketContent(2,3,1,2,1)
	showMyBasket(fruits)
}

//To test your function copy and paste the code from the last fiddle, and adapt it to fit the needs of this exercise.

//Being able to read, understand and adapt code is essential !