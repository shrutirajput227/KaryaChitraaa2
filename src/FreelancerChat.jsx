import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const FreelancerChat = () => {
  const navigate = useNavigate();

  const [clients, setClients] = useState([]);
  const [selectedClientId, setSelectedClientId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");
  const user = token ? JSON.parse(atob(token.split(".")[1])) : null;

  // ✅ Check role before loading page
  useEffect(() => {
    if (!user) {
      alert("Please login first!");
      navigate("/login");
      return;
    }

    if (user.role !== "Freelancer") {
      alert("You are not a freelancer!");
      navigate("/");
      return;
    }

    fetchClients();
  }, []);

  // ✅ Fetch clients
  const fetchClients = async () => {
    try {
      setError("");
      const res = await fetch("http://localhost:5000/api/applications/freelancer/me", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to fetch clients");

      setClients(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Error fetching clients:", err);
      setError(err.message);
      setClients([]);
    }
  };

  // ✅ Fetch messages with selected client
  const fetchMessages = async (clientId) => {
    try {
      setError("");
      const res = await fetch(`http://localhost:5000/api/messages/${clientId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to fetch messages");

      setMessages(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Error fetching messages:", err);
      setError(err.message);
      setMessages([]);
    }
  };

  // ✅ Send message
  const handleSendMessage = async () => {
    if (!newMessage.trim() || !selectedClientId) return;

    try {
      const res = await fetch(`http://localhost:5000/api/messages/${selectedClientId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ text: newMessage }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to send message");

      setMessages([...messages, data]);
      setNewMessage("");
    } catch (err) {
      console.error("Error sending message:", err);
      setError(err.message);
    }
  };

  // ✅ Load messages when client changes
  useEffect(() => {
    if (selectedClientId) fetchMessages(selectedClientId);
  }, [selectedClientId]);

  return (
    <div className="flex h-screen">
      {/* Left panel — Clients list */}
      <div className="w-1/4 border-r p-4 overflow-y-auto">
        <h2 className="font-bold text-xl mb-4">Clients</h2>
        {error && <p className="text-red-500">{error}</p>}

        {clients.length > 0 ? (
          clients.map((client, index) => {
            const uniqueKey = client.clientId || client._id || `client-${index}`;
            return (
              <div
                key={uniqueKey}
                className={`p-2 mb-2 rounded cursor-pointer ${
                  selectedClientId === client.clientId
                    ? "bg-orange-100"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => setSelectedClientId(client.clientId)}
              >
                <p className="font-medium">{client.clientName}</p>
                <p className="text-sm text-gray-500">{client.jobTitle}</p>
              </div>
            );
          })
        ) : (
          <p className="text-gray-500">No clients found</p>
        )}
      </div>

      {/* Right panel — Chat window */}
      <div className="flex-1 flex flex-col p-4">
        {selectedClientId ? (
          <>
            <div className="flex-1 overflow-y-auto border rounded p-2 mb-2">
              {messages.length > 0 ? (
                messages.map((msg, index) => {
                  const uniqueKey =
                    msg._id || msg.id || `${msg.from}-${msg.createdAt}-${index}`;
                  return (
                    <div
                      key={uniqueKey}
                      className={`mb-2 p-2 rounded max-w-md ${
                        msg.from === "freelancer"
                          ? "bg-orange-200 ml-auto"
                          : "bg-gray-200 mr-auto"
                      }`}
                    >
                      <p>{msg.text}</p>
                      <span className="text-xs text-gray-500">
                        {new Date(msg.createdAt).toLocaleTimeString()}
                      </span>
                    </div>
                  );
                })
              ) : (
                <p className="text-gray-500">No messages yet</p>
              )}
            </div>

            {/* Message input box */}
            <div className="flex gap-2">
              <input
                type="text"
                className="flex-1 border rounded px-2 py-1"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <button
                className="bg-orange-500 text-white px-4 py-1 rounded hover:bg-orange-600"
                onClick={handleSendMessage}
              >
                Send
              </button>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500 mt-10">
            Select a client to start chatting
          </p>
        )}
      </div>
    </div>
  );
};


