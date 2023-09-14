import { Table } from "react-bootstrap";
import robot from '../images/robot1.jpg'
import { memo } from "react";


function Grid(prop) {
    const { data: { gridSize, isPlaced, xCoord, yCoord, facing } } = prop // current position of the robot and grid info from the props

    const getBlock = (rowNum) => { // logic to get the cells of given row
        const blocks = [] // to store all the block of given row
        for (let i = (gridSize - 1); i >= 0; i--) {
            if (rowNum === xCoord && i === yCoord && isPlaced === true) { // logic for active cell ( providing dynamic class to the img for facing directions )
                blocks.push(<td
                    className="block"
                    key={`col${rowNum}${i}`}
                    data-testid='activeCell' >
                    <img
                        className={`activeBlock${facing}`}
                        src={robot}
                        data-testid={`(${rowNum},${i})${facing}`} />
                </td>)
            } else { // for normal cell
                blocks.push(<td className="block" key={`col${rowNum}${i}`} />)
            }
        }
        return blocks
    }

    const getRows = () => { // logic to get the total rows of given grid size 
        const rows = [] // to store all the rows
        for (let i = (gridSize - 1); i >= 0; i--) {
            rows.push(<tr key={`row${i}`}>{getBlock(i)}</tr>)
        }
        return rows
    }

    return (
        // grid table start
        <Table className="border-light" striped bordered hover variant="dark">
            <tbody>{getRows()}</tbody>
        </Table>
        // grid table end
    );
}
export default memo(Grid);
