import React, { useState } from 'react';
import MultipleSelect from '../../../../shared/ui/MultipleSelect/Select';
import { useAppDispatch } from '../../../../shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './SettingCabinets.module.css';
import { reportActions, reportReducer } from '../../model/slice/reportSlice';

interface SettingCabinetsProps {
  cabinets: string[];
}

export const SettingCabinets = ({ cabinets }: SettingCabinetsProps) => {
  const dispatch = useAppDispatch();

  const onChange = (data: string[]) => {
    dispatch(reportActions.setCabinets(data));
  };

  return (
    <div className={cls.Cabinets}>
      <h3 className={cls.title}>Выберите кабинеты</h3>
      <MultipleSelect
        onChange={onChange}
        data={cabinets}
      />
    </div>
  );
};
