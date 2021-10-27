import { useSelector } from "react-redux";

type Props = {
  match: any;
};

type State = {
  name: string;
  nasa_jpl_url: string;
  is_potentially_hazardous_asteroid: boolean;
};

const Asteroid = (props: Props) => {
  const state: any = useSelector((state) => state);

  return (
    <div className="container">
      <div className="container p-3 mt-5">
        <h1>Asteroid Info</h1>
        <h3 className="text-primary">Name: {state.name}</h3>
        <h5>JPL url: {state.nasa_jpl_url}</h5>
        <h5>
          Is Potentially Hazardous:{" "}
          {state.is_potentially_hazardous ? "Yes" : "No"}
        </h5>
      </div>
    </div>
  );
};

export default Asteroid;
