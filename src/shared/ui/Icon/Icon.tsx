import React from 'react';
import { classNames } from '../../lib/classNames/classNames';
import cls from './Icon.module.css';

interface IconProps {
  className?: string,
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = (props: IconProps) => {
  const { className, Svg } = props;
  return (
    <Svg className={classNames(cls.Icon, {}, [className])} />
  );
};
