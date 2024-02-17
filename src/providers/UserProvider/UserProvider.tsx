import { FC, ReactNode, useMemo, useState } from 'react';
import { UserContext } from './UserContext';
import { UserCredentials } from '../../types/api/user-credetials';

type UserProviderProps = {
  children: ReactNode;
};

const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserCredentials | null>(null);

  const memoizedUser = useMemo(
    () => ({
      user,
      setUser
    }),
    [user]
  );

  return (
    <UserContext.Provider value={memoizedUser}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
