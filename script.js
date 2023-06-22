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
