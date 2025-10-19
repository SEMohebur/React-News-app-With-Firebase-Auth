import React from "react";

const Career = () => {
  return (
    <main className="w-11/12 md:w-3/4 mx-auto my-12">
      {/* Header Section */}
      <section className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Career at <span className="text-red-600">The Dragon News</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Join our passionate team of journalists, editors, and tech experts who
          are redefining the future of digital journalism in Bangladesh.
        </p>
      </section>

      {/* Why Work With Us */}
      <section className="bg-white rounded-2xl shadow-md p-6 md:p-10 mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
          Why Work With Us?
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            Be part of one of Bangladesh’s fastest-growing digital media teams.
          </li>
          <li>
            Work with cutting-edge tools in journalism and news technology.
          </li>
          <li>Collaborate with passionate and talented professionals.</li>
          <li>
            Enjoy flexible work culture and continuous learning opportunities.
          </li>
          <li>Shape the future of digital storytelling and news innovation.</li>
        </ul>
      </section>

      {/* Open Positions */}
      <section className="bg-white rounded-2xl shadow-md p-6 md:p-10 mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-6">
          Current Open Positions
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Job 1 */}
          <div className="border rounded-xl p-5 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-red-600 mb-2">
              📝 News Reporter
            </h3>
            <p className="text-gray-600 mb-3">
              We’re looking for energetic reporters to cover local and
              international news with accuracy and speed.
            </p>
            <p className="text-sm text-gray-500 mb-2">
              Location: Dhaka | Type: Full-time
            </p>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
              Apply Now
            </button>
          </div>

          {/* Job 2 */}
          <div className="border rounded-xl p-5 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-red-600 mb-2">
              🎬 Video Editor
            </h3>
            <p className="text-gray-600 mb-3">
              Skilled editors needed to produce engaging visual content for our
              digital platforms.
            </p>
            <p className="text-sm text-gray-500 mb-2">
              Location: Remote | Type: Contract
            </p>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
              Apply Now
            </button>
          </div>

          {/* Job 3 */}
          <div className="border rounded-xl p-5 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-red-600 mb-2">
              💻 Web Developer
            </h3>
            <p className="text-gray-600 mb-3">
              Join our tech team to build and maintain a high-performance news
              platform that reaches millions.
            </p>
            <p className="text-sm text-gray-500 mb-2">
              Location: Dhaka | Type: Full-time
            </p>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
              Apply Now
            </button>
          </div>

          {/* Job 4 */}
          <div className="border rounded-xl p-5 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-red-600 mb-2">
              📸 Photo Journalist
            </h3>
            <p className="text-gray-600 mb-3">
              Capture the world’s stories through your lens and bring visual
              storytelling to life.
            </p>
            <p className="text-sm text-gray-500 mb-2">
              Location: Chattogram | Type: Full-time
            </p>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
              Apply Now
            </button>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="text-center mt-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          Ready to make an impact?
        </h3>
        <p className="text-gray-600 mb-5">
          Send your CV and portfolio to{" "}
          <span className="font-semibold text-red-600">
            career@dragonnews.com
          </span>{" "}
          and be a part of our growing family.
        </p>
        <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
          Join The Dragon Team 🔥
        </button>
      </section>
    </main>
  );
};

export default Career;
