import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReportSchema } from '../types';

const initialState: ReportSchema = {
  isLoading: false,
  resetSelect: false,
  error: undefined,
};

export const reportSlice = createSlice({
  name: 'report',
  initialState,
  reducers: {
    setCabinets: (state, action: PayloadAction<string[]>) => {
      state.cabinets = [
        ...action.payload,
      ];
    },
    setCampaigns: (state, action: PayloadAction<string[]>) => {
      state.campaigns = [
        ...action.payload,
      ];
    },
    setMetrics: (state, action: PayloadAction<string[]>) => {
      state.metrics = [
        ...action.payload,

      ];
    },
    resetSelect: (state, action: PayloadAction<string[]>) => {
      state.resetSelect = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { actions: reportActions } = reportSlice;
export const { reducer: reportReducer } = reportSlice;
