import React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/dom";

import store from "../../redux/store";
import QuestionMatch from "../../components/QuestionMatch";

const question = {
  id: "5",
  type: "match",
  question: "Match the following",
  sideA: ["A. Google", "B. Microsoft", "C. Meta", "D. Apple"],
  sideB: [
    "1. Tim cook",
    "2. Mark Zuckerberg",
    "3. Sundar Pichai",
    "4. Satya Nadella",
  ],
  options: ["A-1, B-4, C-2, D-3", "A-4, B-2, C-1, D-3", "A-3, B-4, C-2, D-1"],
  correctAnswer: "A-3, B-4, C-2, D-1",
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
            <QuestionMatch question={question} />
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
    expect(screen.getByText("Q.1 Match the following")).toBeInTheDocument();
  });
});
