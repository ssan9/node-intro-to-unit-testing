const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function() {

	// test the normal case
	it('should return \'fizz-buzz\' if the number is divisible by 15', function() {
		//range of normal inputs
		const normalCases = [
			{num: 30, expected: 'fizz-buzz'},
			{num: 60, expected: 'fizz-buzz'},
			{num: 105, expected: 'fizz-buzz'}
		];
	});

	it('should return \'buzz\' if the number is divisible by 5', function() {

		const normalCases = [
			{num:10, expected: 'buzz'},
			{num :35, expected: 'buzz'},
			{num: 50, expected: 'buzz'}
		];
	});

	it('should return \'fizz\' if the number is divisible by 3', function() {

		const normalCases = [
		// should always be key and value pairs in objects
			{num: 6, expected: 'fizz'}, 
			{num: 18, expected: 'fizz'},
			{num: 78, expected: 'fizz'}
		];
	// for each input, `fizzBuzzer` should 
	// produce the expected value
		normalCases.forEach(function(input) {
			const answer = fizzBuzzer(input.num); 
			// used input.num to get the key of objects
			answer.should.equal(input.expected);
		});
	});

	it('should return number if not mult of 3 or 5', function() {
    
    const randomNumbers = [
    // removed square brackets surrounding the numbers
    	1, 
    	2,
    	4, 
    	7
    ];

    randomNumbers.forEach(function(input) {
      fizzBuzzer(input).should.equal(input);
    });
  });

	it('should raise error if args not numbers', function() {
	// range of bad inputs where number is not given
		const badInputs = [
		// if you write num or any other word
		// it would ask you to declare it as a variable, so avoid it
			null,
			undefined,
			'10',
			'num',
			{},
			[],
			true,
			false
		];
	// prove that an error is raised for bad inputs
		badInputs.forEach(function(input) {
			(function() {
				fizzBuzzer(input)
			}).should.throw(Error);
		});
	});
});

