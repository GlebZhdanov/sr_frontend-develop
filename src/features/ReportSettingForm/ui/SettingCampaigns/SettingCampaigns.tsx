import React, { useState } from 'react';
import MultipleSelect from '../../../../shared/ui/MultipleSelect/Select';
import { useAppDispatch } from '../../../../shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './SettingCampaigns.module.css';
import { reportActions } from '../../model/slice/reportSlice';

interface SettingCampaignsProps {
  campaigns: string[];
}

export const SettingCampaigns = ({ campaigns }: SettingCampaignsProps) => {
  const dispatch = useAppDispatch();
  const [campaignsNew, setCampaignsNew] = useState([]);

  const onChange = (data: string[]) => {
    dispatch(reportActions.setCampaigns(data));
    setCampaignsNew(data);
  };

  return (
    <div className={cls.Campaigns}>
      <h3 className={cls.title}>Выберите кампании</h3>
      <MultipleSelect
        onChange={onChange}
        data={campaigns}
      />
    </div>
  );
};
