export abstract class Beverage {
  _description: string = 'Unkown Beverage';

  getDescription(): string {
    return this._description;
  }

  abstract cost(): number;
}
