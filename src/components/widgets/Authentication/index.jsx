import s from './style.module.scss';

const Authentication = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <p className={s.title}>{'Авторизация'}</p>
        <div className={s.form}>
          <div className={s.fieldsContainer}>
            <input type="text" />
            <input type="text" />
          </div>
          <button>{'Войти'}</button>
        </div>   
      </div>
    </div>
  );
};

export default Authentication;