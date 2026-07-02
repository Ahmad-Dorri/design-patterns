import type { Observer } from "../observers/observer";
import type { Subject } from "../subjects/subject";
import type { DisplayElement } from "./display_element";

export class ConditionDisplay implements Observer, DisplayElement {
  _temprature: string = '';
  _humidity: string = '';

  constructor(weatherData: Subject) {
    weatherData.registerObserver(this);
  }

  update(temp: string, humidity: string, pressure: string): void {
    this._temprature = temp;
    this._humidity = humidity;
    this.display();
  }

  display(): void {
    console.log('Current condition: ' + this._temprature + 'F degrees and ' + this._humidity, '% humidity',);
  }
}
