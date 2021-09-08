import { Container, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from '../../redux/user/user-selectors';
import { userOperations } from '../../redux/user/';
import css from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);

  const logoutHandler = () => {
    dispatch(userOperations.logout());
  };

  return (
    <header>
      <Container className={css.header}>
        <h1 className={css.title}>Calendar</h1>
        <div className={css.userbox}>User: {userName}</div>
        <Button onClick={logoutHandler}>Logout</Button>
      </Container>
    </header>
  );
};

export default Header;
