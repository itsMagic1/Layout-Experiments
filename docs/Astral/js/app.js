gsap.registerPlugin(SplitText);

const title = new SplitText(".title", {type: 'chars'})

gsap.fromTo(title.chars, {
  scale: 2, 
  opacity: 0
}, {
  stagger: .05,
  opacity: 1,
  scale: 1,
  duration: .1
})