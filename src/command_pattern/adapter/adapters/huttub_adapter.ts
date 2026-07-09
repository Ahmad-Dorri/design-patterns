import type { Huttub } from "../../appliances/huttub";
import type { ApplicanceAdapter } from "../applicance_adapter";

export class HuttubAdapter implements ApplicanceAdapter {
  private huttub: Huttub;

  constructor(huttub: Huttub) {
    this.huttub = huttub;
  }

  on(): void {
    this.huttub.jetsOn();
  }

  off(): void {
    this.huttub.jetsOff();
  }

  setTemprature(temp: number) {
    this.huttub.setTemprature(temp);
  }

  circulate() {
    this.huttub.circulate();
  }
}
