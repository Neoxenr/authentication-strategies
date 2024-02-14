import { FC, ReactNode, useMemo, useState } from 'react';
import { UserContext } from './UserContext';
import { User } from '../../types/entity/user';

type UserProviderProps = {
  children: ReactNode;
};

const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

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
