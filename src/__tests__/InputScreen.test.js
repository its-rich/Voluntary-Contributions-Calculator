import App from '../App.js';
import InputScreen from '../pages/InputScreen.js';
import { render, screen, fireEvent } from '@testing-library/react';

describe("Verify the StartScreen works properly", () => {

    test("Age selector works", () => {
        render(<InputScreen pageNum={2}/>);
        expect(screen.getByText("Please Select Your Age")).toBeInTheDocument();
        expect(screen.getByText("18")).toBeInTheDocument();
        // fireEvent.change(screen.getByTestId("select"), {
        //     target: { value: "green" },
        // });
        expect(screen.getByText("Please Enter How Much You Earn In 2 Weeks (Average)")).toBeInTheDocument();
        expect(screen.getByText("Please Select What You Will Start Doing Today")).toBeInTheDocument();
        expect(screen.getByText("Would You Like To Adjust Your Contributions For Each Year?")).toBeInTheDocument();

        expect(screen.queryByRole('div', {name: "modal"})).not.toBeInTheDocument();

        // expect(screen.getByAltText("")).toHaveClass("startIMG");
        // expect(screen.getByText("Learn Why You Should Make Voluntary Contributions Today")).toBeInTheDocument();
        // expect(screen.getByRole("button")).toHaveTextContent("Startarrow_right_alt");
    });

});
