setTimeout(() => {
  const hero = document.querySelector('.hero')
  hero.classList.add('animate')
}, 1000)

const observerOptions = {
  threshold: [0, 0.33, 1]
};

function handleIntersection(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.intersectionRatio >= 0.33) {
      entry.target.classList.add('visible');
    }
  });
}

const observer = new IntersectionObserver(handleIntersection, observerOptions);

const target = document.querySelectorAll('.observe');

target.forEach(element => {
  if (element) {
    observer.observe(element)
  }
})

