import s from './style.module.scss';
import SliderItem from './SliderItem/Slider';

const SliderBlock = () =>{
  return (
    <div className={s.sliderBlock}>
      <div className={s.container}>
        <div className={s.title}>
          <p>Опыт работы более 10 лет</p>
        </div>
        <SliderItem />
      </div>
    </div>
  );
};

export default SliderBlock;