import { FC } from 'react';
import styles from './App.module.scss';
import { useRoutes } from 'react-router-dom';
import { pages } from './pages';

export const App: FC = () => {
  const routes = useRoutes(pages);

  return <div className={styles.app}>{routes}</div>;
};
