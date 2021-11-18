import s from './Summary.module.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLoading } from 'redux/transactions/transactionsSelectors';
import * as selectors from 'redux/report/reportSelectors';
import * as reportOperations from 'redux/report/reportOperations';
import arrMonths from '../../utils/dataMonth.json';
import LoadingSpiner from 'components/Spinner/LoadingSpinner';

export default function Summary({ reportType }) {
  const dispatch = useDispatch();
  const reportArr = useSelector(selectors.getReports);
  const isLoading = useSelector(getLoading);

  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();
    if (year > 0 && reportType) {
      dispatch(reportOperations.getReportList({ reportType, year }));
    }
  }, [reportType, dispatch]);

  const amountArr = [];
  for (let i = 0; i < reportArr.length; i++) {
    const amountArrItem = { month: i + 1, value: reportArr[i] };
    amountArr.push(amountArrItem);
  }
  const amountArrReversed = amountArr.sort((a, b) => b.month - a.month);
  const amountSummarrySixMonth = amountArrReversed
    .filter(el => el.value > 0)
    .slice(0, 5);

  return (
    <>
      {isLoading ? (
        <LoadingSpiner />
      ) : (
        <div className={s.summaryContainer}>
          <h4 className={s.summaryTitle}>Сводка</h4>
          <ul className={s.summaryList}>
            {amountSummarrySixMonth.map(({ month, value }, idx) => (
              <li key={idx} className={s.summaryItem}>
                <p className={s.summaryDescription}>
                  {arrMonths.find(item => item.id === String(month)).name}
                </p>
                <p className={s.summaryDescription}>{value}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
