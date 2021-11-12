import s from './CurrentMonthReport.module.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ReportList from '../ReportList/ReportList';

// temporary data
const typeTrans = 'expenses';

const expenses = [
  { _id: 1, category: { _id: 1, name: 'Продукты' }, amount: 1500 },
  { _id: 2, category: { _id: 2, name: 'Прочее' }, amount: 4000 },
  { _id: 3, category: { _id: 3, name: 'Техника' }, amount: 3000 },
  { _id: 4, category: { _id: 4, name: 'Развлечения' }, amount: 8000 },
  { _id: 5, category: { _id: 5, name: 'Здоровье' }, amount: 700 },
  { _id: 6, category: { _id: 6, name: 'Алкоголь' }, amount: 1200 },
  { _id: 7, category: { _id: 7, name: 'Транспорт' }, amount: 300 },
  { _id: 8, category: { _id: 8, name: 'Спорт, хобби' }, amount: 90 },
  { _id: 9, category: { _id: 9, name: 'Коммуналка, связь' }, amount: 950 },
  { _id: 10, category: { _id: 10, name: 'Образование' }, amount: 140 },
  { _id: 11, category: { _id: 11, name: 'Всё для дома' }, amount: 890 },
];
const incomes = [
  { _id: 12, category: { _id: 12, name: 'Заработная плата' }, amount: 35000 },
  { _id: 14, category: { _id: 14, name: 'Доп.доход' }, amount: 40000 },
];

export default function CurrentMonthReport() {
  return (
    <div className={s.sectionReport}>
      <div className={s.sectionTitle}>
        <ArrowBackIosIcon
          style={{ color: '#FF751D', cursor: 'pointer' }}
          fontSize="small"
          //   onClick={onHandleChangeType}
        />
        {typeTrans === 'expenses' ? (
          <h2 className={s.title}> Расходы </h2>
        ) : (
          <h2 className={s.title}> Доходы </h2>
        )}

        <ArrowForwardIosIcon
          style={{ color: '#FF751D', cursor: 'pointer' }}
          fontSize="small"
          //   onClick={onHandleChangeType}
        />
      </div>
      {typeTrans === 'expenses' ? (
        <ReportList
          trans={expenses}
          //   onClick={handleClickExpenses}
        />
      ) : (
        <ReportList
          trans={incomes}
          //   onClick={handleClickIncomes}
        />
      )}
    </div>
  );
}
