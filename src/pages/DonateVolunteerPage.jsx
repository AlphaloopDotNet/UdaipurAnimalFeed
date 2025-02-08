import React, { useState } from "react";
import {
  Heart,
  Users,
  IndianRupee,
  ClipboardCheck,
  BookOpen,
  Send,
} from "lucide-react";

const DonateVolunteerPage = () => {

 

  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");

  const donationTiers = [
    {
      amount: 500,
      impact: "Feeds 5 stray animals for a week",
      icon: <Heart className="w-6 h-6" />,
    },
    {
      amount: 1000,
      impact: "Provides medical care for 2 injured animals",
      icon: <Heart className="w-6 h-6" />,
    },
    {
      amount: 2500,
      impact: "Supports vaccination drive for 10 animals",
      icon: <Heart className="w-6 h-6" />,
    },
  ];

  const volunteerRoles = [
    {
      title: "Animal Feeder",
      commitment: "2-3 hours weekly",
      description: "Help distribute food to stray animals in designated areas",
    },
    {
      title: "Medical Assistant",
      commitment: "4-5 hours weekly",
      description: "Assist veterinarians during treatment and vaccination drives",
    },
    {
      title: "Community Educator",
      commitment: "Weekend workshops",
      description: "Conduct awareness sessions about animal welfare",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Donation Hero Section */}
      <section className="relative py-28 bg-blue-600 text-white top-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <Heart className="w-16 h-16 mx-auto text-blue-300" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Make a Difference Today
            </h1>
            <p className="text-xl text-blue-100">
              Your support helps us provide food, shelter, and medical care to
              stray animals in need.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Options Section */}
      {/* <section className="py-16 mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {donationTiers.map((tier, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedAmount(tier.amount)}
                  className={`p-6 rounded-lg border-2 transition-all ${
                    selectedAmount === tier.amount
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-200 hover:border-blue-300"
                  }`}
                >
                  <div className="text-blue-600 mb-2">{tier.icon}</div>
                  <div className="text-2xl font-bold mb-2">₹{tier.amount}</div>
                  <p className="text-gray-600 text-sm">{tier.impact}</p>
                </button>
              ))}
            </div>

            <div className="mb-12">
              <div className="relative">
                <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="number"
                  placeholder="Enter custom amount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:ring-0"
                />
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg mb-12">
              <h3 className="text-lg font-semibold mb-2">Tax Benefits</h3>
              <p className="text-gray-600">
                All donations are eligible for tax exemption under Section 80G
                of the Income Tax Act.
              </p>
            </div>

            <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all">
              Proceed to Donate
            </button>
          </div>
        </div>
      </section> */}

      {/* Volunteer Section */}
      <section className="py-16 mt-20  bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <Users className="w-12 h-12 mx-auto text-blue-600 mb-4" />
            <h2 className="text-3xl font-bold mb-4">Volunteer With Us</h2>
            <p className="text-gray-600">
              Join our team of dedicated volunteers and make a direct impact in
              the lives of animals.
            </p>
          </div>

          {/* Volunteer Roles */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 mx-auto max-w-7xl">
            {volunteerRoles.map((role, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
                <p className="text-blue-600 mb-4">{role.commitment}</p>
                <p className="text-gray-600">{role.description}</p>
              </div>
            ))}
          </div>

          {/* Volunteer Process */}
          <div className="max-w-4xl mx-auto my-16 py-20">
            <h3 className="text-2xl font-bold text-center mb-8">How to Join</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <ClipboardCheck className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                <h4 className="font-semibold mb-2">Apply</h4>
                <p className="text-gray-600">
                  Fill out the volunteer application form
                </p>
              </div>
              <div className="text-center">
                <BookOpen className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                <h4 className="font-semibold mb-2">Train</h4>
                <p className="text-gray-600">
                  Complete our orientation program
                </p>
              </div>
              <div className="text-center">
                <Heart className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                <h4 className="font-semibold mb-2">Serve</h4>
                <p className="text-gray-600">Start making a difference</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {/* <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring-0"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring-0"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring-0"
                ></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default DonateVolunteerPage;