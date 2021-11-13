import s from './Summary.module.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as selectors from 'redux/report/reportSelectors';
import * as reportOperations from 'redux/report/reportOperations';

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

const reportSummary = [59, 5, 0, 500, 600, 900, 1200, 0, 800, 600, 800, 900];
const amountArr = [];
for (let i = 0; i < reportSummary.length; i++) {
  const amountArrItem = { month: i + 1, value: reportSummary[i] };
  amountArr.push(amountArrItem);
}
const amountArrReversed = amountArr.sort((a, b) => b.month - a.month);
const amountSummarrySixMonth = amountArrReversed.slice(0, 6);
console.log(amountSummarrySixMonth);

export default function Summary({ year = '2021', reportType = 'o' }) {
  // const dispatch = useDispatch();
  // const reportSummary = useSelector(selectors.getReports);
  // console.log(reportSummarry);
  // useEffect(() => {
  //   if (year > 0 && reportType) {
  //     dispatch(reportOperations.getReportList(year, reportType));
  //   }
  // }, [year, reportType, dispatch]);

  // const amountArr = [];
  // for (let i = 0; i < reportSummary.length; i++) {
  //   const amountArrItem = { month: i + 1, value: reportSummary[i] };
  //   amountArr.push(amountArrItem);
  // }
  // const amountArrReversed = amountArr.sort((a, b) => b.month - a.month);
  // const amountSummarrySixMonth = amountArrReversed.slice(0, 6);

  return (
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
  );
}
