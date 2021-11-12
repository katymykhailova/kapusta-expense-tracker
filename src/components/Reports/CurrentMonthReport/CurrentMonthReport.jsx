import s from './CurrentMonthReport.module.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ReportList from '../ReportList/ReportList';

// temporary data
const typeTrans = 'expenses';

const expenses = [
  { _id: 1, category: 'Продукты', value: 1500 },
  { _id: 2, category: 'Прочее', value: 4000 },
  { _id: 3, category: 'Техника', value: 3000 },
  { _id: 4, category: 'Развлечения', value: 8000 },
  { _id: 5, category: 'Здоровье', value: 700 },
  { _id: 6, category: 'Алкоголь', value: 1200 },
  { _id: 7, category: 'Транспорт', value: 300 },
  { _id: 8, category: 'Спорт, хобби', value: 90 },
  { _id: 9, category: 'Коммуналка, связь', value: 950 },
  { _id: 10, category: 'Образование', value: 140 },
  { _id: 11, category: 'Всё для дома', value: 890 },
];
const incomes = [
  { _id: 12, category: 'Заработная плата', value: 35000 },
  { _id: 14, category: 'Доп.доход', value: 40000 },
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
