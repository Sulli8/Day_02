// Write your function here ...
let strawberries = 3
let apple = 2
let limes = 2
let peach = 1
let pears = 2
let array_fruits = []
function getBasketContent() {

if(strawberries > 0){
	array_fruits.push('strawberrie')
}
if(apple > 0){
	array_fruits.push('apple')
}
if(limes > 0){
	array_fruits.push('lime')
}
if(peach > 0){
	array_fruits.push('peach')
}
if(pears > 0){
	array_fruits.push('pear')
}
return array_fruits
}

// DO NOT TOUCH, this will do the call your function for you and display the fruits if you've done it well
if (typeof getBasketContent === "function") {
	const fruits = getBasketContent()
	showMyBasket(fruits)
}