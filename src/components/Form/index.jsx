import s from './style.module.scss';

const Form = () => {
  return (
    <div className={s.form}>
      <div className={s.container}>
        <div className={s.block}>
          <div className={s.title}>
            <p>Свяжитесь со мной</p>
          </div>
          <div className={s.text}>
            <p>Проведу вам экспертную консультацию, вникну в суть вашей проблемы и подготовлю оптимальное решение поставленной задачи</p>
          </div>
          <div className={s.flexForm}>
            <input type="text" placeholder='Ваше имя' />
            <input type="number" placeholder='+7 (000) 000-0000' />
            <input type="text" placeholder='E-mail' />
            <button className={s.btn}><a href="">Оставить заявку</a></button>
          </div>        
        </div>
      </div>
    </div>
  );
};

export default Form;