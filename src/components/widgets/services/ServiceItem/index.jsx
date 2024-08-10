import s from './style.module.scss';
import icons from '../../../icons';
import Img from '../../../image/bg-card1.jpg';

const ServiceItem = ({title, descriptions, iconName}) => {
  const Icon = icons[iconName];

  return (
    <div className={s.containerService}>
      <div className={s.iconBlock}>
        <Icon />
      </div>
      <div>
        <p className={s.titleService}>{title}</p>
        <ul className={s.descriptions}>
          {
            descriptions.map((item) => (
              <li key={item.id} className={s.description}>
                {item.label}
              </li>
            ))
          }
        </ul>
      </div>
      <button className={s.ticketBtn}>{'Оставить заявку'}</button>
    </div>
  );
};

export default ServiceItem;