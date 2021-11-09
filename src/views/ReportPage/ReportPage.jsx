import s from './ReportPage.module.css';
import HeaderReport from '../../components/Reports/HeaderReport';
import CurrentMonthReport from '../../components/Reports/CurrentMonthReport';
import HeaderPage from '../../components/HeaderPage/HeaderPage';

export default function Report() {
  return (
    <div className={s.reportContainer}>
      <HeaderPage typePage="report" />
      <HeaderReport />
      <CurrentMonthReport />
    </div>
  );
}
