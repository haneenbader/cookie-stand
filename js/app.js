'use strict';

let hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let seattle = {
  location : 'seattle',
  minCust : 23,
  maxCust : 65 ,
  avgPerSale : 6.3 ,
  ranCust:[],
  totalPerLocation : 0 ,
  cookPerHour : [] ,
  calRanNumOfCust : function (){
    for (let i=0 ; i<hours.length ; i++ ){
    this.ranCust.push (randomValue(this.minCust,this.maxCust));
    }
 },
  calNumOfCookPreHour :function(){
     let value =0 ;
     for (let i=0 ; i<hours.length ; i++ ){
        value = Math.ceil(this.ranCust[i] * this.avgPerSale);
        this.totalPerLocation=this.totalPerLocation + value ;
        this.cookPerHour.push(value);
    }

 },

}
seattle.calRanNumOfCust();
seattle.calNumOfCookPreHour();
console.log (seattle);






