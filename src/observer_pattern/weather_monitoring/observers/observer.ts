export interface Observer {
  update(temp: string, humidity: string, pressure: string): void;
}
