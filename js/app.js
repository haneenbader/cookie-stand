'use strict';

const seattle = {
  minCust:23,
  maxCust:65,
  avgCookie:6.3,
  avgCustPerHr:[],
  cookPurchEachHr:[],
  rand:function () {
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  },
  avgCust: function(){
    for(let i=0 ; i < 14 ; i++){
      this.avgCustPerHr[i]=this.rand();
      this.cookPurchEachHr[i]=Math.floor(this.avgCustPerHr[i]*this.avgCookie);
    }
  },

};
seattle.avgCust();


let container=document.getElementById('container');
let locationName=document.createElement('h1');
container.appendChild(locationName);
locationName.textContent='Seattle';

let unorderedList=document.createElement('ul');
container.appendChild(unorderedList);

let clock=5;
let list='';
let amPm='';
let total=0;

for(let i =0 ; i<15 ; i++){
  list=document.createElement('li');
  unorderedList.appendChild(list);
  if (clock < 12 ){
    clock++;
  }else{
    clock=1;
  }
  if(clock < 12 && i<6){
    amPm='am';
  }
  if(i>=6){
    amPm='pm';
  }
  if(i<14){
    list.textContent=`${clock}${amPm}: ${seattle.cookPurchEachHr[i]}`;
    total=total+seattle.cookPurchEachHr[i];
  }else{
    list.textContent=`total:${total}`;
  }
}


const Tokyo = {
  minCust:3,
  maxCust:24,
  avgCookie:1.2,
  avgCustPerHr:[],
  cookPurchEachHr:[],
  rand:function () {
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  },
  avgCust: function(){
    for(let i=0 ; i < 14 ; i++){
      this.avgCustPerHr[i]=this.rand();
      this.cookPurchEachHr[i]=Math.floor(this.avgCustPerHr[i]*this.avgCookie);
    }
  },

};
Tokyo.avgCust();


container=document.getElementById('container');
locationName=document.createElement('h1');
container.appendChild(locationName);
locationName.textContent='tokyo';

unorderedList=document.createElement('ul');
container.appendChild(unorderedList);

clock=5;
list='';
amPm='';
total=0;

for(let i =0 ; i<15 ; i++){
  list=document.createElement('li');
  unorderedList.appendChild(list);
  if (clock < 12 ){
    clock++;
  }else{
    clock=1;
  }
  if(clock < 12 && i<6){
    amPm='am';
  }
  if(i>=6){
    amPm='pm';
  }
  if(i<14){
    list.textContent=`${clock}${amPm}: ${seattle.cookPurchEachHr[i]}`;
    total=total+Tokyo.cookPurchEachHr[i];
  }else{
    list.textContent=`total:${total}`;
  }
}


const Dubai = {
  minCust:11,
  maxCust:38,
  avgCookie:3.7,
  avgCustPerHr:[],
  cookPurchEachHr:[],
  rand:function () {
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  },
  avgCust: function(){
    for(let i=0 ; i < 14 ; i++){
      this.avgCustPerHr[i]=this.rand();
      this.cookPurchEachHr[i]=Math.floor(this.avgCustPerHr[i]*this.avgCookie);
    }
  },

};
Dubai.avgCust();


container=document.getElementById('container');
locationName=document.createElement('h1');
container.appendChild(locationName);
locationName.textContent='Dubai';

unorderedList=document.createElement('ul');
container.appendChild(unorderedList);

clock=5;
list='';
amPm='';
total=0;

for(let i =0 ; i<15 ; i++){
  list=document.createElement('li');
  unorderedList.appendChild(list);
  if (clock < 12 ){
    clock++;
  }else{
    clock=1;
  }
  if(clock < 12 && i<6){
    amPm='am';
  }
  if(i>=6){
    amPm='pm';
  }
  if(i<14){
    list.textContent=`${clock}${amPm}: ${seattle.cookPurchEachHr[i]}`;
    total=total+Dubai.cookPurchEachHr[i];
  }else{
    list.textContent=`total:${total}`;
  }
}



const Paris = {
  minCust:20,
  maxCust:38,
  avgCookie:2.3,
  avgCustPerHr:[],
  cookPurchEachHr:[],
  rand:function () {
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  },
  avgCust: function(){
    for(let i=0 ; i < 14 ; i++){
      this.avgCustPerHr[i]=this.rand();
      this.cookPurchEachHr[i]=Math.floor(this.avgCustPerHr[i]*this.avgCookie);
    }
  },

};
Paris.avgCust();


container=document.getElementById('container');
locationName=document.createElement('h1');
container.appendChild(locationName);
locationName.textContent='Paris';

unorderedList=document.createElement('ul');
container.appendChild(unorderedList);

clock=5;
list='';
amPm='';
total=0;

for(let i =0 ; i<15 ; i++){
  list=document.createElement('li');
  unorderedList.appendChild(list);
  if (clock < 12 ){
    clock++;
  }else{
    clock=1;
  }
  if(clock < 12 && i<6){
    amPm='am';
  }
  if(i>=6){
    amPm='pm';
  }
  if(i<14){
    list.textContent=`${clock}${amPm}: ${seattle.cookPurchEachHr[i]}`;
    total=total+Paris.cookPurchEachHr[i];
  }else{
    list.textContent=`total:${total}`;
  }
}


const Limo = {
  minCust:2,
  maxCust:16,
  avgCookie:4.6,
  avgCustPerHr:[],
  cookPurchEachHr:[],
  rand:function () {
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  },
  avgCust: function(){
    for(let i=0 ; i < 14 ; i++){
      this.avgCustPerHr[i]=this.rand();
      this.cookPurchEachHr[i]=Math.floor(this.avgCustPerHr[i]*this.avgCookie);
    }
  },

};
Limo.avgCust();


container=document.getElementById('container');
locationName=document.createElement('h1');
container.appendChild(locationName);
locationName.textContent='Limo';

unorderedList=document.createElement('ul');
container.appendChild(unorderedList);

clock=5;
list='';
amPm='';
total=0;

for(let i =0 ; i<15 ; i++){
  list=document.createElement('li');
  unorderedList.appendChild(list);
  if (clock < 12 ){
    clock++;
  }else{
    clock=1;
  }
  if(clock < 12 && i<6){
    amPm='am';
  }
  if(i>=6){
    amPm='pm';
  }
  if(i<14){
    list.textContent=`${clock}${amPm}: ${seattle.cookPurchEachHr[i]}`;
    total=total+Limo.cookPurchEachHr[i];
  }else{
    list.textContent=`total:${total}`;
  }
}

