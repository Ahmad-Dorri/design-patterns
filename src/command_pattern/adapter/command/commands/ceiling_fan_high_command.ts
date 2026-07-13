import { CeilingFanCommand } from "./ceiling_fan_command";

export class CeilingFanHighCommand extends CeilingFanCommand {
  execute(): void {
    this.prevSpeed = this.ceilingFan.getSpeed();
    this.ceilingFan.high();
  }
}
