import { ConditionDisplay } from "./screens/condition";
import WeatherData from "./weather_data"

export const observerPattern = () => {
  const weatherData = new WeatherData();
  const currentCondition = new ConditionDisplay(weatherData);
  weatherData.setMeasurements('10', '90', '1921');
}

