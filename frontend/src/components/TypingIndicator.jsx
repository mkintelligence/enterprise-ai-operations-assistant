export default function TypingIndicator({
  text = "🧠 Analyzing your request..."
}) {
  return (
    <article className="message message-ai">
      <div className="avatar avatar-ai">
        AI
      </div>

      <div className="message-content">
        <div className="bubble bubble-ai">
          <p
            style={{
              marginBottom: "14px",
              fontWeight: 600,
              color: "#173b73"
            }}
          >
            {text}
          </p>

          <div className="typing-bubble">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </article>
  );
}