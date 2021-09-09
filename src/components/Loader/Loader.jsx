import { createPortal } from 'react-dom';
import styles from './Spinner.module.css';

const modalRootRef = document.getElementById('modal-root');

const Spinner = () => {
  return (
    <div className={styles.gooey}>
      <span className={styles.dot}></span>
      <div className={styles.dots}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={styles.loading}>loading</div>
    </div>
  );
};

const Loader = () => {
  return createPortal(
    <div className={styles.LoaderBackdrop}>
      <div className={styles.LoaderContent}></div>
      <Spinner />
    </div>,
    modalRootRef,
  );
};

export default Loader;
