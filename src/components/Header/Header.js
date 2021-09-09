import { Container, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { saveExportedData } from '../../helpers/saveExportedData';
import { calendarSelectors } from '../../redux/calendar';
import { userSelectors, userOperations } from '../../redux/user/';

import css from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const { name, avatar } = useSelector(userSelectors.getUserInfo);
  const exportData = useSelector(calendarSelectors.exportData);

  const logoutHandler = () => {
    dispatch(userOperations.logout());
  };

  const exportHandler = () => {
    console.log('Calendar data :>>>', exportData);
    saveExportedData(exportData);
  };

  return (
    <header>
      <Container className={css.header}>
        <h1 className={css.title}>Calendar</h1>
        <div className={css.userbox}>
          <img className={css.avatar} src={avatar} alt="gravatar" />
          <span className={css.name}>User: {name}</span>
        </div>
        <Button className={css.btn} variant="secondary" onClick={exportHandler}>
          Export calendar data
        </Button>
        <Button variant="secondary" onClick={logoutHandler}>
          Logout
        </Button>
      </Container>
    </header>
  );
};

export default Header;
