import React, { useEffect, useState } from "react";

export default function Messages({ jobId }) {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplicants();
  }, []);

  const fetchApplicants = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:5000/api/applications/${jobId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setApplications(data);
    } catch (err) {
      console.error("Error fetching applicants:", err);
    }
  };

  const handleStatus = async (appId, status) => {
    try {
      const token = localStorage.getItem("token");
      await fetch(`http://localhost:5000/api/applications/${appId}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      });
      fetchApplicants(); // Refresh list after update
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10">
      <h1 className="text-3xl font-bold text-center text-orange-600 mb-6">
        Applicants
      </h1>

      <div className="space-y-4">
        {applications.length > 0 ? (
          applications.map((app) => (
            <div
              key={app._id}
              className="p-4 border rounded-lg shadow-md bg-white"
            >
              <h2 className="text-xl font-semibold">
                {app.freelancer?.name || "Unknown Freelancer"}
              </h2>
              <p className="text-gray-700 mb-2">{app.coverLetter}</p>
              <p className="text-gray-500 mb-2">
                Email: {app.freelancer?.email || "N/A"}
              </p>
              <p className="text-sm mb-2">Status: {app.status}</p>
              <div className="flex gap-2">
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
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No applicants yet.</p>
        )}
      </div>
    </div>
  );
}
