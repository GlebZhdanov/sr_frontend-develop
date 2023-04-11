import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialStateType } from '../types';
import { fetchCompany } from '../services/fetchCompany';

const initialState: InitialStateType = {
  cabinets: [],
  campaigns: [],
  metrics: [],
  isLoading: false,
  error: '',
};

export const getCompanyDataSlice = createSlice({
  name: 'getCompanyData',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCompany.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchCompany.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.cabinets = action.payload.cabinets;
      state.campaigns = action.payload.campaigns;
      state.metrics = action.payload.metrics;
    },
    [fetchCompany.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { actions: getCompanyDataActions } = getCompanyDataSlice;
export const { reducer: getCompanyDataReducer } = getCompanyDataSlice;
