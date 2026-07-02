import type { Screen } from "./screen/screen";

class WeatherData {
  screens: Screen[] = [];

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

    this.screens.map((screen) => this._updateScreen(screen, temp, humidity, pressure))
  }

  addScreen(s: Screen) {
    this.screens.push(s);
  }

  removeScreen(s: Screen) {
    this.screens = this.screens.filter((screen) => screen.id !== s.id);
  }

  _updateScreen(screen: Screen, temp: string, humidity: string, pressure: string) {
    screen.update(temp, humidity, pressure);
  }
}

export default WeatherData;
