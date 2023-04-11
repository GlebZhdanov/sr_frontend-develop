import React, { ReactNode } from 'react';
import { LinkProps, Link } from 'react-router-dom';
import { classNames } from '../../lib/classNames/classNames';
import cls from './AppLink.module.css';

interface AppLinkProps extends LinkProps {
  className?: string;
  children?: ReactNode;
}

export const AppLink = (props: AppLinkProps) => {
  const {
    to,
    children,
    className,
    ...otherProps
  } = props;
  return (
    <Link
      to={to}
      {...otherProps}
      className={classNames(cls.AppLink, {}, [className])}
    >
      {children}
    </Link>
  );
};
