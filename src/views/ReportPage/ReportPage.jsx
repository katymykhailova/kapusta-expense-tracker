import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getTransactionsByMonts,
  getTransactionsList,
} from '../../redux/transactions';

import { getCategoriesList, getCategories } from '../../redux/categories';
import s from './ReportPage.module.css';
import HeaderReport from '../../components/Reports/HeaderReport';
import CurrentMonthReport from '../../components/Reports/CurrentMonthReport';
import HeaderSection from '../../components/HeaderSection/HeaderSection';

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

export default function ReportPage() {
  const dispatch = useDispatch();

  const date = new Date();
  let getMonth = date.getMonth() + 1;
  let getYear = date.getFullYear();
  const [month, setMonth] = useState(getMonth);
  const [year, setYear] = useState(getYear);
  const [type, setType] = useState(false);

  const handleChangeMonthRight = () => {
    if (month < 12) {
      setMonth(prev => (prev += 1));
    } else {
      setMonth(1);
      setYear(prev => (prev += 1));
    }
  };
  const handleChangeMonthLeft = () => {
    if (month <= 1) {
      setMonth(12);
      setYear(prev => (prev -= 1));
    } else {
      setMonth(prev => (prev -= 1));
    }
  };
  const handleChangeTypeTrans = () => {
    if (type === false) {
      setType(true);
      console.log(type);
    }
    if (type === true) {
      setType(false);
      console.log(type);
    }
  };
  useEffect(() => {
    const period = `${year}${month} `;
    console.log(period);
    dispatch(getCategoriesList());
    dispatch(getTransactionsByMonts(period));
  }, [dispatch, year, month]);

  const transactions = useSelector(getTransactionsList);
  console.log(transactions);

  return (
    <div className={s.reportContainer}>
      <HeaderSection
        typePage="report"
        month={month}
        year={year}
        handleChangeMonthLeft={handleChangeMonthLeft}
        handleChangeMonthRight={handleChangeMonthRight}
      />
      <HeaderReport transactionsMonth={transactions} />
      <CurrentMonthReport
        typeTrans={type}
        handleChangeTypeTrans={handleChangeTypeTrans}
      />
    </div>
  );
}
