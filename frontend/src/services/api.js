const API_URL = 'https://75rizbgvxj.execute-api.us-east-2.amazonaws.com/ask';

export async function askOperationsAssistant(
  question,
  sessionId,
  history = []
) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      question,
      sessionId,
      history
    })
  });

  const data = await response.json();

  const payload =
    typeof data.body === 'string'
      ? JSON.parse(data.body)
      : data;

  if (!response.ok) {
    throw new Error(
      payload.error || 'Request failed'
    );
  }

  return payload;
}