export interface Weather {
  location: {
    name: string;
    localtime?: string;
  };
  current: {
    temp_c: number;
    humidity: number;
    wind_kph: number;
    is_day: number; // 1 = day, 0 = night
  };
  forecast?: {
    forecastday: Array<{
      day: {
        maxtemp_c: number;
        mintemp_c: number;
      };
    }>;
  };
}
