import { createPortal } from 'react-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FormDescription from 'components/FormDescription/FormDescription';
import s from './FormDescriptionModal.module.css';

const formModalRoot = document.querySelector('#form-modal-root');

function FormDescriptionModal({ toggleModal, typeForm, maks }) {
  return createPortal(
    <div className={s.overlay}>
      <div className={s.modalWindow}>
        <button onClick={toggleModal} className={s.arrowBack}>
          <ArrowBackIcon
            style={{ color: '#FF751D', cursor: 'pointer' }}
            size="18"
          />
        </button>
        <FormDescription typeForm={typeForm} maks={maks} />
      </div>
    </div>,
    formModalRoot,
  );
}

export default FormDescriptionModal;
