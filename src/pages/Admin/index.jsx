import {Authentication, FieldsPanel} from '@widgets';
import s from './style.module.scss';

const AdminPage = () => {
  return (
    <div>
      <Authentication />
      <FieldsPanel />
    </div>
  );
};

export default AdminPage;