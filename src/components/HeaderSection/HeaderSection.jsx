import s from './HeaderSection.module.css';
import chartIcon from '../../images/chart-icon.svg';
import { AiOutlinePlus } from 'react-icons/ai';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Navigation from '../Navigation/Navigation';
import NavigationMonth from '../Navigation/NavigationMonth';
import BalanceInput from '../Balance/BalanceInput';
import BalanceReport from '../Balance/BalanceReport';

export default function HeaderSection({
  typePage,
  month,
  year,
  handleChangeMonthLeft,
  handleChangeMonthRight,
  onClick,
}) {
  return (
    <>
      {typePage === 'home' && (
        <div className={s.headerTab}>
          <div className={s.navHome}>
            <Navigation router="/report">
              <span className={s.linkTitle}>Перейти к отчетам</span>
              <img
                className={s.linkIcon}
                src={chartIcon}
                alt="Иконка навигации"
              />
            </Navigation>
          </div>
          <BalanceInput />
          <button type="button" onClick={onClick} className={s.addBtn}>
            <AiOutlinePlus size="18" color="#ffffff" />
          </button>
        </div>
      )}
      {typePage === 'report' && (
        <div className={s.headerTabReport}>
          <Navigation router="/home">
            <div className={s.linkBox}>
              <ArrowBackIcon
                style={{ color: '#FF751D', cursor: 'pointer' }}
                fontSize="small"
                //   onClick={onHandleChangeType}
              />
              <span className={`${s.linkTitle} ${s.report}`}>
                Вернутся на главную
              </span>
            </div>
          </Navigation>
          <div className={s.headData}>
            <BalanceReport balance={55000} />
            <NavigationMonth
              month={month}
              year={year}
              handleChangeMonthLeft={handleChangeMonthLeft}
              handleChangeMonthRight={handleChangeMonthRight}
            />
          </div>
        </div>
      )}
    </>
  );
}
