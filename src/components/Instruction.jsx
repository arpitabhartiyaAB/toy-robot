import { memo } from "react"
import { Accordion } from "react-bootstrap"

function Instruction() {
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item className="text-muted" eventKey="0">
                <Accordion.Header> <b className="text-muted">Instruction</b> </Accordion.Header>
                <Accordion.Body>
                    <div>
                        <h4>
                            Descriptions
                        </h4>
                        The application is a simulation of a toy robot moving on a square tabletop, of dimensions 5 units x 5 units.
                        There are no other obstructions on the table surface.
                        The robot is free to roam around the surface of the table, and prevented from falling to destruction.
                        <h4>
                            How to operate the robot
                        </h4>
                        ➤ PLACE action - will put the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST.<br />
                        ➤ Initial valid action is place the robot on the board after that you can move the robot in any direction.<br />
                        ➤ MOVE forward action - will move the toy robot one unit forward in the direction it is currently facing.<br />
                        ➤ LEFT | RIGHT action - will rotate the robot 90 degrees in the specified direction without changing the position of the robot.<br />
                        ➤ REPORT - will announce the X,Y and F of the robot.
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default memo(Instruction)