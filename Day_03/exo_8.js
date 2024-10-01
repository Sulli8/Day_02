fruits = ["Blackberries", "Mango", "Kiwi", "Peaches", "Strawberry"];

function getFruitNameFromIndex(index){
    if(index > fruits.length){
        return null
    } else if(typeof index == "string"){
        return index
    } else if(typeof index == "number"){
    return fruits[index]
    }

}

let result = getFruitNameFromIndex("Blackberries")
displayResult(result)