const numbers = [5, 2, 3, 4, 5, 6, 8, 1, 9, 34];

sortNumbers = function(numbers){
    return numbers.sort((a,b) => a-b);
};

result = sortNumbers(numbers);
  
console.log(result);