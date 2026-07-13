import { CeilingFan } from "../../../appliances/ceiling_fan";
import type { Command } from "../command";

export abstract class CeilingFanCommand implements Command {
  protected ceilingFan: CeilingFan;
  protected prevSpeed?: number;

  constructor(ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan;
  }

  abstract execute(): void;

  undo(): void {
    switch (this.prevSpeed) {
      case CeilingFan.HIGH:
        this.ceilingFan.high();
        break;
      case CeilingFan.MEDIUM:
        this.ceilingFan.medium();
        break;
      case CeilingFan.LOW:
        this.ceilingFan.low();
        break;
      default:
        this.ceilingFan.off();
    }
  }
}
