import s from './HeaderPage.module.css';
import chartIcon from '../../images/chart-icon.svg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NavigationPage from '../Navigation/NavigationPage';
import NavigationMonth from '../Navigation/NavigationMonth';
import BalanceInput from '../Balance/BalanceInput';
import BalanceReport from '../Balance/BalanceReport';

export default function HeaderPage({ typePage }) {
  return (
    <>
      {typePage === 'home' && (
        <div className={s.headerTab}>
          <NavigationPage router="/home">
            <span className={s.linkTitle}>Перейти к отчетам</span>
            <img
              className={s.linkIcon}
              src={chartIcon}
              alt="Иконка навигации"
            />
          </NavigationPage>
          <BalanceInput balance={'55000'} />
        </div>
      )}
      {typePage === 'report' && (
        <div className={s.headerTabReport}>
          <div className={s.linkBox}>
            <NavigationPage router="/report">
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
            </NavigationPage>
          </div>
          <div className={s.headData}>
            <BalanceReport balanceRep={55000} />
            <NavigationMonth period={'November 2021'} />
          </div>
        </div>
      )}
    </>
  );
}
