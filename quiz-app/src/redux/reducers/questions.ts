import data from "../../appData";
import { Question } from "../../types";

// type Action = {
//   type: string;
//   payload: {
//     id: string;
//     answer: string;
//     language?: string;
//   };
// };

const initialState: Question[] = [];

const questions = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_ENGLISH_LANGUAGE":
      return data["English"];
    case "SET_HINDI_LANGUAGE":
      return data["Hindi"];
    case "SET_MULTIPLE_ANSWER":
      return state.map((question) => {
        if (question.id === action.payload.id) {
          return {
            ...question,
            isAnswered: true,
            answer: action.payload.answer,
          };
        }
        return question;
      });
    case "SET_TRUE_FALSE_ANSWER":
      return state.map((question) => {
        if (question.id === action.payload.id) {
          return {
            ...question,
            isAnswered: true,
            answer: action.payload.answer,
          };
        }
        return question;
      });
    case "SET_MULTI_SELECT_ANSWER":
      return state.map((question) => {
        if (
          question.id === action.payload.id &&
          typeof question.answer === "object"
        ) {
          return {
            ...question,
            isAnswered: true,
            answer: question.answer?.concat(action.payload.answer),
          };
        }
        return question;
      });
    case "REMOVE_MULTI_SELECT_ANSWER":
      return state.map((question) => {
        if (
          question.id === action.payload.id &&
          typeof question.answer === "object"
        ) {
          return {
            ...question,
            answer: question.answer?.filter(
              (item) => item !== action.payload.answer
            ),
          };
        }
        return question;
      });
    default:
      return state;
  }
};

export default questions;
