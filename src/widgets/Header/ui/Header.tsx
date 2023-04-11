import React from 'react';
import { Icon } from '../../../shared/ui/Icon/Icon';
import { ReactComponent as LogoIcon } from '../../../shared/assets/icons/logo.svg';
import { Navbar } from '../../Navbar';
import { classNames } from '../../../shared/lib/classNames/classNames';
import cls from './Header.module.css';

interface HeaderProps {
  className?: string,
}

const Header = (props: HeaderProps) => {
  const { className } = props;
  return (
    <header className={classNames(cls.Header, {}, [className])}>
      <div className={cls.content}>
        <Icon Svg={LogoIcon} />
        <span className={cls.title}>
          Simple Reports
        </span>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
