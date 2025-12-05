const page = () => {
  return (
    <div className="min-h-screen bg-neutral-950 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-neutral-900 rounded-lg shadow-xl border border-neutral-800 p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-100 mb-6">
            About Us
          </h1>

          <div className="space-y-6 text-neutral-300 leading-relaxed">
            <p className="text-lg">
              Welcome to <span className="font-semibold text-red-400">MyApp</span>,
              where innovation meets simplicity. We're dedicated to creating exceptional
              digital experiences that make a difference.
            </p>

            <p>
              Our journey began with a simple idea: to build applications that people love
              to use. Today, we continue to push boundaries and explore new possibilities
              in web development, always keeping user experience at the heart of everything we do.
            </p>

            <div className="bg-neutral-800 border-l-4 border-red-400 p-6 my-8">
              <h2 className="text-2xl font-bold text-neutral-100 mb-3">Our Mission</h2>
              <p className="text-neutral-300">
                To empower individuals and businesses through cutting-edge technology
                and thoughtful design, making the digital world more accessible and
                enjoyable for everyone.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-neutral-800/50 rounded-lg">
                <div className="text-3xl font-bold text-red-400 mb-2">10+</div>
                <div className="text-sm text-neutral-400">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-neutral-800/50 rounded-lg">
                <div className="text-3xl font-bold text-red-400 mb-2">500+</div>
                <div className="text-sm text-neutral-400">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-neutral-800/50 rounded-lg">
                <div className="text-3xl font-bold text-red-400 mb-2">100%</div>
                <div className="text-sm text-neutral-400">Client Satisfaction</div>
              </div>
            </div>

            <p className="mt-8">
              We believe in continuous learning, collaboration, and the power of great ideas.
              Whether you're here to learn more about what we do or interested in working
              with us, we're excited to connect with you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
