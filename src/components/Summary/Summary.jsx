import s from './Summary.module.css';

const items = [
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
const balances = [
  { month: '10', value: -100 },
  { month: '8', value: -200 },
  { month: '11', value: -150 },
  { month: '9', value: -190 },
];
const balancesArr = [...balances].sort((a, b) => b.month - a.month);

export default function Summary() {
  return (
    <div className={s.summaryContainer}>
      <h4 className={s.summaryTitle}>Сводка</h4>
      <ul className={s.summaryList}>
        {balancesArr.map(({ month, value }) => (
          <li key={month} className={s.summaryItem}>
            <p className={s.summaryDescription}>
              {items.find(item => item.id === month).name}
            </p>
            <p className={s.summaryDescription}>{value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
