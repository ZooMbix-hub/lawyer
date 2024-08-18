import {useContext, useState} from 'react';
import {AppContext} from '@app/AppStore';
import s from './style.module.scss';
import {Link} from 'react-router-dom';

const FieldsPanel = () => {
  const {
    workTime, 
    setWorkTime, 
    numberPhone, 
    setNumberPhone, 
    email, 
    setEmail, 
    address, 
    setAddress
  } = useContext(AppContext);

  const [newFromWorkTime, setNewFromWorkTime] = useState(workTime.from);
  const [newToWorkTime, setNewToWorkTime] = useState(workTime.to);

  const [newNumberPhoneOne, setNewNumberPhoneOne] = useState(numberPhone[0]);
  const [newNumberPhoneTwo, setNewNumberPhoneTwo] = useState(numberPhone[1]);

  const [newEmail, setNewEmail] = useState(email);

  const [newIndex, setNewIndex] = useState(address.index);
  const [newCity, setNewCity] = useState(address.city);
  const [newStreet, setNewStreet] = useState(address.street);

  const saveData = () => {
    if (newFromWorkTime || newToWorkTime) {
      setWorkTime({
        from: newFromWorkTime,
        to: newToWorkTime
      });
    }

    if (newNumberPhoneOne || newNumberPhoneTwo) {
      setNumberPhone([newNumberPhoneOne, newNumberPhoneTwo]);
    }

    if (newEmail) {
      setEmail(newEmail);
    }

    if (newIndex || newCity || newStreet) {
      setAddress({
        index: newIndex,
        city: newCity,
        street: newStreet
      });
    }
  };

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
          <input 
            type={'text'} 
            value={newFromWorkTime} 
            onChange={({target}) => setNewFromWorkTime(target.value)}
            className={s.textField} 
          />
          <input 
            type={'text'} 
            value={newToWorkTime} 
            onChange={({target}) => setNewToWorkTime(target.value)}
            className={s.textField} 
          />
        </div>
        <div className={s.field}>
          <p className={s.titleField}>{'Номера телефона:'}</p>
          <input 
            type={'text'} 
            placeholder={'Введите номер'}
            value={newNumberPhoneOne} 
            onChange={({target}) => setNewNumberPhoneOne(target.value)}
            className={s.textField} 
          />
          <input 
            type={'text'} 
            placeholder={'Введите номер'}
            value={newNumberPhoneTwo} 
            onChange={({target}) => setNewNumberPhoneTwo(target.value)}
            className={s.textField} 
          />
        </div>
        <div className={s.field}>
          <p className={s.titleField}>{'Почта:'}</p>
          <input 
            type={'text' }
            placeholder={'Введите почту'}
            value={newEmail} 
            onChange={({target}) => setNewEmail(target.value)}
            className={s.textField} 
          />
        </div>
        <div className={s.field}>
          <p className={s.titleField}>{'Адрес:'}</p>
          <input 
            type={'text'} 
            placeholder={'Введите индекс города'}
            value={newIndex} 
            onChange={({target}) => setNewIndex(target.value)}
            className={s.textField} 
          />
          <input 
            type={'text'}
            placeholder={'Введите город'} 
            value={newCity} 
            onChange={({target}) => setNewCity(target.value)}
            className={s.textField} 
          />
          <input 
            type={'text'}
            placeholder={'Введите улицу'} 
            value={newStreet} 
            onChange={({target}) => setNewStreet(target.value)}
            className={s.textField} 
          />
        </div>
        <button onClick={saveData}>{'Сохранить'}</button>
      </div>
    </div>
  );
};

export default FieldsPanel;