const areas = [
  "San Diego",
  "La Jolla",
  "Pacific Beach",
  "Chula Vista",
  "National City",
  "Coronado",
  "Mission Valley",
  "Ocean Beach",
  "Point Loma",
  "Hillcrest",
  "Downtown San Diego",
  "El Cajon",
];

export default function ServiceAreas() {
  return (
    <section id="areas" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Tow Truck <span className="text-primary">Service Areas</span> in San Diego
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We provide tow truck and roadside assistance services throughout
            San Diego County. No matter where you are, we can reach you fast.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {areas.map((area) => (
            <div
              key={area}
              className="flex items-center gap-3 bg-secondary/40 border border-white/5 rounded-xl px-4 py-3"
            >
              <span className="text-primary text-lg">📍</span>
              <span className="font-medium text-sm">{area}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          Don&apos;t see your area? Call us &mdash; we likely cover it!
        </p>
      </div>
    </section>
  );
}
