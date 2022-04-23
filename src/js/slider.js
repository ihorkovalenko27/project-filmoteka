import Glide from '@glidejs/glide';
import filmsCardSliderTpl from '../templates/card-films-slider.hbs';
const sliderContainer = document.querySelector('.js-slider-container');
renderTrendy();

const glide = new Glide('.glide', {
  type: 'slider',
  startAt: 0,
  perView: 8,
  autoplay: 2000,
  hoverpause: true,
  bound: true,
});

glide.mount();

function renderTrendy() {
  const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=3df6184500ed5682d4d34cc3cdc4b7c7`;
  return fetch(url)
    .then(response => response.json())
    .then(({ results }) => {
      return results;
    })
    .then(renderSliderFilms)
    .catch(err => {
      sliderContainer.innerHTML = `<img class="catch-error-pagination" src="${errorUrl}" />`;
    });
}

function renderSliderFilms(articles) {
  sliderContainer.innerHTML = filmsCardSliderTpl(articles);
}
