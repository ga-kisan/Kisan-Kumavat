import React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/dom";

import store from "../../redux/store";
import QuestionMultiSelect from "../../components/QuestionMultiSelect";

const question = {
  id: "7",
  type: "multiselect",
  question: "Select latters which are in 'ORANGE'",
  options: ["U", "E", "O", "Z", "R"],
  correctAnswer: ["R", "E", "O"],
  answer: [],
  isAnswered: false,
};

describe("Test QuestionMultiSelect component", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    jest.useFakeTimers();
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <Provider store={store}>
            <QuestionMultiSelect question={question} />
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

  it("Should render QuestionMultiSelect component initialy", () => {
    expect(
      screen.getByText("Q.1 Select latters which are in 'ORANGE'")
    ).toBeInTheDocument();
  });
});
