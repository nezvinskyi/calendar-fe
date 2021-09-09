import { Button, Container, Form } from 'react-bootstrap';
import css from './LoginPage.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userOperations } from '../../redux/user';
import * as validate from '../../helpers/validate';
import { sessionOperations } from '../../redux/session';

const LoginPage = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const submitHandler = async e => {
    try {
      e.preventDefault();
      await validate.login({ email, password });
      dispatch(userOperations.login({ email, password }));
    } catch (error) {
      dispatch(sessionOperations.setError(error.toString()));
    }
  };

  return (
    <div className={css.background}>
      <Container className={css.container}>
        <h1 className={css.title}>Calendar</h1>
        <div className={css.formContainer}>
          <Form onSubmit={submitHandler}>
            <label htmlFor="" className={css.inputLabelMail}></label>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                required
                placeholder="Enter email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                required
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </Form.Group>

            <div className={css.btnGroup}>
              <Button variant="secondary" type="submit" className={css.primaryBtn}>
                LOGIN
              </Button>

              <Button
                variant="secondary"
                type="button"
                className={css.secondaryBtn}
                onClick={() => {
                  history.push('/register');
                }}
              >
                REGISTRATION
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
