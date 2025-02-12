let myArray = [1,5,6,7,7,5,5]

function sum(numbers) {
    let sum = 0
    for (let index = 0; index < numbers.length; index++) {
        sum = sum + numbers[index];
    }

    return sum
}

console.log(sum(myArray))