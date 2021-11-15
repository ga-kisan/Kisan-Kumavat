import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Question } from "../types";

type Props = {
  questions: Question[];
};

const AnswerTable = ({ questions }: Props) => {
  return (
    <Container sx={{ marginTop: 5, border: "1px solid lightgray" }}>
      <Table data-testid="table" sx={{ tableLayout: "fixed" }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Question</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Correct Answer</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Your Answer</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {questions.map((question: any) => (
            <TableRow key={question.id}>
              <TableCell>{question.question}</TableCell>
              <TableCell>
                {question.type === "multiselect"
                  ? question.correctAnswer.join(", ")
                  : question.correctAnswer}
              </TableCell>
              <TableCell>
                {question.type === "multiselect"
                  ? question.answer.join(", ")
                  : question.answer}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default AnswerTable;
