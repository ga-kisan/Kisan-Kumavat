import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";

const useStyles = makeStyles({
  root: {
    displapy: "flex",
    justifyContent: "center",
  },
  form: {
    margin: "100px 0 0 0",
    display: "flex",
    justifyContent: "center",
  },
  input: {
    margin: "0 10px 0 0",
    width: "50%",
  },
  button: {
    marginLeft: "10px",
  },
});

interface Props {
  country: string;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  onFormSubmit: (event: any) => void;
}

const Form = ({ country, setCountry, onFormSubmit }: Props) => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <form className={classes.form} onSubmit={(e) => onFormSubmit(e)}>
        <TextField
          className={classes.input}
          value={country}
          variant="outlined"
          label="Enter Country"
          onChange={(e) => setCountry(e.target.value)}
        />
        <Button
          className={classes.button}
          variant="contained"
          type="submit"
          disabled={country ? false : true}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Form;
