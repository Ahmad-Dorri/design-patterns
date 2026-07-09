import type { GarageDoor } from "../../appliances/garage_door";
import type { ApplicanceAdapter } from "../applicance_adapter";

export class GarageDoorAdapter implements ApplicanceAdapter {
  private garageDoor: GarageDoor;

  constructor(garageDoor: GarageDoor) {
    this.garageDoor = garageDoor;
  }

  on(): void {
    this.garageDoor.up();
  }

  off(): void {
    this.garageDoor.down();
  }

  stop() {
    this.garageDoor.stop();
  }

  lightsOn() {
    this.garageDoor.lightsOn();
  }

  lightsOff() {
    this.garageDoor.lightsOff();
  }

}
