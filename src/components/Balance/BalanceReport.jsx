import s from './Balance.module.css';
export default function BalanceReport({ balanceRep }) {
  return (
    <div className={`${s.balance} ${s.report}`}>
      <p className={s.title}>Баланс:</p>
      <p
        className={`${s.balanceInput} ${s.report}`}
      >{`${balanceRep}.00 UAH`}</p>
    </div>
  );
}
