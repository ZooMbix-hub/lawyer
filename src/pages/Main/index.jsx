import {Services} from '../../components';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/Header';
import Form from '../../components/Form';
import SliderBlock from '../../components/SliderBlock';
import Footer from '../../components/Footer';

import s from './style.module.scss';

const MainPage = () => {
  return (
    <div>
      MainPage
      <Navbar />
      <Header />
      <Services />
      <Form />
      <SliderBlock />
      <Footer />
    </div>
  );
};

export default MainPage;