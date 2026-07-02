import type { Observer } from "./observers/observer";
import type { Subject } from "./subjects/subject.ts";

class WeatherData implements Subject {
  screens: Observer[];
  _temprature: string = '';
  _humidity: string = '';
  _pressure: string = '';

  constructor() {
    this.screens = [];
  }

  registerObserver(s: Observer) {
    this.screens.push(s);
  }

  removeObserver(s: Observer) {
    this.screens = this.screens.filter((screen) => screen !== s);
  }

  notifyObservers(): void {
    this.screens.map((screen) => this._updateScreen(screen, this._temprature, this._humidity, this._pressure))
  }

  setMeasurements(temp: string, humidity: string, pressure: string): void {
    this._temprature = temp;
    this._humidity = humidity;
    this._pressure = pressure;
    this._measurementsChanged();
  }

  _measurementsChanged(): void {
    this.notifyObservers();
  }

  _updateScreen(screen: Observer, temp: string, humidity: string, pressure: string) {
    screen.update(temp, humidity, pressure);
  }
}

export default WeatherData;
