import { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";

interface Props {
  match: {
    params: {
      capital: string;
    };
  };
}

const Capital = (props: Props) => {
  const [capitalData, setCapitalData] = useState<any>({});
  console.log(props.match.params.capital);
  const URL = `http://api.weatherstack.com/current?access_key=103ed7c66c700c5ec9225381e28a9a91&query=${props.match.params.capital}`;

  useEffect(() => {
    console.log("Capital effect");
    // fetchWeather();
  }, [props.match.params.capital]);

  const fetchWeather = async () => {
    await axios
      .get(URL)
      .then((response) => {
        console.log(response);

        return response.data;
      })
      .then((data) => {
        console.log(data);
        setCapitalData(data);
      });
  };

  console.log(capitalData);

  return (
    <Container>
      <Card sx={{ width: 245, marginBottom: 10 }}>
        <CardMedia
          component="img"
          height="140"
          // image={capitalData.current.weather_icons[0]}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {capitalData && capitalData.location.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Temperature: {capitalData && capitalData.current.temperature}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Wind Speed: {capitalData && capitalData.current.wind_speed}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Precip: {capitalData && capitalData.current.precip}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Capital;
