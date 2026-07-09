import type { TV } from "../../appliances/tv";
import type { ApplicanceAdapter } from "../applicance_adapter";

export class TVAdapter implements ApplicanceAdapter {
  private tv: TV;

  constructor(tv: TV) {
    this.tv = tv;
  }

  on(): void {
    this.tv.on();
  }

  off(): void {
    this.tv.off();
  }

  setInputChannel(channelNumber: number) {
    this.tv.setInputChannel(channelNumber);
  }

  setVolume(volume: number) {
    this.tv.setVolume(volume);
  }
}
