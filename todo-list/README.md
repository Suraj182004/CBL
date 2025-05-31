# React To-Do List Application

[**Live Demo**](https://cbl-rose.vercel.app/)

This project is a simple To-Do List application built with React and Vite. It allows users to add, remove, and mark tasks as complete. The application also includes features like input validation, dynamic task display, sorting, filtering, and local storage integration to persist tasks.

## Features

-   **Task Management:** Add new tasks, remove existing tasks, and toggle task completion status.
-   **Input Validation:** Prevents adding empty tasks.
-   **Dynamic Display:** Tasks are rendered dynamically as they are added or modified.
-   **Filtering:** Filter tasks by "All", "Active", or "Completed" status.
-   **Sorting:** Sort tasks alphabetically in ascending (A-Z) or descending (Z-A) order.
-   **Local Storage:** Tasks are saved to the browser's local storage, so they persist across sessions.
-   **Responsive Design:** Basic styling for a clean user interface on different screen sizes.

## Getting Started

### Prerequisites

-   Node.js (v18.x or later recommended)
-   npm (comes with Node.js) or yarn

### Installation

1.  **Clone the repository (if you haven't already):**
    ```bash
    git clone <your-repository-url>
    cd <repository-folder>/todo-list
    ```

2.  **Install dependencies:**
    Using npm:
    ```bash
    npm install
    ```
    Or using yarn:
    ```bash
    yarn install
    ```

### Running the Development Server

1.  Make sure you are in the `todo-list` project directory.
2.  Start the Vite development server:
    Using npm:
    ```bash
    npm run dev
    ```
    Or using yarn:
    ```bash
    yarn dev
    ```
3.  Open your browser and navigate to the URL provided by Vite (usually `http://localhost:5173`).

## Project Structure

-   `src/App.jsx`: The main application component containing the to-do list logic and UI.
-   `src/main.jsx`: The entry point for the React application.
-   `src/index.css`: Global styles (if any, often TailwindCSS directives are here or imported).
-   `public/`: Static assets.
-   `vite.config.js`: Vite configuration file.
-   `package.json`: Project metadata, scripts, and dependencies.

## Manual Testing Guidance

Once the application is running in your browser, you can manually test the following features:

1.  **Adding a Task:**
    -   Type a task description into the input field (e.g., "Buy groceries").
    -   Click the "Add" button.
    -   Verify the new task appears in the list.

2.  **Input Validation (Empty Task):**
    -   Ensure the input field is empty.
    -   Click the "Add" button.
    -   Verify an alert or message appears indicating that a task cannot be empty, and no new task is added.

3.  **Marking a Task as Completed:**
    -   Add a task if the list is empty.
    -   Click the checkbox next to a task.
    -   Verify the task text gets a line-through style, indicating it's completed.
    -   Click the checkbox again to unmark it, and verify the line-through style is removed.

4.  **Removing a Task:**
    -   Add a task if the list is empty.
    -   Click the "❌" (remove) button next to a task.
    -   Verify the task is removed from the list.

5.  **Filtering Tasks:**
    -   Add a few tasks. Mark some as completed and leave others active.
    -   Click the "Active" filter button. Verify only uncompleted tasks are shown.
    -   Click the "Completed" filter button. Verify only completed tasks are shown.
    -   Click the "All" filter button. Verify all tasks (both active and completed) are shown.

6.  **Sorting Tasks:**
    -   Add a few tasks with different starting letters (e.g., "Apple", "Zebra", "Banana").
    -   Click the "Sort: A–Z" button (or whatever the current sort order is).
    -   Verify the tasks are sorted alphabetically.
    -   Click the sort button again (it should toggle to "Sort: Z–A").
    -   Verify the tasks are sorted in reverse alphabetical order.

7.  **Local Storage Persistence:**
    -   Add a few tasks.
    -   Refresh the browser page.
    -   Verify that the tasks are still present, loaded from local storage.
    -   Complete a task, then refresh. Verify its completed state is also persisted.
    -   Remove a task, then refresh. Verify it remains removed.

## Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are welcome.

## License

This project is open source and available under the [MIT License](LICENSE.md) (assuming you add one).
