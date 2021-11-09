import s from './DropDownCategory.module.css';

export default function DropDownCategory() {
  return (
    <div
      className={s.categoryPosition}
      menuPortalTarget={document.body}
      styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
    >
      <ul>
        <li className={s.categoryName}>Транспорт</li>
        <li className={s.categoryName}>Продукты</li>
        <li className={s.categoryName}>Здоровье</li>
        <li className={s.categoryName}>Алкоголь</li>
      </ul>
    </div>
  );
}

// import s from './DropDownCategory.module.css';
// import { createPortal } from 'react-dom';

// const modalRoot = document.querySelector('#modal-root__category');

// export default function DropDownCategory() {
//   return createPortal(
//     <div className={s.categoryPosition}>
//       <ul>
//         <li className={s.categoryName}>Транспорт</li>
//         <li className={s.categoryName}>Продукты</li>
//         <li className={s.categoryName}>Здоровье</li>
//         <li className={s.categoryName}>Алкоголь</li>
//       </ul>
//     </div>,
//     modalRoot,
//   );
// }
