import { createAsyncThunk } from '@reduxjs/toolkit';
import { IWeather } from './weatherSlice';

export const weatherRequestAsync = createAsyncThunk<IWeather, string>(
  'weather/fetch',
  async (city: string) => {
    const response: Response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9be3a6ac25fadc7f9acd14857b640ad0&lang=ru&units=metric`
    );
    if (response.ok && response.status >= 200 && response.status < 300) {
      return response.json();
    } else {
      throw new Error(response.statusText);
    }
  }
);
