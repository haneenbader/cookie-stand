'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let container = document.getElementById('container');
function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let allCookis =[] ;
function Cookies(location, minCust, maxCust, avgPerSale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgPerSale = avgPerSale;
  this.ranCust = [];
  this.totalPerLocation = 0;
  this.cookPerHour = [];
  //ranCust.push(this);
  allCookis.push(this);
}

let cook1 = new Cookies('Seattle', 23, 65, 6.3);
let cook2 = new Cookies('Tokyo', 3 , 24 , 1.2);
let cook3 = new Cookies('Dubai',11 , 38 , 3.7);
let cook4 = new Cookies('Paris',20 , 38 , 2.3);
let cook5 = new Cookies('Lima',2 , 16 , 4.6);



Cookies.prototype.calRanNumOfCust = function () {
  for (let i = 0; i < hours.length; i++) {
    this.ranCust.push(randomValue(this.minCust, this.maxCust));
  }
};
Cookies.prototype.calNumOfCookPreHour = function () {
  let value = 0;
  for (let i = 0; i < hours.length; i++) {
    value = Math.ceil(this.ranCust[i] * this.avgPerSale);
    this.totalPerLocation = this.totalPerLocation + value;
    this.cookPerHour.push(value);
  }
};
for ( let i=0 ; i<allCookis.length ; i++){
  allCookis[i].calRanNumOfCust();
  allCookis[i].calNumOfCookPreHour();
}
console.log(allCookis);



// let seattle = {
//   location: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgPerSale: 6.3,
//   ranCust: [],
//   totalPerLocation: 0,
//   cookPerHour: [],
//   calRanNumOfCust: function () {
//     for (let i = 0; i < hours.length; i++) {
//       this.ranCust.push(randomValue(this.minCust, this.maxCust));
//     }
//   },
//   calNumOfCookPreHour: function () {
//     let value = 0;
//     for (let i = 0; i < hours.length; i++) {
//       value = Math.ceil(this.ranCust[i] * this.avgPerSale);
//       this.totalPerLocation = this.totalPerLocation + value;
//       this.cookPerHour.push(value);
//     }

//   },

//   render: function () {

//     let h2E = document.createElement('h2');
//     container.appendChild(h2E);
//     h2E.textContent = this.location;
//     let unOrderLi = document.createElement('ul');
//     container.appendChild(unOrderLi);
//     let liE = null;
//     for (let i = 0; i < hours.length; i++) {
//       liE = document.createElement('li');
//       unOrderLi.appendChild(liE);
//       liE.textContent = hours[i] + ' : ' + this.cookPerHour[i];
//     }
//     let totalList = document.createElement('li');
//     unOrderLi.appendChild(totalList);
//     totalList.textContent = 'total : ' + this.totalPerLocation;
//   },

// } ;

// seattle.calRanNumOfCust();
// seattle.calNumOfCookPreHour();
// seattle.render();
// console.log(seattle);


// let tokyo = {
//   location: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgPerSale: 1.2,
//   ranCust: [],
//   totalPerLocation: 0,
//   cookPerHour: [],
//   calRanNumOfCust: function () {
//     for (let i = 0; i < hours.length; i++) {
//       this.ranCust.push(randomValue(this.minCust, this.maxCust));
//     }
//   },
//   calNumOfCookPreHour: function () {
//     let value = 0;
//     for (let i = 0; i < hours.length; i++) {
//       value = Math.ceil(this.ranCust[i] * this.avgPerSale);
//       this.totalPerLocation = this.totalPerLocation + value;
//       this.cookPerHour.push(value);
//     }

//   },

//   render: function () {

//     let h2E = document.createElement('h2');
//     container.appendChild(h2E);
//     h2E.textContent = this.location;
//     let unOrderLi = document.createElement('ul');
//     container.appendChild(unOrderLi);
//     let liE = null;
//     for (let i = 0; i < hours.length; i++) {
//       liE = document.createElement('li');
//       unOrderLi.appendChild(liE);
//       liE.textContent = hours[i] + ' : ' + this.cookPerHour[i];
//     }
//     let totalList = document.createElement('li');
//     unOrderLi.appendChild(totalList);
//     totalList.textContent = 'total : ' + this.totalPerLocation;
//   },

// } ;

// tokyo.calRanNumOfCust();
// tokyo.calNumOfCookPreHour();
// tokyo.render();
// console.log(tokyo);



