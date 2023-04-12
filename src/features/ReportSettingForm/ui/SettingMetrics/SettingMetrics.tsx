import React, { ChangeEvent, useState } from 'react';
import './SettingMetrics.css';
import { useAppDispatch } from '../../../../shared/lib/hooks/useAppDispatch/useAppDispatch';
import { reportActions } from '../../model/slice/reportSlice';

interface SettingMetricsProps {
  metrics?: string[];
}
export const SettingMetrics = (props: SettingMetricsProps) => {
  const { metrics } = props;
  const [campaigns, setCampaings] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  const handleChooseCampaign = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectValue: string = e.target.value;

    const isMetricInArr = campaigns.includes(selectValue);
    if (!isMetricInArr) {
      setCampaings([...campaigns, selectValue]);
      dispatch(reportActions.setMetrics([...campaigns, selectValue]));
    }
  };

  return (
    <div className="settings__footer">
      <div className="settings__footer-container">
        <h3 className="settings__title page__subtitle">
          Выберите метрики в том порядке, в каком они должны отобразиться в отчёте
        </h3>
      </div>
      <div className="settings__metrics">
        {/* <div className="settings__metric page__text_type_gray"> */}
        {/* <h4 className="settings__metric-title page__text_type_gray"> */}
        {/*  Кампания */}
        {/* </h4> */}
        {/* </div> */}
        {
          campaigns.map((campaign, index) => (
            <div key={index} className="settings__metric page__text_type_gray">
              <h5 className="page__text_type_gray settings__metric-name">
                {campaign}
              </h5>
            </div>
          ))
        }
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label className="settings__metrics-container">
          <select onChange={handleChooseCampaign} className="settings__add-metrics">
            {metrics.map((i, index) => (
              <option
                key={index}
                value={i}
                className="settings__add-metric"
              >
                {i}
              </option>
            ))}
            {/* <option value="Клики" className="settings__add-metric"> */}
            {/*  Клики */}
            {/* </option> */}
            {/* <option value="CTR" className="settings__add-metric"> */}
            {/*  CTR */}
            {/* </option> */}
            {/* <option value="CPC" className="settings__add-metric"> */}
            {/*  CPC */}
            {/* </option> */}
            {/* <option value="CR% Подписчики" className="settings__add-metric"> */}
            {/*  CR% Подписчики */}
            {/* </option> */}
            {/* <option value="CPF" className="settings__add-metric"> */}
            {/*  CPF */}
            {/* </option> */}
            {/* <option value="Лиды" className="settings__add-metric"> */}
            {/*  Лиды */}
            {/* </option> */}
            {/* <option value="CR% Лиды" className="settings__add-metric"> */}
            {/*  CR% Лиды */}
            {/* </option> */}
            {/* <option value="CPL" className="settings__add-metric"> */}
            {/*  CPL */}
            {/* </option> */}
            {/* <option value="Потрачено" className="settings__add-metric"> */}
            {/*  Потрачено */}
            {/* </option> */}
          </select>
        </label>
      </div>
    </div>
  );
};
