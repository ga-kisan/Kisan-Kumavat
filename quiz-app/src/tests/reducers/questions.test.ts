import questions from "../../redux/reducers/questions";
import data from "../../appData";

test("Should set quiz language to English", () => {
  const state = questions([], {
    type: "SET_ENGLISH_LANGUAGE",
    payload: "English",
  });
  expect(state).toEqual(data.English);
});

test("Should set quiz language to Hindi", () => {
  const state = questions([], {
    type: "SET_HINDI_LANGUAGE",
    payload: "Hindi",
  });
  expect(state).toEqual(data.Hindi);
});

test("Should set Multiple answer", () => {
  const localState = [
    {
      id: "1",
      type: "multiple",
      question: "Which city is Capital of India?",
      options: ["Mumbai", "Delhi", "Noida", "Chennai"],
      correctAnswer: "Delhi",
      answer: "",
      isAnswered: false,
    },
  ];
  const state = questions(localState, {
    type: "SET_MULTIPLE_ANSWER",
    payload: {
      id: "1",
      answer: "Delhi",
    },
  });
  expect(state).toEqual([
    {
      id: "1",
      type: "multiple",
      question: "Which city is Capital of India?",
      options: ["Mumbai", "Delhi", "Noida", "Chennai"],
      correctAnswer: "Delhi",
      answer: "Delhi",
      isAnswered: true,
    },
  ]);
});

test("Should set True False answer", () => {
  const localState = [
    {
      id: "2",
      type: "truefalse",
      question: "Tiger is the national animal of India?",
      options: [true, false],
      correctAnswer: "true",
      answer: "",
      isAnswered: false,
    },
  ];
  const state = questions(localState, {
    type: "SET_TRUE_FALSE_ANSWER",
    payload: {
      id: "2",
      answer: "true",
    },
  });
  expect(state).toEqual([
    {
      id: "2",
      type: "truefalse",
      question: "Tiger is the national animal of India?",
      options: [true, false],
      correctAnswer: "true",
      answer: "true",
      isAnswered: true,
    },
  ]);
});

test("Should set Multi Select answer", () => {
  const localState = [
    {
      id: "7",
      type: "multiselect",
      question: "Select latters which are in 'ORANGE'",
      options: ["U", "E", "O", "Z", "R"],
      correctAnswer: ["R", "E", "O"],
      answer: [],
      isAnswered: false,
    },
  ];
  const state = questions(localState, {
    type: "SET_TRUE_FALSE_ANSWER",
    payload: {
      id: "7",
      answer: ["R", "z"],
    },
  });
  expect(state).toEqual([
    {
      id: "7",
      type: "multiselect",
      question: "Select latters which are in 'ORANGE'",
      options: ["U", "E", "O", "Z", "R"],
      correctAnswer: ["R", "E", "O"],
      answer: ["R", "z"],
      isAnswered: true,
    },
  ]);
});

test("Should remove Multi Select answer", () => {
  const localState = [
    {
      id: "7",
      type: "multiselect",
      question: "Select latters which are in 'ORANGE'",
      options: ["U", "E", "O", "Z", "R"],
      correctAnswer: ["R", "E", "O"],
      answer: ["R"],
      isAnswered: true,
    },
  ];
  const state = questions(localState, {
    type: "REMOVE_MULTI_SELECT_ANSWER",
    payload: {
      id: "7",
      answer: "R",
    },
  });
  expect(state).toEqual([
    {
      id: "7",
      type: "multiselect",
      question: "Select latters which are in 'ORANGE'",
      options: ["U", "E", "O", "Z", "R"],
      correctAnswer: ["R", "E", "O"],
      answer: [],
      isAnswered: true,
    },
  ]);
});
