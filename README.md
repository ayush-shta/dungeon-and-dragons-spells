# D&D Spells

**Deployed at:** https://d-n-d-spells.vercel.app/ 

## Running the app

1. Install dependencies with the following script in the project directory:
    #### `yarn`
    
2. To start the app you can run:
    #### `yarn start`
    Runs the app in the development mode.\
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
    
    The page will reload if you make edits.\
    You will also see any lint errors in the console.

## Available Scripts

In the project directory, you can run:

### `yarn test`

Launches the test runner in the interactive watch mode.\

### `yarn test:coverage`

Launches the test runner and generate test coverage report\

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


## Project Structure Overview (From Root)

- (src/components)
    -  Collection of generic UI components that can be shared across the app

- (src/constants)
    - Collection of global app constants
    - Contains app routes, configuration strings

- (src/modules)
    - Collection of UI pages specific to a module or feature
    - Actions, services, constants and reducers related to the individual UI page

- (src/services)
    - Collection of services used throughout the app
    - https
        - Includes axios instance for making http calls

- (src/redux)
    - (/reducer)
        - Collection of global Redux reducers
    - hooks.ts
        - Contains wrapper hooks of redux hooks    
    - store.ts
        - Contains initialization of redux store

- (src/test)
    - Collection of supporting files needed for writing test files
    - mock-data
        - Mock values to provide in tests
    -test-utils.tsx
        - Utility file for writing tests; includes render wrapper for testing library

- App.tsx
    - App component that contains app's root level wrappers like redux provider
    
- app-router.tsx
    - Route setup for react router
    
- index.tsx
    - App entry point

