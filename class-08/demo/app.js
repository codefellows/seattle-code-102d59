console.log('JS is loaded!');

// console.log 6 times
// This code is not DRY????
// console.log('Hello!');
// console.log('Hello!');
// console.log('Hello!');
// console.log('Hello!');
// console.log('Hello!');
// console.log('Hello!');

for (let i = 0; i < 6; i++) {
  console.log('hello there');
}

// for loop syntax
let numberOfHellos = prompt('How many Hellos would you like to see?');
for (let i = 0; i < numberOfHellos; i++) {
  // here goes code to be repeated.
  document.write('<p>Hello! '+ i + '</p>');
}

let user = 'Jacob';
// while (!user) {
//   user = prompt('Who are you?');
// }

// do {
//   user = prompt('Who are you?');
// } while(!user);

// document.write("<p>" + user + "</p>");

let username = '';
while (username.length < 4 || username.length > 10) {
  username = prompt('Give me a username');
}