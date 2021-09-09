import { Button } from 'react-bootstrap';
import addIcon from '../../assets/images/add-icon.svg';

import { useDispatch } from 'react-redux';
import { globalOperations } from '../../redux/global';

const jss = {
  addBtn: {
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    padding: '0px',
    position: 'fixed',
    bottom: '2em',
    right: '2em',
  },
};

const AddBtn = () => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(globalOperations.openModalAddEvent());
  };

  return (
    <>
      <Button variant="secondary" onClick={openModal} style={jss.addBtn}>
        <img src={addIcon} alt="" />
      </Button>
    </>
  );
};

export default AddBtn;
