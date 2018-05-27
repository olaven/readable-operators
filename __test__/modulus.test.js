const operators = require('../operators');

test('3 modulus 6 to equal 0', () => 
{
    expect(operators.modulus(6, 3)).toBe(0);
});

test('divide 3 by 32 to equal 3', () => 
{
    expect(operators.modulus(3, 32)).toBe(3);
});

test('divide 2 by 55 to equal 2', () => 
{
    expect(operators.modulus(2, 55)).toBe(2);
});