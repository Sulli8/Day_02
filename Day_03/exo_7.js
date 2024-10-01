fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"];

function getFruitNameFromIndex(index){
    if(index > fruits.length){
        return null
    } else {
        return fruits[index]
    }

}

let result = getFruitNameFromIndex(1)
displayResult(result)