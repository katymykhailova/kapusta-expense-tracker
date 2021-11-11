import { v4 } from 'uuid';
import s from './ReportTable.module.css';
// import Report from './Report';
import Report from './Report';

const transactions = [
  {
    id: 1234,
    date: '01.01.2021',
    descr: 'Молоко',
    category: 'Продукты',
    amount: '45 грн.',
  },
  {
    id: 123232,
    date: '01.01.2021',
    descr: 'Стоматолог',
    category: 'Здоровье',
    amount: '4500 грн.',
  },
  {
    id: 12356,
    date: '01.01.2021',
    descr: 'Мартини',
    category: 'Алкоголь',
    amount: '450 грн.',
  },
  {
    id: 12378,
    date: '01.01.2021',
    descr: 'Квадроциклы',
    category: 'Развлечения',
    amount: '2000 грн.',
  },
  {
    id: 123098,
    date: '01.01.2021',
    descr: 'Уборка',
    category: 'Всё для дома',
    amount: '600 грн.',
  },
  {
    id: 123986676,
    date: '01.01.2021',
    descr: 'Пылесос',
    category: 'Техника',
    amount: '45 грн.',
  },
  {
    id: 123844765,
    date: '01.01.2021',
    descr: 'Электрочество',
    category: 'Коммуналка, связь',
    amount: '300 грн.',
  },
  {
    id: 1231662346789,
    date: '01.01.2021',
    descr: 'Йога',
    category: 'Спорт, хобби',
    amount: '450 грн.',
  },
  {
    id: 12309870006,
    date: '01.01.2021',
    descr: 'Корсы',
    category: 'Образование',
    amount: '4000 грн.',
  },
  {
    id: 12387111165,
    date: '01.01.2021',
    descr: 'Молоко',
    category: 'Продукты',
    amount: '45 грн.',
  },
  {
    id: 1232222234567,
    date: '01.01.2021',
    descr: 'Молоко',
    category: 'Продукты',
    amount: '45 грн.',
  },
  {
    id: 123555509876,
    date: '01.01.2021',
    descr: 'Молоко',
    category: 'Продукты',
    amount: '45 грн.',
  },
];

function ReportTable() {
  return (
    <div className={s.tableWrap}>
      <ul className={s.tableHead}>
        <li key={v4()} className={`${s.tableHeadName} ${s.tableDate}`}>
          Дата
        </li>
        <li key={v4()} className={`${s.tableHeadName} ${s.tableDesc}`}>
          Описание
        </li>
        <li key={v4()} className={`${s.tableHeadName} ${s.tableCat}`}>
          Категория
        </li>
        <li key={v4()} className={`${s.tableHeadName} ${s.tableSum}`}>
          Сумма
        </li>
        <li key={v4()} className={`${s.tableHeadName} ${s.tableDelet}`}></li>
      </ul>

      <div className={s.scrollWrap}>
        <ul>
          {transactions.map(i => (
            <Report
              key={i.id}
              id
              date={i.date}
              category={i.category}
              amount={i.amount}
              descr={i.descr}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ReportTable;
