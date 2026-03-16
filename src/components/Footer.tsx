export default function Footer() {
  return (
    <footer className="bg-secondary/80 border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-bold text-primary text-lg">San Diego Tow Truck</p>
            <p className="text-gray-500 text-sm mt-1">
              24/7 Towing &amp; Roadside Assistance in San Diego, CA
            </p>
          </div>
          <a
            href="tel:+16195550199"
            className="bg-primary hover:bg-primary-dark text-black font-bold px-6 py-2.5 rounded-lg transition-colors text-sm"
          >
            Call (619) 555-0199
          </a>
        </div>
        <div className="border-t border-white/5 mt-8 pt-6 text-center text-gray-600 text-xs">
          &copy; {new Date().getFullYear()} San Diego Tow Truck. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
