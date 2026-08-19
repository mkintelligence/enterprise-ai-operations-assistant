import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import CitationCard from './CitationCard.jsx';

export default function Message({ message }) {
  const isUser = message.role === 'user';

  const hasCitations =
    !isUser &&
    Array.isArray(message.citations) &&
    message.citations.length > 0;

  return (
    <article
      className={`message ${
        isUser ? 'message-user' : 'message-ai'
      }`}
    >
      <div
        className={`avatar ${
          isUser ? 'avatar-user' : 'avatar-ai'
        }`}
      >
        {isUser ? 'You' : 'AI'}
      </div>

      <div className="message-content">
        <div
          className={`bubble ${
            isUser ? 'bubble-user' : 'bubble-ai'
          }`}
        >
          {isUser ? (
            <p>{message.content}</p>
          ) : (
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
            >
              {message.content}
            </ReactMarkdown>
          )}
        </div>

        {hasCitations && (
          <CitationCard
            citations={message.citations}
          />
        )}
      </div>
    </article>
  );
}