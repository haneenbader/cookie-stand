'use strict';

//seattle
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

