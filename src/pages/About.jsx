import React, { useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import {
  Heart,
  ArrowRight,
  Award,
  Users,
  Home,
  Syringe,
  Stethoscope,
} from "lucide-react";

const AnimatedCounter = ({ value }) => {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => `${Math.round(latest)}+`);

  React.useEffect(() => {
    const animation = animate(count, numericValue, {
      duration: 2,
      ease: "easeOut",
      delay: 0.2,
    });

    return animation.stop;
  }, [numericValue, count]);

  return <motion.span>{rounded}</motion.span>;
};

const AboutPage = () => {
  const founderInfo = {
    name: "",
    role: "Founding team",
    bio: "Started Udaipur Animal Feed in 2015 with a vision to create a compassionate community for stray animals.",
    image: "/images/2.jpg",
  };

  const services = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Animal Feeding Programs",
      description:
        "Regular feeding programs ensuring stray animals receive proper nutrition.",
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Street Animal Support",
      description:
        "Comprehensive support system for street animals including shelter and care.",
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Emergency Medical Support",
      description: "24/7 emergency medical assistance for animals in distress.",
    },
    {
      icon: <Syringe className="w-8 h-8" />,
      title: "Vaccination & Sterilization",
      description:
        "Regular vaccination and sterilization camps for street animals.",
    },
  ];

  const achievements = [
    { number: "500+", label: "Animals Fed Monthly" },
    { number: "200+", label: "Animals Rescued Yearly" },
    { number: "1000+", label: "Community Members Educated" },
    { number: "5+", label: "Years of Service" },
  ];

  return (
    <div className="min-h-screen  text-gray-900">
      {/* Mission Section */}
      <section className="relative bg-gray-900 py-20 sm:py-28 overflow-hidden to-pink top-12">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-200" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto text-center space-y-6 sm:space-y-8">
            <Heart className="w-10 h-10 sm:w-12 sm:h-12 mx-auto text-gray-900" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Our Mission
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed text-gray-900">
              "To provide food, shelter, and medical care to stray animals in
              Udaipur, and to promote compassion and kindness towards all living
              beings."
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 sm:py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="/images/1.jpg"
                alt="Organization History"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
            <div className="space-y-4 sm:space-y-6 order-1 md:order-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-100">
                Our Journey
              </h2>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Udaipur Animal Feed was founded in 2015 by a group of animal
                lovers who were concerned about the welfare of stray animals in
                Udaipur. Our organization has grown rapidly since then, and we
                now have a team of dedicated volunteers and staff who work
                tirelessly to care for animals in need.
              </p>
              <button className="group flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors">
                Learn more about our history
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-4">
              Our Services
            </h2>
            <p className="text-base sm:text-lg text-gray-300">
              Comprehensive care and support for street animals through various
              programs and initiatives.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className=" mb-4">{service.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-100 to-gray-200 text-gray-900 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: "easeOut" },
                  },
                }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-4"
              >
                <motion.div
                  className="text-3xl sm:text-4xl font-bold mb-2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <AnimatedCounter value={achievement.number} />
                </motion.div>
                <div className=" text-sm sm:text-base">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 bg-gray-300">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-base sm:text-lg text-gray-900">
              Meet the dedicated individuals who make our mission possible.
            </p>
          </div>
          <div className="max-w-md mx-auto">
            <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
              <img
                src={founderInfo.image}
                alt={founderInfo.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1">
                  {founderInfo.name}
                </h3>
                <p className="text-purple-400 mb-4">{founderInfo.role}</p>
                <p className="text-gray-400">{founderInfo.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
