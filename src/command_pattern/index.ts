import { CeilingFanHighCommand } from "./adapter/command/commands/ceiling_fan_high_command";
import { CeilingFanMediumCommand } from "./adapter/command/commands/ceiling_fan_medium_command";
import { CeilingFanOffCommand } from "./adapter/command/commands/ceiling_fan_off_command";
import { RemoteControl } from "./adapter/remote_control/remote_control";
import { CeilingFan } from "./appliances/ceiling_fan";

export function commandPattern() {
  const remote = new RemoteControl();
  const ceilingFan = new CeilingFan('room');

  const highCommand = new CeilingFanHighCommand(ceilingFan);
  const mediumCommand = new CeilingFanMediumCommand(ceilingFan);
  const offCommand = new CeilingFanOffCommand(ceilingFan);

  remote.setCommand(0, highCommand, offCommand);
  remote.setCommand(1, mediumCommand, offCommand);

  remote.onButtonWasPressed(0);
  remote.undoButtonPressed();
  remote.onButtonWasPressed(1);
  remote.offButtonWasPressed(1);
  remote.undoButtonPressed();
}
