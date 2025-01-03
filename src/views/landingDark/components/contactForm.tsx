"use client";
import Button from "../components2/Button";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import useRelativeMousePosition from "../hooks/useRelativeMousePosition";
import { PlanetModel } from "./planetModel";
import GridLines from "../assets/grid-lines.png";

export const ContactMe = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const borderedDivRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  const [mouseX, mouseY] = useRelativeMousePosition(borderedDivRef);
  const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, black, transparent)`;

  // Estados para los campos del formulario
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  // Función para manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = { name, email, subject, message };

    try {
      const response = await fetch("https://api.sant-soft.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
      } else {
        alert(result.error || "Error al enviar el mensaje");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Ocurrió un error al enviar el formulario.");
    }
  };

  return (
    <section ref={sectionRef} id="ContactMe" className="h-screen flex items-center justify-center py-20 md:py-24 mb-32">
      <div className="container">
        <motion.div
          ref={borderedDivRef}
          animate={{ backgroundPositionX: "100%" }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
          style={{ backgroundPositionY }}
          className="relative py-24 border border-white/15 rounded-xl overflow-hidden group"
        >
          <div className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-700" style={{ backgroundImage: `url(${GridLines})` }}></div>
          <motion.div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay opacity-0 group-hover:opacity-100 transition duration-700"
            style={{ maskImage, backgroundImage: `url(${GridLines})` }}
          ></motion.div>

          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/2 p-8 bg-transparent rounded-lg shadow-lg relative" style={{ zIndex: 10 }}>
              <h3 className="text-2xl text-center text-white mb-4">Contact Form</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-white/70">Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 mt-2 bg-transparent border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white/70">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 mt-2 bg-transparent border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-white/70">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Subject (Optional)"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full p-3 mt-2 bg-transparent border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-white/70">Message</label>
                  <textarea
                    id="message"
                    placeholder="Your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-3 mt-2 bg-transparent border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    rows={4}
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <Button type="submit">Send Message</Button>
                </div>
              </form>
            </div>
            <PlanetModel />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
