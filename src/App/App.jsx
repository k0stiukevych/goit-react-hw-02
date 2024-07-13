import { useState, useEffect  } from "react";

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

  useEffect(() => {
    const savedValues = localStorage.getItem("feedbackValues");
    if (savedValues) {
      setValues(JSON.parse(savedValues));
    }
  }, []);

  // Збереження стану в локальне сховище при кожній зміні
  useEffect(() => {
    localStorage.setItem("feedbackValues", JSON.stringify(values));
  }, [values]);

  const updateFeedback = (feedbackType) => {
    setValues((prevValues) => ({
      ...prevValues,
      [feedbackType]: prevValues[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = values.good + values.neutral + values.bad;
  const positiveFeedback = totalFeedback
    ? Math.round((values.good / totalFeedback) * 100)
    : 0;

  return (
    <div>
      <Description />
      <Options
        propFeedback1={() => updateFeedback("good")}
        propFeedback2={() => updateFeedback("neutral")}
        propFeedback3={() => updateFeedback("bad")}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      <Feedback
        propFeedback1={values.good}
        propFeedback2={values.neutral}
        propFeedback3={values.bad}
        totalFeedback={totalFeedback}
        positiveFeedback={positiveFeedback}
      />
      <Notification totalFeedback={totalFeedback} />
    </div>
  );
}

export default App;
