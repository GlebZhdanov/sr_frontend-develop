import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ReportSettingForm } from '../../../features/ReportSettingForm/ui/ReportSettingForm/ReportSettingForm';
import { useAppDispatch } from '../../../shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  getUserCabinets,
  getUserCampaigns,
  getUserMetrics,
} from '../../../features/ReportSettingForm/model/selectors/reportFormSelector';
import { Button } from '../../../shared/ui/Button/Button';
import cls from './ReportSettings.module.css';
import { fetchCompany } from '../model/services/fetchCompany';
import { updateSettingForm } from '../../../features/ReportSettingForm/model/services/updateSettingForm';
import { getIsLoading } from '../model/selectors/reportSettingSelector';
import Loader from '../../../shared/ui/Loader/Loader';
import { getCompanyDataActions } from '../model/slices/companyDataSlice';
import { reportActions } from '../../../features/ReportSettingForm/model/slice/reportSlice';

export const ReportSettings = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCompany());
  }, [dispatch]);

  const userCabinets = useSelector(getUserCabinets);
  const userMetrics = useSelector(getUserMetrics);
  const userCampaigns = useSelector(getUserCampaigns);
  const isLoading = useSelector(getIsLoading);

  const clickButton = () => {
    dispatch(updateSettingForm(userCabinets, userCampaigns, userMetrics));
    dispatch(reportActions.resetSelect());
  };

  const disabledButton = (Boolean(userCabinets && userCampaigns && userMetrics));

  if (isLoading) {
    return (
      <Loader />
    );
  }

  return (
    <section className={cls.report_settings}>
      <h1 className={cls.title}>Формирование отчета</h1>
      <ReportSettingForm />
      <Button
        className={cls.button}
        onClick={clickButton}
        disabled={!disabledButton}
      >
        Сформировать отчёт
      </Button>
    </section>
  );
};
