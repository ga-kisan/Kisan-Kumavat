import {
  setEnglishLanguage,
  setHindiLanguage,
  setMultipleAnswer,
  setTrueFalseAnswer,
  setMultiSelectAnswer,
  removeMultiSelectAnswer
} from '../../redux/actions/questions'

test("Should setup setEnglishLanguage action object", () => {
  const action = setEnglishLanguage()
  expect(action).toEqual({
    type: "SET_ENGLISH_LANGUAGE"
  })
})

test("Should setup setHindiLanguage action object", () => {
  const action = setHindiLanguage()
  expect(action).toEqual({
    type: "SET_HINDI_LANGUAGE"
  })
})

test("Should setup setMultipleAnswer action object", () => {
  const action = setMultipleAnswer({
    id: '12',
    answer: "abc"
  })
  expect(action).toEqual({
    type: "SET_MULTIPLE_ANSWER",
    payload: {
      id: '12',
      answer: "abc"
    }
  })
})

test("Should setup setTrueFalseAnswer action object", () => {
  const action = setTrueFalseAnswer({
    id: '12',
    answer: "abc"
  })
  expect(action).toEqual({
    type: "SET_TRUE_FALSE_ANSWER",
    payload: {
      id: '12',
      answer: "abc"
    }
  })
})

test("Should setup setMultiSelectAnswer action object", () => {
  const action = setMultiSelectAnswer({
    id: '21',
    answer: "xyz"
  })
  expect(action).toEqual({
    type: "SET_MULTI_SELECT_ANSWER",
    payload: {
      id: '21',
      answer: "xyz"
    }
  })
})

test("Should setup removeMultiSelectAnswer action object", () => {
  const action = removeMultiSelectAnswer({
    id: '7',
    answer: "pqr"
  })
  expect(action).toEqual({
    type: "REMOVE_MULTI_SELECT_ANSWER",
    payload: {
      id: '7',
      answer: "pqr"
    }
  })
})
