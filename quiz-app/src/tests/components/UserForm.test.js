import { render, screen } from '@testing-library/react'
import * as reactRedux from 'react-redux'
import * as languageActions from "../../redux/actions/questions"
import * as userDataActions from "../../redux/actions/userData"

import UserForm from '../../components/UserForm'

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}))

describe("Test UserForm component", () => {
  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => { });
    useSelectorMock.mockImplementation(selector => selector(mockStore));
  })
  afterEach(() => {
    useDispatchMock.mockClear();
    useSelectorMock.mockClear();
  })

  const useSelectorMock = reactRedux.useSelector;
  const useDispatchMock = reactRedux.useDispatch;

  const setEnglishLanguage = jest.spyOn(languageActions, 'setEnglishLanguage');
  const setHindiLanguage = jest.spyOn(languageActions, 'setHindiLanguage');

  const mockStore = {
    userData: {
      name: "kisan",
      gender: "Male",
      language: "English"
    }
  };

  it("Dispatches Actions", () => {
    render(<UserForm />)
    // expect(setEnglishLanguage).toHaveBeenCalled()
    expect(setHindiLanguage).toHaveBeenCalled()
  })

  // it('Checks user details', () => {
  //   render(<UserForm />)
  //   expect(screen.getByText("Submit")).toBeInTheDocument()
  // })
})
