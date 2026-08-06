function getSourceDetails(citation) {
  const document = (citation.document || "").toLowerCase();
  const source = (citation.source || "").toLowerCase();

  if (
    document.includes("cloudwatch") ||
    source.includes("cloudwatch")
  ) {
    return {
      icon: "☁",
      title: "CloudWatch Logs",
      subtitle: citation.source
    };
  }

  if (
    document.includes("snowflake") ||
    source.includes("snowflake") ||
    source.includes("enterprise_ai.operations")
  ) {
    return {
      icon: "📊",
      title: "Snowflake Analytics",
      subtitle: citation.source
    };
  }

  if (
    document.includes("nova") ||
    source.includes("ai operational") ||
    source.includes("ai incident")
  ) {
    return {
      icon: "🤖",
      title: "Amazon Nova Lite",
      subtitle: citation.source
    };
  }

  return {
    icon: "📚",
    title: citation.document || "Knowledge Base",
    subtitle: citation.source
  };
}

export default function CitationCard({ citations }) {
  if (!citations || citations.length === 0) {
    return null;
  }

  return (
    <div className="source-panel">
      <div className="source-title">
        Sources
      </div>

      <div className="source-grid">
        {citations.map((citation, index) => {
          const sourceInfo =
            getSourceDetails(citation);

          return (
            <div
              className="source-card"
              key={`${citation.document}-${index}`}
            >
              <div className="source-icon">
                {sourceInfo.icon}
              </div>

              <div>
                <strong>
                  {sourceInfo.title}
                </strong>

                {sourceInfo.subtitle && (
                  <p>
                    {sourceInfo.subtitle}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}