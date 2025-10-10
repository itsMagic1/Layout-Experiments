import {luxuryCars}  from "./data.js";

// Header //
const header = document.querySelector('header');
const hamburguerBtn = document.querySelector('.btn-hamburguer');

hamburguerBtn.addEventListener('click', () => {
  header.classList.toggle('active')
})

// Observe ELements Animation //
const elements = document.querySelectorAll('.observed');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  threshold: [.35, 1]
});

elements.forEach(element => {
  observer.observe(element);
});

// Show car list //
const showMoreBtn = document.querySelector('.cars .btn')
let cards = 4

const createCars = (from, to) => {
  let html = '';
  luxuryCars.slice(from, to).forEach(car => {
      html += `<div class="car">
        <a href="./pages/Car.html?id=${car.id}">
          <ul class="features">
            <li><p>${car.maxSpeed}</p></li>
            <li><p>${car.acceleration}</p></li>
            <li><p>${car.horsepower}</p></li>
          </ul>
          <img src="./../Images/${car.images[0]}" alt="${car.name}">
        </a>
        <p class="model">${car.name}</p>
        <p class="price">from $${car.pricePerDay}/day</p>
      </div>`;
  });
  return html
}

const showCars = (from, to) => {
  const html = createCars(from, to);
  const carList = document.querySelector('.carList');
  carList.insertAdjacentHTML('beforeend', html);

  const newCards = document.querySelectorAll('.car:not(.observed)');
  newCards.forEach(card => {
    observer.observe(card);
    card.classList.add('observed');
  });

};
showCars(0, cards)


showMoreBtn.addEventListener('click', () => {
  const nextTo = cards + 2;
  showCars(cards, nextTo);
  cards = nextTo;

  if (cards >= luxuryCars.length) {
    showMoreBtn.style.display = 'none';
  }
});