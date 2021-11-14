import React from 'react';
import { useForm } from 'react-hook-form';
import s from './FormDescription.module.css';
import calculator from '../../images/calculator.svg';

import moment from 'moment';

import { useSelector, useDispatch } from 'react-redux';
import { addTransaction } from '../../redux/transactions/transactionsOperations';
import { getCategories } from '../../redux/categories/categoriesSelectors';

import { useState, useRef, useEffect } from 'react';

import DropDownCategory from '../DropDownCategory/DropDownCategory';

import ButtonBlock from '../ButtonBlock/ButtonBlock';

import 'react-datepicker/dist/react-datepicker.css';

import DatePicker, { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru'; // the locale you want
registerLocale('ru', ru); // register it with the name you want

export default function FormDescription() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const categoriesState = useSelector(getCategories);
  // console.log('categoriesState', categoriesState);

  // console.log(
  //   'categoriesState',
  //   categoriesState.filter(el => el.type === false),
  // );

  const dispatch = useDispatch();

  const { register, handleSubmit, reset, setValue } = useForm();

  const onSubmit = data => {
    const { categories, date, name, sum } = data;
    // console.log('placeholderCategories222', placeholderCategories);
    const newData = {
      type: false,
      category: placeholderCategories.id,
      date: moment(date).format('YYYY-MM-DD'),
      description: name,
      amount: +sum,
    };
    // console.log('categories', categories);
    // console.log('categories', categories);
    // console.log('date', date);
    // console.log('name', name);
    // console.log('sum', sum);
    // console.log('categories', typeof data.categories);
    // console.log('date', typeof data.date);
    // console.log('name', typeof data.name);
    // Number(data.sum);
    // console.log('sum', typeof data.sum);
    // console.log('sum', typeof +sum);
    // console.log({ categories, date, name, sum });
    console.log('newData', newData);
    dispatch(addTransaction(newData));
    // dispatch(addTransaction(data));
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

  const changerPlaceholder = (data, id) => {
    // console.log(e.target.innerText);
    // setPlaceholderCategories(e.target.innerText);

    // console.log('data2', data);
    // console.log('id2', id);
    setPlaceholderCategories({ data, id });
    setOpen(false);
  };

  useEffect(() => {
    // console.log('placeholderCategories', placeholderCategories);
    setValue('categories', placeholderCategories.data);
  }, [placeholderCategories, setValue]);

  useEffect(() => {
    // console.log('+++');
    // const Year = selectedDate.getFullYear();
    // const Month = selectedDate.getMonth();
    // const date = selectedDate.getDate();
    // console.log(`date:${date} Month:${Month + 1} Year:${Year}`);
    // console.log(moment(selectedDate).subtract(10, 'days').calendar());
    setValue('date', selectedDate);
  }, [selectedDate, setValue]);

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
            <DatePicker
              {...register('date')}
              locale="ru"
              // className={s.formStyles}
              selected={selectedDate}
              onChange={date => setSelectedDate(date)}
              dateFormat="dd.MM.yyyy"
              maxDate={new Date()}
              className={s.inputProductDate}
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
      <div className={s.formStyles}></div>
    </div>
  );
}
