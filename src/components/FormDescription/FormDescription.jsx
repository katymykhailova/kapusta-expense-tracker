import PropTypes from 'prop-types';
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

export default function FormDescription({ typeForm }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { register, handleSubmit, reset, setValue } = useForm();
  const [open, setOpen] = useState(false);
  const [placeholderCategories, setPlaceholderCategories] = useState('');

  const categoriesState = useSelector(getCategories);
  console.log('categoriesState', categoriesState);
  const ref = useRef();
  const dispatch = useDispatch();
  // console.log('typeForm', typeForm);

  const onSubmit = data => {
    const { date, name, sum } = data;
    const newData = {
      type: typeForm,
      category: placeholderCategories.id,
      date: moment(date).format('YYYY-MM-DD'),
      description: name,
      amount: +sum,
    };
    console.log('newData', newData);
    dispatch(addTransaction(newData));
    setPlaceholderCategories('');
    reset({
      name: '',
      categories: '',
      sum: '',
    });
  };

  useEffect(() => {
    const checkClickOutside = e => {
      // if (open && ref.current && !ref.current.contains(e.target)) {
      //   setOpen(false);
      // }
      if (open) {
        setOpen(false);
      }
    };
    document.addEventListener('click', checkClickOutside);
    return () => {
      document.removeEventListener('click', checkClickOutside);
    };
  }, [open]);

  const changerPlaceholder = (data, id) => {
    setPlaceholderCategories({ data, id });
    console.log('++');
    setOpen(false);
  };

  useEffect(() => {
    setValue('categories', placeholderCategories.data);
  }, [placeholderCategories, setValue]);

  useEffect(() => {
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
              placeholder={typeForm ? 'Описание дохода' : 'Описание товара'}
            />
            <div className={s.DropDownPos}>
              <input
                autoComplete="off"
                {...register('categories')}
                className={s.inputСategoryName}
                placeholder={typeForm ? 'Категория дохода' : 'Категория товара'}
                onClick={() => setOpen(!open)}
                readOnly
              />
              {open && (
                <DropDownCategory
                  changerDescription={changerPlaceholder}
                  categoriesList={categoriesState}
                  typeForm={typeForm}
                />
              )}
            </div>
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
        {/* {open && (
          <DropDownCategory
            changerDescription={changerPlaceholder}
            categoriesList={categoriesState}
            typeForm={typeForm}
          />
        )} */}
      </form>
      <div className={s.formStyles}></div>
    </div>
  );
}

FormDescription.propTypes = {
  typeForm: PropTypes.bool,
};
