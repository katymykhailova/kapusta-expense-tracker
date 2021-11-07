import s from './HeaderReport.module.css';

export default function HeaderReport() {
  // permanent data
  const totalExpences = 0;
  const totalIncomes = 0;

  return (
    <div className={s.headerReport}>
      <div className={s.nameReport}>
        <p className={s.itemReport}>Расходы:</p>
        <span
          className={`${s.dataReport} ${s.expenses}`}
        >{`- ${totalExpences}.00 грн.`}</span>
      </div>
      <div className={s.nameReport}>
        <p className={s.itemReport}>Доходы:</p>
        <span
          className={`${s.dataReport} ${s.incomes}`}
        >{`+ ${totalIncomes}.00 грн.`}</span>
      </div>
    </div>
  );
}
