import {useState} from 'react';
import s from './style.module.scss';
import emailjs from '@emailjs/browser';

const Form = () => {
  
  function noDigits(event) {
    if ('1234567890'.indexOf(event.key) != -1)
      event.preventDefault();
  }

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_8kf7anq';
    const templateId = 'template_mikhmyl';
    const publicKey = 'eQgQpGSb6PtzX1o3u';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Floki',
      number: number,
      message: message,
      email: email,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
        setNumber('');
      })
      .catch((error) => {
        console.log('Error sending email:', error);
      });
  };


  
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
            <form className={s.flexForm} onSubmit={handleSubmit}>
              <input type="text"  className={s.inputForm} value={name} onChange={(e) => setName(e.target.value)}  placeholder='Ваше имя' maxLength="45" onKeyDown={noDigits}/>
              <input type="number" className={s.inputForm} onChange={(e) => setNumber(e.target.value)} value={number} inputMode="tel" placeholder='+7 (000) 000-0000' maxLength="11"/>
              <input type="email" className={s.inputForm} value={email} onChange={(e) => setEmail(e.target.value)}  inputMode="email" placeholder='E-mail' />
              <input type='submit' className={s.inputForm } value="Отправить заявку" />
              <textarea type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Напишите тему заявки и опишите суть проблемы' className={s.formText}/>
            </form>        
          </div>
        </div> 
      </div>
      
    </>
    
  );
};

export default Form;