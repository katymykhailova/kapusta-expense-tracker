import PropTypes from 'prop-types';

import s from './Button.module.css';

const ButtonBlock = ({ firstButtonText, secondButtonText, onClick }) => {
  return (
    <div className={s.buttonBlock}>
      <button className={s.button} type="button" onClick={onClick}>
        {firstButtonText}
      </button>
      <button className={s.button} type="button" onClick={onClick}>
        {secondButtonText}
      </button>
    </div>
  );
};

ButtonBlock.propTypes = {
  firstButtonText: PropTypes.string.isRequired,
  secondButtonText: PropTypes.string.isRequired,
  onClick: PropTypes.string.isRequired,
};

export default ButtonBlock;
