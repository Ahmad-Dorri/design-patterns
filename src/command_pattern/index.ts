import { GarageDoorAdapter } from "./adapter/adapters/garage_door_adapter";
import { GarageDoorOffCommand } from "./adapter/command/commands/garage_door_off_command";
import { GarageDoorOnCommand } from "./adapter/command/commands/garage_door_on_command";
import { RemoteControl } from "./adapter/remote_control/remote_control";
import { GarageDoor } from "./appliances/garage_door";

export function commandPattern() {
  const remote = new RemoteControl();
  const garageDoor = new GarageDoor();

  const garageDoorAdapter = new GarageDoorAdapter(garageDoor);

  remote.setCommand(0, new GarageDoorOnCommand(garageDoorAdapter), new GarageDoorOffCommand(garageDoorAdapter));


  remote.onButtonWasPressed(0)
  remote.offButtonWasPressed(0)
}
