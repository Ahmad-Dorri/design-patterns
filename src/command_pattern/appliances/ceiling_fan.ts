export class CeilingFan {
  public static HIGH = 3;
  public static MEDIUM = 2;
  public static LOW = 1;
  public static OFF = 0;

  private location: string;
  private speed: number;

  constructor(location: string) {
    this.location = location;
    this.speed = CeilingFan.OFF;
  }

  public high() {
    this.speed = CeilingFan.HIGH;
    console.log('set fan to high');

  }

  public medium() {
    this.speed = CeilingFan.MEDIUM;
    console.log('set fan to medium');

  }

  public low() {
    this.speed = CeilingFan.LOW;
    console.log('set fan to low');

  }

  public off() {
    this.speed = CeilingFan.OFF;
    console.log('turn off fan');

  }

  public getSpeed() {
    return this.speed;
  }
}
