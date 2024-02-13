import { NavLink, Outlet, useLocation, useMatch } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { Button } from '@consta/uikit/Button';
import { Text } from '@consta/uikit/Text';

import styles from './SignIn.module.scss';
import cn from 'classnames';

const SignIn = () => {
  const location = useLocation();

  const lastSegmentPath = location.pathname.substring(
    location.pathname.lastIndexOf('/') + 1
  );

  return (
    <div className={styles.page}>
      <div className={styles.authStrategies}>
        <NavLink
          to="session"
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
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className={styles.fields}>
                  <Field size="m" type="email" name="email" />
                  <ErrorMessage name="email" component="div" />
                  <Field type="password" name="password" />
                  <ErrorMessage name="password" component="div" />
                  <Button
                    type="submit"
                    size="s"
                    disabled={isSubmitting}
                    label="Войти в учетную запись"
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
