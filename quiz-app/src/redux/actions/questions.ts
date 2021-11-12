type Data = {
  id: string;
  answer: string | boolean;
};

export const setEnglishLanguage = () => ({
  type: "SET_ENGLISH_LANGUAGE",
});

export const setHindiLanguage = () => ({
  type: "SET_HINDI_LANGUAGE",
});

export const setMultipleAnswer = (data: Data) => ({
  type: "SET_MULTIPLE_ANSWER",
  payload: data,
});

export const setTrueFalseAnswer = (data: Data) => ({
  type: "SET_TRUE_FALSE_ANSWER",
  payload: data,
});

export const setMultiSelectAnswer = (data: Data) => ({
  type: "SET_MULTI_SELECT_ANSWER",
  payload: data,
});

export const removeMultiSelectAnswer = (data: Data) => ({
  type: "REMOVE_MULTI_SELECT_ANSWER",
  payload: data,
});

// export {};
