export default function Feedback({
  propFeedback1,
  propFeedback2,
  propFeedback3,
  totalFeedback,
}) {
  return (
    <>
      {totalFeedback > 0 && (
        <div>
          <p>Good: {propFeedback1}</p>
          <p>Neutral: {propFeedback2}</p>
          <p>Bad: {propFeedback3}</p>
          <p>Total: {totalFeedback}</p>{" "}
        </div>
      )}
    </>
  );
}