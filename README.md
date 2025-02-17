## Overview

This project is a To-Do List application designed to help undergraduate students manage their tasks and assignments more effectively. It provides a user-friendly interface for creating, editing, and organizing tasks, along with features for prioritizing and sorting them by date.

## Features

- **User Management**: Create an account, log in, and log out.
- **Task Management**: Add, edit, delete, and list tasks.
- **Task Prioritization**: Label tasks by priority.
- **Task Sorting**: Filter and sort tasks by date.
- **Data Persistence**: Store and retrieve tasks to/from a file.
- **User Interface**: Light and dark mode toggle for better user experience.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/todo-list-app.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd todo-list-app
   ```

3. **Install dependencies** (if any):
   ```bash
   npm install
   ```

4. **Run the application**:
   ```bash
   npm start
   ```

## Usage

### User Management

- **Sign Up**: Navigate to the sign-up page and provide the required information (username, password, email).
- **Log In**: Enter your credentials on the login page to access the application.
- **Log Out**: Click the logout button to end your session.

### Task Management

- **Add Task**: Enter task details (title, due date, priority) and click "Add".
- **Edit Task**: Select a task from the list, modify its details, and click "Edit".
- **Delete Task**: Select a task from the list and click "Delete".
- **List Tasks**: View all tasks in the task list.
- **Sort Tasks**: Filter and sort tasks by date using the provided options.

### Data Persistence

- Tasks are stored in the browser's local storage, ensuring they persist across sessions.

## Testing

The project includes a comprehensive testing strategy to ensure all functionalities work as expected. Test cases cover various scenarios, including:

- **Registration**: New user registration, empty fields, password match, and email format validation.
- **Login/Logout**: Successful login, incorrect credentials, and logout functionality.
- **Task Management**: Adding, editing, deleting, and listing tasks, along with error handling for invalid inputs.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Submit a pull request to the main repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

**Note**: This README is based on the provided documentation. Feel free to customize it further to fit your project's specific needs.
