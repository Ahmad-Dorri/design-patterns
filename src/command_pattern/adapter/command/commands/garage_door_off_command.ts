import type { GarageDoorAdapter } from "../../adapters/garage_door_adapter";
import type { Command } from "../command";

export class GarageDoorOffCommand implements Command {
  private garageDoor: GarageDoorAdapter;

  constructor(garageDoor: GarageDoorAdapter) {
    this.garageDoor = garageDoor;
  }

  execute(): void {
    this.garageDoor.off();
  }

  undo(): void {
    this.garageDoor.on();
  }
}
