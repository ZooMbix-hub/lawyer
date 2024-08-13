import s from './style.module.scss';

const Form = () => {
  
  function noDigits(event) {
    if ("1234567890".indexOf(event.key) != -1)
      event.preventDefault();
  }
  
  return (
    
    <>
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
              <input type="text"  placeholder='Ваше имя' maxLength="45" onKeyDown={noDigits}/>
              <input type="number" inputMode="tel" placeholder='+7 (000) 000-0000' maxLength="11"/>
              <input type="text" inputMode="email" placeholder='E-mail' />
              <button className={s.btn}><a href="">Оставить заявку</a></button>
            </div>        
          </div>
        </div>
      </div>
      
    </>
    
  );
};

export default Form;