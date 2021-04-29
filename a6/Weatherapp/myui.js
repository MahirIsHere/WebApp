
class MyUI {
  constructor() {
    this.uiContainer = document.getElementById("content");
    this.city;
    this.defaultCity = "Dhaka";
  }

  populateUI(data) {
    //de-structure vars

    //add them to inner HTML

    this.uiContainer.innerHTML = `
    <div class="card text-center">
  <div class="card-header">
    Your Weather <i class="fad fa-clouds"></i>
  </div>
  <div class="card-body">
    <h5 class="card-title">${data.name}. ${data.sys.country} </h5>
    <h6 class="card-text"> Feels like ${data.main.feels_like}°C. Humidity ${data.main.humidity}°C. Temp ${data.main.temp}°C. Highs of ${data.main.temp_max}°C. Lows of ${data.main.temp_min}°C. Wind speed ${data.wind.speed} Km/h. Wind degree ${data.wind.deg}°</h6>
      <p css="card-text"> Weather Id: ${data.weather[0].id}. Mainly ${data.weather[0].main}. Description ${data.weather[0].description}</p>
  </div>

</div>

        `;
  }

  clearUI() {
    uiContainer.innerHTML = "";
  }

  saveToLS(data) {
    localStorage.setItem("city", JSON.stringify(data));
  }

  getFromLS() {
    if (localStorage.getItem("city" == null)) {
      return this.defaultCity;
    } else {
      this.city = JSON.parse(localStorage.getItem("city"));
    }

    return this.city;
  }

  clearLS() {
    localStorage.clear();
  }
}
