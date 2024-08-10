import s from './style.module.scss';

const Footer = () => {
  return(
    <div className={s.wrapper}>
      <div className={s.flexbox}>
        <div className={s.maps}>
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Acd30a3d503d28afb7909e5db0fd57a1476a49972a24ed17b102409c12ee64b03&amp;source=constructor" width="705" height="400" frameborder="0"></iframe>
        </div>
        <div className={s.contacts}>
          <h1>Контакты</h1>
          <div className={s.grid}>
            <div className={s.gridItem}>
              <h3>График работы</h3>
              <p>пн-сб: с 8:00 до 18:00</p>
            </div>
            <div className={s.gridItem}>
              <h3>Рабочий телефон</h3>
              <p>+7 904 453-95-58</p>
              <p>+7 958 166-31-76</p>
            </div>
            <div className={s.gridItem}>
              <h3>Почта</h3>
              <p className={s.accent}>socrat-89@yandex.ru</p>
            </div>
            <div className={s.gridItem}>
              <h3>Адресс</h3>
              <p>629000 г.Салехард,</p>
              <p>ул. Свердлова, дом 22, офис 214</p>
            </div>
          </div>
          <div className={s.ap}>
            <p>© Адвокат Вагапов Ришат Ринатович, регистрационный номер 89/390 в реестре <a href="https://www.advokatyamal.ru/about/lawyers/vagapov_rishat_rinatovich/" target='__blank'>адвокатской палаты Ямало-Ненецкого автономного округа</a>. Все права защищены.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;