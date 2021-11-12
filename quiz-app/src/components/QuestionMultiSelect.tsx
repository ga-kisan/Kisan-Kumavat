import {
  Container,
  Typography,
  FormControl,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import {
  setMultiSelectAnswer,
  removeMultiSelectAnswer,
} from "../redux/actions/questions";
import { MultiSelectQuestion, GlobalState } from "../types";

type Props = {
  question: MultiSelectQuestion;
};

const QuestionMultiSelect = ({ question }: Props) => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state: GlobalState) => state.currentPage);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    if (e.target.checked) {
      dispatch(
        setMultiSelectAnswer({
          id: id,
          answer: e.target.value,
        })
      );
    } else {
      dispatch(
        removeMultiSelectAnswer({
          id: id,
          answer: e.target.value,
        })
      );
    }
  };

  return (
    <Container sx={{ padding: 3 }}>
      <Typography variant="h4">{`Q.${currentPage} ${question.question}`}</Typography>
      <FormControl>
        <FormGroup>
          {question.options.map((option) => {
            return (
              <FormControlLabel
                key={option}
                control={
                  <Checkbox
                    value={option}
                    checked={question.answer.includes(option.toString())}
                    onChange={(e) => handleChange(e, question.id)}
                  />
                }
                label={option}
              />
            );
          })}
        </FormGroup>
      </FormControl>
    </Container>
  );
};

export default QuestionMultiSelect;
