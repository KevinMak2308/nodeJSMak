//Hoisting, the variable goes before the method. Calling add in the function.

console.log(add(2, 8));

function add(x, y) {
    return x +y;
}

//anonymous function after the equal sign

const addInAVariable = function (x, y) {
    return x + y;
}

console.log(addInAVariable(2, 5));

//Lamda function, rather than {} you can have the return value after => x + y;

const addArrowFunction = (x ,y) => 35 + 2; {
    //return x + y;
}

console.log(addArrowFunction());

//Callback Function. doActionWithSomeone takes two parameters, 
//and you add two values to the parameters, which you then call.

function doActionWithSomeone(anyFunctionReference, name) {
anyFunctionReference(name);
}

const running = (name) => console.log(`${name} is running`);

doActionWithSomeone(running, "Kev");

function doAnotherActionWithSomeone(functionReference, name) {
    functionReference(name);
}

doAnotherActionWithSomeone((name) => console.log(`${name} is fishing`), 'Kevin');

function addTwoNumberFunctions(functionReference, name) {
    let action = " is drinking";
    functionReference(name + action)
}

addTwoNumberFunctions((name) => console.log(`${name} and fishing`), 'Kev');