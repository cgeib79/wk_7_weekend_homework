const BeerList = function(){
  this.beers = [];
}

BeerList.prototype.getBeers = function () {
  const request = new Request("https://api.punkapi.com/v2/beers");
  request.get (data) => {
  this.beers = data;
  const names = this.beers.map ((beer) => {
    return beer.name;
  });

  PubSub.publish("BeerList:names-ready", names);
  });
};

module.exports = CountryList;
