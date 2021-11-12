import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UserForm from "../components/UserForm";
import QuestionPage from "../components/QuestionPage";
import Result from "../components/Result";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/questions" element={<QuestionPage />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
