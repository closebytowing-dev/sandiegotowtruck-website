const services = [
  {
    title: "Emergency Towing",
    description:
      "Broke down on the highway? We provide fast emergency towing anywhere in San Diego, 24 hours a day, 7 days a week.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Flatbed Towing",
    description:
      "Safe flatbed towing for luxury, exotic, and low-clearance vehicles. Your car stays fully protected during transport.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 17h8M8 17a2 2 0 11-4 0 2 2 0 014 0zm8 0a2 2 0 11-4 0 2 2 0 014 0zM3 13V8a2 2 0 012-2h8l4 4h2a2 2 0 012 2v1" />
      </svg>
    ),
  },
  {
    title: "Roadside Assistance",
    description:
      "Out of gas? Overheating? Our roadside assistance team will get you back on the road fast, wherever you are in San Diego.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.66-5.66a8 8 0 1111.31 0l-5.66 5.66zM12 9v.01" />
      </svg>
    ),
  },
  {
    title: "Jump Start",
    description:
      "Dead battery? We&apos;ll jump start your car quickly and safely so you can get back to your day without delay.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Tire Change",
    description:
      "Flat tire on the road? Our team will replace it with your spare quickly, getting you safely back on your way.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
        <circle cx="12" cy="12" r="4" strokeWidth={1.5} />
      </svg>
    ),
  },
  {
    title: "Lockout Service",
    description:
      "Locked your keys in the car? We provide fast, damage-free lockout service to get you back inside in minutes.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Emergency Towing <span className="text-primary">San Diego</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From emergency towing to roadside assistance in San Diego, we have
            you covered across all of San Diego County.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-secondary/50 border border-white/5 rounded-2xl p-6 hover:border-primary/30 transition-colors group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="tel:+16195550199"
            className="inline-block bg-primary hover:bg-primary-dark text-black font-bold px-8 py-4 rounded-xl transition-colors text-lg"
          >
            Need Help? Call (619) 555-0199
          </a>
        </div>
      </div>
    </section>
  );
}
