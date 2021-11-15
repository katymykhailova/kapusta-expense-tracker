import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './Balance.module.css';
import { getUserBalance, updateUserBalance } from '../../redux/auth';

export default function BalanceInput() {
  const [userBalance, setUserBalance] = useState('');
  const [showBtn, setShowBtn] = useState(false);

  const dispatch = useDispatch();

  const currentBalance = useSelector(getUserBalance);
  const currentValue = currentBalance === null ? '00' : currentBalance;

  const handleChange = e => {
    setUserBalance(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (currentBalance === null) setShowBtn(true);
    dispatch(updateUserBalance({ balance: Number.parseInt(userBalance) }));
    setUserBalance('');
    setShowBtn(false);
  };
  console.log(showBtn);
  return (
    <div className={s.balance}>
      <p className={s.title}>Баланс:</p>
      <div className={s.balanceBox}>
        <input
          id="balanceInput"
          className={s.balanceInput}
          type="text"
          pattern="^[0-9]+$"
          maxLength="10"
          value={userBalance}
          placeholder={`${currentValue}.00 UAH`}
          onChange={handleChange}
          onFocus={e => (e.target.placeholder = '')}
        />
        {showBtn && (
          <button
            className={s.balanceSubmit}
            type="submit"
            onClick={handleSubmit}
          >
            Подтвердить
          </button>
        )}
      </div>
      {currentBalance === null && (
        //Notification must be here
        <></>
      )}
    </div>
  );
}
