const PubSub = require('../helpers/pub_sub');


const BeerView = function(container){
  this.container = container;
}

BeerView.prototype.bindEvents = function(){
  PubSub.subscribe("Beers:beer-data-loaded", (event) => {
    const beers = event.detail;
    this.render(beer);
  });
};


if (beers.length === 0) {
  const noBeer = this.createElement('h4', wrongInput )
  this.container.appendChild(noBeer)
    } else {
  beers.forEach((brewdog) => {
const beerName = this.createElement('h1', beer.name);
this.container.appendChild(beerName);

const beerDescription = this.createElement('p', beer.description)
this.container.appendChild(beerDescription);

const beerAbv = this.createElement('p', `ABV:${beer.abv}%`)
this.container.appendChild(beerAbv);
  })
}

BeerView.prototype.createElement = function (element, text){
  const element = document.createElement(element);
  element.textContent = text;
  return element;
};

module.exports = BeerView;
