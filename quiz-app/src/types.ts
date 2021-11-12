export type UserData = {
  name: string;
  gender: string;
  language: string;
  isTestFinished?: boolean;
};

export type MultiSelectQuestion = {
  id: string;
  type: string;
  question: string;
  options: string[];
  correctAnswer: string[];
  answer: string[];
  isAnswered: boolean;
};

export type Question = {
  id: string;
  type: string;
  question: string;
  sideA?: string[];
  sideB?: string[];
  options: string[] | boolean[];
  correctAnswer: string | boolean | string[];
  answer: string | boolean | string[];
  isAnswered: boolean;
};

export type CurrentPage = number;

export type GlobalState = {
  userData: UserData;
  questions: Question[];
  currentPage: CurrentPage;
};
