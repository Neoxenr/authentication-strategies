import { FC, ReactNode } from 'react';
import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';
import { Routes } from '../../const/routes';

type PrivatePageProps = {
  children: ReactNode;
};

const PrivatePage: FC<PrivatePageProps> = ({ children }) => {
  // TODO: для других стратегий переделай
  const sessionId = Cookies.get('sessionId');

  if (sessionId) return <>{children}</>;

  return <Navigate to={Routes.SIGN_IN} />;
};

export default PrivatePage;
