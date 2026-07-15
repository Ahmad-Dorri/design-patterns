import type { CDPlayer } from "./cd_player";
import type { DVDPlayer } from "./dvd_player";

export class Amplifier {
  private dvd!: DVDPlayer;
  private cd!: CDPlayer;

  on() {
    console.log('turn on amplifier');
  }

  setSurroundSound(sound: number) {
    console.log('set surround sound to ' + sound);
  }

  setDVD(dvd: DVDPlayer) {
    this.dvd = dvd;
  }

  setCD(cd: CDPlayer) {
    this.cd = cd;
  }
}
