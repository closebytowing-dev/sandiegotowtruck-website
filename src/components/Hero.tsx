export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-secondary pt-16">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-20">
        <div className="inline-block bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 mb-6">
          <span className="text-primary text-sm font-medium">
            Serving San Diego, CA &mdash; 24 Hours a Day
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
          Tow Truck{" "}
          <span className="text-primary">San Diego</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
          24/7 Emergency Towing &amp; Roadside Assistance in San Diego.
          Fast, affordable &mdash; just one call away.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+16195550199"
            className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-black font-bold text-lg px-10 py-4 rounded-xl transition-colors shadow-lg shadow-primary/25"
          >
            📞 Call Now: (619) 555-0199
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto border-2 border-white/20 hover:border-primary text-white font-semibold text-lg px-10 py-4 rounded-xl transition-colors"
          >
            Our Services
          </a>
        </div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { value: "24/7", label: "Availability" },
            { value: "30 min", label: "Avg. ETA" },
            { value: "5,000+", label: "Tows Completed" },
            { value: "4.9★", label: "Customer Rating" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl sm:text-3xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
