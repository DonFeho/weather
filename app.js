var now = new Date();
document.addEventListener('DOMContentLoaded', getWeather);

//Init WO
var weather = new Weather('New York');

//init UI
const ui = new UI();

//Input Set city
document.getElementById('setCity').addEventListener('keyup', (e) => {
  e.preventDefault;
  var data = document.getElementById('setCity').value;
  weather.city = data;
});

//get onload DOM
document.getElementById('setCity').addEventListener('keypress', (e) => {
  e.preventDefault;
  getWeather();
});

document.getElementById('go').addEventListener('click', (e) => {
  e.preventDefault;
  getWeather();
});

function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
};

//Cityes 
//Berlin
document.getElementById('berlin').addEventListener('click', (e) => {
  let bInfo = new Array();
  bInfo = document.getElementById('b-info').classList.contains('d-none');
  if (bInfo == true) {
    document.getElementById('b-info').classList.remove('d-none');
    document.getElementById('berlin-gw').classList.remove('d-none');
  } else {
    document.getElementById('b-info').classList.add('d-none');
    document.getElementById('berlin-gw').classList.add('d-none');
  }
});

//New York  
document.getElementById('ny').addEventListener('click', (e) => {
  let nyInfo = new Array();
  nyInfo = document.getElementById('ny-info').classList.contains('d-none');
  if (nyInfo == true) {
    document.getElementById('ny-info').classList.remove('d-none');
    document.getElementById('ny-gw').classList.remove('d-none');
  } else {
    document.getElementById('ny-info').classList.add('d-none');
    document.getElementById('ny-gw').classList.add('d-none');
  }
});

//Tokyo
document.getElementById('tokyo').addEventListener('click', (e) => {
  let tInfo = new Array();
  tInfo = document.getElementById('t-info').classList.contains('d-none');
  if (tInfo == true) {
    document.getElementById('t-info').classList.remove('d-none');
    document.getElementById('tokyo-gw').classList.remove('d-none');
  } else {
    document.getElementById('t-info').classList.add('d-none');
    document.getElementById('tokyo-gw').classList.add('d-none');
  }

});


document.getElementById('berlin-gw').addEventListener('click', (e) => {
  weather.city = 'Berlin';
  document.getElementById('b-info').classList.add('d-none');
  document.getElementById('berlin-gw').classList.add('d-none');
  getWeather();
  topScroll();
  document.getElementById('setCity').value = '';

});

document.getElementById('ny-gw').addEventListener('click', (e) => {
  weather.city = 'New York';
  document.getElementById('ny-info').classList.add('d-none');
  document.getElementById('ny-gw').classList.add('d-none');
  getWeather();
  topScroll();
  document.getElementById('setCity').value = '';
});

document.getElementById('tokyo-gw').addEventListener('click', (e) => {
  weather.city = 'Tokyo';
  document.getElementById('t-info').classList.add('d-none');
  document.getElementById('tokyo-gw').classList.add('d-none');
  getWeather();
  topScroll();
  document.getElementById('setCity').value = '';
});


function topScroll() {
  document.documentElement.scrollTop = 0;
}
