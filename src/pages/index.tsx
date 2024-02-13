import { Navigate, RouteObject } from 'react-router-dom';
import SignIn from './SignIn/SignIn';
import Home from './Home/Home';
import Session from './Authentications/Session/Session';

export const pages: RouteObject[] = [
  { path: '', index: true, element: <Navigate to="signin" /> },
  {
    path: '/signin',
    element: <SignIn />,
    children: [
      {
        path: '/signin/session',
        element: <Session />
      }
    ]
  },
  { path: '/home', element: <Home /> }
];
