import App from '../App.js';
import StartScreen from '../pages/StartScreen.js';
import { render, screen, fireEvent } from '@testing-library/react';

describe("Verify the StartScreen works properly", () => {

    test("It has all the proper HTML", () => {
        render(<StartScreen pageNum={1}/>);
        expect(screen.getByAltText("")).toHaveClass("startIMG");
        expect(screen.getByText("Learn Why You Should Make Voluntary Contributions Today")).toBeInTheDocument();
        expect(screen.getByRole("button")).toHaveTextContent("Startarrow_right_alt");
    });

    test("Start button will transition to the InputScreen", async () => {
        render(<App />);
        expect(await screen.findByText("Learn Why You Should Make Voluntary Contributions Today", {}, { timeout: 4000 })).toBeInTheDocument();
        fireEvent.click(screen.getByRole("button"));
        expect(screen.getByText("Please Select Your Age")).toBeInTheDocument();
    });

});
