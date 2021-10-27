type Data = {
  name: string;
  nasa_jpl_url: string;
  is_potentially_hazardous_asteroid: boolean;
};

export const addData = (data: Data) => ({
  type: "ADD_DATA",
  payload: data,
});
