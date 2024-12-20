# AI ToDo List App

Welcome to the AI ToDo List App! This project is designed to help users manage their tasks efficiently using AI suggestions.

## Features
- **Task Management**: Add, edit, delete, and view your tasks. The tasks are categorized according to the category.
- **AI Assistance**: Leverage AI to generate task suggestions.
- **User-Friendly Interface**: Easy-to-navigate UI with a clean design.
- **Responsive Design**: Accessible on desktop and mobile devices.
- **Storage**: Using localStorage to store the User's tasks.

## Technology Stack
-  React, Tailwind CSS, moment
- **AI Integration**: Google Generative AI

## Installation

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/UnknownLoop11/AI-ToDo-list-app.git
   cd AI-ToDo-list-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```env
   VITE_GEMENI_APIKEY=<your_gemini_api_key>
   ```
4. Start the application:
   ```bash
   npm run dev
   ```
   The app will run on `http://localhost:5173`.

## Usage
1. Navigate to the application in your web browser.
2. Create an account or log in.
3. Add tasks and let the AI assist you in managing them effectively.

## Folder Structure
```plaintext
AI-ToDo-list-app/
├── public/         # Static files
├── src/            # Source code
│   ├── components/ # Reusable components
│   ├── utils/   # API services and utility functions
│   └── App.js      # Main app component
├── package.json    # Project dependencies
└── README.md       # Project documentation
```

#### Feel free to reach out if you have any questions or queries.
