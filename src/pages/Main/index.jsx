import {Amenities, Header, Form, Footer, Navbar} from '../../components/widgets';

import s from './style.module.scss';

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Amenities />
      <Form />
      <Footer />
    </div>
  );
};

export default MainPage;