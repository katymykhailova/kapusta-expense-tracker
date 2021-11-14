import s from './DropDownCategory.module.css';

export default function DropDownCategory({
  changerDescription,
  categoriesList,
  typeForm,
}) {
  const test = categoriesList.filter(el => el.type === typeForm);
  return (
    <div className={s.categoryPosition}>
      <ul>
        {test.map(el => (
          <li
            value={el.name}
            className={s.categoryName}
            key={el._id}
            onClick={() => {
              changerDescription(el.name, el._id);
            }}
          >
            {el.name}
          </li>
        ))}
      </ul>
      {/* <ul>
        {categoriesList.map(el => (
          <li
            value={el.name}
            className={s.categoryName}
            key={el._id}
            onClick={() => {
              changerDescription(el.name);
            }}
          >
            {el.name}
          </li>
        ))}
      </ul> */}
    </div>
  );
}
