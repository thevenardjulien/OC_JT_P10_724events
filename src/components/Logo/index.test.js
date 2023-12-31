import { render, screen } from "@testing-library/react";
import Menu from "../../containers/Menu";
import Home from "../../pages/Home";

describe("Logo component", () => {
  it("should be displayed in the menu when page is loaded", () => {
    render(<Menu />);
    expect(screen.getByTestId("Logo")).toBeInTheDocument();
  });
  it("should be displayed in the footer when page is loaded", () => {
    render(<Home />);
    const footerElement = screen.getByTestId("footer");
    const logoElement = footerElement.querySelector("[data-testid='Logo']");
    jest.useFakeTimers();
    jest.advanceTimersByTime(2000);
    expect(logoElement).toBeInTheDocument();
  });
});