// let dubai = {
//   location: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgPerSale: 3.7,
//   ranCust: [],
//   totalPerLocation: 0,
//   cookPerHour: [],
//   calRanNumOfCust: function () {
//     for (let i = 0; i < hours.length; i++) {
//       this.ranCust.push(randomValue(this.minCust, this.maxCust));
//     }
//   },
//   calNumOfCookPreHour: function () {
//     let value = 0;
//     for (let i = 0; i < hours.length; i++) {
//       value = Math.ceil(this.ranCust[i] * this.avgPerSale);
//       this.totalPerLocation = this.totalPerLocation + value;
//       this.cookPerHour.push(value);
//     }

//   },

//   render: function () {

//     let h2E = document.createElement('h2');
//     container.appendChild(h2E);
//     h2E.textContent = this.location;
//     let unOrderLi = document.createElement('ul');
//     container.appendChild(unOrderLi);
//     let liE = null;
//     for (let i = 0; i < hours.length; i++) {
//       liE = document.createElement('li');
//       unOrderLi.appendChild(liE);
//       liE.textContent = hours[i] + ' : ' + this.cookPerHour[i];
//     }
//     let totalList = document.createElement('li');
//     unOrderLi.appendChild(totalList);
//     totalList.textContent = 'total : ' + this.totalPerLocation;
//   },

// } ;

// dubai.calRanNumOfCust();
// dubai.calNumOfCookPreHour();
// dubai.render();
// console.log(dubai);


// let paris = {
//   location: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgPerSale: 2.3,
//   ranCust: [],
//   totalPerLocation: 0,
//   cookPerHour: [],
//   calRanNumOfCust: function () {
//     for (let i = 0; i < hours.length; i++) {
//       this.ranCust.push(randomValue(this.minCust, this.maxCust));
//     }
//   },
//   calNumOfCookPreHour: function () {
//     let value = 0;
//     for (let i = 0; i < hours.length; i++) {
//       value = Math.ceil(this.ranCust[i] * this.avgPerSale);
//       this.totalPerLocation = this.totalPerLocation + value;
//       this.cookPerHour.push(value);
//     }

//   },

//   render: function () {

//     let h2E = document.createElement('h2');
//     container.appendChild(h2E);
//     h2E.textContent = this.location;
//     let unOrderLi = document.createElement('ul');
//     container.appendChild(unOrderLi);
//     let liE = null;
//     for (let i = 0; i < hours.length; i++) {
//       liE = document.createElement('li');
//       unOrderLi.appendChild(liE);
//       liE.textContent = hours[i] + ' : ' + this.cookPerHour[i];
//     }
//     let totalList = document.createElement('li');
//     unOrderLi.appendChild(totalList);
//     totalList.textContent = 'total : ' + this.totalPerLocation;
//   },

// } ;

// paris.calRanNumOfCust();
// paris.calNumOfCookPreHour();
// paris.render();
// console.log(paris);



// let lima = {
//   location: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgPerSale: 4.6,
//   ranCust: [],
//   totalPerLocation: 0,
//   cookPerHour: [],
//   calRanNumOfCust: function () {
//     for (let i = 0; i < hours.length; i++) {
//       this.ranCust.push(randomValue(this.minCust, this.maxCust));
//     }
//   },
//   calNumOfCookPreHour: function () {
//     let value = 0;
//     for (let i = 0; i < hours.length; i++) {
//       value = Math.ceil(this.ranCust[i] * this.avgPerSale);
//       this.totalPerLocation = this.totalPerLocation + value;
//       this.cookPerHour.push(value);
//     }

//   },

//   render: function () {

//     let h2E = document.createElement('h2');
//     container.appendChild(h2E);
//     h2E.textContent = this.location;
//     let unOrderLi = document.createElement('ul');
//     container.appendChild(unOrderLi);
//     let liE = null;
//     for (let i = 0; i < hours.length; i++) {
//       liE = document.createElement('li');
//       unOrderLi.appendChild(liE);
//       liE.textContent = hours[i] + ' : ' + this.cookPerHour[i];
//     }
//     let totalList = document.createElement('li');
//     unOrderLi.appendChild(totalList);
//     totalList.textContent = 'total : ' + this.totalPerLocation;
//   },

// } ;

// lima.calRanNumOfCust();
// lima.calNumOfCookPreHour();
// lima.render();
// console.log(lima);
