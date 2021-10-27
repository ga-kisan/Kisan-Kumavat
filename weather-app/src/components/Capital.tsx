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
  const URL = `http://api.weatherstack.com/current?access_key=103ed7c66c700c5ec9225381e28a9a91&query=${props.match.params.capital}`;

  useEffect(() => {
    const fetchWeather = async () => {
      await axios
        .get(URL)
        .then((response) => {
          return response.data;
        })
        .then((data) => {
          setCapitalData(data);
        });
    };
    fetchWeather();
  }, []);

  return (
    <Container>
      <Card sx={{ width: 345 }}>
        <CardMedia
          component="img"
          height="auto"
          image={capitalData.location && capitalData.current.weather_icons[0]}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {capitalData.location && capitalData.location.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Temperature:{" "}
            {capitalData.location && capitalData.current.temperature}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Wind Speed: {capitalData.location && capitalData.current.wind_speed}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Precip: {capitalData.location && capitalData.current.precip}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Capital;
