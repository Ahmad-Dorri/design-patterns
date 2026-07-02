class WeatherData {
  getTemprature() {
    return 'updated temp';
  }
  getHumidity() {
    return 'updated humidity';
  }
  getPressure() {
    return 'updated pressure';
  }

  measurementsChanged() {
    const temp = this.getTemprature();
    const humidity = this.getHumidity();
    const pressure = this.getPressure();

    // @ts-ignore
    currentConditionDisplay.update(temp, humidity, pressure);
    // @ts-ignore
    statisticsDisplay.update(temp, humidity, pressure);
    // @ts-ignore
    forecastDisplay.update(temp, humidity, pressure);
  }
}

export default WeatherData;
