import React from 'react';
import { useForm } from 'react-hook-form';
import s from './FormDescription.module.css';
import calculator from '../../images/calculator.svg';

import { useState, useRef, useEffect } from 'react';

import DropDownCategory from '../DropDownCategory/DropDownCategory';

// import ButtonBlock from '../ButtonBlock/ButtonBlock';

export default function FormDescription() {
  const { register, handleSubmit, reset, setValue } = useForm();

  const onSubmit = data => {
    console.log(data);
    reset({
      name: '',
      categories: '',
      sum: '',
    });
  };

  const [open, setOpen] = useState(false);
  const [placeholderCategories, setPlaceholderCategories] = useState('');

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
    console.log(e.target.innerText);
    setPlaceholderCategories(e.target.innerText);
    setOpen(false);
  };

  useEffect(() => {
    setValue('categories', placeholderCategories);
  }, [placeholderCategories]);

  return (
    <div>
      <form
        // autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        className={s.formStyles}
        ref={ref}
      >
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
              autoComplete="off"
              {...register('categories')}
              className={s.inputСategoryName}
              placeholder="Категория товара"
              // value={placeholderCategories}
              // value="Категория товара"
              onClick={() => setOpen(!open)}
              // onChange={changerPlaceholder}
              readOnly
            />

            {/* <select {...register('categories')} className={s.inputСategoryName}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
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
            // onClick={() => setPlaceholderCategories('Категория товара')}
            // type="reset"
            type="button"
            onClick={() => {
              reset({
                name: '',
                categories: '',
                sum: '',
              });
            }}
          />
        </div>
        {open && <DropDownCategory changerDescription={changerPlaceholder} />}
      </form>
    </div>
  );
}
