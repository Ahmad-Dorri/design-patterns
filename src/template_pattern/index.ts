import { Coffee } from "./coffee";
import { Tea } from "./tea";

export function templatePattern() {
  const tea = new Tea();
  const coffee = new Coffee();

  tea.prepareRecipe();
  coffee.prepareRecipe();
}
