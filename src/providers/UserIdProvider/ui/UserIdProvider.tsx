import { FC, ReactNode, useMemo, useState } from "react";
import { UserIdContext } from "../lib/UserIdContext";

interface UserIdProviderProps {
  children: ReactNode;
}

const UserIdProvider: FC<UserIdProviderProps> = ({ children }) => {
  const [userId, setUserId] = useState<string | null>(null);

  const defaultProps = useMemo(
    () => ({
      userId,
      setUserId,
    }),
    [userId]
  );

  return (
    <UserIdContext.Provider value={defaultProps}>
      {children}
    </UserIdContext.Provider>
  );
};

export default UserIdProvider;
