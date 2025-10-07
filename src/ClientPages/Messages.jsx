import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Messages() {
  const { jobId } = useParams();
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");

  const fetchApplicants = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(`http://localhost:5000/api/applications/${jobId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Failed to fetch");
      }

      const data = await res.json();
      setApplications(data || []);
    } catch (err) {
      console.error("FETCH ERROR:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleStatus = async (appId, status) => {
    try {
      const res = await fetch(`http://localhost:5000/api/applications/${appId}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ status }),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Failed to update status");
      }

      fetchApplicants(); // refresh list
    } catch (err) {
      console.error("STATUS ERROR:", err);
      setError(err.message);
    }
  };

  useEffect(() => { fetchApplicants(); }, [jobId]);

  if (loading) return <p className="text-center mt-10">Loading applicants...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  if (!applications.length) return <p className="text-center mt-10">No applicants yet.</p>;

  return (
    <div className="max-w-4xl mx-auto pt-10 p-6 mt-10">
      <h1 className="text-3xl font-bold text-center text-orange-600 mb-6">Applicants</h1>
      <div className="space-y-4">
        {applications.map(app => (
          <div key={app._id} className="p-4 border rounded shadow bg-white">
            <h2 className="text-xl font-semibold text-orange-600">
              {app.freelancer?.name || "Unknown"}
            </h2>
            <p className="text-gray-700 mb-2">Cover Letter: {app.coverLetter}</p>
            <p className="text-gray-500 mb-2">Email: {app.freelancer?.email || "N/A"}</p>
            <p className="text-sm mb-2">
              Status:{" "}
              <span
                className={`font-semibold capitalize ${
                  app.status === "accepted"
                    ? "text-green-600"
                    : app.status === "rejected"
                    ? "text-red-600"
                    : "text-yellow-600"
                }`}
              >
                {app.status}
              </span>
            </p>
            {app.status === "pending" && (
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => handleStatus(app._id, "accepted")}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleStatus(app._id, "rejected")}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Reject
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
