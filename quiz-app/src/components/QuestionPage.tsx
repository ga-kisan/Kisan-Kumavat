import { useEffect } from "react";
import { Container, Box, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import QuestionMultiple from "./QuestionMultiple";
import QuestionTrueFalse from "./QuestionTrueFalse";
import QuestionMatch from "./QuestionMatch";
import QuestionMultiSelect from "./QuestionMultiSelect";
import { setTestFinished } from "../redux/actions/userData";
import { setCurrentPage } from "../redux/actions/currentPage";
import { GlobalState, Question, MultiSelectQuestion } from "../types";

const QuestionPage = () => {
  const questions = useSelector((state: GlobalState) => state.questions);
  const currentPage = useSelector((state: GlobalState) => state.currentPage);
  const userData = useSelector((state: GlobalState) => state.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      userData.name === "" &&
      userData.language === "" &&
      userData.gender === ""
    ) {
      alert("Please fill user form first!");
      navigate("/");
    }
    if (userData.isTestFinished) {
      alert("You have completed the Test!");
      navigate("/result");
    }
  }, []);

  const handleFinish = () => {
    const bool = window.confirm("Do yoou want to finish the Test?");
    if (bool) {
      dispatch(setTestFinished(true));
      navigate("/result");
    }
  };

  const getQuestionComponent = (question: Question) => {
    switch (question.type) {
      case "multiple":
        return <QuestionMultiple key={question.id} question={question} />;
      case "truefalse":
        return <QuestionTrueFalse key={question.id} question={question} />;
      case "match":
        return <QuestionMatch key={question.id} question={question} />;
      case "multiselect":
        return (
          <QuestionMultiSelect
            key={question.id}
            question={question as MultiSelectQuestion}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Container sx={{ paddingTop: 8, width: 800 }}>
      <Container
        sx={{ display: "flex", justifyContent: "center", paddingBottom: 3 }}
      >
        {questions.map((question, index) => {
          return (
            <Box
              key={question.id}
              sx={{
                bgcolor: question.isAnswered ? "red" : "gray",
                padding: "5px 10px",
                marginRight: 1,
                color: "white",
                borderRadius: "50px",
              }}
              component="span"
              onClick={() => dispatch(setCurrentPage(index + 1))}
            >
              {index + 1}
            </Box>
          );
        })}
      </Container>
      <Container sx={{ height: "400px" }}>
        {questions.length > 0 &&
          getQuestionComponent(questions[currentPage - 1])}
      </Container>
      <Container sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Button
            disabled={currentPage === 1}
            onClick={() => dispatch(setCurrentPage(currentPage - 1))}
            variant="contained"
          >
            Previous
          </Button>
          <Button
            sx={{ marginLeft: 2 }}
            disabled={currentPage === questions.length}
            onClick={() => dispatch(setCurrentPage(currentPage + 1))}
            variant="contained"
          >
            Next
          </Button>
        </Box>
        <Button onClick={handleFinish} variant="contained">
          Finish
        </Button>
      </Container>
    </Container>
  );
};

export default QuestionPage;
