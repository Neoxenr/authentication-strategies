import { FC } from 'react';
import './App.css';
import { useRoutes } from 'react-router-dom';
import { pages } from './pages';

export const App: FC = () => {
  const routes = useRoutes(pages);

  return <div>{routes}</div>;
};
