# readable-operators
JS operators as functions. May be passed as parameters and improves readability.


## Passing as parameter 

```javascript
    const ro = require("readable-operator"); 

    let applyOperator = (operator, a, b) => 
    {
        return operator(a, b); 
    }

    console.log(applyOperator(ro.add, 10, 5)) // 15
    console.log(applyOperator(ro.subtract, 10, 5)) // 5
```

## Making things readable 

```javascript
    const ro = require("readable-operator"); 

    // The answer was correct 
    if(answer.isCorrect())
    {
        ro.add(score, 1); 
    } else 
    {
        ro.subtract(score, 1); 
    }
```