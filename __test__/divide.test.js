const operators = require('../operators');

test('divide 3 by 3 to equal 1', () => 
{
    expect(operators.divide(3, 3)).toBe(1);
});

test('divide 3 by 6 to equal 0.5', () => {

    expect(operators.divide(3, 6)).toBe(0.5);
});

test('divide 10 by -5 to equal -2', () => 
{
    expect(operators.divide(10, -5)).toBe(-2);
});

