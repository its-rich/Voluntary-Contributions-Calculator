import App from '../App.js';
import { render, screen } from '@testing-library/react';

// These tests are meant to be black box - testing from the user side

// Describe allows you to have a heading for your test suite
// it allows you to write what a specific test should achieve
// expect is a global Jest assertion function
describe("IntroScreen Test Suite", () => {

    // beforeEach(() => {
    //     jest.useFakeTimers();
    // })
    //
    // afterEach(() => {
    //     jest.useRealTimers()
    // })

    // This async-await needs to be first for it to work?
    test("Check the IntroScreen only lasts for 4 seconds",  async () => {
        render(<App />);
        expect(screen.getByAltText("")).toHaveClass("awarelogo");
        expect(await screen.findByText("Learn Why You Should Make Voluntary Contributions Today", {}, { timeout: 4000 })).toBeInTheDocument();
    });

    // it("Check the IntroScreen only lasts for 4 seconds",  () => {
    //     act(() => {
    //         render(<App />);
    //     })
    //     act(() => {
    //         jest.advanceTimersByTime(5000);
    //          expect(screen.getByText("Learn Why You Should Make Voluntary Contributions Today")).toBeInTheDocument()
    //     })
    //
    //     // await waitFor(() => {
    //     //     // screen.debug();
    //     //     expect(screen.getByText("Learn Why You Should Make Voluntary Contributions Today")).toBeInTheDocument()
    //     // }, { timeout: 4000 })
    // });


});
