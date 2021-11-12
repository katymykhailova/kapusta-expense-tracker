import s from './Report.module.css';
// import st from './ReportTable.module.css';
import deleteBtn from '../../images/delete.svg';

function Report({ date, category, amount, descr, id }) {
  return (
    <li className={s.tableTr}>
      <div className={s.divWrap}>
        <div className={`${s.tableTd}, ${s.tableDate}`}>{date}</div>
        <div className={`${s.tableTd}, ${s.tableDesc}`}>{descr}</div>
      </div>

      <div className={`${s.tableTd}, ${s.tableCat}`}>{category}</div>
      <div className={`${s.tableTd}, ${s.tableSum}`}>{amount}</div>
      <div className={`${s.tableTd}, ${s.tableDelet}`}>
        <button type="button" className={s.deleteBtn}>
          <img
            src={deleteBtn}
            alt="logout button"
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
