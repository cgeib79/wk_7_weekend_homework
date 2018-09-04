const PubSub = require('../helpers/pub_sub.js');

const DisplayView = function(element) {
  this.element = element;
}

DisplayView.prototype.bindEvents = function () {
  this.element.addEventListener('submit', (evt) => {
    evt.preventDefault(); // what was this for?
    const beer = event.target['beer-display'].value;
    PubSub.publish('DisplayView:display-submitted', beer);
    this.element.reset(); //why reset?
});

const button = document.querySelector('#random-button');
  button.addEventListener('click', (evt) => {
  evt.preventDefault();
  PubSub.publish('DisplayView:button-click');
  });
}

module.exports = DisplayView;
