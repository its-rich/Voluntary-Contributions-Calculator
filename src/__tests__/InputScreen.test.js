import InputScreen from '../pages/InputScreen.js';
import { render, screen, fireEvent } from '@testing-library/react';

describe("StartScreen Test Suite", () => {

    beforeEach(() => {
        render(<InputScreen pageNum={2}/>);
    })

    test("Age selector works", () => {
        expect(screen.getByText("Please Select Your Age")).toBeInTheDocument();
        const ageSelector = screen.getByDisplayValue("18");
        expect(ageSelector).toHaveLength(47);

        expect(ageSelector[0].selected).toBeTruthy();
        expect(ageSelector[1].selected).toBeFalsy();

        fireEvent.change(ageSelector, {
            target: { value: "64" },
        });
        expect(ageSelector[0].selected).toBeFalsy();
        expect(ageSelector[46].selected).toBeTruthy();
    });

    test("Salary input works", () => {
        expect(screen.getByText("Please Enter How Much You Earn In 2 Weeks (Average)")).toBeInTheDocument();
        const salaryInput = screen.getByDisplayValue("0");
        expect(salaryInput).toHaveValue(0);

        // Alternatively import userEvent
        // https://github.com/testing-library/user-event
        fireEvent.change(salaryInput, {
            target: { value: "200" },
        });
        expect(salaryInput).toHaveValue(200);

        expect(screen.queryByText("If you earn nothing, just put $0")).not.toBeInTheDocument();
        fireEvent.change(salaryInput, {
            target: { value: "-1" },
        });
        expect(screen.getByText("If you earn nothing, just put $0")).toBeInTheDocument();

        // Check government co-contribution modal is displayed
        expect(screen.queryByText("Did You Know?")).not.toBeInTheDocument();
        fireEvent.click(screen.getByRole("button", {name: /No/i}));
        expect(screen.getByText("Did You Know?")).toBeInTheDocument();
        fireEvent.click(screen.getByRole("button", {name: "Close"}));

        expect(screen.getByRole("button", {name: /Calculate/i})).toBeDisabled();
    });

    test("Voluntary contribution selector works", () => {
        expect(screen.getByText("Please Select What You Will Start Doing Today")).toBeInTheDocument();
        const vcSelector = screen.getByDisplayValue("Take shorter showers");
        expect(vcSelector).toHaveLength(10);
        expect(vcSelector).toHaveValue("100");

        fireEvent.change(vcSelector, {
            target: { value: "400" },
        });
        expect(vcSelector).toHaveDisplayValue("Stop eating confectionaries");

        fireEvent.change(vcSelector, {
            target: { value: "1000" },
        });
        expect(vcSelector).toHaveDisplayValue("Eat out out less");
    });

    test("Switching between yearly or cumulative calculations works", () => {
        expect(screen.getByText("Would You Like To Adjust Your Contributions For Each Year?")).toBeInTheDocument();

        const yesButton = screen.getByRole("button", {name: /Yes/i});
        const noButton = screen.getByRole("button", {name: /No/i});
        expect(yesButton).toHaveTextContent("Yescheck_circle");
        fireEvent.click(yesButton);
        expect(screen.getByText(/Your Super Could Increase By, Until Retirement/i)).toBeInTheDocument();

        expect(noButton).toHaveTextContent("Noclear");
        fireEvent.click(noButton);
        expect(screen.getByText(/From Just Voluntary Contributions Over 1 Years/i)).toBeInTheDocument();
    });

    test("Adjusting frequency of voluntary contributions works", () => {
        const noButton = screen.getByRole("button", {name: /No/i});
        fireEvent.click(noButton);
        fireEvent.click(screen.getByRole("button", {name: "Close"}));
        expect(screen.getByText("Please Select How Long You Would Like To Reinvest Your Savings For")).toBeInTheDocument();
        const frequencySelector = screen.getByDisplayValue("1");
        expect(frequencySelector).toHaveLength(47);
        expect(frequencySelector).toHaveValue("1");
        expect(screen.getByText(/From Just Voluntary Contributions Over 1 Years/i)).toBeInTheDocument();

        fireEvent.change(frequencySelector, {
            target: { value: "47" },
        });

        expect(frequencySelector).toHaveDisplayValue("47");
        expect(screen.getByText(/From Just Voluntary Contributions Over 47 Years/i)).toBeInTheDocument();

        const ageSelector = screen.getByDisplayValue("18");
        fireEvent.change(ageSelector, {
            target: { value: "30" },
        });
        expect(frequencySelector).toHaveLength(35);
        expect(frequencySelector).toHaveValue("1");

    });

    test(("Info modal works"), () => {
        expect(screen.queryByRole("dialog", {class: "modal"})).not.toBeInTheDocument();
        fireEvent.click(screen.getByText("info"));
        expect(screen.getByRole("dialog", {class: "modal"})).toBeInTheDocument();
        fireEvent.click(screen.getByRole("button", {name: "Close"}));
        expect(screen.queryByRole("dialog", {class: "modal"})).not.toBeInTheDocument();
    });

});
