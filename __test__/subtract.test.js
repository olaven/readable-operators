const operators = require("../readable-operators"); 

test('adds 1 - 2 to equal -1', () => 
{
    expect(operators.subtract(1, 2)).toBe(-1);
});

test('adds 3 - (-1) to equal 4', () => 
{
    expect(operators.subtract(3, -1)).toBe(4);
});

test('adds 6 - 11 to equal -5', () => 
{
    expect(operators.subtract(6, 11)).toBe(-5);
});


