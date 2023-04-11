import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TestDataResponseType } from '../types';

export const fetchCompany = createAsyncThunk(
  'fetchCompany',
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const response = await axios.get<TestDataResponseType>('https://test-simplereports.ru/api/v1/info/');

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error');
    }
  },
);
