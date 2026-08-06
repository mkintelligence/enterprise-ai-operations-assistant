export default function Header() {
  return (
    <header className="topbar">
      <div>
        <p className="brand">CloudCorp Technologies</p>

        <h1>Enterprise AI Operations Assistant</h1>
      </div>

      <div className="topbar-actions">
        <span className="pill">📚 Bedrock RAG</span>

        <span className="pill success">
          ☁ CloudWatch Logs
        </span>

        <span className="pill success">
          📊 Snowflake Analytics
        </span>
      </div>
    </header>
  );
}