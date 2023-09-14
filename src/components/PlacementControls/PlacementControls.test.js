import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import PlacementControls from './PlacementControls'

const setup = () => {
    render(<PlacementControls />)
}

// x-coord
test('x-coord should not be blank', () => {
    setup()
    fireEvent.change(screen.getByTestId('xCoord'), { target: { value: '' } })
    fireEvent.change(screen.getByTestId('yCoord'), { target: { value: '2' } })
    fireEvent.change(screen.getByTestId('facing'), { target: { value: 'NORTH' } })
    fireEvent.click(screen.getByText('Place'))
    expect(screen.getByText('Please select all the fields!')).toBeInTheDocument()
})

// x-coord
test('y-coord should not be blank', () => {
    setup()
    fireEvent.change(screen.getByTestId('xCoord'), { target: { value: '2' } })
    fireEvent.change(screen.getByTestId('yCoord'), { target: { value: '' } })
    fireEvent.change(screen.getByTestId('facing'), { target: { value: 'NORTH' } })
    fireEvent.click(screen.getByText('Place'))
    expect(screen.getByText('Please select all the fields!')).toBeInTheDocument()
})

// facing
test('facing should not be blank', () => {
    setup()
    fireEvent.change(screen.getByTestId('xCoord'), { target: { value: '2' } })
    fireEvent.change(screen.getByTestId('yCoord'), { target: { value: '2' } })
    fireEvent.change(screen.getByTestId('facing'), { target: { value: '' } })
    fireEvent.click(screen.getByText('Place'))
    expect(screen.getByText('Please select all the fields!')).toBeInTheDocument()
})
