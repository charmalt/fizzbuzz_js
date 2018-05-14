describe('Fizzbuzz', function() {

  var fizzbuzz = new Fizzbuzz();

  describe('should return number back', function() {
    it('returns 1 when 1', function() {
     expect(fizzbuzz.choose(1)).toEqual(1);
    });

    it ('returns 4 when 4', function() {
      expect(fizzbuzz.choose(4)).toEqual(4);
    });
  });

  describe('should return fizz', function() {
    it('returns fizz when divisible by 3', function(){
      expect(fizzbuzz.choose(3)).toEqual('fizz');
    });
  });

  describe('should return buzz', function() {
    it('returns buzz when divisible by 5', function() {
      expect(fizzbuzz.choose(5)).toEqual('buzz');
    });
  });

  describe('should return fizzbuzz', function() {
    it('returns fizzbuzz when dvisible by both 3 and 5', function() {
      expect(fizzbuzz.choose(15)).toEqual('fizzbuzz');
    });
  });

});
