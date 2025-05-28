# React Form with Validation

This project is a single-page application built with React and Vite that demonstrates a user registration form with comprehensive client-side validation and routing.

## Features

-   **Dynamic Form Fields:** Includes inputs for First Name, Last Name, Username, E-mail, Password (with show/hide toggle), Phone Number (country code + number), Country (dropdown), City (dropdown, dependent on country), PAN No., and Aadhar No.
-   **Client-Side Validation:** Implements real-time validation for all fields without relying on third-party libraries.
    -   Required field checks.
    -   Specific format validation for E-mail, Phone Number, PAN, and Aadhar numbers.
    -   Password length requirement.
-   **Error Handling:** Displays clear error messages next to invalid fields upon blur or attempted submission.
-   **Conditional Submission:** The submit button is disabled until all fields are filled correctly.
-   **Data Display on New Route:** Upon successful submission, the entered form data is displayed on a separate `/details` page using React Router.

## Getting Started

### Prerequisites

-   Node.js (v18.x or later recommended)
-   npm (comes with Node.js)

### Installation

1.  Clone the repository (if applicable) or download the project files.
2.  Navigate to the project directory (`task`):
    ```bash
    cd task
    ```
3.  Install the necessary dependencies:
    ```bash
    npm install
    ```

### Running the Development Server

1.  Make sure you are in the `task` project directory.
2.  Start the Vite development server:
    ```bash
    npm run dev
    ```
3.  Open your browser and navigate to the URL provided by Vite (usually `http://localhost:5173`).

## Project Structure

-   `src/App.jsx`: Contains the main application logic, including form state management, validation, and routing setup.
-   `src/DisplayFormData.jsx`: A component responsible for rendering the submitted form details on the `/details` route.
-   `src/main.jsx`: The entry point of the React application.
-   `src/index.css`: Global styles for the application.
-   `public/`: Static assets.
-   `vite.config.js`: Vite configuration file.
-   `package.json`: Project metadata and dependencies.
