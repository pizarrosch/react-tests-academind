import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe('Greeting component', () => {
    test('renders Hello World as a text', () => {
//     Arrange
        render(<Greeting />);
//     Act
//     in this case nothing

//     Assert
        const helloWorldElement = screen.getByText('Hello World!', {exact: true});
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('renders Have a good night! if the button was clicked', () => {
    //     Arrange
        render(<Greeting />);
    //     Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

    //     Assert
        const outputElement = screen.getByText('Have a good night!', {exact: true});
        expect(outputElement).toBeInTheDocument();
    });

    test('does not render "Hello World!" if button is clicked', () => {
    //     Arrange
        render(<Greeting />);
    //     Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
    //     Assert
        const outputElement = screen.queryByText('Hello World!', {exact: false});
        expect(outputElement).toBeNull();
    })
})
