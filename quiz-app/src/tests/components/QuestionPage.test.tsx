import React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import QuestionPage from "../../components/QuestionPage";
import store from "../../redux/store";

describe("Test QuestionPage component", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    jest.useFakeTimers();
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <Provider store={store}>
            <QuestionPage />
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

  it("Should render QuestionPage component initialy", () => {
    expect(screen.getByText("Finish")).toBeInTheDocument();
  });
});
