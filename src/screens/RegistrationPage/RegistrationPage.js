import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Container, Form, Button } from 'react-bootstrap';

import css from './RegistrationPage.module.css';
import { sessionOperations } from '../../redux/session';
import { userOperations } from '../../redux/user';

import 'react-toastify/dist/ReactToastify.css';

import * as validate from '../../helpers/validate';

const RegistrationPage = ({ history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();

  const submitHandler = async e => {
    try {
      e.preventDefault();

      if (password !== confirmPassword) {
        const errorMessage = 'Passwords no not match';
        // alert(errorMessage);
        dispatch(sessionOperations.setError(errorMessage));
        return;
      }

      await validate.registration({ name, email, password });

      dispatch(userOperations.register({ name, email, password }));
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
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </Form.Group>

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
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
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

            <Form.Group className="mb-3">
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                required
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
              />
            </Form.Group>

            <div className={css.btnGroup}>
              <Button variant="primary" type="submit" className={css.primaryBtn}>
                REGISTER
              </Button>
              <Button
                variant="primary"
                type="button"
                className={css.secondaryBtn}
                onClick={() => {
                  history.push('/login');
                }}
              >
                LOGIN
                {/* <Link to="/login">LOGIN</Link> */}
              </Button>
            </div>
          </Form>
          {/* <div className={css.formWrapper}>
            <form className={css.form} onSubmit={submitHandler} autoComplete="off">
              <label htmlFor="" className={css.inputLabelMail}></label>
              <input
                className={css.inputItem}
                type="email"
                name="email"
                required
                placeholder="E-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />

              <label htmlFor="" className={css.inputLabelPassword}></label>
              <input
                className={css.inputItem}
                type="password"
                name="password"
                required
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />

              <label htmlFor="" className={css.inputLabelPassword}></label>
              <input
                className={css.inputItem}
                type="password"
                name="confirmPassword"
                required
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
              />

              <label htmlFor="" className={css.inputLabelUser}></label>
              <input
                className={css.inputItem}
                type="name"
                name="name"
                required
                placeholder="Your name"
                value={name}
                onChange={e => setName(e.target.value)}
              />

              <div className={css.btnGroup}>
                <Button variant="primary" type="submit" style={styles.primaryBtn}>
                  REGISTER
                </Button>

                <Button variant="primary" type="button" style={styles.secondaryBtn}>
                  <Link to="/login">LOGIN</Link>
                </Button>
              </div>
            </form>
          </div> */}
        </div>
      </Container>
    </div>
  );
};

export default RegistrationPage;
