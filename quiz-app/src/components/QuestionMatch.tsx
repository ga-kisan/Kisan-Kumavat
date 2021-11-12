import {
  Container,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { setMultipleAnswer } from "../redux/actions/questions";
import { Question, GlobalState } from "../types";

type Props = {
  question: Question;
};

const QuestionMatch = ({ question }: Props) => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state: GlobalState) => state.currentPage);

  return (
    <Container sx={{ padding: 3 }}>
      <Typography variant="h4">{`Q.${currentPage} ${question.question}`}</Typography>
      <Grid container sx={{ paddingY: 1 }}>
        <Grid item md={6}>
          <Typography variant="h6">Side A</Typography>
          {question.sideA?.map((item) => {
            return <Typography key={item}>{item}</Typography>;
          })}
        </Grid>
        <Grid item md={6}>
          <Typography variant="h6">Side B</Typography>
          {question.sideB?.map((item) => {
            return <Typography key={item}>{item}</Typography>;
          })}
        </Grid>
      </Grid>
      <FormControl>
        <RadioGroup name="options">
          {question.options.map((option, index) => {
            return (
              <FormControlLabel
                key={index}
                value={option}
                checked={option === question.answer}
                control={
                  <Radio
                    onChange={(e) =>
                      dispatch(
                        setMultipleAnswer({
                          id: question.id,
                          answer: e.target.value,
                        })
                      )
                    }
                  />
                }
                label={option}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </Container>
  );
};

export default QuestionMatch;
