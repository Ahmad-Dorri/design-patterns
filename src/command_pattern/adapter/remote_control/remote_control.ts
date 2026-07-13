import type { Command } from "../command/command";
import { NoCommand } from "../command/commands/no_command";

export class RemoteControl {
  onCommands: Command[] = [];
  offCommands: Command[] = [];
  history: Command[] = [];

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
    const command = this.onCommands[slot];
    command.execute();
    this.history.push(command);
  }

  offButtonWasPressed(slot: number) {
    const command = this.offCommands[slot];
    command.execute();
    this.history.push(command);
  }


  undoButtonPressed() {
    const historySize = this.history.length;
    const command = this.history.splice(historySize - 1, historySize)[0];
    command.undo();
  }
}
