import s from './style.module.scss';

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.container}>
        <div className={s.text}>
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
};

export default Header;