const operators = require('../operators'); 

test('adds 1 + 2 to equal 3', () => 
{
    expect(operators.add(1, 2)).toBe(3); 
});

test('adds 3 + (-1) to equal 2', () => 
{
    expect(operators.add(3, -1)).toBe(2);
});

test('adds 6 + 11 to equal 17', () => 
{
    expect(operators.add(6, 11)).toBe(17);
});


