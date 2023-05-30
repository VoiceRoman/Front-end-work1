const gap = 18;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));

const carousel1 = document.getElementById("carousel1"),
  content1 = document.getElementById("content1"),
  next1 = document.getElementById("next1"),
  prev1 = document.getElementById("prev1");

next1.addEventListener("click", e => {
  carousel1.scrollBy(minwidth + gap, 0);
  if (carousel1.scrollWidth !== 0) {
    prev1.style.display = "flex";
  }
  if (content1.scrollWidth - minwidth - gap <= carousel1.scrollLeft + minwidth) {
    next1.style.display = "none";
  }
});
prev1.addEventListener("click", e => {
  carousel1.scrollBy(-(minwidth + gap), 0);
  if (carousel1.scrollLeft - minwidth - gap <= 0) {
    prev1.style.display = "none";
  }
  if (!content1.scrollWidth - minwidth - gap <= carousel1.scrollLeft + minwidth) {
    next1.style.display = "flex";
  }
});

let minwidth = carousel1.offsetWidth;
window.addEventListener("resize", e => (minwidth = carousel1.offsetWidth));
