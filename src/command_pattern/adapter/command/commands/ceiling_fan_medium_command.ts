import { CeilingFanCommand } from "./ceiling_fan_command";

export class CeilingFanMediumCommand extends CeilingFanCommand {
  execute(): void {
    this.prevSpeed = this.ceilingFan.getSpeed();
    this.ceilingFan.medium();
  }
}
