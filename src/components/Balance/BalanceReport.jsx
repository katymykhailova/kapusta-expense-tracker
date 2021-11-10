import s from './Balance.module.css';
import BalanceInput from './BalanceInput';

export default function BalanceReport({ balance }) {
  return (
    <>
      <div className={s.balanceDeskTab}>
        <BalanceInput balance={balance} />
      </div>
      <div className={`${s.balance} ${s.report}`}>
        <p className={s.title}>Баланс:</p>
        <p className={`${s.balanceInput} ${s.report}`}>{`${balance}.00 UAH`}</p>
      </div>
    </>
  );
}
