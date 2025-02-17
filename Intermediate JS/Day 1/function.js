Function.prototype.describe = function () {
    console.log(`Function ${this.name}`)
}

function greet(name) {
    return `Hello ${name}`
}

greet("Raj").describe;

function masalaChai(){

}

masalaChai.describe(); // It will publish name of function. 
//Function Declaration
function add(a,b){
    return a + b;
}

//Function Expression 
const sub = function (a,b){
    return a -b;
}

// arrow function

const multiply = (a,b) => { return a*b}

// First Class Function 

function applyOperation(a,b,operation){
    return operation(a,b)
}



const result = applyOperation(5,4,(x,y) => x/y)

function createCounter (){
    let count = 0;
    return function (){
        count++;
        return count
    }
}

(function (){
    console.log("i call myself")
})
()()