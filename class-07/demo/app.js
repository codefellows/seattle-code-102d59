console.log('I have loaded!!');

// function declaration
function sayHello() {
  console.log('Hello Class :)');
}

// invoke my function!
// sayHello();

// parameters are variable defined in the function declaration.
function sayName(name) {
  // variable created inside of a function declaration.
  let greeting = 'say name: ' + name;

  console.log('INNER SCOPE', greeting);
  return greeting; // makes the greeting value accessible to the outer scope of our program
}

// arguments are the values assigned at invocation.
let value = sayName('Jacob');
console.log(value);
sayName('Patrick');
sayName('Lisa');

let user = '';

function getUserName() {
  user = prompt('What is your name?');
}

getUserName();
if (!user) {
  getUserName();
}
document.write(user);

