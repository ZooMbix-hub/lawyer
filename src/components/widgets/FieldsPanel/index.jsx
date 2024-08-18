import {useContext} from 'react';
import {AppContext} from '@app/AppStore';
import s from './style.module.scss';
import {Link} from 'react-router-dom';

const FieldsPanel = () => {
  const {setWorkTime, setNumberPhone, setEmail, setAddress} = useContext(AppContext);

  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <p className={s.title}>{'Админ панель'}</p>
        <Link to="/">
          {'Перейти на главную страницу'}
        </Link>
      </div>
      <div className={s.fieldsContainer}>
        <div className={s.field}>
          <p className={s.titleField}>{'Время работы:'}</p>
          <input type='text' className={s.textField} />
        </div>
        <div className={s.field}>
          <p className={s.titleField}>{'Номера телефона:'}</p>
          <input type='text' className={s.textField} />
        </div>
        <div className={s.field}>
          <p className={s.titleField}>{'Почта:'}</p>
          <input type='text' className={s.textField} />
        </div>
        <div className={s.field}>
          <p className={s.titleField}>{'Адрес:'}</p>
          <input type='text' className={s.textField} />
        </div>
        <button>{'Сохранить'}</button>
      </div>
    </div>
  );
};

export default FieldsPanel;