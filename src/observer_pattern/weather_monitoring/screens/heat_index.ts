import type { Observer } from "../observers/observer";
import type { Subject } from "../subjects/subject";
import type { DisplayElement } from "./display_element";

export class HeatIndex implements Observer, DisplayElement {
  _heatIndex = '';

  constructor(weatherData: Subject) {
    weatherData.registerObserver(this);
  }

  update(temp: string, humidity: string): void {
    this._heatIndex = temp + ' ' + humidity;
  }

  display(): void {
    console.log("current heat index is: " + this._heatIndex);

  }
}

