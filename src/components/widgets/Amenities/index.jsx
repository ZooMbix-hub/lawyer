import s from './style.module.scss';
import AmenitiesItem from './AmenitiesItem';
import servicesData from './servicesData';

const Amenities = () => {
  return (
    <div className={s.wrapper} id="services">
      <p className={s.title}>{'Юридические услуги'}</p>
      <div className={s.container}>
        {
          servicesData.map((item) => (
            <AmenitiesItem 
              key={item.id} 
              title={item.title} 
              descriptions={item.descriptions}
              iconName={item.iconName}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Amenities;