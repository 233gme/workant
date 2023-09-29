import { useContext } from "react";
import { UserIdContext } from "./UserIdContext";

interface UseThemeResult {
  toggleUserId: (id: string | null) => void;
  userId: string | null;
}

export function useUserId(): UseThemeResult {
  const { userId, setUserId } = useContext(UserIdContext);

  const toggleUserId = (id: string | null): void => {
    if (setUserId) {
      setUserId(id);
    }
  };

  return { userId, toggleUserId };
}
