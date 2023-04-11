import React from 'react';
import { classNames } from '../../../shared/lib/classNames/classNames';
import { AppLink } from '../../../shared/ui/AppLink/AppLink';
import cls from './Navbar.module.css';

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <AppLink
        to="*"
        className={cls.login}
      >
        Вход
      </AppLink>
      <AppLink
        to="*"
        className={cls.register}
      >
        Регистрация
      </AppLink>
    </div>
  );
};
