import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { Button } from '@consta/uikit/Button';
import { Text } from '@consta/uikit/Text';

import styles from './SignIn.module.scss';
import cn from 'classnames';
import { Routes } from '../../const/routes';
import { HttpMethods } from '../../const/http-methods';
import { useContext, useState } from 'react';
import { UserContext } from '../../providers/UserProvider/UserContext';
import { HttpStatuses } from '../../const/http-statuses';
import { UserCredentials } from '../../types/api/user-credetials';

const SignIn = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { setUser } = useContext(UserContext);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (values: UserCredentials) => {
    const lastSegmentPath = location.pathname.substring(
      location.pathname.lastIndexOf('/') + 1
    );

    fetch(`/${Routes.SIGN_IN}/${lastSegmentPath}`, {
      method: HttpMethods.POST,
      body: JSON.stringify(values)
    }).then((response) => {
      if (response.status !== HttpStatuses.Forbidden) {
        setError('Ошибка аутентификации');
      }

      setUser(values);

      navigate(`/${Routes.HOME}`);
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
      {error && <Text view="warning">{error}</Text>}
    </div>
  );
};

export default SignIn;
