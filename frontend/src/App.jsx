import { useState } from 'react';
import Header from './components/Header.jsx';
import SuggestedPrompts from './components/SuggestedPrompts.jsx';
import ChatWindow from './components/ChatWindow.jsx';
import { askOperationsAssistant } from './services/api.js';

const starterMessages = [
  {
    id: 'welcome',
    role: 'assistant',
    content:
      'Welcome to the Enterprise AI Operations Assistant. Ask questions about enterprise documentation, AWS operational logs, or Snowflake incident analytics. I will automatically route your request to the appropriate enterprise data source.',
    citations: []
  }
];

export default function App() {
  const [messages, setMessages] = useState(starterMessages);
  const [loading, setLoading] = useState(false);

  async function handleAsk(question) {
    const userMessage = {
      id: crypto.randomUUID(),
      role: 'user',
      content: question,
      citations: []
    };

    setMessages((current) => [...current, userMessage]);
    setLoading(true);

    try {
      const response = await askOperationsAssistant(question);

      const assistantMessage = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: response.answer || 'No answer returned.',
        citations: response.citations || []
      };

      setMessages((current) => [...current, assistantMessage]);
    } catch (error) {
      const errorMessage = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content:
          'I could not reach the AI service. Please check API Gateway, Lambda, CORS settings, or backend logs.',
        citations: []
      };

      setMessages((current) => [...current, errorMessage]);
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="app">
      <Header />

      <section className="hero">
        <div>
          <p className="eyebrow">Enterprise GenAI Support</p>

          <h2>
            Enterprise AI assistant for operational knowledge,
            AWS troubleshooting, and incident analytics.
          </h2>

          <p>
            Ask natural-language questions across enterprise documentation,
            AWS operational logs, and Snowflake incident data. Receive grounded
	    answers, operational analysis, and actionable insights.
          </p>
        </div>

        <div className="architecture-card">
          <h3>Solution Architecture</h3>

          <div className="arch-item">
            <span>⚛️</span>
            <span>Amazon Bedrock Knowledge Base</span>
          </div>

          <div className="arch-item">
            <span>🌐</span>
            <span>Enterprise AI Orchestrator</span>
          </div>

          <div className="arch-item">
            <span>⚡</span>
            <span>Amazon CloudWatch Logs Insights</span>
          </div>

          <div className="arch-item">
            <span>🧠</span>
            <span>Snowflake Incident Analytics</span>
          </div>

          <div className="arch-item">
            <span>📚</span>
            <span>AWS Workload Identity Federation</span>
          </div>

          <div className="arch-item">
            <span>📊</span>
            <span>Amazon API Gateway</span>
          </div>

          <div className="arch-item">
            <span>🗂️</span>
            <span>AWS Lambda</span>
          </div>

          <div className="arch-item">
            <span>🤖</span>
            <span>Amazon Nova Lite</span>
          </div>
        </div>
      </section>

      <SuggestedPrompts onPromptClick={handleAsk} disabled={loading} />

      <ChatWindow messages={messages} loading={loading} onAsk={handleAsk} />
    </main>
  );
}