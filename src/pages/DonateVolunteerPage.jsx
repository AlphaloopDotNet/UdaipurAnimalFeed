import React from "react";
import {
  Heart,
  Users,
  ClipboardCheck,
  BookOpen,
  Send,
} from "lucide-react";

const DonateVolunteerPage = () => {
  const volunteerRoles = [
    {
      title: "Animal Feeder",
      commitment: "2-3 hours weekly",
      description: "Help distribute food to stray animals in designated areas",
      icon: Heart,
    },
    {
      title: "Medical Assistant",
      commitment: "4-5 hours weekly",
      description: "Assist veterinarians during treatment and vaccination drives",
      icon: ClipboardCheck,
    },
    {
      title: "Community Educator",
      commitment: "Weekend workshops",
      description: "Conduct awareness sessions about animal welfare",
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
          <img
            src="/api/placeholder/1920/1080"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Heart className="w-16 h-16 mx-auto text-blue-500" />
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Help Us Save Lives
            </h1>
            <p className="text-xl text-gray-200">
              Your support helps us provide food, shelter, and medical care to
              stray animals in need.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Support Our Cause</span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Make a Donation</h2>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="space-y-6">
                <div className="flex flex-col items-center justify-center space-y-4">
                  <span className="text-2xl font-semibold text-gray-900">Donate via UPI</span>
                  <div className="text-3xl font-bold text-blue-500">8239498447</div>
                  <div className="flex gap-4">
                    <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-600">GPay</span>
                    <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-600">PhonePe</span>
                    <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-600">Paytm</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6 mt-8">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-700 mb-2">Tax Benefits</h3>
                    <p className="text-blue-600">
                      All donations are eligible for tax exemption under Section 80G
                      of the Income Tax Act.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Join Our Team</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Volunteer Opportunities</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Join our team of dedicated volunteers and make a direct impact in
              the lives of animals.
            </p>
          </div>

          {/* Volunteer Roles */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {volunteerRoles.map((role, index) => {
              const Icon = role.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl shadow-lg p-8 transition-all hover:shadow-xl"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-blue-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Icon className="w-12 h-12 text-blue-500 mb-6" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{role.title}</h3>
                  <p className="text-blue-500 font-medium mb-4">{role.commitment}</p>
                  <p className="text-gray-600">{role.description}</p>
                </div>
              );
            })}
          </div>

          {/* How to Join */}
          <div className="max-w-4xl mx-auto mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900">How to Join Us</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <ClipboardCheck className="w-8 h-8 text-blue-500" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Apply</h4>
                <p className="text-gray-600">Fill out the volunteer application form</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <BookOpen className="w-8 h-8 text-blue-500" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Train</h4>
                <p className="text-gray-600">Complete our orientation program</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <Heart className="w-8 h-8 text-blue-500" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Serve</h4>
                <p className="text-gray-600">Start making a difference</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonateVolunteerPage;