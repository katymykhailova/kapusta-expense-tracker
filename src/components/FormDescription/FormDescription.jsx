import React from 'react';
import { useForm } from 'react-hook-form';
import s from './FormDescription.module.css';
import calculator from '../../images/calculator.svg';

import { useState, useRef, useEffect } from 'react';

import DropDownCategory from '../DropDownCategory/DropDownCategory';

// import ButtonBlock from '../ButtonBlock/ButtonBlock';

export default function FormDescription() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    // console.log(data);
    reset({
      name: '',
      categories: 'Категория товара',
      sum: '',
    });
    console.log(data);
  };

  const [open, setOpen] = useState(false);
  const [placeholder, setPlaceholder] = useState('Категория товара');

  const ref = useRef();

  useEffect(() => {
    const checkClickOutside = e => {
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('click', checkClickOutside);
    return () => {
      document.removeEventListener('click', checkClickOutside);
    };
  }, [open]);

  const changerPlaceholder = e => {
    console.log(e);
    setPlaceholder(e.target.innerText);
    setOpen(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      className={s.formStyles}
      ref={ref}
    >
      <div className={s.productInfo}>
        <div className={s.datePosition}>
          <input {...register('date')} type="date" className={s.dateProduct} />
        </div>
        <div className={s.productPosition}>
          <input
            {...register('name')}
            className={s.inputProductName}
            placeholder="Описание товара"
            // name="firstName"
          />
          <input
            {...register('categories')}
            className={s.inputСategoryName}
            // onClick={handleSubmit(onSubmit2)}
            // placeholder={placeholder}
            value={placeholder}
            // value="Категория товара"
            onClick={() => setOpen(!open)}
            readOnly
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
        <input
          value="ввод"
          type="submit"
          // type="button"
          // onClick={() => {
          //   reset({
          //     name: '',
          //     categories: '',
          //     sum: '',
          //   });
          // }}
        />
        <input
          value="очистить"
          // onClick={() => setPlaceholder('Категория товара')}
          type="reset"
          type="button"
          // onClick={() => {
          //   reset({
          //     name: '',
          //     categories: '',
          //     sum: '',
          //   });
          // }}
        />
      </div>
      {open && <DropDownCategory changerDescription={changerPlaceholder} />}
      {/* <DropDownCategory /> */}
    </form>
  );
}
