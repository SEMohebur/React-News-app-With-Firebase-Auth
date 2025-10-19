import React from "react";

const AboutPage = () => {
  return (
    <main className="w-11/12 md:w-3/4 mx-auto my-12">
      {/* Header Section */}
      <section className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          About <span className="text-red-600">The Dragon News</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          The Dragon News is Bangladesh’s most trusted digital news platform —
          delivering verified, real-time, and unbiased updates from every corner
          of the country.
        </p>
      </section>

      {/* About Details */}
      <section className="bg-white rounded-2xl shadow-md p-6 md:p-10 space-y-5">
        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
          Our Mission
        </h2>
        <p className="text-gray-700 leading-relaxed">
          In a world of information overload, <b>The Dragon News</b> aims to
          bring you authentic, reliable, and timely news. From politics to
          sports, technology to entertainment — our goal is to make information
          accessible to everyone, anytime.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
          What We Offer
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            Breaking news from trusted national and international sources.
          </li>
          <li>
            Detailed category-based updates — Politics, Sports, Tech, Business,
            and more.
          </li>
          <li>Live coverage and video news streaming.</li>
          <li>Personalized experience based on your interests.</li>
          <li>Available on web and mobile for seamless access.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
          Why Choose Us
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Our dedicated team of journalists and editors work 24/7 to ensure
          accurate reporting. We value truth, transparency, and trust above
          everything. Your right to real information is our responsibility.
        </p>

        {/* Stats / Highlights */}
        <div className="grid md:grid-cols-3 gap-5 text-center mt-8">
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-red-600">500+</h3>
            <p className="text-gray-600 text-sm">Verified News Sources</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-red-600">1M+</h3>
            <p className="text-gray-600 text-sm">Active Readers</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-red-600">24/7</h3>
            <p className="text-gray-600 text-sm">Live News Updates</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="text-center mt-16">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
          “Stay Informed. Stay Ahead.” 📰
        </h3>
        <p className="text-gray-600 text-sm md:text-base">
          The Dragon News — Where every story matters, and every voice counts.
        </p>
      </section>
    </main>
  );
};

export default AboutPage;
