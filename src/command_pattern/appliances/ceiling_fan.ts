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
    // code to set the fan to high
  }

  public medium() {
    this.speed = CeilingFan.MEDIUM;
    // code to set the fan to medium
  }

  public low() {
    this.speed = CeilingFan.LOW;
    // code to set the fan to low
  }

  public off() {
    this.speed = CeilingFan.OFF;
    // code to set the turn off the fan
  }

  public getSpeed() {
    return this.speed;
  }
}
