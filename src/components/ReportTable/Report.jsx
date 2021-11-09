import s from './Report.module.css';
// import st from './ReportTable.module.css';
import deleteBtn from '../../images/delete.svg';

function Report() {
  return (
    <tbody className={s.tableBody} cellpadding="0" cellspacing="0">
      {/* <div className={s.scrollDiv}> */}
      {/* <tr className={s.tableTr}>
          <td className={`${s.tableTd}, ${s.tableDate}`}>07.11.2021</td>
          <td className={`${s.tableTd}, ${s.tableDesc}`}>Молоко</td>
          <td className={`${s.tableTd}, ${s.tableCat}`}>Продукты</td>
          <td className={`${s.tableTd}, ${s.tableSum}`}>25.00 грн</td>
          <td className={`${s.tableTd}, ${s.tableDelet}`}>
            <button type="button" className={s.deleteBtn}>
              <img
                src={deleteBtn}
                alt="logout button"
                width="18px"
                height="18px"
                className={s.deleteBtn}
              />
            </button>
          </td>
        </tr> */}
      <tr className={s.tableTr}>
        <div className={s.divWrap}>
          <td className={`${s.tableTd}, ${s.tableDate}`}>07.11.2021</td>
          <td className={`${s.tableTd}, ${s.tableDesc}`}>Молоко</td>
        </div>

        <td className={`${s.tableTd}, ${s.tableCat}`}>Продукты</td>
        <td className={`${s.tableTd}, ${s.tableSum}`}>25.00 грн.</td>
        <td className={`${s.tableTd}, ${s.tableDelet}`}>
          <button type="button" className={s.deleteBtn}>
            <img
              src={deleteBtn}
              alt="logout button"
              width="18px"
              height="18px"
              className={s.deleteBtnImg}
            />
          </button>
        </td>
      </tr>
      <tr className={s.tableTr}>
        <div className={s.divWrap}>
          <td className={`${s.tableTd}, ${s.tableDate}`}>07.11.2021</td>
          <td className={`${s.tableTd}, ${s.tableDesc}`}>Молоко</td>
        </div>

        <td className={`${s.tableTd}, ${s.tableCat}`}>Продукты</td>
        <td className={`${s.tableTd}, ${s.tableSum}`}>25.00 грн.</td>
        <td className={`${s.tableTd}, ${s.tableDelet}`}>
          <button type="button" className={s.deleteBtn}>
            <img
              src={deleteBtn}
              alt="logout button"
              width="18px"
              height="18px"
              className={s.deleteBtnImg}
            />
          </button>
        </td>
      </tr>
      {/* </div> */}
    </tbody>
  );
}

export default Report;
