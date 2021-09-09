import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { calendarOperations } from '../../redux/calendar';
import { globalOperations } from '../../redux/global';
import { sessionOperations } from '../../redux/session';
import { Container, Form, Button } from 'react-bootstrap';
import { timeToMinutes } from '../../helpers/timeConverter';

const AddEventForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [start, setStart] = useState('08:00');
  const [duration, setDuration] = useState(15);
  const [comments, setComments] = useState('');

  const submitHandler = async e => {
    try {
      e.preventDefault();

      const event = { title, start: timeToMinutes(start), duration: Number(duration), comments };

      dispatch(calendarOperations.addEvent(event));
      onClose();
    } catch (error) {
      dispatch(sessionOperations.setError(error.toString()));
    }
  };

  const onClose = () => {
    dispatch(globalOperations.openModalAddEvent());
  };

  return (
    <Container>
      <h1>Add new event</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>

          <Form.Control
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Start time</Form.Label>

          <Form.Control
            type="time"
            min="08:00:00"
            max="17:00:00"
            placeholder="Enter start"
            value={start}
            onChange={e => setStart(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Duration</Form.Label>

          <Form.Control as="select" value={duration} onChange={e => setDuration(e.target.value)}>
            <option value={15}>15 min</option>
            <option value={30}>30 min</option>
            <option value={45}>45 min</option>
            <option value={60}>1 hour</option>
            <option value={90}>1.5 hours</option>
            <option value={120}>2 hours</option>
            <option value={150}>2.5 hours</option>
            <option value={180}>3 hours</option>
          </Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Comments</Form.Label>

          <Form.Control
            type="text"
            placeholder="Enter comments"
            value={comments}
            onChange={e => setComments(e.target.value)}
          />
        </Form.Group>
        <Button type="submit">Add event</Button>
      </Form>
    </Container>
  );
};

export default AddEventForm;
