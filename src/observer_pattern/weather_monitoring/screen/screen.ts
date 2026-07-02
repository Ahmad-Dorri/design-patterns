export interface Screen {
  id: string;
  update(temp: string, humidity: string, pressure: string): void;
}
