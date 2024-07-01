import { useState } from "react";

import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

import "./App.css";

function App() {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedbackGood = (feedbackType) => {
    setValues({
      ...values,
      good: values.good + 1,
    });
  };

  const updateFeedbackNeutral = (feedbackType) => {
    setValues({
      ...values,
      neutral: values.neutral + 1,
    });
  };

  const updateFeedbackBad = (feedbackType) => {
    setValues({
      ...values,
      bad: values.bad + 1,
    });
  };

  const resetFeedback = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = values.good + values.neutral + values.bad;

  return (
    <div>
      <Description />
      <Options
        propFeedback1={updateFeedbackGood}
        propFeedback2={updateFeedbackNeutral}
        propFeedback3={updateFeedbackBad}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />

      <Feedback
        propFeedback1={values.good}
        propFeedback2={values.neutral}
        propFeedback3={values.bad}
        totalFeedback={totalFeedback}
      />

      <Notification totalFeedback={totalFeedback} />
    </div>
  );
}

export default App;
