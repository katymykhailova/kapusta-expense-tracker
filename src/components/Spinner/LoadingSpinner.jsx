import Loader from 'react-loader-spinner';
import s from './Spinner.module.css';

function LoadingSpiner() {
  return (
    <div className={s.containerList}>
      <Loader
        type="ThreeDots"
        color="var(--accent-color-primary)"
        height={120}
        width={120}
        // timeout={3000}
      />
    </div>
  );
}

export default LoadingSpiner;
