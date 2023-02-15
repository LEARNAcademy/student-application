import { render, screen } from "@testing-library/react"
import { Button } from "./Button"

describe("<Button component />", () => {
  it("renders a clickable link", () => {
    const text = "Click me!"
    const path = "/example"
    render(<Button text={text} path={path} />)
    const linkElement = screen.getByRole("link", { name: text })
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute("href", path)
  })
})