Hi visitor! These are the instructions for running my app:

*** IMPORTANT: You may have node.js and npm installed on your machine ***

1. Download the project.
2. Open a terminal and get into the directory of the folder's project. Example: "C:YourPath\phone_catalog"
3. Once you are there, execute the command "npm i" or "npm install" to install the dependencies.
4. Then in the terminal, execute command "npm start" or "npm run start".
5. Then open another terminal in the same directory, and execute the command "node src/server.js"
6. Now yoy may have the react-app executed on your browser. If not, type "http://localhost:3000/" in the search bar of your browser.

*** IMPORTANT Information ***

-This app was tested on Google Chrome.
-React app is running in the port  3000.
-Node server is running in the port 4000.
-In the src folder, you'll find a file named "phoneCatalog.json", which is used as a data base. It is already initialized with some objects. In case something happen there's a file name "DB_Backup.json" which contains a backup of the original data base.
-The dependencies used were (you can also see it in package.json):
   "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "express": "^4.17.1",
    "lowdb": "^3.0.0",
    "nodemon": "^2.0.14",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "4.0.3",
    "react-spinners": "^0.11.0",
    "web-vitals": "^1.1.2",
    "wouter": "^2.8.0-alpha.1"
-Node version used --> 14.15.5
-npm version used --> 6.14.11
