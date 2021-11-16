import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTransactionsByMonts } from '../../redux/transactions';
import { getTransactionsSums } from '../../redux/transactions/transactionsSelectors';
import s from './ReportPage.module.css';
import HeaderReport from '../../components/Reports/HeaderReport';
import CurrentMonthReport from '../../components/Reports/CurrentMonthReport';
import HeaderSection from '../../components/HeaderSection/HeaderSection';
import BarChartReport from 'components/BarChartReport/BarChartReport';

export default function ReportPage() {
  const dispatch = useDispatch();
  const transactions = useSelector(getTransactionsSums);

  const date = new Date();
  const [month, setMonth] = useState(date.getMonth() + 1);
  const [year, setYear] = useState(date.getFullYear());
  const [type, setType] = useState(false);
  const [chartsName, setChartsName] = useState('');

  useEffect(() => {
    const monthCorrect = month <= 9 ? '0' + month : month;
    const period = `${year}${monthCorrect} `;
    dispatch(getTransactionsByMonts(period));
  }, [dispatch, year, month]);

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
    }
    if (type === true) {
      setType(false);
    }
  };

  const handleClickGetChart = e => {
    setChartsName(e.currentTarget.attributes.title.nodeValue);
  };
  console.log(chartsName);
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
        transactionsCurrentMonth={transactions}
        handleClickGetChart={handleClickGetChart}
      />
      <BarChartReport chartsName={chartsName} />
    </div>
  );
}
