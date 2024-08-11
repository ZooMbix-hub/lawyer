import s from './style.module.scss';

const Header = () => (
  <div className={s.wrapper} id={'header'}>
    <div className={s.content}>
      <div className={s.title}>
        <p>{'Адвокат'}</p>
        <p>{'Вагапов Р. Р.'}</p>
      </div>
      <a href="#services">
        <button className={s.btn}>
          {'Узнать подробности'}
        </button>
      </a>
    </div>
  </div>
);

export default Header;