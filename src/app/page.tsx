"use client";
import { useEffect, useRef, useState } from "react";

export default function Chat() {
  const [msg, setMsg] = useState("");
  const [log, setLog] = useState<string[]>([]);
  const wsRef = useRef<WebSocket | null>(null);

  // open socket once
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:4000/chat");
    wsRef.current = ws;

    ws.onopen = () => addLog("🔗 connected");
    ws.onmessage = (e) => addLog(`🟢 ${e.data}`);
    ws.onerror = (e) => addLog("⚠️ error");
    ws.onclose = () => addLog("❌ closed");

    // clean up on unmount
    return () => ws.close();
  }, []);

  const addLog = (txt: string) => setLog((l) => [...l, txt]);

  const send = () => {
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      wsRef.current.send(msg);
      setMsg("");
    } else addLog("🚫 socket not open");
  };

  return (
    <div>
      <h3>Chat</h3>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "8px",
          height: "150px",
          overflow: "auto",
        }}
      >
        {log.map((l, i) => (
          <div key={i}>{l}</div>
        ))}
      </div>
      <input
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="type…"
      />
      <button onClick={send}>Send</button>
    </div>
  );
}
