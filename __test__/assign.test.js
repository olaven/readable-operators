const operators = require("../readable-operators"); 

test('b assigned to 5', () => 
{
    let b = 5; 
    let a = -1; 
    operators.assign(a, b)

    expect(b).toBe(5);
});

test('b assigned to 5', () => 
{
    let b = 5;
    let a = -1;
    operators.assign(a, b)

    expect(b).not.toBe(-1);
});

test('b assigned to 5', () => 
{
    let b = 200;
    let a;
    operators.assign(a, b)

    expect(b).toBe(200);
});

