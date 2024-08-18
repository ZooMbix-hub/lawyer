import {useContext} from 'react';
import {AppContext} from '@app/AppStore';
import s from './style.module.scss';

const Navbar = () => {
  const {workTime, numberPhone} = useContext(AppContext);

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.content}>
          <p className={s.logo}>
            <a href="#header">{'Вагапов'}</a>
          </p>
          <div className={s.info}>
            <ul className={s.navbar}>
              <li className={s.navItem}>
                <a href="#services">{'Услуги'}</a>
              </li>
              <li className={s.navItem}>
                <a href="#certificates">{'Сертификаты'}</a>
              </li>
              <li className={s.navItem}>
                <a href="#contacts">{'Контакты'}</a>
              </li>
            </ul>
            <div className={s.contact}>
              <p className={s.workTime}>{`Время работы с ${workTime.from} до ${workTime.to}`}</p>
              <div className={s.phones}>
                {
                  numberPhone.map((item, i) => (
                    <a key={i} href={`tel:${item.replace(/[- .]/g, "")}`}>
                      {item}
                    </a>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;