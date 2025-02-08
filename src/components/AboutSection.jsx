import React, { useState, useEffect } from "react";
import { ArrowRight, Users, Globe, Clock, Calendar } from "lucide-react";

const links = [
  { name: "Open roles", href: "#", icon: Users },
  { name: "Internship program", href: "#", icon: Clock },
  { name: "Our values", href: "#", icon: Globe },
  { name: "Meet our leadership", href: "#", icon: Users },
];

const stats = [
  { 
    name: "Offices worldwide", 
    value: 12,
    description: "Spanning across major global tech hubs",
    icon: Globe 
  },
  { 
    name: "Full-time colleagues", 
    value: 300,
    description: "Talented professionals from diverse backgrounds",
    icon: Users 
  },
  { 
    name: "Hours per week", 
    value: 40,
    description: "Promoting healthy work-life balance",
    icon: Clock 
  },
  { 
    name: "Paid time off", 
    value: "Unlimited",
    description: "Because rest leads to better productivity",
    icon: Calendar 
  },
];

const stats2 = [
  { 
    id: 1, 
    name: "Transactions every 24 hours", 
    value: 44000000,
    valueFormatted: "44 million",
    growth: "+23% from last year"
  },
  { 
    id: 2, 
    name: "Assets under holding", 
    value: 119000000000000,
    valueFormatted: "$119 trillion",
    growth: "+12% annual growth"
  },
  { 
    id: 3, 
    name: "New users annually", 
    value: 46000,
    valueFormatted: "46,000",
    growth: "+35% user growth"
  },
];

const AnimatedCounter = ({ value, duration = 2000, isNumeric = true }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentElement = document.getElementById(`counter-${value}`);
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [value]);

  useEffect(() => {
    if (!isVisible || !isNumeric) return;

    let startValue = 0;
    const endValue = Number(value);
    const increment = endValue / (duration / 16);
    let currentValue = startValue;

    const timer = setInterval(() => {
      currentValue += increment;
      if (currentValue >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(currentValue));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration, isVisible, isNumeric]);

  if (!isNumeric) return value;

  return (
    <span id={`counter-${value}`} className="transition-all duration-300">
      {isVisible ? count.toLocaleString() : '0'}
    </span>
  );
};

export default function AboutSection() {
  return (
    <div className="relative">
      {/* First Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                Join Our Mission
              </span>
              <span className="block mt-2">Shape the Future</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We're building the next generation of financial technology, combining innovation with reliability. 
              Join our team of passionate individuals working to transform the industry.
            </p>
          </div>

          {/* Links Section */}
          <div className="mx-auto mt-12 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {links.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className="group relative overflow-hidden rounded-lg bg-gray-800/50 p-4 transition-all duration-300 hover:bg-gray-800/70"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-blue-400" />
                      <span className="text-sm font-medium text-white">
                        {link.name}
                      </span>
                      <ArrowRight className="h-4 w-4 text-gray-400 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Stats Grid */}
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.name}
                    className="group rounded-lg bg-gray-800/30 p-6 transition-all duration-300 hover:bg-gray-800/50"
                  >
                    <dt className="text-sm font-medium text-gray-400 flex items-center gap-2">
                      <Icon className="h-5 w-5 text-blue-400" />
                      {stat.name}
                    </dt>
                    <dd className="mt-2 text-3xl font-semibold text-white">
                      <AnimatedCounter 
                        value={stat.value} 
                        isNumeric={typeof stat.value === 'number'}
                      />
                    </dd>
                    <p className="mt-1 text-sm text-gray-400">{stat.description}</p>
                  </div>
                )
              })}
            </dl>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Global Impact
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Driving innovation and growth across the financial sector
            </p>
          </div>

          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats2.map((stat) => (
              <div
                key={stat.id}
                className="group relative mx-auto max-w-xs transform transition-all duration-300 hover:scale-105"
              >
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 opacity-0 blur transition duration-300 group-hover:opacity-20" />
                <div className="relative rounded-lg bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                  <dt className="text-base text-gray-600">{stat.name}</dt>
                  <dd className="mt-4 text-4xl font-semibold tracking-tight text-gray-900">
                    <AnimatedCounter 
                      value={stat.value} 
                      duration={2500}
                    />
                  </dd>
                  <p className="mt-2 text-sm font-medium text-blue-500">
                    {stat.growth}
                  </p>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}