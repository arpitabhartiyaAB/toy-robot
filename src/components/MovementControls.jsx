import { Button } from "react-bootstrap";
import compass from "../images/compass.jpg";
import { memo, useEffect, useState } from "react";

function MovementControls(prop) {
    const { data: { xCoord, yCoord, facing } } = prop // current position data of the robot from props 
    const [error, setError] = useState(null) // state for handle msg of wrong move

    useEffect(() => { // for clear the error msg after changing the position
        setError(null)
    }, [xCoord, yCoord, facing])

    const move = () => { // logic for handle the forward move of the robot
        let newX = xCoord
        let newY = yCoord
        let isError = false
        switch (facing) {
            case "EAST":
                (xCoord + 1) < 5 ? newX++ : (isError = true)
                break;
            case "SOUTH":
                (yCoord - 1) > -1 ? newY-- : (isError = true)
                break;
            case "WEST":
                (xCoord - 1) > -1 ? newX-- : (isError = true)
                break;
            case "NORTH":
                (yCoord + 1) < 5 ? newY++ : (isError = true)
                break;
            default:
                break;
        }
        if (isError) {
            let errorText = <span data-testid='wrongMoveErr' className="text-danger"><br />Oops wrong move! <br />Please change the direction.</span>
            setError(errorText)
            return
        }
        prop.changePosition({ xCoord: newX, yCoord: newY })
    }

    const turnLeft = () => { // logic for handle the left turn of the robot
        let newFacing
        switch (facing) {
            case "EAST":
                newFacing = "NORTH"
                break;
            case "SOUTH":
                newFacing = "EAST"
                break;
            case "WEST":
                newFacing = "SOUTH"
                break;
            case "NORTH":
                newFacing = "WEST"
                break;
            default:
                break;
        }
        prop.changePosition({ facing: newFacing })
    }

    const turnRight = () => { // logic for handle the right turn of the robot
        let newFacing
        switch (facing) {
            case "EAST":
                newFacing = "SOUTH"
                break;
            case "SOUTH":
                newFacing = "WEST"
                break;
            case "WEST":
                newFacing = "NORTH"
                break;
            case "NORTH":
                newFacing = "EAST"
                break;
            default:
                break;
        }
        prop.changePosition({ facing: newFacing })
    }
    return (
        <div className="d-flex justify-content-around border-top border-dark py-3" >
            <div>
                <h5 className="text-center text-muted" > Let's Move The Robot !
                    {/* for error start */}
                    {error}
                    {/* for error end*/}
                </h5>
                {/* button for movement start */}
                <div className="d-flex aline-items-center justify-content-center" >
                    <Button onClick={() => { turnLeft() }} variant="success" data-testid="turnLeft">↰</Button>
                    <Button onClick={() => { move() }} className="mx-1" variant="success" data-testid="move">↥</Button>
                    <Button onClick={() => { turnRight() }} variant="success" data-testid="turnRight">↱</Button>
                </div>
                {/* button for movement end */}
                {/* compass start */}
                <div className="d-flex aline-items-center justify-content-center my-3" >
                    <img width={100} height={100} src={compass} />
                </div>
                {/* compass end */}
            </div>
            {/* report start */}
            <div>
                <h4 className="bg-secondary p-2 rounded text-light" > Report - ({xCoord}, {yCoord}) {facing} </h4>
            </div>
            {/* report end */}
        </div>
    );
}
export default memo(MovementControls);
