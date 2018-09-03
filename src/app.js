const BeerList =
require('./models/beerList.js');
const SelectView = require('./views/select_view.js');
const BeerView = require('./views/beer_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const select = document.querySelector('#beers')
  const selectView = new SelectView(select);
  selectView.bindEvents();


const beerType = document.querySelector('#beer-type');
const beerView = new BeerView(beerType);
beerView.bindEvents();


const beerList = new BeerList();
beerList.getBeers();
beerList.bindEvents();
});
