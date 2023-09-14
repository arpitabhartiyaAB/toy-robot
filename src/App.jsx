import 'bootstrap/dist/css/bootstrap.min.css';
import './css/common.css';
import Header from './components/Header';
import Instruction from './components/Instruction';
import PlacementControls from './components/PlacementControls/PlacementControls';
import MovementControls from './components/MovementControls';
import Grid from './components/Grid';
import initialData from './data/initialData.json';
import { useState, Fragment } from 'react';

function App() {
  const heading = "Moving Robot" // for the dynamic heading of the project
  const [gridData, setGridData] = useState(initialData) // main data of current position of robot and grid info

  const changePosition = (newData) => { // for changing the current position of robot and grid data.
    setGridData({ ...gridData, ...newData })
  }

  return (
    <Fragment>
      <Header heading={heading} />
      <Instruction />
      {/* Start the body of the project containing grid, controlls, inputes and report. */}
      <div className="row m-0">
        <div className='col-8 px-0' >
          <PlacementControls changePosition={changePosition} />
          {gridData.isPlaced && <MovementControls data={gridData} changePosition={changePosition} />}
        </div>
        <div className='col-4 px-0' >
          <Grid data={gridData} />
        </div>
      </div>
      {/* End the body of the project containing grid, controlls, inputes and report. */}
    </Fragment>
  );
}

export default App;
