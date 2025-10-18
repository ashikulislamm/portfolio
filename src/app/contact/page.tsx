"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaBehance, FaFacebook } from "react-icons/fa6";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage(
        "Thank you for your message! I'll get back to you soon."
      );
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "md.ashikul4040@gmail.com",
      href: "mailto:md.ashikul4040@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+8801794624361",
      href: "tel:+8801794624361",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Dhaka, Bangladesh",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/ashikulislam.me/",
      icon: <FaFacebook />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ashikulislammm/",
      icon: <FaLinkedin />,
    },
    {
      name: "GitHub",
      href: "https://github.com/ashikulislamm",
      icon: <FaGithub />,
    },
    {
      name: "Behance",
      href: "https://www.behance.net/ashikulislam5",
      icon: <FaBehance />,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-text-primary">
      <main className="py-16 md:py-24 mt-16 md:mt-20">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-surface/50 backdrop-blur-sm rounded-full border border-accent/20 mb-6">
              <span className="text-accent text-sm font-medium">
                GET IN TOUCH
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
              Let's Work Together
            </h1>
            <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Have a project in mind? I'd love to hear about it. Let's discuss
              how we can bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <div className="bg-surface/30 backdrop-blur-sm rounded-2xl p-8 border border-accent/10">
                <h2 className="text-2xl font-bold text-text-primary mb-6">
                  Send Me a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-text-secondary text-sm font-medium mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-background/50 border border-accent/20 rounded-lg focus:outline-none focus:border-accent transition-colors duration-200 text-text-primary"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-text-secondary text-sm font-medium mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-background/50 border border-accent/20 rounded-lg focus:outline-none focus:border-accent transition-colors duration-200 text-text-primary"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-text-secondary text-sm font-medium mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background/50 border border-accent/20 rounded-lg focus:outline-none focus:border-accent transition-colors duration-200 text-text-primary"
                      placeholder="Project Discussion"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-text-secondary text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-background/50 border border-accent/20 rounded-lg focus:outline-none focus:border-accent transition-colors duration-200 text-text-primary resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent-hover text-background px-8 py-4 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-accent/25 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>

                  {submitMessage && (
                    <div className="text-center text-accent bg-accent/10 rounded-lg p-4">
                      {submitMessage}
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="order-1 lg:order-2">
              <div className="space-y-8">
                {/* Contact Details */}
                <div>
                  <h2 className="text-2xl font-bold text-text-primary mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.href}
                        className="flex items-center gap-4 p-4 bg-surface/30 backdrop-blur-sm rounded-xl border border-accent/10 hover:border-accent/20 transition-all duration-200 group"
                      >
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all duration-200">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="text-text-primary font-medium">
                            {info.title}
                          </h3>
                          <p className="text-text-secondary">{info.value}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h2 className="text-2xl font-bold text-text-primary mb-6">
                    Follow Me
                  </h2>
                  <div className="flex gap-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className="w-12 h-12 bg-surface/30 backdrop-blur-sm rounded-lg border border-accent/10 hover:border-accent/20 flex items-center justify-center text-text-secondary hover:text-accent transition-all duration-200 hover:scale-110"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.name}
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Quick Response */}
                <div className="bg-accent/5 rounded-2xl p-6 border border-accent/10">
                  <h3 className="text-lg font-semibold text-text-primary mb-3">
                    Quick Response
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    I typically respond to messages within 24 hours. For urgent
                    inquiries, feel free to call me directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
