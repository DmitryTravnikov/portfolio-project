// import 'bootstrap';
// import '@popperjs/core';
import './favicons/favicons';
import 'normalize.css';
import './scss/main.scss';
import './libs/pagescroll2id/jquery.malihu.PageScroll2id.min.js';
import WOW from 'wow.js';
import 'animate.css';

new WOW().init();

$('.header__menu-link, .to-top-button').mPageScroll2id({
  offset: 0,
  scrollSpeed: 200,
});

// Console Log
export let cLog = function (n) {
  return console.log(n);
};

// Prevent Default
function prevdef() {
  let prevdefElems = document.querySelectorAll('.prevdef');

  for (let i = 0; i < prevdefElems.length; i++) {
    prevdefElems[i].addEventListener('click', function (event) {
      event.preventDefault();
    });
  }
}
prevdef();

// Rendering Styles and JavaScript
function importAll(r) {
  r.keys().forEach(r);
}

importAll(require.context('./components', true, /\.(scss|js)$/));
importAll(require.context('./pages', true, /\.(scss|js)$/));
importAll(require.context('./templates', true, /\.(scss|js)$/));
