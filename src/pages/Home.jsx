import React, { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import { NavLink } from "react-router-dom";
import NGOSections from "../components/NGOSections";

// const AboutSections = () => {
//   const stats = [
//     { value: 5000, label: "Animals fed monthly" },
//     { value: 1000, label: "Animals rescued" },
//     { value: 50, label: "Community programs" },
//     { value: 10000, label: "Volunteer hours" },
//   ];

//   return (
//     <section className="py-16 bg-white">
//       <div className="container mx-auto px-4">
//         <h2 className="mb-8 text-3xl font-bold text-center">About Our NGO</h2>
//         <div className="grid md:grid-cols-2 gap-8 items-center">
//           <div>
//             <p className="mb-4 text-lg text-gray-700">
//               We are dedicated to the protection and welfare of animals in
//               Udaipur and surrounding areas. Our mission is to create a world
//               where all animals are treated with compassion and respect.
//             </p>
//             <p className="text-lg text-gray-700">
//               Through our various programs and initiatives, we strive to make a
//               lasting impact on animal welfare and promote harmonious
//               coexistence between humans and animals.
//             </p>
//           </div>
//           <div className="grid grid-cols-2 gap-4">
//             {stats.map((stat, index) => (
//               <div
//                 key={index}
//                 className="text-center p-4 bg-gray-100 rounded-lg"
//               >
//                 <div className="text-4xl font-bold text-blue-600">
//                   {stat.value.toLocaleString()}+
//                 </div>
//                 <div className="text-sm text-gray-600">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const ProgramsSection = () => {
//   const programs = [
//     {
//       title: "Animal Feeding Initiatives",
//       description:
//         "Providing nutritious meals to stray and abandoned animals across Udaipur.",
//       icon: "🍽️",
//     },
//     {
//       title: "Rescue & Rehabilitation",
//       description:
//         "Saving injured and distressed animals, providing medical care and safe shelter.",
//       icon: "🏥",
//     },
//     {
//       title: "Community Outreach Programs",
//       description:
//         "Educating and engaging the local community in animal welfare activities.",
//       icon: "🤝",
//     },
//   ];

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <h2 className="mb-8 text-3xl font-bold text-center">Our Programs</h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {programs.map((program, index) => (
//             <div
//               key={index}
//               className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
//             >
//               <div className="flex items-center mb-4">
//                 <span className="mr-2 text-2xl">{program.icon}</span>
//                 <h3 className="text-xl font-semibold">{program.title}</h3>
//               </div>
//               <p className="text-gray-600">{program.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const CampaignsSection = () => {
//   const campaigns = [
//     {
//       title: "Gopal Vahini",
//       description: "Supporting and protecting cows in our community.",
//       image: "/placeholder.svg?height=200&width=300",
//     },
//     {
//       title: "Pashu Sneh Patra",
//       description: "Raising awareness about animal welfare through education.",
//       image: "/placeholder.svg?height=200&width=300",
//     },
//     {
//       title: "Jeev Vani",
//       description:
//         "Providing medical care and support for all animals in need.",
//       image: "/placeholder.svg?height=200&width=300",
//     },
//   ];

//   return (
//     <section className="py-16 bg-white">
//       <div className="container mx-auto px-4">
//         <h2 className="mb-8 text-3xl font-bold text-center">
//           Featured Campaigns
//         </h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {campaigns.map((campaign, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
//             >
//               <img
//                 src={campaign.image || "/placeholder.svg"}
//                 alt={campaign.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold mb-2">{campaign.title}</h3>
//                 <p className="text-gray-600">{campaign.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const MetricsSection = () => {
//   const metrics = [
//     { number: "10,000+", label: "Animals Fed" },
//     { number: "1,500+", label: "Animals Rescued" },
//     { number: "500+", label: "Animals Rehabilitated" },
//     { number: "5,000+", label: "Community Members Reached" },
//   ];

//   return (
//     <section className="py-16 bg-gray-900 text-white">
//       <div className="container mx-auto px-4">
//         <h2 className="mb-8 text-3xl font-bold text-center">Our Impact</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//           {metrics.map((metric, index) => (
//             <div key={index} className="text-center">
//               <p className="text-4xl font-bold mb-2">{metric.number}</p>
//               <p className="text-xl">{metric.label}</p>
//             </div>
//           ))}
//         </div>
//         <div className="mt-12 text-center">
//           <h3 className="text-2xl font-bold mb-4">What People Say</h3>
//           <blockquote className="italic text-lg max-w-2xl mx-auto">
//             "The work this NGO does for animals is truly inspiring. They've made
//             a real difference in our community."
//           </blockquote>
//           <p className="mt-2">- Local Resident</p>
//         </div>
//       </div>
//     </section>
//   );
// };
const Home = () => {
  return (
    <>
      <HeroSection />
      <div className="px-6 lg:px-8 ">
        <NGOSections/>
        {/* <AboutSections />
        <ProgramsSection />
        <CampaignsSection /> */}
      </div>
      {/* <MetricsSection /> */}
    </>
  );
};

export default Home;
