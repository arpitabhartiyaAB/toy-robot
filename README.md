# TOY ROBOT - ARPITA BHARTIYA

This React app solve the popular Robot coding challenge, which i get as a assignment for coading test.

The full discription of the challenge is in the PROBLEM.md document in the root of this repo.
used stacks are -
*React
*css
*react-bootstrap
*React Testing Library

No any state managment present in this app as the size of the app is small. Header and Instruction components are for understanding and nice view. 
The main functioning components are Grid, MovementControls and PlacementControls.The Report is kept inside the MovementControls because it is just a short discription of current position of the robot.
Once the robot get placed on the board only after that MovementControls is visible. A compass is there for the direction understanding. I used some designing inside App.jsx which reduce the prop drilling and extra component creation. For code clearty purpose i used different component for placement of robot and movement controls. I used memo in this project.There is a separate file for the test cases of PlacementControls component for data validation. Test cases inside App.test.js cover all the possible tests.
For some json data a data folder is available from where you can add or remove data acoording to the use cases.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# install all the requied node modules by command 

npm install 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

