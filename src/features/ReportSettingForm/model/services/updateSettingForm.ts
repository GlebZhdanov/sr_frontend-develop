import axios from 'axios';
import { AppDispatch } from '../../../../app/provides/config/store';

export const updateSettingForm = (cabinets: string[], campaigns: string[], metrics: string []) => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.post('https://test-simplereports.ru/api/v1/report_task/', {
      cabinets,
      campaigns,
      metrics,
    });
  } catch (e) {
    console.log(e);
  }
};
