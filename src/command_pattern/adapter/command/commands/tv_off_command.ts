import type { TVAdapter } from "../../adapters/tv_adapter";
import type { Command } from "../command";

export class TVOffCommand implements Command {
  private tv: TVAdapter;

  constructor(tv: TVAdapter) {
    this.tv = tv;
  }

  execute(): void {
    this.tv.off();
  }

  undo(): void {
    this.tv.on();
  }
}
