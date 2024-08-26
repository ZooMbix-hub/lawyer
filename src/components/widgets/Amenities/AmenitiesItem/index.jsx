import icons from '../../../icons';
import s from './style.module.scss';

const AmenitiesItem = ({title, descriptions, iconName}) => {
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
      <a href="#form"><button className={s.ticketBtn}>{'Оставить заявку'}</button></a>
    </div>
  );
};

export default AmenitiesItem;