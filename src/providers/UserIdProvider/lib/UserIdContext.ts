import { createContext } from "react";

export interface UserIdContextProps {
  userId: string | null;
  setUserId?: (id: string | null) => void;
}

export const UserIdContext = createContext<UserIdContextProps>({
  userId: null,
});
