# React Exam List Web Site

This is a React web site project designed to display a list of exams and allow users to filter the list by date, candidate, or location. The list is sorted by date in ascending order, and each exam in the list displays the exam date, candidate name, and location.

## Requirements

To run the project, you need the following software installed on your computer:

- Node.js (v14 or higher)
- NPM (v6 or higher)

## Installation

1.  Clone the project repository from GitHub:

    `git clone https://github.com/Zakkiassi/victvs-web`

2.  Change to the project directory:

    `cd victvs-react`

3.  Install the project dependencies:

    `npm install`

## Usage

To run the project in development mode, run the following command:

`npm start`

This will start the development server and open the web site in your default browser. The web site will automatically reload whenever you make changes to the source code.

To build the project for production, run the following command:

`npm run build`

This will create a production-ready build of the web site in the build directory.

## Project Structure

The project has the following directory structure:

`victvs-react/
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ ├── Candidates.js
│ │ ├── CandidateCard.js
│ │ ├── FilterDropdown.js
│ │ └── SearchBar.js
│ ├── App.js
│ └── index.js
├── package.json
└── README.md
