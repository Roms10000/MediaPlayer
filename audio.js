const volume1 = document.querySelector('.fa-volume-high')
const time = document.querySelector('#time')
const currentTimeDisplay = document.querySelector('#currentTime')
const durationDisplay = document.querySelector('#duration')
const profil = document.querySelector('.fa-circle-user')
const book = document.querySelector('.fa-book')
const parametre = document.querySelector('.fa-gear')
const left = document.querySelector('.fa-arrow-left')
const right = document.querySelector('.fa-arrow-right')
const play = document.querySelector('.fa-circle-play')
const repeat = document.querySelector('.fa-repeat')
const aleatoire = document.querySelector('.fa-shuffle')
const logo = document.querySelector('#logo')
const audio = document.querySelector('audio')
const jul = document.querySelector('#jul')
const xx = document.querySelector('#xx')
const jezu = document.querySelector('#jezu')
const momo = document.querySelector('#momo')
const celin = document.querySelector('#celin')
const pierre = document.querySelector('#pierre')
const lartiste = document.querySelector('#lartiste')
const volum = document.querySelector('#vol')
const music1 = document.querySelector('.music1')
const music2 = document.querySelector('.music2')
const artist = document.querySelector('.artistname')
const artistname = ['Inconnu', 'Inconnu1', 'Inconnu2', 'Inconnu3', 'Inconnu4', 'Inconnu5', "Inconnu6"]
const titre = document.querySelector('.titree')
const titrename = ['Poser sur le banc', 'Tableau flou', 'Croix noir', 'Caliente', 'Visage', "Statue", 'imprimante']
const playlist = [
  {
    src: "./son/Blue_Skies.mp3",
    artist:"Inconnu",
    titrename :"Poser sur le banc"
  },
  {
    src: "./son/Cartoon_Hoedown.mp3",
    artist:"Inconnu1",
    titrename :"Tableau flou"
  },
  {
    src: "./son/Earthy_Crust.mp3",
    artist:"Inconnu2",
    titrename :"Croix noir"
  },
  {
    src: "./son/Hold_On_a_Minute.mp3",
    artist:"Inconnu3",
    titrename :"Caliente"
  },
  {
    src: "./son/JohnDunbarTheme.mp3",
    artist:"Inconnu4",
    titrename :"Visage"
  },
  {
    src: "./son/Stay_With_You.mp3",
    artist:"Inconnu5",
    titrename :"Statue"
  },
  {
    src: "./son/printer.mp3",
    artist:"Inconnu5",
    titrename :"imprimante"
  }
];
let currentAudio = 0;

function loadTrack(currentAudio) {
  audio.src = playlist[currentAudio].src
  audio.load();
}
loadTrack(currentAudio);

play.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
  }
  else {
    audio.pause();
  }
});

left.addEventListener('click', function () {
  currentAudio--;
  if (currentAudio < 0) currentAudio = playlist.length - 1;
  loadTrack(currentAudio);
  audio.play();
  song(currentAudio);
});

right.addEventListener('click', function () {
  currentAudio++;
  if (currentAudio >= playlist.length) currentAudio = 0;
  loadTrack(currentAudio);
  audio.play();
  song(currentAudio);
});

jul.addEventListener('click', function () {
  currentAudio = 0;
  loadTrack(currentAudio);
  audio.play();
  song(currentAudio);
});

xx.addEventListener('click', function () {
  currentAudio = 1;
  loadTrack(currentAudio);
  audio.play();
  song(currentAudio);
});

jezu.addEventListener('click', function () {
  currentAudio = 2;
  loadTrack(currentAudio);
  audio.play();
  song(currentAudio);
});

momo.addEventListener('click', function () {
  currentAudio = 3;
  loadTrack(currentAudio);
  audio.play();
  song(currentAudio);
});

celin.addEventListener('click', function () {
  currentAudio = 4;
  loadTrack(currentAudio);
  audio.play();
  song(currentAudio);
});

pierre.addEventListener('click', function () {
  currentAudio = 5;
  loadTrack(currentAudio);
  audio.play();
  song(currentAudio);
});

lartiste.addEventListener('click', function () {
  currentAudio = 6;
  loadTrack(currentAudio);
  audio.play();
  song(currentAudio);
});

let x = 0;
function song(x) {
  music1.textContent = titrename[x];
  music2.textContent = artistname[x];
}
song(0);

volum.addEventListener('input', () => {
  audio.volume = volum.value;
  volume1.textContent = Math.round(volum.value * 100) + "%";
});

audio.addEventListener("loadedmetadata", () => {
  time.max = audio.duration;
  durationDisplay.textContent = formatTime(audio.duration);
});

audio.addEventListener("timeupdate", () => {
  time.value = audio.currentTime;
  currentTimeDisplay.textContent = formatTime(audio.currentTime);
});

time.addEventListener('input', () => {
  audio.currentTime = time.value;
});

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${secs}`;
}

function filterDocument () {
const docs = document.querySelectorAll(".image");
const search = document.querySelector('#search').value.toLowerCase();
docs.forEach(doc => {
const titre6 = doc.querySelector('.titree')?.textContent.toLowerCase() ||'';
const artist6 = doc.querySelector('.artistname')?.textContent.toLowerCase() ||'';
if(titre6.startsWith(search) || artist6.startsWith(search)){
doc.style.display = "block";
}
else {
doc.style.display = "none"
}  
});
}

document.addEventListener('DOMContentLoaded', () => {
document.querySelector('#search').addEventListener('input', filterDocument);
});