# LivingLink - A Roommate Finder App

LivingLink is a mobile application designed to help users find compatible roommates by matching preferences and lifestyles. Our project has been developed using React Native with Expo Go and is designed to run with iOS or Android devices using the Xcode Simulator. The backend is powered by Node.js and Express.js with a MySQL database.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Make sure you have installed native code dependencies [here](https://reactnative.dev/docs/environment-setup#installing-dependencies)
- Node.js installed on your machine.
- MySQL Server installed and running.
- Xcode installed (for macOS) to use the Xcode Simulator for iOS testing.
- Visual Studio Code or any preferred IDE installed for development.
- Expo CLI installed (`npm install -g expo-cli`).

## Installation

Follow these steps to get your development environment set up:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/roommate-finder.git
   cd roommate-finder

2. **Install backend dependencies:
   ```bash
   cd backend
   npm install

3. **Install frontend dependencies:
    ```bash
    cd ../frontend
    npm install
    
4. **Set up the MySQL database:
   
  Create a new MySQL database named roommate_finder.
  Import the provided SQL script under DB set up branch to set up the tables:

6. **Configure server.js to add your DB Connection:

  DB_HOST=localhost
  DB_USER=your_mysql_username
  DB_PASS=your_mysql_password
  DB_NAME=roommate_finder
  PORT=3000

### To preview and run the project on your device:
1. Open project folder in <u>Visual Studio Code</u>
2. Run  `npm install`  in the terminal
3. Run  `npx expo start`  in the terminal
4. Run on For iOS device (only on MacOS)
    1. Press  `i`  to view on iOS simulator or follow the instructions [here](https://docs.expo.dev/workflow/run-on-device/) to run on a physical device.
5. Run on For android device
    1. Press  `a`  to view on Android Virtual Device or follow the instructions [here](https://docs.expo.dev/workflow/run-on-device/) to run on a physical device.

## Using the Application
Once the application is running, you can:

Register a new user account.
Log in with existing credentials.
Fill out your profile and roommate preferences.
Browse potential matches and interact with other users.
