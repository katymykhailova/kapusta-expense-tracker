import React from 'react';
import { useForm } from 'react-hook-form';
import s from './FormDescription.module.css';
import calculator from '../../images/calculator.svg';

import { useSelector } from 'react-redux';
import { useState, useRef, useEffect } from 'react';

import DropDownCategory from '../DropDownCategory/DropDownCategory';

import ButtonBlock from '../ButtonBlock/ButtonBlock';

export default function FormDescription() {
  const categoriesState = useSelector(state => state.categories.items);
  // console.log('categoriesState', categoriesState);

  const { register, handleSubmit, reset, setValue } = useForm();

  const onSubmit = data => {
    console.log(data);
    setPlaceholderCategories('');
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

  const changerPlaceholder = data => {
    // console.log(e.target.innerText);
    // setPlaceholderCategories(e.target.innerText);

    // console.log(data);
    setPlaceholderCategories(data);
    setOpen(false);
  };

  useEffect(() => {
    // console.log('+++');
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
          {/* <button value="ввод" type="submit" />
          <input
            value="очистить"
            // type="reset"
            type="button"
            onClick={() => {
              reset({
                name: '',
                categories: '',
                sum: '',
              });
            }}
          /> */}
          <ButtonBlock
            firstButtonText="ввод"
            secondButtonText="очистить"
            // firstButtonHandler={onSubmit}
            secondButtonHandler={() => {
              setPlaceholderCategories('');
              reset({
                name: '',
                categories: '',
                sum: '',
              });
            }}
            firstButtonType="submit"
            secondButtonType="button"
          />
        </div>
        {open && (
          <DropDownCategory
            changerDescription={changerPlaceholder}
            categoriesList={categoriesState}
          />
        )}
        {/* <DropDownCategory
          changerDescription={changerPlaceholder}
          categoriesList={categoriesState}
        /> */}
      </form>
    </div>
  );
}
