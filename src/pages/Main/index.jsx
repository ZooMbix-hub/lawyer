import {Amenities, Header, Form, Footer, Navbar, Experience} from '@widgets';
import s from './style.module.scss';

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Amenities />
      <Form />
      <Experience />
      <Footer />
    </div>
  );
};

export default MainPage;