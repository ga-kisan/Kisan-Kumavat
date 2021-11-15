import React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/dom";

import store from "../../redux/store";
import QuestionTrueFalse from "../../components/QuestionTrueFalse";

const question = {
  id: "2",
  type: "truefalse",
  question: "Tiger is the national animal of India?",
  options: [true, false],
  correctAnswer: "true",
  answer: "",
  isAnswered: false,
};

describe("Test QuestionMatch component", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    jest.useFakeTimers();
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <Provider store={store}>
            <QuestionTrueFalse question={question} />
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

  it("Should render QuestionMatch component initialy", () => {
    expect(
      screen.getByText("Q.1 Tiger is the national animal of India?")
    ).toBeInTheDocument();
  });
});
