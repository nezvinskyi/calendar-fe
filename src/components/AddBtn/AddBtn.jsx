import { Button } from 'react-bootstrap';
import addIcon from '../../assets/images/add-icon.svg';

import { useDispatch } from 'react-redux';
import { globalOperations } from '../../redux/global';

const inlineStyles = {
  addBtn: {
    // backgroundColor: '#0d6efd',
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    padding: '0px',
    // border: 'none',
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
      <Button variant="secondary" onClick={openModal} style={inlineStyles.addBtn}>
        <img src={addIcon} alt="" />
      </Button>
    </>
  );
};

export default AddBtn;
