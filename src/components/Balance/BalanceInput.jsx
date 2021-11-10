import s from './Balance.module.css';

export default function BalanceInput({ balance }) {
  return (
    <div className={s.balance}>
      <p className={s.title}>Баланс:</p>
      <div className={s.balanceBox}>
        <input
          className={s.balanceInput}
          type="text"
          pattern="^[0-9]+$"
          maxLength="10"
          //   value={`${balance}.00UAH`}
          placeholder="00.00 UAH"
          //   onChange={handleChange}
        />
        <button
          className={s.balanceSubmit}
          type="submit"
          onClick={() => {}}
          //   onClick={nandleSubmit}
        >
          Подтвердить
        </button>
      </div>
      {!balance && (
        //Notification must be here
        <></>
      )}
    </div>
  );
}
