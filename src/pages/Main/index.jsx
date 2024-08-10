import {Amenities, Header, Form, Footer, Navbar} from '../../components/widgets';
import SliderBlock from '../../components/SliderBlock';

import s from './style.module.scss';

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Amenities />
      <Form />
      <SliderBlock />
      <Footer />
    </div>
  );
};

export default MainPage;