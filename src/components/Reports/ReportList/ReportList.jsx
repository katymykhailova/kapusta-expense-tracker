import s from './ReportList.module.css';
import sprite from '../../../images/sprite.svg';

export default function ReportList({ trans }) {
  let categories = [];
  trans.forEach(el => categories.push(el.category.name));
  categories = [...new Set(categories)];
  const sums = new Array(categories.length).fill(0);
  trans.forEach(
    el => (sums[categories.indexOf(el.category.name)] += el.amount),
  );
  return (
    <div className={s.reportData}>
      <ul className={s.reportList}>
        {trans.length === 0 ? (
          <li className={s.transEmpty}>Транзакций нет</li>
        ) : (
          categories.map((item, idx) => (
            <li key={item} className={s.transItem}>
              <p className={s.itemValue}>{sums[idx]}</p>
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
                  <use xlinkHref={`${sprite}#${item}`} />
                </svg>
              </div>
              <h3 className={s.titleItem}>{item}</h3>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
