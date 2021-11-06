import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import 'yup-phone';
import { FcGoogle } from 'react-icons/fc';
import s from 'components/Forms/Forms.module.css';

const LogInSchema = Yup.object().shape({
  email: Yup.string().email().required('Required'),
  password: Yup.string()
    .min(7, 'Password is too short - should be 7 chars minimum.')
    .required('Required'),
});

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LogInSchema),
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
          <button type="submit"> Регистрация </button>
          <button type="submit"> Войти </button>
        </div>
      </form>
    </div>
  );
}
