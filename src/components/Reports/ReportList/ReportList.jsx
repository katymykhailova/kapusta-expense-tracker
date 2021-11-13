import s from './ReportList.module.css';
import sprite from '../../../images/sprite.svg';

export default function ReportList({ trans }) {
  return (
    <div className={s.reportData}>
      <ul className={s.reportList}>
        {trans.length === 0 ? (
          <li className={s.transEmpty}>Транзакций нет</li>
        ) : (
          trans.map(item => (
            <li key={item._id} className={s.transItem}>
              <p className={s.itemValue}>{item.amount}</p>
              <div
                className={
                  item.isActive ? s.svgContainerActive : s.svgContainer
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
              <h3 className={s.titleItem}>{item.category}</h3>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
