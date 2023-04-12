import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { getCompanyDataReducer } from '../../../pages/ReportSettings/model/slices/companyDataSlice';
import { reportReducer } from '../../../features/ReportSettingForm/model/slice/reportSlice';

const rootReducer = combineReducers({
  getCompany: getCompanyDataReducer,
  postCompany: reportReducer,
});

export const setupStore = () => configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: RootState;
}
