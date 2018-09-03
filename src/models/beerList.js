const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const BeerList = function(){
  this.countries = [];
}

BeerList.prototype.bindEvents = function(){
  PubSub.subscribe("SelectView:name-selected", (event) => {
    const beer = this.beers[event.detail];
    PubSub.publish("BeerList:beer-ready", beer)
  })
}


CountryList.prototype.getCountries = function(){
  const request = new Request("https://api.punkapi.com/v2/beers");
  request.get((data) => {
  this.countries = data;
  const names = this.beers.map((country) => {
    return beer.name;
  });
  PubSub.publish("CountryList:names-ready", names);
  });
};

module.exports = BeerList;
