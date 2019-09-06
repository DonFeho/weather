class UI {
  constructor() {
    this.p1 = document.getElementById('p1');
    this.p2 = document.getElementById('p2');
    this.p3 = document.getElementById('p3');
    this.p4 = document.getElementById('p4');
    this.p5 = document.getElementById('p5');
    this.p6 = document.getElementById('p6');
    this.p7 = document.getElementById('p7');
    this.p8 = document.getElementById('p8');
    this.p9 = document.getElementById('p9');
    this.p10 = document.getElementById('p10');
    this.p11 = document.getElementById('p11');
    this.d1 = document.getElementById('d1');

  }

  paint(weather) {
    this.p1.textContent = weather.name;
    this.p2.textContent = weather.sys.country;
    this.p3.textContent = weather.weather[0].description;
    this.p4.textContent = weather.main.humidity;
    this.p5.textContent = weather.main.pressure;
    this.p6.textContent = weather.main.temp;
    this.p7.textContent = weather.coord.lat;
    this.p8.textContent = weather.coord.lon;
    this.p9.textContent = weather.wind.speed;
    this.p10.textContent = weather.main.temp_max;
    this.p11.textContent = weather.main.temp_min;
    this.d1.textContent = now;
  }
}