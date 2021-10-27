import React, { useState } from "react";

type Props = {
  asteroidId: string;
  setAsteroidId: React.Dispatch<React.SetStateAction<string>>;
  onFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onRandomClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Form = (props: Props) => {
  const { asteroidId, setAsteroidId, onFormSubmit, onRandomClick } = props;
  const [randomClicked, setRandomClicked] = useState(false);

  return (
    <form className="w-50" onSubmit={(e) => onFormSubmit(e)}>
      <label htmlFor="id">Asteroid ID</label>
      <input
        className="form-controls mb-3 w-100"
        type="number"
        id="id"
        min={0}
        autoFocus
        required
        placeholder="Enter Asteroid ID"
        value={asteroidId}
        onChange={(e) => setAsteroidId(e.target.value)}
      />
      <div className="d-flex">
        <button type="submit" className="btn btn-primary w-50 me-3">
          Submit
        </button>
        <button
          className="btn btn-danger w-50 ms-3"
          disabled={randomClicked}
          onClick={(e) => {
            onRandomClick(e);
            setRandomClicked(true);
          }}
        >
          Random Asteroid
        </button>
      </div>
    </form>
  );
};

export default Form;
