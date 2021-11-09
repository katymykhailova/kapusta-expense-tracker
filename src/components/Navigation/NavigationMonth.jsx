import s from './Navigation.module.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function NavigationMonth({ period }) {
  return (
    <div className={s.navigationMonthTab}>
      <p className={s.navigationMonthPeriod}>Текущий период:</p>
      <div className={s.navigationMonth}>
        <ArrowBackIosIcon
          style={{ color: '#FF751D', cursor: 'pointer' }}
          fontSize="small"
          //   onClick={onHandleChangeType}
        />
        <p className={s.navigationMonthName}>{period}</p>
        <ArrowForwardIosIcon
          style={{ color: '#FF751D', cursor: 'pointer' }}
          fontSize="small"
          //   onClick={onHandleChangeType}
        />
      </div>
    </div>
  );
}
