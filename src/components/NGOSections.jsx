import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

import {
  Heart,
  Users,
  Award,
  Clock,
  ChevronRight,
  Star,
  MessageCircle,
  Leaf,
} from "lucide-react";

const AnimatedValue = ({ endValue }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (value) =>
    Math.round(value).toLocaleString()
  );

  React.useEffect(() => {
    const animation = animate(count, endValue, {
      duration: 2,
      ease: "easeOut",
      delay: 0.2,
    });
    return animation.stop;
  }, [endValue, count]);

  return <motion.span>{rounded}</motion.span>;
};

const AboutSection = () => {
  const stats = [
    {
      value: 5000,
      label: "Animals fed monthly",
      icon: Heart,
      color: "from-gray-700 to-gray-800",
    },
    {
      value: 1000,
      label: "Animals rescued",
      icon: Award,
      color: "from-gray-800 to-gray-900",
    },
    {
      value: 50,
      label: "Community programs",
      icon: Users,
      color: "from-gray-700 to-gray-800",
    },
    {
      value: 10000,
      label: "Volunteer hours",
      icon: Clock,
      color: "from-gray-800 to-gray-900",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-100 to-gray-200 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            About Our NGO
          </h2>
          <div className="w-24 h-1 bg-gray-800 mx-auto mb-6 rounded-full" />
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed px-4">
            Making a difference in the lives of animals, one compassionate action at a time.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4 md:space-y-6"
          >
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                We are dedicated to the protection and welfare of animals in Udaipur and surrounding areas. 
                Our mission is to create a world where all animals are treated with compassion and respect.
              </p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Through our various programs and initiatives, we strive to make a lasting impact on animal 
                welfare and promote harmonious coexistence between humans and animals.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  className="group relative p-6 bg-white rounded-xl shadow-lg"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`} />
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon className="w-6 h-6 md:w-8 md:h-8 mb-4 text-gray-700" />
                  </motion.div>
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
                    <AnimatedValue endValue={stat.value} />+
                  </div>
                  <div className="text-sm md:text-base font-medium text-gray-600 mt-2">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProgramsSection = () => {
  const programs = [
    {
      title: "Animal Feeding Initiatives",
      description: "Providing nutritious meals to stray and abandoned animals across Udaipur.",
      icon: Heart,
      color: "from-gray-700 to-gray-800",
    },
    {
      title: "Rescue & Rehabilitation",
      description: "Saving injured and distressed animals, providing medical care and safe shelter.",
      icon: Award,
      color: "from-gray-800 to-gray-900",
    },
    {
      title: "Community Outreach Programs",
      description: "Educating and engaging the local community in animal welfare activities.",
      icon: Users,
      color: "from-gray-700 to-gray-800",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Our Programs
          </h2>
          <div className="w-24 h-1 bg-gray-800 mx-auto mb-6 rounded-full" />
          <p className="text-lg md:text-xl text-gray-600 px-4">
            Making a lasting impact through dedicated initiatives
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${program.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`} />
                <div className="flex flex-col items-center text-center">
                  <Icon className="w-10 h-10 md:w-12 md:h-12 mb-6 text-gray-700 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-800">{program.title}</h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const CampaignsSection = () => {
  const campaigns = [
    {
      title: "Gopal Vahini",
      description: "Supporting and protecting cows in our community.",
      image: "/images/cows.jpg",
      icon: Leaf,
    },
    {
      title: "Pashu Sneh Patra",
      description: "Raising awareness about animal welfare through education.",
      image: "/images/pashu.jpg",
      icon: MessageCircle,
    },
    {
      title: "Jeev Vani",
      description: "Providing medical care and support for all animals in need.",
      image: "/images/puppies.jpg",
      icon: Heart,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent mb-6">
            Featured Campaigns
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-800 to-violet-900 mx-auto mb-6 rounded-full" />
          <p className="text-lg md:text-xl ">
            Join us in making a difference
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {campaigns.map((campaign, index) => {
            const Icon = campaign.icon;
            return (
              <div
                key={index}
                className="group bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-6 h-6 text-blue-400" />
                    <h3 className="text-xl font-bold text-white">{campaign.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{campaign.description}</p>
                  <button className="group inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-colors">
                    Learn more
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const AnimatedCounter = ({ value }) => {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => `${Math.round(latest)}+`);

  React.useEffect(() => {
    const animation = animate(count, numericValue, {
      duration: 2,
      ease: "easeOut",
      delay: 0.2
    });

    return animation.stop;
  }, [numericValue, count]);

  return <motion.span>{rounded}</motion.span>;
};

// const MetricsSection = () => {
//   const [activeTestimonial, setActiveTestimonial] = useState(0);

//   const metrics = [
//     { number: "10,000+", label: "Animals Fed", icon: Heart },
//     { number: "1,500+", label: "Animals Rescued", icon: Award },
//     { number: "500+", label: "Animals Rehabilitated", icon: Star },
//     { number: "5,000+", label: "Community Members", icon: Users },
//   ];

//   const testimonials = [
//     {
//       quote: "The work this NGO does for animals is truly inspiring. They've made a real difference in our community.",
//       author: "Local Resident",
//       role: "Community Member",
//     },
//     {
//       quote: "Their dedication to animal welfare sets an example for everyone. The impact is visible throughout Udaipur.",
//       author: "Dr. Sharma",
//       role: "Veterinarian",
//     },
//     {
//       quote: "Volunteering with them has been an incredibly rewarding experience. They truly care about every animal.",
//       author: "Priya Patel",
//       role: "Regular Volunteer",
//     },
//   ];

//   return (
//     <section className="py-16 md:py-24 bg-gray-950 text-white">
//       <div className="container mx-auto px-4">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
//         >
//           <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Impact</h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-violet-400 mx-auto mb-6 rounded-full" />
//           <p className="text-lg md:text-xl text-gray-300">
//             Making a measurable difference in animal welfare
//           </p>
//         </motion.div>

//         <motion.div 
//           initial="hidden"
//           animate="visible"
//           variants={{
//             hidden: { opacity: 0 },
//             visible: {
//               opacity: 1,
//               transition: {
//                 staggerChildren: 0.2
//               }
//             }
//           }}
//           className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16"
//         >
//           {metrics.map((metric, index) => {
//             const Icon = metric.icon;
//             return (
//               <motion.div 
//                 key={index} 
//                 variants={{
//                   hidden: { opacity: 0, y: 20 },
//                   visible: { 
//                     opacity: 1, 
//                     y: 0,
//                     transition: { duration: 0.6, ease: "easeOut" }
//                   }
//                 }}
//                 whileHover={{ scale: 1.05 }}
//                 className="text-center group p-6 bg-gray-900 rounded-xl"
//               >
//                 <motion.div
//                   whileHover={{ scale: 1.1, rotate: 5 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   <Icon className="w-8 h-8 mx-auto mb-4 text-blue-400" />
//                 </motion.div>
//                 <p className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
//                   <AnimatedCounter value={metric.number} />
//                 </p>
//                 <p className="text-base md:text-lg text-gray-300">{metric.label}</p>
//               </motion.div>
//             );
//           })}
//         </motion.div>

//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="max-w-4xl mx-auto"
//         >
//           <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
//             What People Say
//           </h3>
//           <motion.div 
//             className="relative bg-gray-900 rounded-xl p-6 md:p-8 shadow-lg"
//             whileHover={{ scale: 1.02 }}
//             transition={{ duration: 0.2 }}
//           >
//             <motion.div 
//               key={activeTestimonial}
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -20 }}
//               transition={{ duration: 0.3 }}
//               className="text-center"
//             >
//               <blockquote className="text-lg md:text-xl italic text-gray-300 mb-6">
//                 "{testimonials[activeTestimonial].quote}"
//               </blockquote>
//               <div className="font-medium">
//                 <div className="text-blue-400">
//                   {testimonials[activeTestimonial].author}
//                 </div>
//                 <div className="text-gray-400">
//                   {testimonials[activeTestimonial].role}
//                 </div>
//               </div>
//             </motion.div>
//             <div className="flex justify-center gap-2 mt-6">
//               {testimonials.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setActiveTestimonial(index)}
//                   className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                     activeTestimonial === index
//                       ? "w-8 bg-blue-400"
//                       : "bg-gray-700"
//                   }`}
//                 />
//               ))}
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

const NGOSections = () => {
  return (
    <>
      <AboutSection />
      <ProgramsSection />
      <CampaignsSection />
      {/* <MetricsSection /> */}
    </>
  );
};

export default NGOSections;
