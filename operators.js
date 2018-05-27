/**
 * Javascrips operators as functions 
 */
module.exports = 
{
    /**
     * Assigns a first parameter to second 
     */
    assign : (a, b) => 
    {
        a = b; 
    }, 

    /**
     * Add two numbers 
     * @param a first number 
     * @param b second number
     */
    add : (a ,b) => 
    {
        return a + b; 
    },

    /**
     * Subtract two numbers 
     * @param a first number 
     * @param b second number
     */
    subtract: (a, b) => 
    {
        return a - b;
    }, 

    /**
     * Multiply two numbers 
     * @param a first number 
     * @param b second number
     */
    multiply: (a, b) => 
    {
        return a * b;
    }, 

    /**
     * Divide two numbers 
     * @param a first number 
     * @param b second number
     */
    divide: (a, b) => {
        return a / b;
    }, 

    /**
     * Modulus (remainder) of two numbers 
     * @param a first number 
     * @param b second number
     */
    modulus: (a, b) => {
        return a % b;
    }
}