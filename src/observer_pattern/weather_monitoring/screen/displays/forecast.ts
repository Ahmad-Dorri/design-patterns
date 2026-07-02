import type { Screen } from '../screen.ts';
export class ForecastDisplay implements Screen {
  id: string = 'forecast-display';
  update(temp: string, humidity: string, pressure: string): void {
    // do something
  }
}
