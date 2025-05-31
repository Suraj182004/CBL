import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, jest, beforeEach } from '@jest/globals';
import App from "./App";

describe("To-Do App", () => {
  beforeEach(() => {
    localStorage.clear(); // isolate tests
  });

  test("renders heading and input", () => {
    render(<App />);
    expect(screen.getByText(/to-do list/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/enter a task/i)).toBeInTheDocument();
  });

  test("adds a new task", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/enter a task/i);
    const addButton = screen.getByText(/add/i);

    fireEvent.change(input, { target: { value: "Test Task" } });
    fireEvent.click(addButton);

    expect(screen.getByText("Test Task")).toBeInTheDocument();
  });

  test("prevents adding empty task", () => {
    render(<App />);
    window.alert = jest.fn(); // mock alert
    const addButton = screen.getByText(/add/i);
    fireEvent.click(addButton);
    expect(window.alert).toHaveBeenCalledWith("Task cannot be empty.");
  });

  test("marks task as completed", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/enter a task/i);
    const addButton = screen.getByText(/add/i);

    fireEvent.change(input, { target: { value: "Complete me" } });
    fireEvent.click(addButton);

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    const taskText = screen.getByText("Complete me");
    expect(taskText).toHaveClass("line-through");
  });

  test("removes task", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/enter a task/i);
    const addButton = screen.getByText(/add/i);

    fireEvent.change(input, { target: { value: "Remove me" } });
    fireEvent.click(addButton);

    const removeButton = screen.getByText("❌");
    fireEvent.click(removeButton);

    expect(screen.queryByText("Remove me")).not.toBeInTheDocument();
  });

  test("filters active tasks", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/enter a task/i);
    const addButton = screen.getByText(/add/i);

    // Add one active and one completed task
    fireEvent.change(input, { target: { value: "Active task" } });
    fireEvent.click(addButton);
    fireEvent.change(input, { target: { value: "Completed task" } });
    fireEvent.click(addButton);

    const checkboxes = screen.getAllByRole("checkbox");
    fireEvent.click(checkboxes[1]); // Mark second task as completed

    fireEvent.click(screen.getByText("Active"));
    expect(screen.getByText("Active task")).toBeInTheDocument();
    expect(screen.queryByText("Completed task")).not.toBeInTheDocument();
  });
});
