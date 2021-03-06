import s from './Summary.module.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLoading } from 'redux/transactions/transactionsSelectors';
import * as selectors from 'redux/report/reportSelectors';
import * as reportOperations from 'redux/report/reportOperations';
import arrMonths from '../../utils/dataMonth.json';
import SmallSpinner from '../Spinner/SmallSpinner';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

export default function Summary({ reportType, year, onSummaryClick }) {
  const dispatch = useDispatch();
  const reportArr = useSelector(selectors.getReports);
  const isLoading = useSelector(getLoading);

  useEffect(() => {
    if (year > 0 && reportType) {
      dispatch(reportOperations.getReportList({ reportType, year }));
    }
  }, [reportType, year, dispatch]);

  const amountArr = [];
  for (let i = 0; i < reportArr.length; i++) {
    const amountArrItem = { month: i + 1, value: reportArr[i] };
    amountArr.push(amountArrItem);
  }
  const amountArrReversed = amountArr.sort((a, b) => b.month - a.month);
  const amountSummarryMonth = amountArrReversed.filter(el => el.value > 0);

  const fetchTransactions = (year, month) => {
    if (month < 10) {
      month = '0' + month;
    }
    const date = `${year}${month}`;
    onSummaryClick(date);
  };

  return (
    <>
      <div className={s.summaryContainer}>
        <h4 className={s.summaryTitle}>{`Сводка за ${year} год`}</h4>
        {isLoading ? (
          <SmallSpinner />
        ) : (
          <SimpleBar style={{ maxHeight: 360 }}>
            <ul className={s.summaryList}>
              {amountSummarryMonth.map(({ month, value }, idx) => (
                <li key={idx} className={s.summaryItem}>
                  <button
                    className={s.summaryBtn}
                    onClick={() => fetchTransactions(year, month)}
                  >
                    <span className={s.summaryDescription}>
                      {arrMonths.find(item => item.id === String(month)).name}
                    </span>
                    <span
                      className={`${s.summaryDescription} ${s.summaryDescriptionCar}`}
                    >
                      {reportType === 'i' ? `${value} грн.` : `- ${value} грн.`}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </SimpleBar>
        )}
      </div>
    </>
  );
}
