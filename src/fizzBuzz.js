function Fizzbuzz() { }

Fizzbuzz.prototype.choose = function(number){
  if (this._isDivisible(15, number)) {
    return 'fizzbuzz';
  } else if (this._isDivisible(3, number)) {
    return 'fizz';
  } else if (this._isDivisible(5, number)) {
    return 'buzz';
  } else {
    return number;
  }

}

Fizzbuzz.prototype._isDivisible = function(diviser, number) {
  return (number % diviser === 0 );
}
