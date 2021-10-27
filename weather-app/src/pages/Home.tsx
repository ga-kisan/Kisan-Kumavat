import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Form from "../components/Form";
import storeCountryData from "../action";

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
    axios
      .get(URL)
      .then((response) => response.status && response.data)
      .then((data) => {
        dispatch(storeCountryData(data));
        history.push("/country");
        console.log(history);
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
