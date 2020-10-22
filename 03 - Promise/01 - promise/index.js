// Challenge 1

function sayHello() {
  setTimeout(() => {
    console.log("Hello!");
  }, 1000);
}

// Uncomment the line below when ready
sayHello(); // should log "Hello" after 1000ms


// Challenge 2
var promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Resolved!");
  }, 1000);
}).then((response) => {
  console.log(response);
});

// Should print out "Resolved!"
console.log(promise);


// Challenge 3

promise = new Promise(function(resolve, reject) {
  reject("Rejected!");
}).catch((response) => {
  console.log(response);
});

// Should print out "Reject!"
console.log(promise);


// Challenge 4

promise = new Promise(function (resolve, reject) {
  resolve();
});

// Uncomment the lines below when ready
promise.then(() => console.log('Promise has been resolved!'));
console.log("I'm not the promise!");

/* We know javaScript is a single threaded language. In this code first it will 
 log the normal console.log(`I'm not the promise!`) and the it will log the promise 
 console.log('Promise has been resolved!') because javaScript takes promises as asynchronous
 code and promises are executed after the completion of the main thread or when the call stack 
 become empty. In other words promise does not run in the main thread it goes to the microtask 
 queue and when the call stack goes empty event loop tells the microtask queue to run the code.*/

// Challenge 5
function delay() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

// Uncomment the code below to test
// This code should log "Hello" after 1000ms
delay().then(sayHello);


// Challenge 6
//
// ADD CODE BELOW
var secondPromise = new Promise((resolve) => {
  resolve("Second!");
});
var firstPromise = new Promise((resolve) => {
  resolve(secondPromise);
});

firstPromise.then((promise) => {
  return promise;
}).then((response) => {
  console.log(response);
});


// Challenge 7
const fakePeople = [
  { name: 'Rudolph', hasPets: false, currentTemp: 98.6 },
  { name: 'Zebulon', hasPets: true, currentTemp: 22.6 },
  { name: 'Harold', hasPets: true, currentTemp: 98.3 },
]

const fakeAPICall = (i) => {
  const returnTime = Math.floor(Math.random() * 1000);
  return new Promise((resolve, reject) => {
    if (i >= 0 && i < fakePeople.length) {
      setTimeout(() => resolve(fakePeople[i]), returnTime);
    } else {
      reject({ message: "index out of range" });
    }
  });
};

function getAllData() {
  Promise.all(fakePeople.map((_, i) => fakeAPICall(i)))
  .then((response) => {
    console.log(response);
  });
}