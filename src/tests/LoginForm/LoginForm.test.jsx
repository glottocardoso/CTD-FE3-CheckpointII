import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LoginForm from "../../Components/LoginForm";

describe("LoginForm", () => {
  it("submits the form with valid credentials", async () => {
    // Mock the API response
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            token: "my-token",
          }),
      })
    );

    // Render the LoginForm component
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    // Fill in the form fields
    fireEvent.change(screen.getByPlaceholderText("Login"), {
      target: { value: "john.doe" },
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "password123" },
    });

    // Submit the form
    fireEvent.submit(screen.getByRole("button", { name: /enviar/i }));

    // Wait for the API call to complete and the redirect to happen
    await screen.findByText(/redirecting/i);

    // Assert that the user is redirected to the "/home" route
    expect(screen.getByText(/redirecting/i)).toBeInTheDocument();

    // Assert that the token is saved in the local storage
    expect(localStorage.getItem("token")).toEqual("my-token");

    // Restore the original implementation of fetch
    global.fetch.mockRestore();
  });

  // Add more test cases as needed
});
