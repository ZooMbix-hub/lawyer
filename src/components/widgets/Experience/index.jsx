import {Carousel} from '../../shared';
import {
  certificate1,
  certificate2,
  certificate3,
  certificate4,
  certificate5,
  certificate6
} from '../../image/certificates';
import s from './style.module.scss';

const Experience = () => {
  return (
    <div className={s.wrapper} id='certificates'>
      <p className={s.title}>{'Опыт работы более 10 лет'}</p>
      <Carousel countImages={6}>
        <img className={s.image} src={certificate1} />
        <img className={s.image} src={certificate2} />
        <img className={s.image} src={certificate3} />
        <img className={s.image} src={certificate4} />
        <img className={s.image} src={certificate5} />
        <img className={s.image} src={certificate6} />
      </Carousel>
    </div>
  );
};

export default Experience;