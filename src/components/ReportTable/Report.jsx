import s from './Report.module.css';
import deleteBtn from '../../images/delete.svg';

function Report({ date, category, amount, descr, id, handleDelete, type }) {
  const amountType = type ? amount : -amount;

  return (
    <li className={s.tableTr}>
      <div className={s.divWrap}>
        <div className={`${s.tableTd}, ${s.tableDate}`}>{date}</div>
        <div className={`${s.tableTd}, ${s.tableDesc}`}>{descr}</div>
      </div>

      <div className={`${s.tableTd}, ${s.tableCat}`}>{category}</div>
      <div
        className={type === true ? s.tableSumI : s.tableSumO}
      >{`${amountType}.00 грн.`}</div>
      <div className={`${s.tableTd}, ${s.tableDelet}`}>
        <button
          type="button"
          className={s.deleteBtn}
          onClick={() => handleDelete(id)}
        >
          <img
            src={deleteBtn}
            alt="delete button"
            width="18px"
            height="18px"
            className={s.deleteBtnImg}
          />
        </button>
      </div>
    </li>
  );
}

export default Report;
