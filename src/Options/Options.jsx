import css from "./Options.module.css"

export default function Options({
  propFeedback1,
  propFeedback2,
  propFeedback3,
  resetFeedback,
  totalFeedback,
}) {
  return (
    <div className={css.container}>
      <button onClick={propFeedback1}>Good</button>
      <button onClick={propFeedback2}>Neutral</button>
      <button onClick={propFeedback3}>Bad</button>
      {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
}
