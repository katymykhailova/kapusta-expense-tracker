import s from './Summary.module.css';

const items = [
  { id: 0, name: 'Январь' },
  { id: 1, name: 'Февраль' },
  { id: 2, name: 'Март ' },
  { id: 3, name: 'Апрель' },
  { id: 4, name: 'Май' },
  { id: 5, name: 'Июнь' },
  { id: 6, name: 'Июль' },
  { id: 7, name: 'Август' },
  { id: 8, name: 'Сентябрь' },
  { id: 9, name: 'Октябрь' },
  { id: 10, name: 'Ноябрь' },
  { id: 11, name: 'Декабрь' },
];
const resFromBack = [59, 5, 0, 500, 600, 900, 1200, 0, 800, 600, 800, 900];
const amountArr = [];
for (let i = 0; i < resFromBack.length; i++) {
  const amountArrItem = { month: i, value: resFromBack[i] };
  amountArr.push(amountArrItem);
}
const amountArrReversed = amountArr.sort((a, b) => b.month - a.month);

export default function Summary() {
  return (
    <div className={s.summaryContainer}>
      <h4 className={s.summaryTitle}>Сводка</h4>
      <ul className={s.summaryList}>
        {amountArrReversed.map(({ month, value }) => (
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
