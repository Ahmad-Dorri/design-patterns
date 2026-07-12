import type { Command } from "../command/command";
import { NoCommand } from "../command/commands/no_command";

export class RemoteControl {
  onCommands: Command[] = [];
  offCommands: Command[] = [];

  constructor() {
    for (let i = 0; i < 7; i++) {
      this.onCommands[i] = new NoCommand();
      this.offCommands[i] = new NoCommand();
    }
  }


  setCommand(slot: number, onCommand: Command, offCommand: Command) {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  onButtonWasPressed(slot: number) {
    this.onCommands[slot].execute();
  }

  offButtonWasPressed(slot: number) {
    this.offCommands[slot].execute();
  }
}
