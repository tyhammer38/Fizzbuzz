function Fizzbuzz(number){
    if(number % 3 === 0 && number % 5 === 0){
        return FizzBuzz;
    }
    if(number % 3 === 0){
        return Fizz;
    }
    if(number % 5 === 0){
        return Buzz;
    }
}

console.log(Fizzbuzz(3));
console.log(Fizzbuzz(46));
console.log(Fizzbuzz(19));

for(i = 0; i < 100; i++;){
    console.log(Fizzbuzz(i));
}