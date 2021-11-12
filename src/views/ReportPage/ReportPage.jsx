import s from './ReportPage.module.css';
import HeaderReport from '../../components/Reports/HeaderReport';
import CurrentMonthReport from '../../components/Reports/CurrentMonthReport';
import HeaderSection from '../../components/HeaderSection/HeaderSection';

const items = [
  { id: 0, name: 'Январь' },
  { id: 1, name: 'Февраль' },
  { id: 2, name: 'Март ' },
  { id: 3, name: 'Апрель' },
  { id: 4, name: 'Май' },
  { id: 5, name: 'Июнь' },
  { id: 6, name: 'Июль' },
  { id: 7, name: 'Август' },
  { id: 8, name: 'Сентябрь' },
  { id: 9, name: 'Октябрь' },
  { id: 10, name: 'Ноябрь' },
  { id: 11, name: 'Декабрь' },
];
const data = new Date();
let month = data.getMonth();
let year = data.getFullYear();
console.log(month, year);
let monthName = items.find(item => item.id === month).name;
console.log(monthName);

export default function ReportPage() {
  return (
    <div className={s.reportContainer}>
      <HeaderSection
        typePage="report"
        month={monthName}
        year={year}
        // handleChangeMonthLeft={handleChangeMonthLeft}
        // handleChangeMonthRight={handleChangeMonthRight}
      />
      <HeaderReport />
      <CurrentMonthReport />
    </div>
  );
}
