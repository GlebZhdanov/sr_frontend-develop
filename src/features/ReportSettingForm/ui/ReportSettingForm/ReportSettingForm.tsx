import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  getCabinets,
  getCampaigns,
  getMetrics,
} from 'pages/ReportSettings/model/selectors/reportSettingSelector';
import cls from './ReportSettingForm.module.css';
import { SettingCabinets } from '../SettingCabinets/SettingCabinets';
import { SettingCampaigns } from '../SettingCampaigns/SettingCampaigns';
import { SettingMetrics } from '../SettingMetrics/SettingMetrics';

export const ReportSettingForm = () => {
  const cabinets = useSelector(getCabinets).map((i) => i.ext_name);
  const metrics = useSelector(getMetrics).map((i) => Object.keys(i)).join(' ,').split(',');
  const campaigns = useSelector(getCampaigns).map((i) => i.ext_name);

  return (
    <div className={cls.form}>
      <div className={cls.form_container}>
        <SettingCabinets cabinets={cabinets} />
        <SettingCampaigns campaigns={campaigns} />
      </div>
      <SettingMetrics metrics={metrics} />
    </div>
  );
};
