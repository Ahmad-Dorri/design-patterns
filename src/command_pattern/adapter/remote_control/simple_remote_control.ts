import type { Command } from "../command/command";

export class SimpleRemoteControl {
  private slot?: Command;

  setCommand(command: Command) {
    this.slot = command;
  }

  executeCommand() {
    this.slot?.execute();
  }
}
