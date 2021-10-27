const storeCountryData = (data: any) => {
  return {
    type: "STORE_DATA",
    payload: data,
  };
};

export default storeCountryData;
