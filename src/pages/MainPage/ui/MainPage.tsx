import React, { useEffect } from 'react';
import { ReactComponent as LogoImage } from '../../../shared/assets/icons/image.svg';
import { Icon } from '../../../shared/ui/Icon/Icon';
import { AppLink } from '../../../shared/ui/AppLink/AppLink';
import cls from './MainPage.module.css';

export const MainPage = () => {
  const one = '';
  return (
    <section className={cls.Main}>
      <h1 className={cls.title}>Маркетинговая аналитика</h1>
      <p
        className={cls.subtitle}
      >
        Сервис сбора данных по рекламе, заказам, звонкам и клиентам из рекламных кабинетов вединой связанной системе
      </p>
      <div className={cls.container}>
        <Icon Svg={LogoImage} className={cls.image} />
        <div className={cls.content}>
          <div className={cls.content_block}>
            <div className={cls.block}>
              <h3 className={cls.content_title}>
                Гибкая настройка отчётов
              </h3>
              <p className={cls.content_subtitle}>
                добавляйте в отчёты собственные метрики со значимыми для вас бизнес-показателями
              </p>
            </div>
            <div className={cls.block}>
              <h3 className={cls.content_title}>
                Гибкая настройка отчётов
              </h3>
              <p className={cls.content_subtitle}>
                добавляйте в отчёты собственные метрики со значимыми для вас бизнес-показателями
              </p>
            </div>
          </div>
          <AppLink
            to="/report-settings"
            className={cls.link}
          >
            Попробуйте сейчас
          </AppLink>
        </div>
      </div>
    </section>
  );
};
