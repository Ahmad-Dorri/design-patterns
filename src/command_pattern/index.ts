import { GarageDoorAdapter } from "./adapter/adapters/garage_door_adapter";
import { GarageDoorOffCommand } from "./adapter/command/commands/garage_door_off_command";
import { SimpleRemoteControl } from "./adapter/remote_control/simple_remote_control";
import { GarageDoor } from "./appliances/garage_door";

export function commandPattern() {
  const remote = new SimpleRemoteControl();
  const garageDoor = new GarageDoor();

  const garageDoorAdapter = new GarageDoorAdapter(garageDoor);

  remote.executeCommand();
  remote.executeCommand();
  remote.executeCommand();

  remote.setCommand(new GarageDoorOffCommand(garageDoorAdapter));

  remote.executeCommand();
}
