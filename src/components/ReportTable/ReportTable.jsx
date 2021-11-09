import s from './ReportTable.module.css';

import Report from './Report';

const transactions = [
  {
    date: '01.01.2021',
    descr: 'Молоко',
    category: 'Продукты',
    amount: '45 грн.',
  },
  {
    date: '01.01.2021',
    descr: 'Молоко',
    category: 'Продукты',
    amount: '45 грн.',
  },
  {
    date: '01.01.2021',
    descr: 'Молоко',
    category: 'Продукты',
    amount: '45 грн.',
  },
  {
    date: '01.01.2021',
    descr: 'Молоко',
    category: 'Продукты',
    amount: '45 грн.',
  },
  {
    date: '01.01.2021',
    descr: 'Молоко',
    category: 'Продукты',
    amount: '45 грн.',
  },
  {
    date: '01.01.2021',
    descr: 'Молоко',
    category: 'Продукты',
    amount: '45 грн.',
  },
  {
    date: '01.01.2021',
    descr: 'Молоко',
    category: 'Продукты',
    amount: '45 грн.',
  },
  {
    date: '01.01.2021',
    descr: 'Молоко',
    category: 'Продукты',
    amount: '45 грн.',
  },
  {
    date: '01.01.2021',
    descr: 'Молоко',
    category: 'Продукты',
    amount: '45 грн.',
  },
  {
    date: '01.01.2021',
    descr: 'Молоко',
    category: 'Продукты',
    amount: '45 грн.',
  },
  {
    date: '01.01.2021',
    descr: 'Молоко',
    category: 'Продукты',
    amount: '45 грн.',
  },
  {
    date: '01.01.2021',
    descr: 'Молоко',
    category: 'Продукты',
    amount: '45 грн.',
  },
];

function ReportTable() {
  return (
    <table className={s.table} cellPadding="0" cellSpacing="0">
      <thead className={s.tableHead}>
        <tr className={s.tableRow}>
          <th className={`${s.tableHeadName}, ${s.tableDate}`}>Дата</th>
          <th className={`${s.tableHeadName}, ${s.tableDesc}`}>Описание</th>
          <th className={`${s.tableHeadName}, ${s.tableCat}`}>Категория</th>
          <th className={`${s.tableHeadName}, ${s.tableSum}`}>Сумма</th>
          <th className={`${s.tableHeadName}, ${s.tableDelet}`}></th>
        </tr>
      </thead>
      <tbody className={s.tableBody}>
        {transactions.map(i => (
          <Report
            date={i.date}
            category={i.category}
            amount={i.amount}
            descr={i.descr}
          />
        ))}
      </tbody>
    </table>
  );
}

export default ReportTable;
