import s from './ReportPage.module.css';
import HeaderReport from '../../components/Reports/HeaderReport';
import CurrentMonthReport from '../../components/Reports/CurrentMonthReport';

export default function Report() {
  return (
    <div className={s.reportContainer}>
      <HeaderReport />
      <CurrentMonthReport />
    </div>
  );
}
