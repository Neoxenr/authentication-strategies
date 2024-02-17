import { Navigate, RouteObject } from 'react-router-dom';
import SignIn from './SignIn/SignIn';
import Home from './Home/Home';
import Session from './Authentications/Session/Session';
import PrivatePage from './PrivatePage/PrivatePage';
import { Routes } from '../const/routes';

export const pages: RouteObject[] = [
  { path: '', index: true, element: <Navigate to={Routes.SIGN_IN} /> },
  {
    path: Routes.SIGN_IN,
    element: <SignIn />,
    children: [
      {
        path: `/${Routes.SIGN_IN}/session`,
        element: <Session />
      }
    ]
  },
  {
    path: Routes.HOME,
    element: (
      <PrivatePage>
        <Home />
      </PrivatePage>
    )
  }
];
