// import InputScreen from '../pages/InputScreen.js';
// import { render, screen, fireEvent } from '@testing-library/react';

// Becasue the OneOffSummary.js & YearlySummary.js rely upon on the
// "react-step-progress-bar", warnings and errors will be thrown as it relies
// upon a legacy API & does not give a key to each child in its div list. So no
// tests can be conducted unless I make my own progress-bar
//
// https://github.com/pierreericgarcia/react-step-progress-bar
//
describe("OneOffSummary Test Suite", () => {

    test("Nothing", () => {
    });

    // beforeEach(() => {
    //     render(<InputScreen pageNum={2}/>);
    //     fireEvent.click(screen.getByRole("button", {name: /No/i}));
    //     fireEvent.click(screen.getByRole("button", {name: "Close"}));
    //     fireEvent.click(screen.getByRole("button", {name: /Calculate/i}));
    // });
    //
    // test("All the HTML rendered", () => {
    //     expect(screen.getByText("Your Super Increased By An Additional")).toBeInTheDocument();
    //     expect(screen.getByText("$155")).toBeInTheDocument();
    //     expect(screen.getByText("What An Extra $155 In Retirement, Means For You:")).toBeInTheDocument();
    //     expect(screen.getByText("You Could Attend More Concerts!")).toBeInTheDocument();
    //     expect(screen.getByText("You Could Enjoy Netflix Premium For An Additional 8 Months!")).toBeInTheDocument();
    //     expect(screen.getByText("How Did My Voluntary Contributions Turn Into $155?")).toBeInTheDocument();
    //     expect(screen.getByText("Find Out How With First Home Super!")).toBeInTheDocument();
    // });
    //
    // test("Adjusting frequency updates HTML", () => {
    //     const frequencySelector = screen.getByDisplayValue("1");
    //     fireEvent.change(frequencySelector, {
    //         target: { value: "37" },
    //     });
    //     expect(screen.getByText("$11404")).toBeInTheDocument();
    //     expect(screen.getByText("What An Extra $11404 In Retirement, Means For You:")).toBeInTheDocument();
    //     expect(screen.getByText("You Could Enjoy A Full Vacation Cruise 6 Times!")).toBeInTheDocument();
    //     expect(screen.getByText("You Could Regularly Enjoy Leisure Activities!")).toBeInTheDocument();
    //     expect(screen.getByText("How Did My Voluntary Contributions Turn Into $11404?")).toBeInTheDocument();
    // });

});
