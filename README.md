# TV Show App

This is a simple React-based web application that allows users to search for TV shows using the TVMaze API. The application has a simple design, with a search bar, list view of search results, and a detailed view of a particular TV show.

## Features

- Home page with a search bar to search for TV shows
- A List page that displays the results of a search
- A Details page that displays detailed information about a particular TV show
- A Header component for easier navigation

## How to use

- The home page provides a search bar. Type the name of a TV show you're interested in and click "Submit"
- You'll be redirected to the List page with the results of your search displayed. Each item in the list includes basic information about the show.
- Click on the name of a TV show to see more detailed information on the Details page.

## How to run locally

- Clone this repository
- Run `npm install` to install all required dependencies
- Run `npm start` to start the development server

## Technology Stack

- React.js: The application uses functional components and hooks for state management and side effects
- React Router: Used for routing and navigation
- Axios: Used for making HTTP requests to the TVMaze API
- Tailwind CSS: For styling the application

## Code Overview

- The `App` component is the main component of the application, and includes the Router and Routes for different pages.
- The `Header` component displays the application name and provides a link to the home page.
- The `SearchForm` component allows the user to search for TV shows.
- The `TVList` component fetches and displays a list of TV shows based on the user's search.
- The `ShowDetails` component fetches and displays detailed information about a specific TV show.
- The `Loading` component displays a loading spinner while the application is fetching data. 

This application demonstrates the basics of making API requests, routing, and state management in a React application.

Please note that the TVMaze API is a public API, so there might be some limitations on the number of requests you can make. Be sure to review their API documentation for usage guidelines.
