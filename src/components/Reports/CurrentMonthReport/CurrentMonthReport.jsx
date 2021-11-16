import s from './CurrentMonthReport.module.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ReportList from '../ReportList/ReportList';

export default function CurrentMonthReport({
  transactionsCurrentMonth,
  typeTrans,
  handleChangeTypeTrans,
}) {
  const incomes = transactionsCurrentMonth.filter(trans => trans.group.type);
  const expenses = transactionsCurrentMonth.filter(trans => !trans.group.type);

  return (
    <div className={s.sectionReport}>
      <div className={s.sectionTitle}>
        <ArrowBackIosIcon
          style={{ color: '#FF751D', cursor: 'pointer' }}
          fontSize="small"
          onClick={handleChangeTypeTrans}
        />
        {typeTrans === false ? (
          <h2 className={s.title}> Расходы </h2>
        ) : (
          <h2 className={s.title}> Доходы </h2>
        )}

        <ArrowForwardIosIcon
          style={{ color: '#FF751D', cursor: 'pointer' }}
          fontSize="small"
          onClick={handleChangeTypeTrans}
        />
      </div>
      {typeTrans === false ? (
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
