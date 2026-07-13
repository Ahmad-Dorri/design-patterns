import { CeilingFanCommand } from "./ceiling_fan_command";

export class CeilingFanOffCommand extends CeilingFanCommand {
  execute(): void {
    this.prevSpeed = this.ceilingFan.getSpeed();
    this.ceilingFan.off();
  }
}
