import s from './style.module.scss';

const Navbar = () => {
  return (
    <div className={s.nav}>
      <div className={s.container}>
        <p className={s.logo}><a href="#header">Вагапов</a></p>
        <div className={s.rightText}>
          <ul>
            <li><a href="#services">Услуги</a></li>
            <li><a href="#certificate">Сертификаты</a></li>
            <li><a href="#contacts">Контакты</a></li>
          </ul>
          <div className={s.contactsBlock}>
            <p>Время работы с 8:00 до 18:00</p>
            <div className={s.phone}>
              <p><a href="tel:+79044539558">+7 904 453-95-58</a></p>
              <p><a href="tel:+79581663176">+7 958 166-31-76</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;