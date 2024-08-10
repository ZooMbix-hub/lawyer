import s from './style.module.scss';

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.container}>
        <div className={s.text}>
          <p>Адвокат <br /> Вагапов Р. Р.</p>
        </div>
        <div className={s.headerButton}>
          <button  className={s.btn}><a href="#services">Узнать подробности</a></button>
        </div>
      </div>
    </div>
  );
};

export default Header;