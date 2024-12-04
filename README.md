# Tourism Plan

A ReactJS application for planning and managing tourism trips.

## Features

* Displays a list of tourism destinations with images and descriptions
* Allows users to filter destinations by location and type
* Supports adding and removing destinations from a trip plan
* Includes a responsive design for mobile and desktop

## Usage

1. Clone the repository to your local machine
2. Install the required dependencies using `npm install` or `yarn install`
3. Start the application using `npm start` or `yarn start`
4. Open the application in a web browser at `http://localhost:3000`

## Code Structure

The code is organized into the following folders:

* `src`: contains the source code for the application
* `src/components`: contains reusable React components
* `src/data`: contains the data for the application (destinations, trip plans)
* `src/context`: contains the application context
* `src/hooks`: contains custom hooks for data fetching and state management
* `src/assets`: contains static assets such as images and fonts

## Components

The following components are used in the application:

* [App](cci:1://file:///c:/Users/HP/OneDrive/Desktop/DotBatchProjects/selfPractice/Reactjs/tourism-plan/src/App.js:4:0-25:2): the main application component
* `Destinations`: the component for displaying a list of destinations
* `Destination`: the component for displaying a single destination
* `TripPlan`: the component for managing a trip plan
* `Filter`: the component for filtering destinations

## Context

The application uses a custom context for managing state and data:

* `DestinationContext`: provides destination-related functionality
* `TripPlanContext`: provides trip plan-related functionality

## Hooks

The application uses custom hooks for data fetching and state management:

* `useDestinations`: a hook that provides destination-related functionality
* `useTripPlan`: a hook that provides trip plan-related functionality

## Data

The application uses a mock API for data fetching. The API is accessed using the `axios` library.

## License

This code is licensed under the MIT License.