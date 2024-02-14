import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { Button } from '@consta/uikit/Button';
import { Text } from '@consta/uikit/Text';

import styles from './SignIn.module.scss';
import cn from 'classnames';
import { SignInData } from '../../types/api/sign-in-dto';
import { Routes } from '../../const/routes';
import { HttpMethods } from '../../const/http-methods';

const SignIn = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const onSubmit = (values: SignInData) => {
    const lastSegmentPath = location.pathname.substring(
      location.pathname.lastIndexOf('/') + 1
    );

    fetch(`/${Routes.SIGN_IN}/${lastSegmentPath}`, {
      method: HttpMethods.POST,
      body: JSON.stringify(values)
    }).then(() => {
      navigate(`/${Routes.HOME}/${lastSegmentPath}`);
    });
  };

  return (
    <div className={styles.page}>
      <div className={styles.authStrategies}>
        <NavLink
          to={Routes.SESSION}
          className={({ isActive }) =>
            cn({
              [styles.link]: isActive
            })
          }
        >
          Session Based Authentication
        </NavLink>
      </div>
      <div className={styles.formWrapper}>
        <Outlet />
        <div className={styles.form}>
          <Text as="h2">Авторизация</Text>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={onSubmit}
          >
            <Form>
              <div className={styles.fields}>
                <Field size="m" type="text" name="email" />
                <ErrorMessage name="email" component="div" />
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" />
                <Button size="s" type="submit" label="Войти в учетную запись" />
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
