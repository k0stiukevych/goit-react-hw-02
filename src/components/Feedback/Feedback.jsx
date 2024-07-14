export default function Feedback({
  propFeedback1,
  propFeedback2,
  propFeedback3,
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <div>
      <p>Good: {propFeedback1}</p>
      <p>Neutral: {propFeedback2}</p>
      <p>Bad: {propFeedback3}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedback}%</p>
    </div>
  );
}
