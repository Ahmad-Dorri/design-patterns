import type { GarageDoorAdapter } from "../../adapters/garage_door_adapter";
import type { Command } from "../command";

export class GarageDoorOnCommand implements Command {
  private garageDoor: GarageDoorAdapter;

  constructor(garageDoor: GarageDoorAdapter) {
    this.garageDoor = garageDoor;
  }

  execute(): void {
    this.garageDoor.on();
  }

  undo(): void {
    this.garageDoor.off();
  }
}
