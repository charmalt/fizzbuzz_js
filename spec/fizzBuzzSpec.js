describe('Fizzbuzz', function() {

  var fizzbuzz = new Fizzbuzz();

  describe('should return number back', function() {

    it('returns 1 when 1', function() {

     expect(fizzbuzz.choose(1)).toEqual(1);
    });

  });

});
