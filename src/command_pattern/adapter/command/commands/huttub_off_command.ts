import type { HuttubAdapter } from "../../adapters/huttub_adapter";
import type { Command } from "../command";

export class HuttubOffCommand implements Command {
  private huttub: HuttubAdapter;

  constructor(huttub: HuttubAdapter) {
    this.huttub = huttub;
  }

  execute(): void {
    this.huttub.off();
  }

  undo(): void {
    this.huttub.on();
  }
}
