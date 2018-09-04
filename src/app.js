const FormView = require('./views/display_view.js');
const BeerView = require('./views/beer_view.js');
const SelectView = require('./views/select_view.js');
const Beers =
require('./models/beers.js');

document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('select#beer-select');
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();


const display = document.querySelector('#display-view');
const DisplayView = new DisplayView(display);
displayView.bindEvents();

const beerType = document.querySelector('#beer-type');
const beerView = new BeerView(beerType);
beerView.bindEvents();


const beers = new Beers();
beers.bindEvents();
});
