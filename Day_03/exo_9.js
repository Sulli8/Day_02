let a = 2 
let b = 3
let operator = "3 + 4"

function split_operation(operator){
    operator_list = operator.split(" ")
    
    if(typeof parseInt(operator_list[0]) == "number"){
    		operator_list[0] = "N"
    }
     if(typeof operator_list[1] == "string"){
    		operator_list[1] = "O"
    }
     if(typeof parseInt(operator_list[2]) == "number"){
    		operator_list[2] = "N"
    }
    return operator_list
   
}

console.log(split_operation(operator))