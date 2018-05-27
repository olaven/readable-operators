const operators = require('../operators');

test('multipy 3 and 5 to equal 15', () => 
{
    expect(operators.multiply(3, 5)).toBe(15);
});

test('multipy 3 and 0.5 to equal 1.5', () => 
{
    expect(operators.multiply(3, 0.5)).toBe(1.5);
});

test('multipy 20 and -3 to equal -60', () => 
{
    expect(operators.multiply(20, -3)).toBe(-60);
});



