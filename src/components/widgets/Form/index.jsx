import s from './style.module.scss';

const Form = () => {
  
  function noDigits(event) {
    if ('1234567890'.indexOf(event.key) != -1)
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
            <form className={s.flexForm}>
              <input type="text"  placeholder='Ваше имя' maxLength="45" onKeyDown={noDigits}/>
              <input type="number" inputMode="tel" placeholder='+7 (000) 000-0000' maxLength="11"/>
              <input type="email"  inputMode="email" placeholder='E-mail' />
              <input type='submit' value="Отправить заявку" className={s.btn} />
              <textarea type="text" placeholder='Напишите тему заявки и опишите суть проблемы' className={s.formText}/>
            </form>        
          </div>
        </div> 
      </div>
      
    </>
    
  );
};

export default Form;