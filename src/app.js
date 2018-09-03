const BeerList =
require('./models/beerList.js');

document.addEventListener('DOMContentLoaded', () => {
  const select = document.qerySelector('#beers')
  const selectView = new SelectView(select);
  selectView.bindEvents();
})

const beerType = document.querySelector('#beer-type');
const beerView = new BeerView(beerDetail);
beerView.bindEvents();

const mainBeer = document.querySelector('#beer-container')
const beerWrapper = new beerWrapper(mainBeer);
beerWrapper.bindEvents();

const beerList = new BeerList();
beerList.getBeers();
beerList.bindEvents();
});
