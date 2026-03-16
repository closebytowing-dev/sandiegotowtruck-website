const reasons = [
  {
    title: "24/7 Service",
    description:
      "We never close. Whether it's 2 PM or 2 AM, our dispatchers and drivers are ready to assist you anywhere in San Diego.",
    icon: "🕐",
  },
  {
    title: "Fast ETA",
    description:
      "With drivers stationed throughout San Diego County, we typically arrive in 30 minutes or less.",
    icon: "⚡",
  },
  {
    title: "Licensed & Insured",
    description:
      "Fully licensed, bonded, and insured for your peace of mind. Your vehicle is always in safe hands.",
    icon: "🛡️",
  },
  {
    title: "Local San Diego Tow Truck",
    description:
      "We're a locally owned San Diego towing company. We know every street, highway, and neighborhood in the county.",
    icon: "📍",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Choose <span className="text-primary">San Diego Tow Truck</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            San Diego drivers trust us for reliable, affordable towing and
            roadside assistance San Diego wide.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="text-center p-6 rounded-2xl bg-secondary/30 border border-white/5"
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
