const prompts = [
  '📚 What is the P1 incident process?',
  '☁ Show recent Lambda errors',
  '📊 Which applications have the most incidents?',
  '📊 What are the top incident root causes?'
];

export default function SuggestedPrompts({
  onPromptClick,
  disabled
}) {
  return (
    <section className="prompt-panel">
      <h2>How can I help today?</h2>

      <p>
        Ask questions across enterprise documentation,
        AWS operational logs, and Snowflake incident
        analytics.
      </p>

      <div className="prompt-grid">
        {prompts.map((prompt) => (
          <button
            key={prompt}
            className="prompt-card"
            onClick={() =>
              onPromptClick(
                prompt.replace(/^[^\w]+\s*/, "")
              )
            }
            disabled={disabled}
          >
            {prompt}
          </button>
        ))}
      </div>
    </section>
  );
}