import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Container from "@mui/material/Container";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const Country = () => {
  const countries: any = useSelector((state) => {
    console.log(state);
    return state;
  });
  const history = useHistory();

  return (
    <Container
      sx={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}
    >
      {countries.map((country: any) => {
        return (
          <Card sx={{ width: 245, marginBottom: 10 }}>
            <CardMedia
              component="img"
              height="140"
              image={country.flag}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {country.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Capital: {country.capital}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Population: {country.population}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lat,Lng: {`${country.latlng[0]}, ${country.latlng[1]}`}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                size="small"
                onClick={() => history.push(`/country/${country.capital}`)}
              >
                Captital Weather
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </Container>
  );
};

export default Country;
