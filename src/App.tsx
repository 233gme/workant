import { FC } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import users from "./data/users.json";
import Row from "./components/Row";
import TimesheetModal from "./components/TimesheetsModal";

const App: FC = () => {
  return (
    <Container className="p-3">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ id, firstName, lastName }) => (
            <Row key={id} id={id} firstName={firstName} lastName={lastName} />
          ))}
        </tbody>
      </Table>
      <TimesheetModal />
    </Container>
  );
};

export default App;
