import type { Observer } from "../observers/observer";
import type { Subject } from "../subjects/subject";
import type { DisplayElement } from "./display_element";

export class StatisticsDisplay implements Observer, DisplayElement {
  constructor(weatherData: Subject) {
    weatherData.registerObserver(this);
  }

  update(temp: string, humidity: string, pressure: string): void {
    // do something
  }

  display(): void {
    // show something
  }
}
