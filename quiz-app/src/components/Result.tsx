import { useEffect, useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { GlobalState } from "../types";
import AnswerTable from "./AnswerTable";

const Result = () => {
  const userData = useSelector((state: GlobalState) => state.userData);
  const questions = useSelector((state: GlobalState) => state.questions);
  const navigate = useNavigate();
  const [result, setResult] = useState({
    correct: 0,
    incorrect: 0,
    unanswered: 0,
  });

  useEffect(() => {
    if (!userData.isTestFinished) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    questions.forEach((question: any) => {
      if (question.type === "multiselect") {
        if (
          question.answer.every((item: string) =>
            question.correctAnswer.includes(item)
          ) &&
          question.answer.length > 0
        ) {
          setResult((result) => ({ ...result, correct: result.correct + 1 }));
        }
        if (
          !question.answer.every((item: string) =>
            question.correctAnswer.includes(item)
          ) &&
          question.answer.length > 0
        ) {
          setResult((result) => ({
            ...result,
            incorrect: result.incorrect + 1,
          }));
        }
        if (question.answer.length === 0) {
          setResult((result) => ({
            ...result,
            unanswered: result.unanswered + 1,
          }));
        }
      } else {
        if (question.answer === question.correctAnswer) {
          setResult((result) => ({ ...result, correct: result.correct + 1 }));
        }
        if (question.isAnswered && question.answer !== question.correctAnswer) {
          setResult((result) => ({
            ...result,
            incorrect: result.incorrect + 1,
          }));
        }
        if (!question.isAnswered) {
          setResult((result) => ({
            ...result,
            unanswered: result.unanswered + 1,
          }));
        }
      }
    });
  }, [questions]);

  const data = {
    labels: ["Correct Answer", "Incorrect Answer", "Unanswered"],
    datasets: [
      {
        label: "# of Answers",
        data: [result.correct, result.incorrect, result.unanswered],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Container sx={{ padding: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography variant="h4">{userData.name}</Typography>
          <Typography variant="h6">Language: {userData.language}</Typography>
        </Box>
        <Box>
          <Typography variant="h6">
            Correct Answer:{" "}
            {`${Math.round((100 * result.correct) / questions.length)}%`}
          </Typography>
          <Typography variant="h6">
            Incorrect Answer:{" "}
            {`${Math.round((100 * result.incorrect) / questions.length)}%`}
          </Typography>
          <Typography variant="h6">
            Unanswered:{" "}
            {`${Math.round((100 * result.unanswered) / questions.length)}%`}
          </Typography>
        </Box>
      </Box>
      <Container sx={{ width: 500, paddingTop: 5 }}>
        <Pie data={data} />
      </Container>
      <AnswerTable questions={questions} />
    </Container>
  );
};

export default Result;
