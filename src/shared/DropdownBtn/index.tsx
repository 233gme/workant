import {FC} from 'react';
import {ButtonGroup, DropdownButton} from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';

interface DropdownBtnProps {
  list: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSelect: (eventKey: any) => void;
  filter: string | null;
}

const DropdownBtn: FC<DropdownBtnProps> = ({filter, list, onSelect}) => {
	return (
		<DropdownButton
			as={ButtonGroup}
			drop={'down-centered'}
			variant="secondary"
			title={`Filter by ${filter ? filter : 'month'}`}
			onSelect={onSelect}
		>
			{
				list.map(item => (
						<Dropdown.Item
							key={item}
							eventKey={item}
						>
							{item}
						</Dropdown.Item>
					),
				)
			}
			<Dropdown.Divider/>
			<Dropdown.Item>Clear Filter</Dropdown.Item>
		</DropdownButton>
	);
};

export default DropdownBtn;
