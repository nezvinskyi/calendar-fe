import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { globalOperations } from '../../redux/global';
import closeIcon from '../../assets/images/close-icon.svg';
import css from './Modal.module.css';

const modalRootRef = document.getElementById('modal-root');

const Modal = ({ children }) => {
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(globalOperations.closeModalAddEvent());
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      dispatch(globalOperations.closeModalAddEvent());
    }
  };

  return createPortal(
    <div className={css.backdrop} onClick={e => handleBackdropClick(e)}>
      <div className={css.modal}>
        <div className={css.closeBtnContainer} onClick={onClose}>
          <img src={closeIcon} alt="" />
        </div>
        {children}
      </div>
    </div>,
    modalRootRef,
  );
};

export default Modal;
