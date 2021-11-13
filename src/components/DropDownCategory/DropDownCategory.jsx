import s from './DropDownCategory.module.css';

export default function DropDownCategory({
  changerDescription,
  categoriesList,
}) {
  // const test = e => console.log(e.target.innerText);
  return (
    <div className={s.categoryPosition}>
      <ul>
        {/* <li
          className={s.categoryName}
          // label="Транспорт"
          value="Tranport"
          onClick={changerDescription}
          // onClick={() => {
          //   changerDescription(value);
          // }}
        >
          Транспорт
        </li>
        <li className={s.categoryName} onClick={changerDescription}>
          Продукты
        </li>
        <li className={s.categoryName} onClick={changerDescription}>
          Здоровье
        </li>
        <li className={s.categoryName} onClick={changerDescription}>
          Алкоголь
        </li> */}
        {categoriesList.map(el => (
          <li
            value={el.name}
            className={s.categoryName}
            key={el._id}
            // onClick={changerDescription}
            onClick={() => {
              changerDescription(el.name);
            }}
          >
            {el.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
