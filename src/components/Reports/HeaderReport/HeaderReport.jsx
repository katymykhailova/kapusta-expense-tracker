import s from './HeaderReport.module.css';
import React from 'react';

export default function HeaderReport({ transactionsMonth }) {
  const getTotalSum = typeTrans => {
    let totalAmount = 0;
    const sumArr = transactionsMonth.filter(
      transaction => transaction.type === typeTrans,
    );
    sumArr.map(el => (totalAmount += el.amount));
    return totalAmount;
  };

  return (
    <div className={s.headerReport}>
      <div className={s.nameReport}>
        <p className={s.itemReport}>Расходы:</p>
        <span className={`${s.dataReport} ${s.expenses}`}>{`- ${getTotalSum(
          false,
        )}.00 грн.`}</span>
      </div>
      <div className={s.nameReport}>
        <p className={s.itemReport}>Доходы:</p>
        <span className={`${s.dataReport} ${s.incomes}`}>{`+ ${getTotalSum(
          true,
        )}.00 грн.`}</span>
      </div>
    </div>
  );
}
