import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";

import { addData } from "../action";
import Form from "../components/Form";

const Home = () => {
  const [asteroidId, setAsteroidId] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const API_KEY = "iWVXXHFF0404ihbpgaLcaUJRZC0JvnhvPpicKyIN";
  const URL = `https://api.nasa.gov/neo/rest/v1/neo/${asteroidId}?api_key=${API_KEY}`;
  const RANDOM_URL = `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${API_KEY}`;

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getAsteroidData();
    setAsteroidId("");
  };

  const onRandomClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    getRandomAsteroidId();
  };

  const getRandomAsteroidId = async () => {
    const response: any = await axios.get(RANDOM_URL);
    const asteroids = response.data.near_earth_objects;
    const id = asteroids[Math.floor(Math.random() * asteroids.length)].id;
    const url = `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${API_KEY}`;
    getAsteroidData(url);
  };

  const getAsteroidData = async (url?: string) => {
    await axios
      .get(url ? url : URL)
      .then((response) => {
        if (response.status === 200) {
          const { data }: any = response;
          const { id, name, nasa_jpl_url, is_potentially_hazardous_asteroid } =
            data;
          dispatch(
            addData({
              name,
              nasa_jpl_url,
              is_potentially_hazardous_asteroid,
            })
          );
          history.push(`/asteroid/${id}`);
        } else {
          alert("Please enter valid ID!");
        }
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="w-100 d-flex justify-content-center mt-5 p-3  ">
      <Form
        asteroidId={asteroidId}
        setAsteroidId={setAsteroidId}
        onFormSubmit={onFormSubmit}
        onRandomClick={onRandomClick}
      />
    </div>
  );
};

export default Home;
