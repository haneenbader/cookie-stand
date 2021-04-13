'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let container = document.getElementById('container');
function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


let seattle = {
  location: 'seattle',
  minCust: 23,
  maxCust: 65,
  avgPerSale: 6.3,
  ranCust: [],
  totalPerLocation: 0,
  cookPerHour: [],
  calRanNumOfCust: function () {
    for (let i = 0; i < hours.length; i++) {
      this.ranCust.push(randomValue(this.minCust, this.maxCust));
    }
  },
  calNumOfCookPreHour: function () {
    let value = 0;
    for (let i = 0; i < hours.length; i++) {
      value = Math.ceil(this.ranCust[i] * this.avgPerSale);
      this.totalPerLocation = this.totalPerLocation + value;
      this.cookPerHour.push(value);
    }

  },

  render: function () {

    let h2E = document.createElement('h2');
    container.appendChild(h2E);
    h2E.textContent = this.location;
    let unOrderLi = document.createElement('ul');
    container.appendChild(unOrderLi);
    let liE = null;
    for (let i = 0; i < hours.length; i++) {
      liE = document.createElement('li');
      unOrderLi.appendChild(liE);
      liE.textContent = hours[i] + ' : ' + this.cookPerHour[i];
    }
    let totalList = document.createElement('li');
    unOrderLi.appendChild(totalList);
    totalList.textContent = 'total : ' + this.totalPerLocation;
  },

} ;

seattle.calRanNumOfCust();
seattle.calNumOfCookPreHour();
seattle.render();
console.log(seattle);


