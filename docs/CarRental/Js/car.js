import { luxuryCars } from "./data.js"

const path = new URLSearchParams(window.location.search)

const showCar = (id) => {
  let carHtml = createCar(id);
  const carContainer = document.querySelector('.carInfo');
  carContainer.innerHTML = carHtml;
}

const createCar = (id) => {
  const car = luxuryCars[id-1]

  const html = `<div class="content">
      <a href="./../index.html">< Back to Home</a>
      <h2>Rent ${car.name} in New York</h2>
      <p>${car.description}</p>
      <button class="btn">
        <span class="btn-text">Book Now</span>
        <span class="btn-text-hover">Book Now</span>
      </button>
    </div>
    <div class="carousel">
      <ul class="features">
        <li><p>${car.maxSpeed}</p></li>
        <li><p>${car.acceleration}</p></li>
        <li><p>${car.horsepower}</p></li>
      </ul>
      <div class="imgList">
        <div class="img prev">
          <img src="./../Images${car.images[0]}" alt="">
        </div>
        <div class="img first">
          <img src="./../Images${car.images[1]}" alt="">
        </div>
        <div class="img next">
          <img src="./../Images${car.images[2]}" alt="">
        </div>
        <div class="img">
          <img src="./../Images${car.images[3]}" alt="">
        </div>
      </div>
      <button id="prev"><</button>
      <button id="next">></button>
    </div>`
    console.log(html);
    return html;
}

// Carousel //
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');
const carousel = document.querySelector('.carousel');
const imgList = [...document.querySelectorAll('.imgList div.img')];
const total = imgList.length;
let index = 1;

const getIndex = (base, offset) => (base + offset + total) % total;

const changeSlider = () => {
  // Limpiar clases anteriores
  imgList.forEach(item => {
    item.classList.remove('first', 'next', 'prev');
    item.style.animation = 'none';
    void item.offsetWidth;
    item.style.animation = '';
  });

  // Asignar nuevas clases
  imgList[getIndex(index, 0)].classList.add('first');
  imgList[getIndex(index, -1)].classList.add('prev');
  imgList[getIndex(index, 1)].classList.add('next');
};

nextBtn.onclick = () => {
  carousel.classList.remove('prev');
  carousel.classList.add('next');
  index = getIndex(index, 1);
  changeSlider();
};

prevBtn.onclick = () => {
  carousel.classList.remove('next');
  carousel.classList.add('prev');
  index = getIndex(index, -1);
  changeSlider();
};