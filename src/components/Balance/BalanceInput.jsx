import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './Balance.module.css';
import { getBalance, updateUserBalance } from '../../redux/balance';
import BalanceReport from './BalanceReport';

export default function BalanceInput() {
  const [userBalance, setUserBalance] = useState('');

  const dispatch = useDispatch();

  const currentBalance = useSelector(getBalance);
  const currentValue = currentBalance === null ? '00' : currentBalance;

  const handleChange = e => {
    setUserBalance(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (currentBalance === null)
      dispatch(updateUserBalance({ balance: Number.parseInt(userBalance) }));
    setUserBalance('');
  };

  return (
    <>
      {currentBalance === null && (
        <div className={s.balance}>
          <p className={s.title}>Баланс:</p>
          <div className={s.balanceBox}>
            <label className={s.label}>UAH</label>
            <input
              id="balanceInput"
              className={s.balanceInput}
              type="number"
              maxLength="10"
              value={userBalance}
              placeholder={`${currentValue}.00`}
              onChange={handleChange}
              onFocus={e => (e.target.placeholder = '')}
            />

            <>
              <button
                className={s.balanceSubmit}
                type="submit"
                onClick={handleSubmit}
              >
                Подтвердить
              </button>
              <div className={s.balanceNotification}>
                <p className={s.notificationWarningText}>
                  Привет! Для начала работы внеси текущий баланс своего счета!
                </p>
                <p className={s.notificationDescrText}>
                  Ты не можешь тратить деньги пока их у тебя нет &#58;&#41;
                </p>
              </div>
            </>
          </div>
        </div>
      )}
      {currentBalance !== null && <BalanceReport balance={currentBalance} />}
    </>
  );
}
