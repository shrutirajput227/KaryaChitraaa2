import React from "react";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Solutions",
    location: "Remote",
    type: "Full-time",
    description: "Build responsive web applications using React.js.",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "Creative Studio",
    location: "New York, USA",
    type: "Contract",
    description: "Design user-friendly interfaces for web and mobile apps.",
  },
  {
    id: 3,
    title: "Backend Developer",
    company: "Cloud Apps Inc.",
    location: "Remote",
    type: "Part-time",
    description: "Develop APIs and server-side logic using Node.js.",
  },
];

export const Jobs = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 px-4 sm:px-6 md:px-12 lg:px-20 py-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
          Available Jobs
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
                {job.title}
              </h2>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Company:</span> {job.company}
              </p>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Location:</span> {job.location}
              </p>
              <p className="text-gray-600 mb-3">
                <span className="font-medium">Type:</span> {job.type}
              </p>
              <p className="text-gray-700 mb-4">{job.description}</p>
              <button className="w-full px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition">
                <a href="/freelancerChat" className="text-black font-medium hover:underline">
                  Connect with Us
                </a>
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};