const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (selectElement) {
  this.selectElement = selectElement;
};

SelectView.prototype.bindEvents = function() {
  PubSub.subscribe('Beers:select-data-loaded', (evt) => {
    this.poplulateSelect(event.detail);
  });

  this.selectElement.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    PubSub.publish('SelectView:change', selectedIndex);
  });
};

SelectView.prototype.poplulateSelect = function(beers){
  beers.forEach((beer) => {
    const option = this.createBeerOption(beer);
    this.select.appendChild(option);
  })
};

SelectView.prototype.createBeerOption = function(beer) {
  const option = document.createElement('option');
  option.textContent = beer.abv;
  option.value = beer.name;
  return option;
}

module.exports = SelectView;
