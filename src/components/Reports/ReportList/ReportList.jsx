import { useState } from 'react';
import { useSelector } from 'react-redux';
import s from './ReportList.module.css';
import sprite from '../../../images/sprite.svg';
import { getCategories } from 'redux/categories';

export default function ReportList({ trans, handleClick }) {
  let categories = useSelector(getCategories);
  const [isActiveId, setIsActiveId] = useState('');
  const summs = Object.values(
    trans.reduce((acc, { group, total_amounts }) => {
      const category = categories.find(i => i._id === group.category);
      if (!acc[category.name]) {
        acc[category.name] = { category, total_amounts: 0 };
      }
      acc[category.name].total_amounts += total_amounts;
      return acc;
    }, {}),
  );

  return (
    <div className={s.reportData}>
      <ul className={s.reportList}>
        {trans.length === 0 ? (
          <li className={s.transEmpty}>Транзакций нет</li>
        ) : (
          summs.map(item => (
            <li
              key={item.category._id}
              className={s.transItem}
              onClick={() => {
                handleClick(item.category._id);
                setIsActiveId(item.category._id);
              }}
            >
              <p className={s.itemValue}>{item.total_amounts}</p>
              <div
                className={
                  isActiveId === item.category._id
                    ? s.svgContainerActive
                    : s.svgContainer
                }
              >
                <svg
                  width="58"
                  height="58"
                  className={item.isActive ? s.iconActive : s.icon}
                >
                  <use xlinkHref={`${sprite}#${item.category.name}`} />
                </svg>
              </div>
              <h3 className={s.titleItem}>{item.category.name}</h3>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
