import type { Screen } from '../screen.ts';
export class ConditionDisplay implements Screen {
  id: string = 'condition-display';
  update(temp: string, humidity: string, pressure: string): void {
    // do something
  }
}
