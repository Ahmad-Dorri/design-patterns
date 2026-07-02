import type { Screen } from '../screen.ts';
export class StatisticsDisplay implements Screen {
  id: string = 'statistics-display';
  update(temp: string, humidity: string, pressure: string): void {
    // do something
  }
}
