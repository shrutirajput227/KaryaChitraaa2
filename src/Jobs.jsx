import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [selectedJob, setSelectedJob] = useState(null);
  const navigate = useNavigate();

  // Fetch all jobs
  const fetchJobs = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/jobs");
      const data = await res.json();
      setJobs(data);
    } catch (err) {
      console.error("Error fetching jobs:", err);
    }
  };

  // Fetch single job by id
  const fetchJobById = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/jobs/${id}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Job not found");
      setSelectedJob(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // Filter + Search
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesFilter =
      filter === "all" ? true : job.category.toLowerCase() === filter;
    return matchesSearch && matchesFilter;
  });

  // Apply to a job (sends request to backend)
  const handleApply = async (jobId) => {
    try {
      const token = localStorage.getItem("token"); // assuming auth token stored
      const coverLetter = prompt("Write your cover letter:");
      if (!coverLetter) return;

      const res = await fetch(`http://localhost:5000/api/applications/${jobId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ coverLetter }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Failed to apply");
        return;
      }

      alert("Application submitted successfully!");
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  // Navigate to freelancer chat page
  const handleConnect = (jobId) => {
    navigate(`/freelancerChat/${jobId}`);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 mt-20 sm:p-6 lg:p-10 mt-10">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-orange-600">
        {selectedJob ? "Job Details" : "Available Jobs"}
      </h1>

      {selectedJob ? (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-orange-600 mb-2">
            {selectedJob.title}
          </h2>
          <p className="text-gray-700 mb-3">{selectedJob.description}</p>
          <p className="text-gray-600 mb-1">
            <span className="font-medium">Budget:</span> ${selectedJob.budget}
          </p>
          <p className="text-gray-600 mb-1 capitalize">
            <span className="font-medium">Category:</span> {selectedJob.category}
          </p>
          <p className="text-gray-500 mb-1">
            Posted by: {selectedJob.createdBy?.name || "Unknown"}
          </p>
          <button
            onClick={() => setSelectedJob(null)}
            className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
          >
            Back
          </button>
        </div>
      ) : (
        <>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="Search jobs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 border px-3 py-2 rounded-lg"
            />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border px-3 py-2 rounded-lg"
            >
              <option value="all">All</option>
              <option value="design">Design</option>
              <option value="development">Development</option>
              <option value="writing">Writing</option>
              <option value="marketing">Marketing</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div
                  key={job._id}
                  className="p-5 border rounded-lg shadow-md bg-white hover:shadow-lg transition"
                >
                  <h3 className="text-lg font-bold text-orange-600 mb-2">
                    {job.title}
                  </h3>
                  <p className="text-gray-700 mb-2 line-clamp-2">
                    {job.description}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    Budget: ${job.budget}
                  </p>
                  <p className="text-sm text-gray-600 capitalize mb-1">
                    Category: {job.category}
                  </p>
                  <p className="text-sm text-gray-500">
                    Posted by: {job.createdBy?.name || "Unknown"}
                  </p>

                  <div className="mt-3 flex gap-2">
                    <button
                      onClick={() => handleApply(job._id)}
                      className="flex-1 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
                    >
                      Apply
                    </button>
                    <button
                      onClick={() => handleConnect(job._id)}
                      className="flex-1 bg-black text-white py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                      Connect / Chat
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-full">
                No jobs available
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
};
