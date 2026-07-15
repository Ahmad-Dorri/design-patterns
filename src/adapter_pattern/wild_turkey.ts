import type { Turkey } from "./turkey";

export class WildTurkey implements Turkey {
  fly(): void {
    console.log('im flying a short distance');
  }

  gobble(): void {
    console.log('gobble gobble');

  }
}
