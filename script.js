'use strict';

/*
// //////////////////////////////////////////////////////////////////////
// Default Parameters
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);
*/

/*
// First-Class and Higher-Order Functions
const flight = 'LM234';
const durell = {
  name: 'Durell Mwakulo',
  passport: 34645275,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 34645275) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, durell);
// console.log(flight);
// console.log(durell);

// Is the same as doing...
// const flightNum = flight;
// const passenger = durell;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(durell);
checkIn(flight, durell);
*/

/*
// Functions Accepting Callback Functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);
['Durell', 'Grant', 'Chief'].forEach(high5);
*/

// Functions REturning Functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Durell'); // Hey Durell
greeterHey('Jonas'); // Hey Jonas

greet('Hello')('Durell'); // Hello Durell

// Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hello')('Durell'); // Hello Durell
