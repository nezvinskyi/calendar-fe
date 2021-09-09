import { Container, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { saveExportedData } from '../../helpers/saveExportedData';
import { calendarSelectors } from '../../redux/calendar';
import { userSelectors } from '../../redux/user/';
import { userOperations } from '../../redux/user/';
import css from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const userName = useSelector(userSelectors.getUserName);
  const exportData = useSelector(calendarSelectors.exportData);

  const logoutHandler = () => {
    dispatch(userOperations.logout());
  };

  const exportHandler = () => {
    console.log(exportData);
    saveExportedData(exportData);
  };

  return (
    <header>
      <Container className={css.header}>
        <h1 className={css.title}>Calendar</h1>
        <div className={css.userbox}>User: {userName}</div>
        <Button variant="secondary" onClick={exportHandler}>
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
