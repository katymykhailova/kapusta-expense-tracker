// import * as React from 'react';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

// import s from './ListProduct.module.css';

// export default function SelectVariants() {
//   const [age, setAge] = React.useState('');

//   const handleChange = event => {
//     console.log(event.target.value);
//     setAge(event.target.value);
//   };

//   return (
//     <div>
//       <FormControl
//         variant="standard"
//         sx={{ m: 1, minWidth: 171 }}
//         className={s.test}
//       >
//         {/* <InputLabel id="demo-simple-select-standard-label">
//           Категория товара
//         </InputLabel> */}
//         <Select
//           displayEmpty
//           labelId="demo-simple-select-standard-label"
//           id="demo-simple-select-standard"
//           value={age}
//           onChange={handleChange}
//           // label="Age"
//           className={s.test}
//         >
//           <MenuItem disabled value="">
//             <em>Категория товара</em>
//           </MenuItem>
//           <MenuItem value={'Транспорт'}>Транспорт</MenuItem>
//           <MenuItem value={'Здоровье'}>Здоровье</MenuItem>
//           <MenuItem value={'Алкоголь'}>Алкоголь</MenuItem>
//         </Select>
//       </FormControl>

//       <select defaultValue="" onChange={handleChange}>
//         <option value="" disabled hidden>
//           Select your option
//         </option>
//         <option value="female">female</option>
//         <option value="male">male</option>
//         <option value="other">other</option>
//       </select>
//     </div>
//   );
// }

import React from 'react';
import { useForm } from 'react-hook-form';
import s from './ListProduct.module.css';
import Container from '../Container/Container';
import calculator from './calculator.svg';

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)} className={s.formStyles}>
        <div className={s.productInfo}>
          <div className={s.datePosition}>
            <input
              {...register('date')}
              type="date"
              className={s.dateProduct}
            />
          </div>
          <div className={s.productPosition}>
            <input
              {...register('name')}
              className={s.inputProductName}
              placeholder="Описание товара"
            />
            <input
              {...register('categories')}
              className={s.inputСategoryName}
              placeholder="Категория товара"
              disabled
            />
            {/* <select
        {...register('categories')}
        defaultValue="Категория товара"
        className={s.inputСategoryName}
      >
        <option value="Категория товара" disabled hidden>
          Категория товара{' '}
        </option>
        <option value="female">Транспорт</option>
        <option value="male">Здоровье</option>
        <option value="other">Алкоголь</option>
      </select> */}
            <input
              {...register('sum')}
              className={s.inputValueProduct}
              placeholder="0,00"
            />
            <div className={s.calculatorPos}>
              <img src={calculator} alt="React Logo" />
            </div>
          </div>
        </div>
        <div className={s.btnPosition}>
          <input type="submit" />
          <input type="reset" />
        </div>
      </form>
    </Container>
  );
}
