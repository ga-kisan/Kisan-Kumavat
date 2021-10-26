type Action = {
  type: string;
  payload: number;
};

type Values = {
  totalPage: number;
  currentPage: number;
};

const initialValues = {
  totalPage: 0,
  currentPage: 0,
};

const pageValues = (values: Values = initialValues, action: Action) => {
  switch (action.type) {
    case "SET_TOTAL_PAGE":
      console.log("page re action", action);
      return { ...values, totalPage: values.totalPage + 1 };
    case "SET_CURRENT_PAGE":
      console.log("page re action", action);
      return {
        ...values,
        currentPage: values.currentPage + action.payload,
      };
    default:
      return values;
  }
};

export default pageValues;
