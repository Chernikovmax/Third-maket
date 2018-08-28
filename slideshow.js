var slides = document.querySelectorAll('.slideshow-container__slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 2500);

function nextSlide() {
  goToSlide(currentSlide+1);
}

function previousSlide() {
  goToSlide(currentSlide-1);
}

function goToSlide(n) {
  slides[currentSlide].className = 'slide';
  currentSlide = (n+slides.length)%slides.length;
  slides[currentSlide].className = 'slide showing';
}

var playing = true;
var pauseButton = document.getElementById('pause-btn');

function pauseSlideshow() {
  pauseButton.innerHTML = '&#9658';
  playing = false;
  clearInterval(slideInterval);
}

function playSlideshow() {
  pauseButton.innerHTML = '&#10074;&#10074;';
  playing = true;
  slideInterval = setInterval(nextSlide, 2500);
}

pauseButton.onclick = function() {
    if(playing) {
    pauseSlideshow();
  } else {
    playSlideshow();
  }
};

var next = document.getElementById('right-btn');
var previous = document.getElementById('left-btn');

next.onclick = function() {
  pauseSlideshow();
  nextSlide();
};

previous.onclick = function() {
  pauseSlideshow();
  previousSlide();
};
