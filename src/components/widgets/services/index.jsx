import s from './style.module.scss';
import ServiceItem from './ServiceItem';
import servicesData from './consts';

const Services = () => {
  return (
    <div className={s.wrapper}>
      <p className={s.title}>{'Юридические услуги'}</p>
      <div className={s.container}>
        {
          servicesData.map((item) => (
            <ServiceItem 
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

export default Services;