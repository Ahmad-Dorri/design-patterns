import type { Duck } from "./duck";

export class MallardDuck implements Duck {
  fly(): void {
    console.log('im flying');
  }

  quack(): void {
    console.log('quack');

  }
}
