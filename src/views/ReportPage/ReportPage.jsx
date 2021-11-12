import s from './ReportPage.module.css';
import HeaderReport from '../../components/Reports/HeaderReport';
import CurrentMonthReport from '../../components/Reports/CurrentMonthReport';
import HeaderSection from '../../components/HeaderSection/HeaderSection';

export default function Report() {
  return (
    <div className={s.reportContainer}>
      <HeaderSection typePage="report" />
      <HeaderReport />
      <CurrentMonthReport />
    </div>
  );
}
