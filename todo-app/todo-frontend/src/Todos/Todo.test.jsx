import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import Todo from "./Todo";

describe("Single todo", () => {
  test("renders correct todo -text", () => {
    const todo = {
      _id: "123",
      text: "Create test to use during Docker build process",
      done: false
    }

    const completeTodo = vi.fn()
    const deleteTodo = vi.fn()

    render(<Todo todo={todo} onClickComplete={completeTodo} onClickDelete={deleteTodo} />)

    const element = screen.getByText(todo.text)

    expect(element).toBeDefined()
  })
})