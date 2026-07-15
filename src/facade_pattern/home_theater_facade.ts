import type { Amplifier } from "./amplifier";
import type { CDPlayer } from "./cd_player";
import type { DVDPlayer } from "./dvd_player";
import type { PopcornPopper } from "./popcorn_popper";
import type { Projector } from "./projector";
import type { Screen } from "./screen";
import type { TheaterLights } from "./theater_lights";

export class HomeTheaterFacade {
  private amp: Amplifier;
  private cdPlayer: CDPlayer;
  private dvdPlayer: DVDPlayer;
  private popcornPopper: PopcornPopper;
  private projector: Projector;
  private screen: Screen;
  private lights: TheaterLights;

  constructor({
    amp, cdPlayer, dvdPlayer, lights, popcornPopper, projector, screen, }: {
      amp: Amplifier;
      cdPlayer: CDPlayer;
      dvdPlayer: DVDPlayer;
      popcornPopper: PopcornPopper;
      projector: Projector;
      screen: Screen;
      lights: TheaterLights;
    }) {
    this.amp = amp;
    this.cdPlayer = cdPlayer;
    this.dvdPlayer = dvdPlayer;
    this.popcornPopper = popcornPopper;
    this.projector = projector;
    this.screen = screen;
    this.lights = lights;
  }

  watchMove(movie: string) {
    this.popcornPopper.on();
    this.popcornPopper.pop();
    this.lights.dim(10);
    this.screen.down();
    this.projector.on();
    this.projector.wideScreenMode();
    this.amp.on();
    this.amp.setDVD(this.dvdPlayer);
    this.amp.setSurroundSound(50);
    this.dvdPlayer.on();
    this.dvdPlayer.play(movie);
  }

  endMovie() {
    // implementing rverse of watch moviee
  }
}
