# React Exam List Web Site

This is a React web site project designed to display a list of exams and allow users to filter the list by date, candidate, or location. The list is sorted by date in ascending order, and each exam in the list displays the exam date, candidate name, and location.

## Requirements

To run the project, you need the following software installed on your computer:

- Node.js (v14 or higher)
- NPM (v6 or higher)

## Installation

1.  Clone the project repository from GitHub:

    bashCopy code

    `git clone https://github.com/your-username/your-project.git`

2.  Change to the project directory:

    bashCopy code

    `cd your-project`

3.  Install the project dependencies:

    bashCopy code

    `npm install`

## Usage

To run the project in development mode, run the following command:

bashCopy code

`npm start`

This will start the development server and open the web site in your default browser. The web site will automatically reload whenever you make changes to the source code.

To build the project for production, run the following command:

bashCopy code

`npm run build`

This will create a production-ready build of the web site in the build directory.

## Project Structure

The project has the following directory structure:

kotlinCopy code

`your-project/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── ExamList.js
│   │   ├── ExamListItem.js
│   │   └── ...
│   ├── data/
│   │   └── exams.js
│   ├── utils/
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── ...`

Here's a brief description of each directory and file:

- `public/`: This directory contains the public assets for the web site, such as the `index.html` file and any other static files.
- `src/`: This directory contains the source code for the React application.
- `components/`: This directory contains the React components used to build the web site.
- `data/`: This directory contains the sample exam data used in the web site.
- `utils/`: This directory contains any utility functions used in the web site.
- `App.js`: This is the main React component that defines the layout and behavior of the web site.
- `index.js`: This is the entry point for the React application.
- `package.json`: This file defines the project dependencies and scripts.

## Components

The project uses the following React components:

- `ExamList`: This component displays the list of exams and allows the user to filter the list by date, candidate, or location. It receives the exam data as a prop and passes it down to `ExamListItem` components to render each individual exam.
- `ExamListItem`: This component displays an individual exam in the list. It receives the exam data as a prop and renders the exam date, candidate name, and location.

## Data

The sample exam data is stored in the `exams.js` file in the `data/` directory. It exports an array of exam objects, each containing the following properties:

- `date`: The date of the exam (in `YYYY-MM-DD` format).
- `candidate`: The name of the candidate.
- `location`: The location of the exam.
