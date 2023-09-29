import { FC, useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useUserId } from "providers/UserIdProvider/lib/ToggleUserId";
import timesheets from "data/timesheets.json";
import Table from "react-bootstrap/Table";
import { dateParser } from "shared/utils/DateParser";
import { getMonth } from "shared/utils/GetMonth";
import DropdownBtn from "shared/DropdownBtn";

interface TimesheetType {
  id: string;
  assessment: number;
  breakMinutes: number;
  minutes: number;
  startTime: string;
  endTime: string;
  note: null | string;
  status: string;
  locationChecked: boolean;
  approvalPersonId: null | string;
  userId: string;
  companyId: string;
}

const TimesheetModal: FC = () => {
  const { userId, toggleUserId } = useUserId();
  const closeModal = () => toggleUserId(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filterHandler = (eventKey: any) => {
    if (eventKey) {
      setFilter(eventKey);
    } else {
      setFilter(null);
    }
  };
  const [userTimesheet, setTimesheet] = useState<TimesheetType[]>([]);
  const [filterList, setFilterList] = useState<string[]>([]);
  const [filter, setFilter] = useState<string | null>(null);
  const [filteredTimesheet, setFilteredTimesheet] = useState<TimesheetType[]>(
    []
  );

  useEffect(() => {
    if (userId) {
      const uniquesMonthList: string[] = [""];
      const userTimesheets: TimesheetType[] | [] = timesheets.filter((item) => {
        const month = getMonth(item.endTime);
        if (!uniquesMonthList.includes(month)) {
          uniquesMonthList.push(month);
        }
        return item.userId === userId;
      });
      setFilterList(uniquesMonthList);
      setTimesheet(userTimesheets);
      setFilteredTimesheet(userTimesheets);
    }
  }, [userId]);

  useEffect(() => {
    if (filter) {
      const filtered = userTimesheet.filter(
        (item) => getMonth(item.endTime) === filter
      );
      setFilteredTimesheet(filtered);
    } else {
      setFilteredTimesheet(userTimesheet);
    }
  }, [filter]);

  return (
    <Modal show={Boolean(userId)} size="lg" centered onHide={closeModal}>
      <Modal.Header closeButton>
        <DropdownBtn
          list={filterList}
          filter={filter}
          onSelect={filterHandler}
        />
      </Modal.Header>
      <Modal.Body>
        <Table>
          <thead>
            <tr>
              <th>Start</th>
              <th>End</th>
              <th>Minute</th>
            </tr>
          </thead>
          <tbody>
            {filteredTimesheet.map((row) => {
              return (
                <tr key={row.id}>
                  <td>{dateParser(row.startTime)}</td>
                  <td>{dateParser(row.endTime)}</td>
                  <td>{row.minutes}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={closeModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TimesheetModal;
