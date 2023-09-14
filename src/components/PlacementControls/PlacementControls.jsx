import { memo, useState } from "react";
import { Form, Button } from "react-bootstrap"
import optionsData from "../../data/optionsData.json"

function PlacementControls(prop) {
    const [positionData, setPositionData] = useState({ xCoord: '', yCoord: '', facing: '', error: false }) // initial data of the form

    const onInputChange = (e) => {
        const { value, name } = e.target
        setPositionData({
            ...positionData, error: false,
            [name]: name === "facing" || value === '' ? value : parseInt(value)
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        const { xCoord, yCoord, facing } = positionData
        if (xCoord === '' || yCoord === '' || facing === '') {//validation for form data
            setPositionData({ ...positionData, error: true })
            return
        }
        prop.changePosition({ xCoord: parseInt(xCoord), yCoord: parseInt(yCoord), facing, isPlaced: true }) // change the robot position
        setPositionData({ xCoord: '', yCoord: '', facing: '' })// reset the form data
    }
    return (
        <Form className="p-4" onSubmit={(e) => { onSubmit(e) }} >
            <h5 className="text-light text-center bg-secondary rounded" > Place The Robot </h5>
            <div className="row" >
                {/* start select for x-coord */}
                <div className="col-3" >
                    <Form.Group>
                        <Form.Label htmlFor="x">X-Coordinate</Form.Label>
                        <Form.Select
                            value={positionData.xCoord}
                            name="xCoord"
                            data-testid="xCoord"
                            onChange={(e) => { onInputChange(e) }}
                            id="x">
                            <option value='' >Select</option>
                            {
                                optionsData && optionsData.coordinates ?
                                    optionsData.coordinates.map((e) => {
                                        return <option value={e} key={`opt${e}`} >{e}</option>
                                    }) : <option value='' >No Options</option>
                            }
                        </Form.Select>
                    </Form.Group>
                </div>
                {/* end select for x-coord */}
                {/* start select for y-coord */}
                <div className="col-3" >
                    <Form.Group>
                        <Form.Label htmlFor="y">Y-Coordinate</Form.Label>
                        <Form.Select
                            value={positionData.yCoord}
                            name="yCoord"
                            data-testid="yCoord"
                            onChange={(e) => { onInputChange(e) }}
                            id="y">
                            <option value='' >Select</option>
                            {
                                optionsData && optionsData.coordinates ?
                                    optionsData.coordinates.map((e) => {
                                        return <option value={e} key={`opt${e}`} >{e}</option>
                                    }) : <option value='' >No Options</option>
                            }
                        </Form.Select>
                    </Form.Group>
                </div>
                {/* end select for y-coord */}
                {/* start select for facing */}
                <div className="col-3" >
                    <Form.Group>
                        <Form.Label htmlFor="facing">Facing</Form.Label>
                        <Form.Select
                            value={positionData.facing}
                            name="facing"
                            data-testid="facing"
                            onChange={(e) => { onInputChange(e) }}
                            id="facing">
                            <option value='' >Select</option>
                            {
                                optionsData && optionsData.facing ?
                                    optionsData.facing.map((e, i) => {
                                        return <option value={e} key={`opt${i}`} >{e}</option>
                                    }) : <option value='' >No Options</option>
                            }
                        </Form.Select>
                    </Form.Group>
                </div>
                {/* end select for facing */}
                <div className="col-1 d-flex aline-items-center" >
                    <Button type="submit">Place</Button>
                </div>
            </div>
            {/* error start */}
            {positionData.error && <p className="text-danger text-center py-2">Please select all the fields!</p>}
            {/* error end */}
        </Form>
    );
}
export default memo(PlacementControls);
