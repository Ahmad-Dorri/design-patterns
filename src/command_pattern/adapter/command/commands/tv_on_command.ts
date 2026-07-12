import type { TVAdapter } from "../../adapters/tv_adapter";
import type { Command } from "../command";

export class TVOnCommand implements Command {
  private tv: TVAdapter;

  constructor(tv: TVAdapter) {
    this.tv = tv;
  }

  execute(): void {
    this.tv.on();
  }

  undo(): void {
    this.tv.off();
  }
}
