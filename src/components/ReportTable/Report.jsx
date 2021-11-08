import s from './Report.module.css';
import st from './ReportTable.module.css';
import deleteBtn from '../../images/delete.svg';

function Report() {
  return (
    <tbody className={s.tableBody}>
      <div className={s.scrollDiv}>
        <tr className={s.tableTr}>
          <td className={`${s.tableTd}, ${st.tableDate}`}>07.11.2021</td>
          <td className={`${s.tableTd}, ${st.tableDesc}`}>Молоко</td>
          <td className={`${s.tableTd}, ${st.tableCat}`}>Продукты</td>
          <td className={`${s.tableTd}, ${st.tableSum}`}>25.00 грн</td>
          <td className={`${s.tableTd}, ${st.tableDelet}`}>
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
        </tr>
        <tr className={s.tableTr}>
          <td className={`${s.tableTd}, ${st.tableDate}`}>07.11.2021</td>
          <td className={`${s.tableTd}, ${st.tableDesc}`}>Молоко</td>
          <td className={`${s.tableTd}, ${st.tableCat}`}>Продукты</td>
          <td className={`${s.tableTd}, ${st.tableSum}`}>25.00 грн</td>
          <td className={`${s.tableTd}, ${st.tableDelet}`}>
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
        </tr>
      </div>
    </tbody>
  );
}

export default Report;
