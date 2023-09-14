import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

const setup = () => {
    render(<App />)
}

//robot get placed on submit of form at right position
test('robot get placed at position (2,2) NORTH by Place button', () => {
    setup()
    fireEvent.change(screen.getByTestId('xCoord'), { target: { value: '2' } })
    fireEvent.change(screen.getByTestId('yCoord'), { target: { value: '2' } })
    fireEvent.change(screen.getByTestId('facing'), { target: { value: 'NORTH' } })
    fireEvent.click(screen.getByText('Place'))
    expect(screen.getByTestId('(2,2)NORTH')).toBeInTheDocument()
})

//get report on submit of form with correct data
test('robot get placed at position (1,1) SOUTH by Place button with correct report', () => {
    setup()
    fireEvent.change(screen.getByTestId('xCoord'), { target: { value: '1' } })
    fireEvent.change(screen.getByTestId('yCoord'), { target: { value: '1' } })
    fireEvent.change(screen.getByTestId('facing'), { target: { value: 'SOUTH' } })
    fireEvent.click(screen.getByText('Place'))
    expect(screen.getByText('Report - (1, 1) SOUTH')).toBeInTheDocument()
})

//match report data with current position of robot on click of place button
test('match report data with robot position on click of Place button', () => {
    setup()
    fireEvent.change(screen.getByTestId('xCoord'), { target: { value: '4' } })
    fireEvent.change(screen.getByTestId('yCoord'), { target: { value: '3' } })
    fireEvent.change(screen.getByTestId('facing'), { target: { value: 'WEST' } })
    fireEvent.click(screen.getByText('Place'))
    expect(screen.getByTestId('(4,3)WEST')).toBeInTheDocument()
    expect(screen.getByText('Report - (4, 3) WEST')).toBeInTheDocument()
})

//get the movement controlls visible on the screen after placing the robot on the board
test('movement controlls visible on the screen after placing robot on board', () => {
    setup()
    fireEvent.change(screen.getByTestId('xCoord'), { target: { value: '1' } })
    fireEvent.change(screen.getByTestId('yCoord'), { target: { value: '0' } })
    fireEvent.change(screen.getByTestId('facing'), { target: { value: 'EAST' } })
    fireEvent.click(screen.getByText('Place'))
    expect(screen.getByText("Let's Move The Robot !")).toBeInTheDocument()
})

//movement controlls are not visible on the screen before placing the robot on the board
test('movement controlls are not visible on the screen before placing robot on board', () => {
    setup()
    const controls = screen.queryByText("Let\'s Move The Robot !")
    expect(controls).not.toBeInTheDocument()
})

//robot is not visible on the screen before placing the robot on the board
test('robot is not visible on the screen before placing robot on board', () => {
    setup()
    expect(screen.queryByTestId('activeCell')).not.toBeInTheDocument()
})

// detect wrong move by movement control buttons
test('detect wrong move of the robot', () => {
    setup()
    fireEvent.change(screen.getByTestId('xCoord'), { target: { value: '4' } })
    fireEvent.change(screen.getByTestId('yCoord'), { target: { value: '4' } })
    fireEvent.change(screen.getByTestId('facing'), { target: { value: 'EAST' } })
    fireEvent.click(screen.getByText('Place'))
    fireEvent.click(screen.getByTestId('move'))
    expect(screen.getByTestId('wrongMoveErr')).toBeInTheDocument()
})

// check correct functioning of move button 
test('check correct functioning of move button', () => {
    setup()
    fireEvent.change(screen.getByTestId('xCoord'), { target: { value: '0' } })
    fireEvent.change(screen.getByTestId('yCoord'), { target: { value: '0' } })
    fireEvent.change(screen.getByTestId('facing'), { target: { value: 'EAST' } })
    fireEvent.click(screen.getByText('Place'))
    fireEvent.click(screen.getByTestId('move'))
    expect(screen.getByTestId('(1,0)EAST')).toBeInTheDocument()
    expect(screen.getByText('Report - (1, 0) EAST')).toBeInTheDocument()
})

// check correct functioning of turn right button 
test('check correct functioning of turn right button', () => {
    setup()
    fireEvent.change(screen.getByTestId('xCoord'), { target: { value: '0' } })
    fireEvent.change(screen.getByTestId('yCoord'), { target: { value: '0' } })
    fireEvent.change(screen.getByTestId('facing'), { target: { value: 'EAST' } })
    fireEvent.click(screen.getByText('Place'))
    fireEvent.click(screen.getByTestId('turnRight'))
    expect(screen.getByTestId('(0,0)SOUTH')).toBeInTheDocument()
    expect(screen.getByText('Report - (0, 0) SOUTH')).toBeInTheDocument()
})

// check correct functioning of turn left button 
test('check correct functioning of turn left button', () => {
    setup()
    fireEvent.change(screen.getByTestId('xCoord'), { target: { value: '0' } })
    fireEvent.change(screen.getByTestId('yCoord'), { target: { value: '0' } })
    fireEvent.change(screen.getByTestId('facing'), { target: { value: 'EAST' } })
    fireEvent.click(screen.getByText('Place'))
    fireEvent.click(screen.getByTestId('turnLeft'))
    expect(screen.getByTestId('(0,0)NORTH')).toBeInTheDocument()
    expect(screen.getByText('Report - (0, 0) NORTH')).toBeInTheDocument()
})




