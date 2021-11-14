import s from './Navigation.module.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const arrMonths = [
  { id: '1', name: 'Январь' },
  { id: '2', name: 'Февраль' },
  { id: '3', name: 'Март ' },
  { id: '4', name: 'Апрель' },
  { id: '5', name: 'Май' },
  { id: '6', name: 'Июнь' },
  { id: '7', name: 'Июль' },
  { id: '8', name: 'Август' },
  { id: '9', name: 'Сентябрь' },
  { id: '10', name: 'Октябрь' },
  { id: '11', name: 'Ноябрь' },
  { id: '12', name: 'Декабрь' },
];

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
