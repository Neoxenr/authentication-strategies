import { useNavigate } from 'react-router-dom';
import { User } from '../types/entity/user';
import { useEffect } from 'react';
import { Routes } from '../const/routes';

export const useAuthGuard = (user: User) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.email) navigate(`/${Routes.SIGN_IN}`);
  }, [user.email]);
};
