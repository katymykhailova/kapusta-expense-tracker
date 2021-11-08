import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import 'yup-phone';
import { FcGoogle } from 'react-icons/fc';
import s from 'components/Forms/Forms.module.css';
import ButtonBlock from '../ButtonBlock/ButtonBlock';

const registerSchema = Yup.object().shape({
  name: Yup.string().max(50, 'Too Long').required('Required'),
  email: Yup.string().email().required('Required'),
  password: Yup.string()
    .min(6, 'Password is too short - should be 6 chars minimum.')
    .required('Required'),
});

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });
  const onSubmit = data => {
    alert(JSON.stringify(data));
  };

  return (
    <div className={s.wrap}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.textWrap}>
          <p className={s.text}>
            Вы можете авторизоваться с помощью Google Account:
          </p>
          <button type="button" className={s.googleBtn}>
            <FcGoogle size={19} />
            Google
          </button>
        </div>
        <div className={s.textWrap}>
          <p className={s.text}>
            Или зайти с помощью e-mail и пароля, предварительно
            зарегистрировавшись:
          </p>
          <div>
            <label className={s.label}>
              {errors.name && <span className={s.errors}> * </span>} Имя:
            </label>
            <input
              className={s.field}
              {...register('name')}
              placeholder="name"
            />
            {errors.name && <p className={s.errors}>{errors.name.message}</p>}
          </div>
          <div>
            <label className={s.label}>
              {errors.name && <span className={s.errors}> * </span>} Электронная
              почта:
            </label>
            <input
              className={s.field}
              type="email"
              {...register('email')}
              placeholder="your@email.com"
            />
            {errors.email && <p className={s.errors}>{errors.email.message}</p>}
          </div>
          <div>
            <label className={s.label}>
              {errors.name && <span className={s.errors}> * </span>} Пароль:
            </label>
            <input
              className={s.field}
              type="password"
              {...register('password')}
              placeholder="********"
            />
            {errors.password && (
              <p className={s.errors}>{errors.password.message}</p>
            )}
          </div>
          {/* change buttons */}
          {/* <button type="submit"> Войти </button>
          <button type="button"> Регистрация </button> */}
          <ButtonBlock
            firstButtonText={'Войти'}
            secondButtonText={'Регистрация'}
            firstButtonHandler={() => console.log('firstButtonHandler')}
            secondButtonHandler={() => console.log('secondButtonHandler')}
            firstButtonType={'submit'}
            secondButtonType={'button'}
          ></ButtonBlock>
        </div>
      </form>
    </div>
  );
}
