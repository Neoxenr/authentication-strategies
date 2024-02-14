import { Dispatch, SetStateAction, createContext } from 'react';
import { User } from '../../types/entity/user';

export type UserContextProps = {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
};

export const UserContext = createContext<UserContextProps | null>(null);
