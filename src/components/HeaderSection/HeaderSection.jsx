import s from './HeaderSection.module.css';
import chartIcon from '../../images/chart-icon.svg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Navigation from '../Navigation/Navigation';
import NavigationMonth from '../Navigation/NavigationMonth';
import BalanceInput from '../Balance/BalanceInput';
import { useHistory, useLocation } from 'react-router-dom';
import { useRef, useEffect } from 'react';

export default function HeaderSection({
  typePage,
  month,
  year,
  handleChangeMonthLeft,
  handleChangeMonthRight,
}) {
  const routerState = useRef(null);

  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    if (routerState.current) return;
    routerState.current = location.state;
  }, [location.state]);

  const handleChangeLocation = location => {
    history.push({
      ...location,
    });
  };

  console.log(location);
  return (
    <>
      {typePage === 'home' && (
        <div className={s.headerTab}>
          <div className={s.navHome}>
            <Navigation
              router="/report"
              handleClick={() => {
                handleChangeLocation(location);
              }}
            >
              <span className={s.linkTitle}>Перейти к отчетам</span>
              <img
                className={s.linkIcon}
                src={chartIcon}
                alt="Иконка навигации"
              />
            </Navigation>
          </div>
          <BalanceInput />
        </div>
      )}
      {typePage === 'report' && (
        <div className={s.headerTabReport}>
          <Navigation
            router="/home"
            handleClick={() => {
              handleChangeLocation(location);
            }}
          >
            <div className={s.linkBox}>
              <ArrowBackIcon
                style={{ color: '#FF751D', cursor: 'pointer' }}
                fontSize="small"
              />
              <span className={`${s.linkTitle} ${s.report}`}>
                Вернутся на главную
              </span>
            </div>
          </Navigation>
          <div className={s.headData}>
            <BalanceInput />
            {/* <BalanceReport balance={55000} /> */}
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
