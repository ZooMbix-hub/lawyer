import {useContext} from 'react';
import {AppContext} from '@app/AppStore';
import s from './style.module.scss';

const Footer = () => {
  const {workTime, numberPhone, email, address} = useContext(AppContext);

  return (
    <div className={s.wrapper}>
      <div className={s.flexbox}>
        <div >
          <iframe 
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Acd30a3d503d28afb7909e5db0fd57a1476a49972a24ed17b102409c12ee64b03&amp;source=constructor" 
            className={s.maps}
          />
        </div>
        <div className={s.contacts} id='contacts'>
          <div className={s.contactsBlock}>
            <h1>{'Контакты'}</h1>
            <div className={s.grid}>
              <div className={s.gridItem}>
                <h3>{'График работы'}</h3>
                <p>{`пн-сб: с ${workTime.from} до ${workTime.to}`}</p>
              </div>
              <div className={s.gridItem}>
                <h3>{'Рабочий телефон'}</h3>
                {
                  numberPhone.map((item, i) => (
                    <p key={i} >
                      <a href={`tel:${item.replace(/[- .]/g, '')}`}>
                        {item}
                      </a>
                    </p>
                  ))
                }
              </div>
              <div className={s.gridItem}>
                <h3>{'Почта'}</h3>
                <p className={s.accent}><a href={`mailto:${email}`}>{email}</a></p>
              </div>
              <div className={s.gridItem}>
                <h3>{'Адрес'}</h3>
                <p>{`${address.index} г. ${address.city},`}</p>
                <p>{`ул. ${address.street}`}</p>
              </div>
            </div>
          </div>
          <div className={s.ap}>
            <p>© Адвокат Вагапов Ришат Ринатович, регистрационный номер 89/390 <a href="https://www.advokatyamal.ru/about/lawyers/vagapov_rishat_rinatovich/" target='__blank'>в реестре адвокатской палаты Ямало-Ненецкого автономного округа</a>. Все права защищены.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;