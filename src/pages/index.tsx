import { Navigate, RouteObject } from 'react-router-dom';
import SignIn from './SignIn/SignIn';
import Home from './Home/Home';

export const pages: RouteObject[] = [
  { path: '', index: true, element: <Navigate to="signin" /> },
  {
    path: '/signin',
    element: <SignIn />
  },
  { path: '/home', element: <Home /> }
];
