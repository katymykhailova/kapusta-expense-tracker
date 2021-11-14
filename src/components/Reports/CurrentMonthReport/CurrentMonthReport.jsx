import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getCategories } from '../../../redux/categories/categoriesSelectors';
import { getTransactionsSums } from '../../../redux/transactions/transactionsSelectors';
import s from './CurrentMonthReport.module.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ReportList from '../ReportList/ReportList';

export default function CurrentMonthReport({
  transactionsCurrentMonth,
  typeTrans,
  handleChangeTypeTrans,
}) {
  const categories = useSelector(getCategories);
  const sums = useSelector(getTransactionsSums);
  const newCategories = categories.filter(c =>
    sums.find(t => t.group.category === c._id),
  );
  console.log(newCategories);

  const incomes = transactionsCurrentMonth.filter(trans => trans.type === true);
  const expenses = transactionsCurrentMonth.filter(
    trans => trans.type === false,
  );

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
