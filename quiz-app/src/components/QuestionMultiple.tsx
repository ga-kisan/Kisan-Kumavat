import {
  Container,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { setMultipleAnswer } from "../redux/actions/questions";
import { Question, GlobalState } from "../types";

type Props = {
  question: Question;
};

const QuestionMultiple = ({ question }: Props) => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state: GlobalState) => state.currentPage);

  return (
    <Container sx={{ padding: 3 }}>
      <Typography variant="h4">{`Q.${currentPage} ${question.question}`}</Typography>
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

export default QuestionMultiple;
