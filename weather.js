class Weather {
  constructor(city, state) {
    this.apiKey = "5590ce398267a4771d397cd8cdfbf44f";
    this.city = city;
    this.state = state;
  }

  // fetch weather from API
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}&units=metric`
    );
    const responseData = await response.json();
    return responseData;
  }

  //change Weather Location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
