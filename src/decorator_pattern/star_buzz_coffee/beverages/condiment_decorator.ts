import { Beverage } from "../beverage";

export abstract class CondimentDecorator extends Beverage {
  abstract getDescription(): string;
}
