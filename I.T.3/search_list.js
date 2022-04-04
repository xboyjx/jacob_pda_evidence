const numbers = [5, 2, 3, 4, 5, 6, 8, 1, 9]

const getNumbersUnderFive = function(numbers) {
    return numbers.filter(number => number < 5)
 }

result = getNumbersUnderFive(numbers)
console.log(result)