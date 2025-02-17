Object.prototype.chai = function(){
    console.log("A prototype is made under Objects")
}

const Obj = {
    name: " raj",
    friday: "14 Feb"
}

Obj.chai()
// Dop Operator objects ke properties ke access karne mein use hota hain.
const array = [1,2,3,4]
const string = "String"
const Object = {
    first: "First",
    second: "Second",
    third: "Third"
}

//Use can access this dot operator in all the data types. How and why ?
// Prototype is nothing but an object.
// Jab bhi variable banaoge, toh JS copy kar degi uss data type ke according prototype function.
//arrray.__proto__ = Array.prototype
//For Eg => Father= {fair, 6ft,pointed nose, brown eyes }
//Father.prototype ={skin, height, nose, eyes color }
//Child.__proto__ = Father.prototype

