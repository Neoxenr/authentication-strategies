import { Dispatch, SetStateAction, createContext } from 'react';
import { UserCredentials } from '../../types/api/user-credetials';

export type UserContextProps = {
  user: UserCredentials | null;
  setUser: Dispatch<SetStateAction<UserCredentials | null>>;
};

export const UserContext = createContext<UserContextProps>({
  user: null,
  setUser: () => {}
});
