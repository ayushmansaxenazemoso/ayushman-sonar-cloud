import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Input from ".";

describe("Input Component", () => {
  it("renders input with placeholder", () => {
    render(<Input type="text" placeholder="Enter name" value="" onChange={() => {}} />);
    const input = screen.getByPlaceholderText("Enter name");
    expect(input).toBeInTheDocument();
  });

  it("calls onChange on typing", () => {
    const mockChange = jest.fn();
    render(<Input type="text" placeholder="Enter" value="" onChange={mockChange} />);
    fireEvent.change(screen.getByPlaceholderText("Enter"), { target: { value: "A" } });
    expect(mockChange).toHaveBeenCalledTimes(1);
  });
});