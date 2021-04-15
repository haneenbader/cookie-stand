'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let container = document.getElementById('container');
let table = document.createElement('table');
container.appendChild(table);


function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


let allCookis = [];
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


let seattle = new Cookies('Seattle', 23, 65, 6.3);
let tokyo = new Cookies('Tokyo', 3, 24, 1.2);
let dubai = new Cookies('Dubai', 11, 38, 3.7);
let paris = new Cookies('Paris', 20, 38, 2.3);
let lima = new Cookies('Lima', 2, 16, 4.6);



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



function headerRow() {
  let firstRow = document.createElement('tr');
  table.appendChild(firstRow);
  let emptyCell = document.createElement('th');
  firstRow.appendChild(emptyCell);
  let thEl = null;
  for (let i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    firstRow.appendChild(thEl);
    thEl.textContent = hours[i];
  }
  let dailyOur = document.createElement('th');
  firstRow.appendChild(dailyOur);
  dailyOur.textContent = 'Daily Location Total';
}


function footerRow() {
  let lastRow = document.createElement('tr');
  table.appendChild(lastRow);

  let firstCell = document.createElement('th');
  lastRow.appendChild(firstCell);
  firstCell.textContent = 'Total';

  let sum = 0; let tdEl = null; let megaTotal = 0;
  for (let i = 0; i < hours.length; i++) {
    sum = seattle.cookPerHour[i] + tokyo.cookPerHour[i] +
      dubai.cookPerHour[i] + paris.cookPerHour[i] +
      lima.cookPerHour[i];
    tdEl = document.createElement('td');
    lastRow.appendChild(tdEl);
    tdEl.textContent = sum;
    megaTotal = megaTotal + sum;

  }

  let lastCell = document.createElement('th');
  lastRow.appendChild(lastCell);
  lastCell.textContent = megaTotal;


}

Cookies.prototype.render = function () {
  let dataRow = document.createElement('tr');
  table.appendChild(dataRow);

  let locationName = document.createElement('th');
  dataRow.appendChild(locationName);
  locationName.textContent = this.location;

  let tdEl = null;
  for (let i = 0; i < this.cookPerHour[i]; i++) {
    tdEl = document.createElement('td');
    dataRow.appendChild(tdEl);
    tdEl.textContent = this.cookPerHour[i];
  }
  let dailyTotal = document.createElement('th');
  dataRow.appendChild(dailyTotal);
  dailyTotal.textContent = this.totalPerLocation;
};




headerRow();
for (let i = 0; i < allCookis.length; i++) {
  allCookis[i].calRanNumOfCust();
  allCookis[i].calNumOfCookPreHour();
  allCookis[i].render();
}
footerRow();

// console.log(allCookis);

const form = document.getElementById('cookeForm');
form.addEventListener('submit', handlesubmitting);

function handlesubmitting(event) {
  event.preventDefault();
  let location = event.target.locationName.value;
  let minCust = event.target.minCust.value;
  minCust = parseInt(minCust);
  let maxCust = event.target.maxCust.value;
  maxCust = parseInt(maxCust);
  let avgPerSale = event.target.avgPerSale.value;
  avgPerSale = parseInt(avgPerSale);


  let newLocation = new Cookies(location, minCust, maxCust, avgPerSale);
  newLocation.calRanNumOfCust();
  newLocation.calNumOfCookPreHour();
  newLocation.render();
}

