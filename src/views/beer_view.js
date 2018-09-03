const PubSub = require('../helpers/pub_sub');


const BeerView = function(container){
  this.container = container;
}

BeerView.prototype.bindEvents = function(){
  PubSub.subscribe("BeerList:beer-ready", (event) => {
    const beer = event.detail;
    this.render(beer);
  });
};

BeerView.prototype.render = function(beer){
  this.container.innerHTML = "";
  const header = this.createHeader(beer);
  this.container.appendChild(header);

  const details = this.createDetails(beer);
  this.container.appendChild(details);

}

BeerView.prototype.createHeader = function(beer){
  const header = document.createElement('header');
  const h1 = document.createElement('h1');
  h1.textContent = beer.name;
  h1.classList.add("header");
  header.appendChild(h1);
  return header;
};

BeerView.prototype.createDetails = function(beer){
  const detailDiv = document.createElement('section');
  const description = document.createElement('p');
  description.textContent = "Description: " + beer.description;
  detailDiv.appendChild(description);

  };



module.exports = BeerView;
