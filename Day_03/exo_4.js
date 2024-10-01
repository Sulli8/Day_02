// Your code here...
let a = 2
let b = 4
let action = "sub"
function addition(){
return a + b
}

function soustraction(){
	return a - b
}

function calculator(){
if(action == "sub"){
return soustraction()
}
if(action == "addition"){
return addition()
}
}
