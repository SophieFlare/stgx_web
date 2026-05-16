import React, { useEffect, useState } from "react";
import Home from "./components/Home";

export default function App() {
  const [serverData, setServerData] = useState(null);
  const API = "https://my-backend.onrender.com";

  const callServer = async () => {
    try {
      const res = await fetch(`${API}/track`);;
      const data = await res.json();

      console.log("SERVER RESPONSE:", data);
      setServerData(data);
    } catch (err) {
      console.error("Failed to connect to backend:", err);
    }
  };

  useEffect(() => {
    callServer();
  }, []);

  return (
    <>
      <Home />

      {/* Optional debug display */}
      {serverData && (
        <div style={{ padding: "10px", fontFamily: "monospace" }}>
          <h3>Server Response</h3>
          <pre>{JSON.stringify(serverData, null, 2)}</pre>
        </div>
      )}
    </>
  );
}