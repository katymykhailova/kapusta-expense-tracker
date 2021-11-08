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
