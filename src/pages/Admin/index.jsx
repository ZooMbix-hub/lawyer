import {useState} from 'react';
import {Authentication, FieldsPanel} from '@widgets';
import s from './style.module.scss';

const AdminPage = () => {
  const [isAuth, setIsAuth] = useState(true);

  return (
    <div>
      {/* <Authentication /> */}
      {
        isAuth && <FieldsPanel />
      }
    </div>
  );
};

export default AdminPage;