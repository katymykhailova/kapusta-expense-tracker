import s from './Navigation.module.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import arrMonths from '../../utils/dataMonth.json';

export default function NavigationMonth({
  month,
  year,
  handleChangeMonthLeft,
  handleChangeMonthRight,
}) {
  const currentMonth = arrMonths.filter(item => item.id === String(month));
  return (
    <div className={s.navigationMonthTab}>
      <p className={s.navigationMonthPeriod}>Текущий период:</p>
      <div className={s.navigationMonth}>
        <ArrowBackIosIcon
          style={{ color: '#FF751D', cursor: 'pointer' }}
          fontSize="small"
          onClick={handleChangeMonthLeft}
        />
        <p
          className={s.navigationMonthName}
        >{`${currentMonth[0].name} ${year}`}</p>
        <ArrowForwardIosIcon
          style={{ color: '#FF751D', cursor: 'pointer' }}
          fontSize="small"
          onClick={handleChangeMonthRight}
        />
      </div>
    </div>
  );
}
