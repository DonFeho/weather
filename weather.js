class Weather {
  constructor(city) {
    this.apiKey = '94d78142661b93cf11a583ba529b584e';
    this.city = city;

  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKey}`);
    const responseData = await response.json();

    return responseData;
  }
}

