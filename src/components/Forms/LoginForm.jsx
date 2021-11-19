import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import 'yup-phone';
import { FcGoogle } from 'react-icons/fc';
import s from 'components/Forms/Forms.module.css';
import ButtonBlock from '../ButtonBlock/ButtonBlock';

const LogInSchema = Yup.object().shape({
  email: Yup.string().email().required('Required'),
  password: Yup.string()
    .min(6, 'Password is too short - should be 7 chars minimum.')
    .required('Required'),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LogInSchema),
  });

  const onSubmit = newUser => dispatch(logIn(newUser));

  const onSignUpBtnClick = () => history.push('/signup');

  return (
    <div className={s.wrap}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.textWrap}>
          <p className={s.text}>
            Вы можете авторизоваться с помощью Google Account:
          </p>
          <a
            className={s.googleBtn}
            href="https://kapusta-api-project.herokuapp.com/api/auth/google"
          >
            <FcGoogle size={19} />
            Google
          </a>
        </div>
        <div className={s.textWrap}>
          <p className={s.text}>
            Или зайти с помощью e-mail и пароля, предварительно
            зарегистрировавшись:
          </p>
          <div>
            <label className={s.label}>
              {errors.email && <span className={s.errors}> * </span>}
              Электронная почта:
            </label>
            <input
              className={s.field}
              type="email"
              {...register('email')}
              placeholder="your@email.com"
            />
            {errors.email && <p className={s.errors}>{errors.email.message}</p>}
          </div>
          <div className={s.fieldWrap}>
            <label className={s.label}>
              {errors.password && <span className={s.errors}> * </span>} Пароль:
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
          <ButtonBlock
            firstButtonText={'Войти'}
            secondButtonText={'Регистрация'}
            //firstButtonHandler={() => console.log('firstButtonHandler')}
            secondButtonHandler={onSignUpBtnClick}
            firstButtonType={'submit'}
            secondButtonType={'button'}
          ></ButtonBlock>
        </div>
      </form>
    </div>
  );
}
