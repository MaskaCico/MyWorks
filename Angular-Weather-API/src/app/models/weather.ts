export interface Weather {
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  wind: {
    speed: number; // km/h
  };
  name: string;
}
