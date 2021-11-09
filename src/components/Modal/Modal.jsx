import PropTypes from 'prop-types';
import { IoClose } from 'react-icons/io';

import s from './Modal.module.css';

const Modal = ({ children, text, onClose }) => {
  return (
    <div className={s.backdrop} onClick={onClose}>
      <div className={s.content}>
        <p className={s.title}>{text}</p>
        {children}
        <button type="button" className={s.close} onClick={onClose}>
          <IoClose />
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
