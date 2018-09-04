const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Beers = function() {
  this.data = null;
}

BeerList.prototype.bindEvents = function(){
  PubSub.subscribe('DisplayView:display-submitted', (event) => {
  const beer = event.detail;
  this.getData(beer);
  });

PubSub.subscribe('SelectView:change', (event) => {
  const beer = event.detail;
  this.getData(beer);
})

PubSub.subscribe('DisplayView:button-click', (event) => this.getRandomData();
});

this.getForSelectData();

}

Beers.prototype.getForSelectData = function (beer_name) {
  const url = `https://api.punkapi.com/v2/beers`;
  const request = new Request(url);
  request.get()
    .then((data) => {
      this.data = data
      PubSub.publish('Beers:beer-data-loaded', this.data)
    })

    .catch((message) => {
      console.error(message);
    });
}

Brewdogs.prototype.getRandomData = function () {
  const url = `https://api.punkapi.com/v2/beers/random`;
  const request = new Request(url);
  request.get()
    .then((data) => {
      this.data = data
      PubSub.publish('Beers:beer-data-loaded', this.data)
    })
    .catch((message) => {
      console.error(message);
    });
}


module.exports = Beers;
