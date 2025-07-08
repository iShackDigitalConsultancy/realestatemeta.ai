import { useState } from "react";

const REM_ICON = "/favicon.ico";

async function query(data: { question: string }) {
  const response = await fetch(
    "https://cloud.flowiseai.com/api/v1/prediction/c97ab6db-681f-4b8d-a887-6f687b6f69af",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  const result = await response.json();
  return result;
}

export default function AIAssistantWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ from: "user" | "ai"; text: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = { from: "user" as const, text: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput("");
    setLoading(true);
    try {
      const res = await query({ question: userMsg.text });
      const aiMsg = { from: "ai" as const, text: res.text || JSON.stringify(res) };
      setMessages((msgs) => [...msgs, aiMsg]);
    } catch (e) {
      setMessages((msgs) => [...msgs, { from: "ai", text: "Sorry, something went wrong." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed z-50 bottom-6 right-6 flex flex-col items-end">
      {open ? (
        <div className="w-80 bg-white shadow-xl rounded-lg border border-gray-200 flex flex-col overflow-hidden">
          <div className="flex items-center gap-2 p-3 bg-blue-50 border-b border-gray-200">
            <img src={REM_ICON} alt="AI Assistant" className="w-8 h-8" />
            <span className="font-semibold text-blue-900">Ask the AI Assistant</span>
            <button
              className="ml-auto text-gray-400 hover:text-gray-600"
              onClick={() => setOpen(false)}
              aria-label="Close AI Assistant"
            >
              ×
            </button>
          </div>
          <div className="flex-1 flex flex-col gap-2 p-3 max-h-72 overflow-y-auto bg-gray-50">
            {messages.length === 0 && (
              <div className="text-gray-400 text-sm text-center">Ask me anything about RealEstateMeta!</div>
            )}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`px-3 py-2 rounded-lg text-sm max-w-[75%] whitespace-pre-line ${
                    msg.from === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-white border border-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="px-3 py-2 rounded-lg bg-white border border-gray-200 text-gray-400 text-sm">
                  Thinking...
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center gap-2 p-3 border-t border-gray-200 bg-white">
            <input
              type="text"
              className="flex-1 border rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Type your question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend();
              }}
              disabled={loading}
            />
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
              onClick={handleSend}
              disabled={loading || !input.trim()}
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          className="flex items-center gap-2 bg-white shadow-lg border border-gray-200 rounded-full px-4 py-2 hover:bg-blue-50 transition"
          onClick={() => setOpen(true)}
          aria-label="Open AI Assistant"
        >
          <img src={REM_ICON} alt="AI Assistant" className="w-7 h-7" />
          <span className="font-medium text-blue-900">Ask AI</span>
        </button>
      )}
    </div>
  );
} 