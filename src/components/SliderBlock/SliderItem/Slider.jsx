import ArrowIcon from '../../icons/ArrowIcon';
import s from './style.module.scss';

import Certificate1 from '../../image/certificate1.jpg';
import Certificate2 from '../../image/certificate2.jpg';
import Certificate3 from '../../image/certificate3.jpg';
import Certificate4 from '../../image/certificate4.jpg';
import Certificate5 from '../../image/certificate5.jpg';
import Certificate6 from '../../image/certificate6.jpg';
import Certificate7 from '../../image/certificate7.jpg';
import Certificate8 from '../../image/certificate8.jpg';

const SliderItem = () => {
  return (
    <div className={s.wrapper}>
      <ArrowIcon />
      <div className={s.sliderWrapper} id='#slider'>
        <img src={Certificate1} className={s.img} alt="" />
        <img src={Certificate2} className={s.img} alt="" />
        <img src={Certificate3} className={s.img} alt="" />
        <img src={Certificate4} className={s.img} alt="" />
        <img src={Certificate5} className={s.img} alt="" />
        <img src={Certificate6} className={s.img} alt="" />
        <img src={Certificate7} className={s.img} alt="" />
        <img src={Certificate8} className={s.img} alt="" />
      </div>
      <ArrowIcon />
    </div>
  );
};

export default SliderItem;