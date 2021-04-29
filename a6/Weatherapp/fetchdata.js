class FetchData {
  async getCurrent(input) {
    const myKey = "574a0ebc1a1f4ea65e08a5b3e5dc7d0c";

    //make request to url

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}&units=metric`
    );

    const data = await response.json();

    console.log(data);

    return data;
  }
}
