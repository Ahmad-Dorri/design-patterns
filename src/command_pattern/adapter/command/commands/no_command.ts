import type { Command } from "../command";

export class NoCommand implements Command {
  execute(): void {
    throw new Error("there is no command to execute")
  }

  undo(): void {
    throw new Error("there is no command to undo")
  }
}
