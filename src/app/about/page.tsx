"use client";

import { useState, useEffect } from "react";
import {
  Download,
  MapPin,
  Calendar,
  Mail,
  ExternalLink,
  User,
  GraduationCap,
  Heart,
  BookOpen,
} from "lucide-react";
import Avatar from "@/assets/images/memoji-computer.png";
import Me from "@/assets/images/Me.jpg";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  // Handle smooth tab transitions
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  const handleTabChange = (tabId: string) => {
    if (tabId === activeTab) return;

    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(tabId);
      setAnimationKey((prev) => prev + 1);
    }, 75);
  };

  const personalInfo = {
    name: "Ashikul Islam",
    title: "Full Stack Developer",
    location: "Dhaka, Bangladesh",
    experience: "2+ Years",
    email: "md.ashiku4040@gmail.com",
    phone: "+880 179 462 4361",
  };

  const stats = [
    { number: "20+", label: "Projects Completed" },
    { number: "2+", label: "Years Experience" },
    { number: "5+", label: "Happy Clients" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  const academics = [
    {
      degree: "Bachelor of Science in Computer Science & Engineering",
      institution: "Ahsanullah University of Science & Technology",
      duration: "2021 - 2025",
      grade: "CGPA: 3.75/4.00",
      description:
        "Specialized in Software Engineering, Web Technologies, and Database Management Systems.",
    },
    {
      degree: "Higher Secondary Certificate (Science)",
      institution: "National Ideal College",
      duration: "2018 - 2020",
      grade: "GPA: 5.00/5.00",
      description:
        "Concentrated on Mathematics, Physics, Chemistry, and Information & Communication Technology.",
    },
    {
      degree: "Secondary School Certificate (Science)",
      institution: "National Ideal School",
      duration: "2016 - 2018",
      grade: "GPA: 5.00/5.00",
      description:
        "Strong foundation in Mathematics, Science subjects, and early exposure to computer programming.",
    },
  ];

  const publications = [
    {
      title:
        "Leveraging Hyperledger Besu-Based Private Blockchain, IPFS, and NFTs for Secure and Transparent Intellectual Property Preservation and Trading",
      authors:
        "Gazi Maliha Raisa Noor, Md. Ashikul Islam, Saba Al Mukter Mahin, Saha Reno",
      publisher: "IEEE",
      year: "2025",
      type: "Conference Paper",
      status: "Published",
      link: "https://ieeexplore.ieee.org/abstract/document/11160067",
      description:
        "In this paper, we addressed the ongoing difficulties of managing intellectual property (IP) in the digital era, such as unauthorized usage, forgery, and insufficient global protections.",
    },
  ];

  const timeline = [
    {
      year: "2025 - Present",
      title: "Technical Support and Integration Executive",
      company: "Chologhuri Limited.",
      description:
        "Leading development of enterprise web applications using React, Node.js, and cloud technologies.",
    },
    {
      year: "2024 - 2025",
      title: "Technical Support Intern",
      company: "Chologhuri Limited.",
      description:
        "Worked on developing and maintaining their websites and web applications using modern JavaScript frameworks.",
    },
  ];

  const hobbies = [
    { name: "Photography", icon: "📸" },
    { name: "Gaming", icon: "🎮" },
    { name: "Reading", icon: "📚" },
    { name: "Traveling", icon: "✈️" },
    { name: "Music", icon: "🎵" },
    { name: "Cooking", icon: "👨‍🍳" },
  ];

  const tabs = [
    { id: "overview", label: "Overview", icon: <User className="w-4 h-4" /> },
    {
      id: "academics",
      label: "Academics",
      icon: <GraduationCap className="w-4 h-4" />,
    },
    {
      id: "research",
      label: "Research & Publications",
      icon: <BookOpen className="w-4 h-4" />,
    },
    {
      id: "experience",
      label: "Experience",
      icon: <Calendar className="w-4 h-4" />,
    },
    { id: "personal", label: "Personal", icon: <Heart className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-background text-text-primary">
      <main className="py-16 md:py-24 mt-16 md:mt-20">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-surface/50 backdrop-blur-sm rounded-full border border-accent/20 mb-6">
              <span className="gradient-text text-sm font-medium">
                ABOUT ME
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
              Get to Know Me Better
            </h1>
            <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              I'm a passionate full-stack developer who loves creating digital
              experiences that make a difference.
            </p>
          </div>

          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto mb-16">
            {/* Profile Card */}
            <div className="bg-surface/30 backdrop-blur-sm rounded-2xl p-8 border border-accent/10">
              <div className="text-center mb-8">
                <div className="w-40 h-40 mx-auto mb-6 bg-surface rounded-full flex items-center justify-center border border-accent/20">
                  <img
                    src={Me.src}
                    alt="Profile Picture"
                    className="w-28 h-28 rounded-full"
                  />
                </div>
                <h2 className="text-2xl font-bold text-text-primary mb-2">
                  {personalInfo.name}
                </h2>
                <p className="text-accent text-lg font-medium mb-4">
                  {personalInfo.title}
                </p>
                <div className="flex items-center justify-center gap-2 text-text-secondary mb-6">
                  <MapPin className="w-4 h-4" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                  <span className="text-text-secondary">Experience</span>
                  <span className="text-text-primary font-medium">
                    {personalInfo.experience}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                  <span className="text-text-secondary">Email</span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-accent hover:underline"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                  <span className="text-text-secondary">Phone</span>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-accent hover:underline"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <a
                href="https://drive.google.com/file/d/16OohJwNNFpsTOpvgGH7CWMqry5zlhHt6/view?usp=sharing"
                target="_blank"
                className="w-full mt-8 bg-accent hover:bg-accent-hover text-background px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>

            {/* Stats Grid */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-surface/30 backdrop-blur-sm rounded-xl p-6 border border-accent/10 text-center"
                  >
                    <div className="text-3xl font-bold text-accent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-text-secondary text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-surface/30 backdrop-blur-sm rounded-2xl p-8 border border-accent/10">
                <h3 className="text-xl font-bold text-text-primary mb-4">
                  My Mission
                </h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  To revolutionize the digital landscape by creating innovative,
                  scalable, and impactful web solutions that not only meet
                  client requirements but fundamentally transform how businesses
                  operate and users interact with technology. I'm committed to
                  bridging the gap between cutting-edge technology and practical
                  business solutions.
                </p>
                <p className="text-text-secondary leading-relaxed mb-4">
                  My core philosophy centers around three pillars:{" "}
                  <span className="text-accent font-medium">
                    Excellence in Code
                  </span>{" "}
                  - writing clean, maintainable, and performant code that stands
                  the test of time;{" "}
                  <span className="text-accent font-medium">
                    User-Centric Design
                  </span>{" "}
                  - creating intuitive experiences that delight users and drive
                  engagement.
                </p>
                {/*<p className="text-text-secondary leading-relaxed">
                  I believe in the power of technology to solve real-world problems and create meaningful impact. Whether it's building enterprise applications that streamline operations, developing research solutions that advance scientific knowledge, or crafting user interfaces that make complex tasks simple, every project is an opportunity to make a difference. My ultimate goal is to contribute to a more connected, efficient, and innovative digital future.
                </p>*/}
              </div>
            </div>
          </div>

          {/* Tabbed Content */}
          <div className="max-w-6xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 ${
                    activeTab === tab.id
                      ? "bg-accent text-background shadow-lg shadow-accent/25"
                      : "bg-surface/30 text-text-secondary hover:text-accent hover:bg-surface/50"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-surface/30 backdrop-blur-sm rounded-2xl p-8 border border-accent/10">
              <div
                key={animationKey}
                className={`transition-all duration-300 ease-out ${
                  isAnimating
                    ? "opacity-0 transform translate-y-4"
                    : "opacity-100 transform translate-y-0"
                }`}
              >
                {activeTab === "overview" && (
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-text-primary mb-4">
                        About Me
                      </h3>
                      <div className="prose prose-invert max-w-none">
                        <p className="text-text-secondary leading-relaxed mb-4">
                          Hello! I'm Ashikul Islam, a passionate full-stack
                          developer and technology enthusiast based in Dhaka,
                          Bangladesh. With over 2+ years of hands-on experience
                          in web development, I specialize in crafting
                          cutting-edge, scalable, and user-centric digital
                          solutions that bridge the gap between innovative
                          design and robust functionality.
                        </p>
                        <p className="text-text-secondary leading-relaxed mb-4">
                          My journey into the world of programming began during
                          my university years at Ahsanullah University of
                          Science & Technology, where I discovered my love for
                          problem-solving through code. Since then, I've evolved
                          into a versatile developer who thrives on transforming
                          complex business requirements into elegant,
                          maintainable solutions. I have a particular passion
                          for modern JavaScript frameworks, cloud architecture,
                          and emerging technologies like blockchain and AI
                          integration.
                        </p>
                        <p className="text-text-secondary leading-relaxed mb-4">
                          Currently serving as a Technical Support and
                          Integration Executive at Chologhuri Limited, I've had
                          the privilege of working on diverse projects ranging
                          from enterprise web applications to innovative
                          research publications. My expertise spans across
                          React.js, Next.js, Node.js, Python, and modern DevOps
                          practices, always with a focus on performance
                          optimization and user experience excellence.
                        </p>
                        <p className="text-text-secondary leading-relaxed">
                          Beyond the screen, I'm an active contributor to the
                          tech community through open-source projects, research
                          publications, and knowledge sharing. When I'm not
                          architecting solutions or debugging code, you'll find
                          me exploring the latest tech trends, experimenting
                          with new frameworks, or mentoring fellow developers. I
                          believe in continuous learning and staying ahead of
                          the technological curve to deliver tomorrow's
                          solutions today.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "academics" && (
                  <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-text-primary mb-6">
                      Educational Background
                    </h3>
                    <div className="space-y-6">
                      {academics.map((academic, index) => (
                        <div
                          key={index}
                          className="bg-background/50 p-6 rounded-lg border border-accent/10"
                        >
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                            <div className="flex-1">
                              <h4 className="text-text-primary font-bold text-lg mb-2">
                                {academic.degree}
                              </h4>
                              <div className="text-accent font-medium mb-2">
                                {academic.institution}
                              </div>
                              <div className="text-text-secondary text-sm mb-3">
                                {academic.duration}
                              </div>
                            </div>
                            {/*<div className="bg-accent/10 px-4 py-2 rounded-lg">
                            <span className="text-accent font-medium text-sm">
                              {academic.grade}
                            </span>
                          </div>*/}
                          </div>
                          <p className="text-text-secondary leading-relaxed">
                            {academic.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "research" && (
                  <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-text-primary mb-6">
                      Research & Publications
                    </h3>
                    <div className="space-y-6">
                      {publications.map((publication, index) => (
                        <div
                          key={index}
                          className="bg-background/50 p-6 rounded-lg border border-accent/10"
                        >
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                            <div className="flex-1">
                              <h4 className="text-text-primary font-bold text-lg mb-2">
                                {publication.title}
                              </h4>
                              <div className="text-text-secondary text-sm mb-2">
                                <span className="font-medium">Authors:</span>{" "}
                                {publication.authors}
                              </div>
                              <div className="text-text-secondary text-sm mb-2">
                                <span className="font-medium">Publisher:</span>{" "}
                                {publication.publisher}
                              </div>
                              <div className="flex items-center gap-4 mb-3">
                                <span className="text-text-secondary text-sm">
                                  <span className="font-medium">Year:</span>{" "}
                                  {publication.year}
                                </span>
                                <span className="bg-surface px-3 py-1 rounded-full text-xs text-text-secondary">
                                  {publication.type}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <div
                                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                                  publication.status === "Published"
                                    ? "bg-green-500/10 text-green-400 border border-green-500/20"
                                    : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                                }`}
                              >
                                {publication.status}
                              </div>
                              <a
                                href={publication.link}
                                className="text-accent hover:text-accent-hover transition-colors duration-200"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            </div>
                          </div>
                          <p className="text-text-secondary leading-relaxed">
                            {publication.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="bg-accent/5 rounded-2xl p-6 border border-accent/10">
                      <h4 className="text-lg font-semibold text-text-primary mb-3">
                        Research Interests
                      </h4>
                      <ul className="space-y-2 text-text-secondary">
                        <li>• Blockchain Technology</li>
                        <li>• Web Performance Optimization and Scalability</li>
                        <li>
                          • Machine Learning Integration in Web Applications
                        </li>
                        <li>• Machine Learning</li>
                        <li>• Deep Learning</li>
                        <li>
                          • Cloud Computing and Microservices Architecture
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === "experience" && (
                  <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-text-primary mb-6">
                      Professional Journey
                    </h3>
                    <div className="space-y-6">
                      {timeline.map((item, index) => (
                        <div
                          key={index}
                          className="relative pl-8 pb-8 border-l-2 border-accent/20 last:border-l-0"
                        >
                          <div className="absolute left-[-9px] top-0 w-4 h-4 bg-accent rounded-full border-4 border-background"></div>
                          <div className="bg-background/50 p-6 rounded-lg ml-4">
                            <div className="text-accent text-sm font-medium mb-2">
                              {item.year}
                            </div>
                            <h4 className="text-text-primary font-bold text-lg mb-1">
                              {item.title}
                            </h4>
                            <div className="text-text-secondary font-medium mb-3">
                              {item.company}
                            </div>
                            <p className="text-text-secondary leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "personal" && (
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-text-primary mb-6">
                        When I'm Not Coding
                      </h3>
                      <p className="text-text-secondary leading-relaxed mb-6">
                        I believe in maintaining a healthy work-life balance.
                        Here are some of the things I enjoy doing in my free
                        time:
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {hobbies.map((hobby, index) => (
                          <div
                            key={index}
                            className="bg-background/50 p-4 rounded-lg text-center"
                          >
                            <div className="text-3xl mb-2">{hobby.icon}</div>
                            <div className="text-text-primary font-medium">
                              {hobby.name}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-accent/5 rounded-2xl p-6 border border-accent/10">
                      <h4 className="text-lg font-semibold text-text-primary mb-3">
                        Fun Facts About Me
                      </h4>
                      <ul className="space-y-2 text-text-secondary">
                        <li>
                          • I've built over 20 websites and web applications
                        </li>
                        <li>
                          • I can't solve a Rubik's cube in under 2 minutes
                        </li>
                        <li>
                          • I'm a coffee enthusiast and I grind my own beans
                        </li>
                        <li>• I love contributing to open-source projects</li>
                        <li>• I'm always learning something new in tech</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
