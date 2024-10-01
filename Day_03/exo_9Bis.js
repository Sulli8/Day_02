let a = 2 
let b = 3
let operator = "3 + 4"

function split_operation(operator){
    operator_list = operator.split(" ")

    operator = operator_list[1]
    a = parseInt(operator_list[0])
    b = parseInt(operator_list[2])
    let result;
   
    switch (operator) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "/":
            if (b === 0) {
                return "Can't divide by 0";
            } else {
                result = a / b;
            }
            break;
        case "*":
            result = a * b;
            break;
        default:
            return "Erreur";
    }

    return result
   
}

console.log(split_operation(operator))