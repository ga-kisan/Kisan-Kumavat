import {
  Container,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { setTrueFalseAnswer } from "../redux/actions/questions";
import { Question, GlobalState } from "../types";

type Props = {
  question: Question;
};

const QuestionTrueFalse = ({ question }: Props) => {
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
                value={option.toString()}
                checked={option.toString() === question.answer?.toString()}
                control={
                  <Radio
                    onChange={(e) =>
                      dispatch(
                        setTrueFalseAnswer({
                          id: question.id,
                          answer: e.target.value,
                        })
                      )
                    }
                  />
                }
                label={option.toString()}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </Container>
  );
};

export default QuestionTrueFalse;
