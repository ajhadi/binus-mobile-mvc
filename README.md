# binus-mobile-mvc

## Overview

`binus-mobile-mvc` is a simple mobile application built with Expo and React Native. It demonstrates a basic MVC architecture with SQLite integration for local data storage. The app allows users to manage a list of items using a minimal interface.

## Features

- **MVC Architecture**: Implements a simple Model-View-Controller pattern.
- **SQLite Integration**: Stores and retrieves items using SQLite for local data management.
- **Basic CRUD Operations**: Supports creating and displaying items.

## Requirements

- **Node.js**: Ensure you have Node.js installed. The project is compatible with Node.js versions supported by Expo.
- **Expo CLI**: Install Expo CLI globally if you haven’t already. It is used to manage and run Expo projects.

## Installation

1. **Clone the Repository**

   Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/binus-mobile-mvc.git
   cd binus-mobile-mvc
   ```

2. **Install Dependencies**

   Use `npx` to initialize the Expo project and install required dependencies:

   ```bash
   npx expo install
   ```

3. **Install Additional Packages**

   You need to install additional packages for SQLite and other dependencies:

   ```bash
   npx expo install expo-sqlite
   npx expo install @react-navigation/native @react-navigation/stack
   ```

   These commands will install the necessary packages as specified in `package.json`.

4. **Initialize the Database**

   Ensure that the database is properly initialized. The `initDB` function will be called automatically on app startup.

## Running the Application

1. **Start the Development Server**

   Use Expo CLI to start the development server:

   ```bash
   npx expo start
   ```

2. **Run on a Simulator/Emulator**

   You can run the app on an Android or iOS simulator/emulator by pressing `a` (for Android) or `i` (for iOS) in the terminal after starting Expo.

3. **Run on a Physical Device**

   Use the Expo Go app on your physical device to scan the QR code displayed in the terminal or Expo DevTools.

## Directory Structure

- `controllers/`: Contains the controller files, responsible for business logic and interactions with the database.
  - `ItemController.ts`: Manages CRUD operations for items.
- `models/`: Contains the model files, including database initialization and schema definitions.
  - `Database.ts`: Handles database creation and connection.
- `views/`: Contains the view files, responsible for rendering the user interface.
  - `ItemView.tsx`: Displays the list of items and handles user input.

## Code Overview

- **Database Initialization**: `initDB()` initializes the SQLite database and creates the `items` table if it doesn't exist.
- **Item Management**: Functions in `ItemController.ts` handle fetching and adding items to the database.
- **User Interface**: `ItemView.tsx` is the main UI component where users can add and view items.

## Troubleshooting

- **Database Errors**: Ensure that the database file (`app.db`) is accessible and correctly initialized. Check console logs for detailed error messages.
- **Dependency Issues**: Ensure all dependencies are installed correctly using `npx expo install`. Check compatibility of installed packages.