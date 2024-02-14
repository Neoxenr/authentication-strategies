import { FC } from 'react';
import styles from './App.module.scss';
import { useRoutes } from 'react-router-dom';
import { pages } from './pages';
import UserProvider from './providers/UserProvider/UserProvider';

export const App: FC = () => {
  const routes = useRoutes(pages);

  return (
    <UserProvider>
      <div className={styles.app}>{routes}</div>
    </UserProvider>
  );
};
