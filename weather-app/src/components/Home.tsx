import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Form from "./Form";
import storeCountryData from "../redux/Action";

const Home = () => {
  const [country, setCountry] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const URL = `https://restcountries.com/v2/name/${country}`;

  const onFormSubmit = (event: any) => {
    event.preventDefault();

    fetchCountryData();
  };

  const fetchCountryData = async () => {
    await axios
      .get(URL)
      .then((response) => response.status && response.data)
      .then((data) => {
        dispatch(storeCountryData(data));
        history.push("/country");
      });
  };

  return (
    <Form
      country={country}
      setCountry={setCountry}
      onFormSubmit={onFormSubmit}
    />
  );
};

export default Home;
