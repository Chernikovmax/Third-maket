const slides = document.querySelectorAll('.slideshow__slide');
const nextBtn = document.getElementById('right-btn');
const previousBtn = document.getElementById('left-btn');
const playbackBtn = document.getElementById('playback-btn');
let currentSlide = 0;
let slideInterval = setInterval(switchSlide, 2500);

const PAUSE_ICON =
`
<div class="button-aligner">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0"
  viewBox="0 0 47.607 47.607" xml:space="preserve">
    <g style="fill: #6dab7e;">
      <path d="M17.991,40.976c0,3.662-2.969,6.631-6.631,6.631l0,0c-3.662,0-6.631-2.969-6.631-6.631V6.631C4.729,2.969,7.698,0,11.36,0
      l0,0c3.662,0,6.631,2.969,6.631,6.631V40.976z"/>
      <path d="M42.877,40.976c0,3.662-2.969,6.631-6.631,6.631l0,0c-3.662,0-6.631-2.969-6.631-6.631V6.631
      C29.616,2.969,32.585,0,36.246,0l0,0c3.662,0,6.631,2.969,6.631,6.631V40.976z"/>
    </g>
  </svg>
</div>
`;

const PLAY_ICON =
`
<div class="button-aligner">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0"
  viewBox="0 0 232.153 232.153" xml:space="preserve">
    <g>
      <path style="fill:#6dab7e;fill-rule:evenodd;clip-rule:evenodd;" d="M203.791,99.628L49.307,2.294c-4.567-2.719-10.238-2.266-14.521-2.266
      c-17.132,0-17.056,13.227-17.056,16.578v198.94c0,2.833-0.075,16.579,17.056,16.579c4.283,0,9.955,0.451,14.521-2.267
      l154.483-97.333c12.68-7.545,10.489-16.449,10.489-16.449S216.471,107.172,203.791,99.628z"/>
    </g>
  </svg>
</div>
`;

function switchSlide() {
  goToSlide(currentSlide + 1);
}

function goToSlide(n) {
  slides[currentSlide].className = 'slideshow__slide';
  currentSlide = (n+slides.length)%slides.length;
  slides[currentSlide].className = 'slideshow__slide slide--active';
}

let playing = true;

function switchPlayback() {
  if (playing) {
    playbackBtn.innerHTML = PLAY_ICON;
    playing = false;
    clearInterval(slideInterval);
  } else {
    playbackBtn.innerHTML = PAUSE_ICON;
    playing = true;
    slideInterval = setInterval(switchSlide, 2500);
  }
}

playbackBtn.addEventListener('click', switchPlayback);

nextBtn.addEventListener('click', () => {
  playing = true;
  switchPlayback();
  goToSlide(currentSlide+1);
});

previousBtn.addEventListener('click', () => {
  playing = true;
  switchPlayback();
  goToSlide(currentSlide-1);
});
