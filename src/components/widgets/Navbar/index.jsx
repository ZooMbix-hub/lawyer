import s from './style.module.scss';
import logo from '../../image/logo.png';

const Navbar = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <p className={s.logo}>
          <a href="#header">
            <img src={logo} className={s.navLogo} />
          </a>
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
            <p className={s.workTime}>{'Время работы с 8:00 до 18:00'}</p>
            <div className={s.phones}>
              <a href={'tel:79044539558'}>
                {'+7 904 453-95-58'}
              </a>
              <a href={'tel:79044539558'}>
                {'+7 958 166-31-76'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;