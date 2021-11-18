import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import s from './FormDescription.module.css';
import calculator from '../../images/calculator.svg';
import calendar from '../../images/calendar.svg';
import moment from 'moment';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { getUserBalance } from '../../redux/balance';
import { addTransaction } from '../../redux/transactions/transactionsOperations';
import { getCategories } from '../../redux/categories/categoriesSelectors';
import { useState, useRef, useEffect } from 'react';
import DropDownCategory from '../DropDownCategory/DropDownCategory';
import ButtonBlock from '../ButtonBlock/ButtonBlock';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker, { registerLocale } from 'react-datepicker';
import { getReportList } from '../../redux/report';
import ru from 'date-fns/locale/ru'; // the locale you want
registerLocale('ru', ru); // register it with the name you want

const FormSchema = Yup.object().shape({
  sum: Yup.number().min(0.01).required().positive().required('Required'),
  name: Yup.string().required(),
  categories: Yup.string().required(),
  // sum: Yup.number().required('Required'),
  // password: Yup.string()
  //   .min(6, 'Password is too short - should be 7 chars minimum.')
  //   .required('Required'),
});

export default function FormDescription({ typeForm, dateFinder }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormSchema),
  });
  const [open, setOpen] = useState(false);
  const [placeholderCategories, setPlaceholderCategories] = useState('');
  // console.log('placeholderCategories', placeholderCategories);

  const categoriesState = useSelector(getCategories);
  // console.log('categoriesState', categoriesState);
  const ref = useRef();
  const dispatch = useDispatch();
  // console.log('typeForm', typeForm);

  function updateReportList(type) {
    let reportType;
    type === true ? (reportType = 'i') : (reportType = 'o');
    dispatch(
      getReportList({ reportType: reportType, year: new Date().getFullYear() }),
    );
  }

  const onSubmit = async data => {
    const { date, name, sum } = data;
    const newData = {
      type: typeForm,
      category: placeholderCategories.id,
      date: moment(date).format('YYYY-MM-DD'),
      description: name,
      amount: +sum,
    };
    // console.log('newData', newData);

    await dispatch(addTransaction(newData));
    // dispatch(addTransaction(newData));

    // dispatch(getCurrentUser());
    updateReportList(typeForm);
    setPlaceholderCategories('');
    dispatch(getUserBalance());
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
    // console.log(data, id);
    setPlaceholderCategories({ data, id });
    setOpen(false);
  };

  useEffect(() => {
    setValue('categories', placeholderCategories.data);
  }, [placeholderCategories, setValue]);

  useEffect(() => {
    // console.log('selectedDate', selectedDate);
    // findDate(selectedDate);

    dateFinder(selectedDate);

    // console.log('findDate', dateFinder);
    setValue('date', selectedDate);
  }, [selectedDate, setValue, dateFinder]);

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
            <div className={s.calendarPos}>
              <img src={calendar} alt="Calendar" />
            </div>
          </div>
          <div className={s.productPosition}>
            <div>
              <input
                {...register('name')}
                className={s.inputProductName}
                placeholder={typeForm ? 'Описание дохода' : 'Описание товара'}
              />
              {errors.name && <p className={s.errors}>Required</p>}
            </div>
            <div className={s.DropDownPos}>
              <input
                autoComplete="off"
                {...register('categories')}
                className={s.inputСategoryName}
                placeholder={typeForm ? 'Категория дохода' : 'Категория товара'}
                onClick={() => setOpen(!open)}
                readOnly
              />
              {placeholderCategories === '' && errors.categories && (
                <p className={s.errors}>Required</p>
              )}
              {/* {errors.categories && <p className={s.errors}>Required</p>} */}
              {open && (
                <DropDownCategory
                  changerDescription={changerPlaceholder}
                  categoriesList={categoriesState}
                  typeForm={typeForm}
                />
              )}
            </div>
            <div className={s.inputValueProductPostion}>
              <input
                {...register('sum')}
                type="sum"
                className={s.inputValueProduct}
                onFocus={e => (e.target.placeholder = '')}
                placeholder="0,00"
              />
              {errors.sum && <p className={s.errors}>Required</p>}
            </div>
            <div className={s.calculatorPos}>
              <img src={calculator} alt="Calculator" />
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
  dateFinder: PropTypes.func,
};
