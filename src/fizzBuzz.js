function Fizzbuzz() { }

Fizzbuzz.prototype.choose = function(number){
  if (number === 3) {
    return 'fizz';
  } else {
    return number;
  }
}
