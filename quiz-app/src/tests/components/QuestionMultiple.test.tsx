import React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/dom";

import store from "../../redux/store";
import QuestionMultiple from "../../components/QuestionMultiple";

const question = {
  id: "1",
  type: "multiple",
  question: "Which city is Capital of India?",
  options: ["Mumbai", "Delhi", "Noida", "Chennai"],
  correctAnswer: "Delhi",
  answer: "",
  isAnswered: false,
};

describe("Test QuestionMultiple component", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    jest.useFakeTimers();
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <Provider store={store}>
            <QuestionMultiple question={question} />
          </Provider>
        </BrowserRouter>
      </React.StrictMode>,
      container
    );
    jest.advanceTimersByTime(1000);
  });
  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("Should render QuestionMultiple component initialy", () => {
    expect(
      screen.getByText("Q.1 Which city is Capital of India?")
    ).toBeInTheDocument();
  });
});
