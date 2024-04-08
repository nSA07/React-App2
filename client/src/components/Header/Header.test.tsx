import { render } from "@testing-library/react";
import { Header } from "./Header";

test('render <Header/> component', () => {
    const { container } = render(<Header />);
    expect(container.firstChild).toMatchSnapshot();
})