"use client";

import { useState, useEffect } from "react";
import { Calendar, X } from "lucide-react";

export const FloatingAppointmentButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const calendarUrl =
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0cAi6Ao0WEpkywu3csuVWGmgc49bQfggycKJTbaHgway7Nzcp-Iurk2Wn7Z7BoT1EQIEAKgqda?gv=true";

  const openCalendarModal = () => {
    setShowModal(true);
    setIsExpanded(false); // Close the expanded card
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [showModal]);

  return (
    <>
      {/* Floating Button Container */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Expanded Card */}
        {isExpanded && (
          <div className="absolute bottom-16 right-0 w-80 bg-surface/95 backdrop-blur-md rounded-2xl border border-accent/20 shadow-2xl shadow-black/20 mb-4 transform transition-all duration-300 ease-out">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-accent" />
                  <h3 className="text-text-primary font-semibold">
                    Schedule a Call
                  </h3>
                </div>
                <button
                  onClick={toggleExpanded}
                  className="text-text-secondary hover:text-text-primary transition-colors p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Description */}
              <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                Let's discuss your project and how I can help bring your ideas
                to life.
              </p>

              {/* Calendar Button */}
              <button
                onClick={openCalendarModal}
                className="w-full bg-accent hover:bg-accent-hover text-background px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-accent/25 flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Schedule Now
              </button>

              {/* Features */}
              <div className="mt-4 space-y-2 text-xs text-text-secondary">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span>45 minutes session</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                  <span>Project discussion</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Floating Action Button */}
        <button
          onClick={toggleExpanded}
          className="group relative w-14 h-14 bg-accent hover:bg-accent-hover text-background rounded-full shadow-lg shadow-accent/25 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-accent/30 flex items-center justify-center"
        >
          {/* Pulse Animation Ring */}
          <div className="absolute inset-0 rounded-full bg-accent/20 animate-ping"></div>

          {/* Icon */}
          <Calendar
            className={`w-6 h-6 transition-transform duration-300 ${
              isExpanded ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeModal}
          />

          {/* Modal Content */}
          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-4xl h-[85vh] max-h-[900px] mx-4 overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 bg-white ">
              <h2 className="text-xl font-semibold text-black">
                Schedule Your Technical Session
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Calendar iframe */}
            <div className="h-full">
              <iframe
                src={calendarUrl}
                className="w-full h-full border-0"
                title="Schedule Appointment"
                loading="lazy"
                allow="camera; microphone"
                style={{ height: "calc(100% - 73px)" }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
