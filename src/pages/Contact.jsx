import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 9876543210"],
      action: "tel:+911234567890",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@udaipuranimalfeed.org", "support@udaipuranimalfeed.org"],
      action: "mailto:info@udaipuranimalfeed.org",
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["123 Animal Care Street", "Udaipur, Rajasthan 313001"],
      action: "https://maps.google.com",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: [
        "Monday - Saturday: 9:00 AM - 6:00 PM",
        "Sunday: 10:00 AM - 2:00 PM",
      ],
      action: null,
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
          <img
            src="/images/3.png"
            alt="Contact Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-200">
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                    <Icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <div className="space-y-2">
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                  {item.action && (
                    <a
                      href={item.action}
                      className="inline-block mt-4 text-blue-500 hover:text-blue-600 font-medium"
                    >
                      Connect →
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map and Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Map */}
            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3627.703626360375!2d73.70199207536255!3d24.59942247810055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDM1JzU3LjkiTiA3M8KwNDInMTYuNCJF!5e0!3m2!1sen!2sin!4v1739015620043!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Udaipur Animal Feed Location"
              ></iframe>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg">
              <div className="mb-8">
                <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Contact Us</span>
                <h3 className="mt-2 text-2xl font-bold text-gray-900">Send us a Message</h3>
              </div>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    rows="4"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Stay Connected</span>
            <h2 className="mt-2 text-3xl font-bold text-gray-900 mb-8">Follow Us on Social Media</h2>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="p-4 bg-white rounded-full text-gray-600 hover:text-blue-500 shadow-md hover:shadow-xl transition-all"
                    aria-label={social.label}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;