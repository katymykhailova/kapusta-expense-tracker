import s from './Balance.module.css';

export default function BalanceReport({ balance }) {
  return (
    <div className={`${s.balance} ${s.report}`}>
      <p className={s.title}>Баланс:</p>
      <p className={`${s.balanceInput} ${s.report}`}>{`${balance} грн`}</p>
    </div>
  );
}
