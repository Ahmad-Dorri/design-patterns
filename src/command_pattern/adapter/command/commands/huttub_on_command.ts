import type { HuttubAdapter } from "../../adapters/huttub_adapter";
import type { Command } from "../command";

export class HuttubOnCommand implements Command {
  private huttub: HuttubAdapter;

  constructor(huttub: HuttubAdapter) {
    this.huttub = huttub;
  }

  execute(): void {
    this.huttub.on();
  }

  undo(): void {
    this.huttub.off();
  }
}
