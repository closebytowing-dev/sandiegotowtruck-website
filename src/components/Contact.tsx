"use client";

import { useState, type FormEvent } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Contact <span className="text-primary">San Diego Tow Truck</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Need a tow truck in San Diego? Call us now or fill out the form
            and we&apos;ll get back to you right away.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 text-center">
              <p className="text-primary font-semibold text-sm mb-2 uppercase tracking-wide">
                Call Us Now
              </p>
              <a
                href="tel:+16195550199"
                className="text-3xl sm:text-4xl font-extrabold text-primary hover:text-accent transition-colors"
              >
                (619) 555-0199
              </a>
              <p className="text-gray-400 text-sm mt-2">
                Available 24/7 &mdash; including holidays
              </p>
            </div>

            <div className="bg-secondary/40 border border-white/5 rounded-2xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-primary mt-0.5">📍</span>
                <div>
                  <h3 className="font-semibold text-sm">Service Area</h3>
                  <p className="text-gray-400 text-sm">
                    San Diego County, CA
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary mt-0.5">🕐</span>
                <div>
                  <h3 className="font-semibold text-sm">Hours</h3>
                  <p className="text-gray-400 text-sm">
                    24 Hours a Day, 7 Days a Week
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary mt-0.5">⚡</span>
                <div>
                  <h3 className="font-semibold text-sm">Average Response Time</h3>
                  <p className="text-gray-400 text-sm">30 minutes or less</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-secondary/40 border border-white/5 rounded-2xl p-6 sm:p-8">
            {submitted ? (
              <div className="flex items-center justify-center h-full text-center">
                <div>
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-400 text-sm">
                    We&apos;ll get back to you as soon as possible.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1.5"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-gray-900 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-1.5"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full bg-gray-900 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                    placeholder="(619) 555-0199"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1.5"
                  >
                    How Can We Help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full bg-gray-900 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Describe your situation..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-black font-bold py-3.5 rounded-lg transition-colors text-sm"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
