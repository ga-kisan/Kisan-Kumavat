import AnswerTable from "../../components/AnswerTable";
import * as ReactDOM from "react-dom";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";
import React from "react";

const questions = [
  {
    id: "0",
    type: "multiple",
    question: "Mother Teresa received Nobel Peace Prize in the year",
    options: ["1976", "1979", "1978", "1980"],
    correctAnswer: "1979",
    answer: "1978",
    isAnswered: true,
  },
  {
    id: "1",
    type: "multiple",
    question: "Which city is Capital of India?",
    options: ["Mumbai", "Delhi", "Noida", "Chennai"],
    correctAnswer: "Delhi",
    answer: "Noida",
    isAnswered: true,
  },
];

describe("AnswerTable test", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    jest.useFakeTimers();
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <Provider store={store}>
            <AnswerTable questions={questions} />
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
  test("Should render AnswerTable component", () => {
    const table = container.querySelector("table");
    expect(table).toBeInTheDocument();
  });
  test("Should render AnswerTable component", () => {
    const table = container.querySelector("table");
    expect(table).toContainHTML(
      "Mother Teresa received Nobel Peace Prize in the year"
    );
  });
  test("Should render AnswerTable component", () => {
    const table = container.querySelector("table");
    expect(table).toContainHTML("Which city is Capital of India?");
  });
});
