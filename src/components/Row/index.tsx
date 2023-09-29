import { FC } from "react";
import { useUserId } from "providers/UserIdProvider/lib/ToggleUserId";

interface RowProps {
  id: string;
  firstName: string;
  lastName: string;
}

const Row: FC<RowProps> = ({ firstName, lastName, id }) => {
  const { toggleUserId } = useUserId();
  const openModal = () => toggleUserId(id);

  return (
    <tr onClick={openModal}>
      <td>{firstName}</td>
      <td>{lastName}</td>
    </tr>
  );
};

export default Row;
