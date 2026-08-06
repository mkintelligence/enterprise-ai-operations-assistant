import { useEffect, useRef } from 'react';

import Message from './Message.jsx';
import TypingIndicator from './TypingIndicator.jsx';
import ChatInput from './ChatInput.jsx';

export default function ChatWindow({
  messages,
  loading,
  onAsk
}) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  }, [messages, loading]);

  return (
    <section className="chat-shell">
      <div className="messages">
        {messages.map((message) => (
          <Message
            key={message.id}
            message={message}
          />
        ))}

        {loading && (
          <TypingIndicator
            text="🧠 Analyzing your request..."
          />
        )}

        <div ref={bottomRef} />
      </div>

      <ChatInput
        onSubmit={onAsk}
        disabled={loading}
      />
    </section>
  );
}