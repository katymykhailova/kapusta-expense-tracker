import s from './ReportTable.module.css';

import Report from './Report';

function ReportTable() {
  return (
    <table className={s.table} cellpadding="0" cellspacing="0">
      <thead className={s.tableHead}>
        <tr className={s.tableRow}>
          <th className={`${s.tableHeadName}, ${s.tableDate}`}>Дата</th>
          <th className={`${s.tableHeadName}, ${s.tableDesc}`}>Описание</th>
          <th className={`${s.tableHeadName}, ${s.tableCat}`}>Категория</th>
          <th className={`${s.tableHeadName}, ${s.tableSum}`}>Сумма</th>
          <th className={`${s.tableHeadName}, ${s.tableDelet}`}></th>
        </tr>
      </thead>
      <Report></Report>
    </table>
  );
}

export default ReportTable;
