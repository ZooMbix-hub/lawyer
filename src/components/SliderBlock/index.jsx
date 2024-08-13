import s from './style.module.scss';
import SliderItem from './SliderItem/Slider';

const SliderBlock = () =>{
  return (
    <div className={s.sliderBlock} id='certificate'>
      <div className={s.container}>
        <p className={s.title}>{'Опыт работы более 10 лет'}</p>
        <SliderItem />
      </div>
    </div>
  );
};

export default SliderBlock;