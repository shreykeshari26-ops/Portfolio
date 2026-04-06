import { motion, useScroll } from "framer-motion";
import { useState } from "react";

export default function App() {

  const { scrollYProgress } = useScroll();

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="bg-black text-white min-h-screen relative overflow-hidden scroll-smooth"
    >

      {/* SCROLL BAR */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50 origin-left"
      />

      {/* CURSOR GLOW */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(59,130,246,0.15), transparent 80%)`,
        }}
      />

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="w-[500px] h-[500px] bg-purple-500/30 blur-[120px] rounded-full absolute top-[-100px] left-[-100px]" />
        <div className="w-[400px] h-[400px] bg-blue-500/30 blur-[120px] rounded-full absolute bottom-[-100px] right-[-100px]" />
      </div>

      {/* NAVBAR */}
      <div className="fixed top-5 w-full flex justify-center z-50">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 px-6 py-3 rounded-full flex gap-6">
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#skills" className="hover:text-blue-400">Skills</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#certificates" className="hover:text-blue-400">Certificates</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>
      </div>

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          Shreyansh Keshari
        </h1>
        <p className="mt-4 text-gray-400 text-lg">
          Building logic. Solving problems.
        </p>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-400">
          Passionate Software Engineering student with strong foundation in Java, DSA and OOP. 
          Solved 120+ LeetCode problems and building real-world projects focused on backend and scalable systems.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl text-center mb-10">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Java", "Python", "DSA", "HTML/CSS", "Git", "GitHub"].map((skill, index) => (
            <div key={index} className="bg-white/10 p-6 rounded-xl text-center hover:scale-105 transition">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl text-center mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-white/10 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold">Java Mini Projects</h3>
            <p className="text-gray-400 mt-2">5+ Java projects using OOP & DSA</p>
            <a href="https://github.com/shreykeshari26-ops" target="_blank" className="text-blue-400">GitHub</a>
          </div>

          <div className="bg-white/10 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold">FitSnap AI</h3>
            <p className="text-gray-400 mt-2">AI fitness tracking app</p>
            <a href="https://github.com/shreykeshari26-ops" target="_blank" className="text-blue-400">GitHub</a>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

  {/* To Do */}
  <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-xl hover:scale-105 transition">
    <h3 className="text-xl font-semibold">To-Do App</h3>
    <p className="text-gray-400 mt-2">
      A simple and responsive task management app to add, delete and manage daily tasks efficiently.
     </p>
      <div className="flex gap-4 mt-4">
      <a href="https://github.com/shreykeshari26-ops/todo-app" target="_blank" className="text-blue-400">GitHub</a>
      <a href="https://shreykeshari26-ops.github.io/todo-app/" target="_blank" className="text-purple-400">Live</a>
    </div>
  </div>

  {/* PLace Mind AI*/}
      <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-xl hover:scale-105 transition">
      <h3 className="text-xl font-semibold">PlaceMind AI</h3>
      <p className="text-gray-400 mt-2">
      AI-powered resume screening system that analyzes resumes, scores candidates, and suggests best matches using Google Gemini API.
     </p>
      <div className="flex gap-4 mt-4">
      <a href="https://github.com/PlaceMinds/Bharatex-Hakathon" target="_blank" className="text-blue-400">GitHub</a>
      <a href="https://bharatex-hakathon-pxq7fddary8sshuzok4uhd.streamlit.app/" className="text-purple-400">Live</a>
    </div>
  </div>

</div>


        </div>
      </section>

      {/* CERTIFICATES */}
      <section id="certificates" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl text-center mb-10">Certificates & Achievements</h2>

        <div className="grid md:grid-cols-2 gap-6">

          {[
            {
              title: "AWS Cloud Foundations",
              link: "https://drive.google.com/file/d/1Wui4TAQ5IJb2ggX4jnsGKQ2mVRjL9i80/view"
            },
            {
              title: "Google Gemini Certification",
              link: "https://drive.google.com/file/d/1K1OytvuMUGxemF-UxEssj8X3LT3Njt77/view"
            },
            {
              title: "Network Security Fundamentals",
              link: "https://drive.google.com/file/d/1kIW25XqSjfoF7WWmLbWTUz6pyivZL3B_/view"
            },
            {
              title: "Cybersecurity Foundation",
              link: "https://drive.google.com/file/d/1f0d0KkNoxdk-jk7Q9PepUJr5mRtSR1fo/view"
            },
            {
              title: "IIT Delhi Campus Ambassador",
              link: "https://drive.google.com/file/d/13-k9Cp2npDLjLfHJ9BqGhosjvxPESq9n/view"
            },
            {
              title: "IAEG Member",
              link: "https://drive.google.com/file/d/1ycommFPdQ7O5sWUMvxXCTD0eo2CVLicK/view"
            }
          ].map((cert, index) => (
            <div key={index} className="bg-white/10 p-6 rounded-xl hover:scale-105 transition">
              <h3 className="text-lg font-semibold">{cert.title}</h3>
              <a href={cert.link} target="_blank" className="text-blue-400 mt-2 inline-block">
                View →
              </a>
            </div>
          ))}

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 text-center">
        <h2 className="text-3xl mb-6">Contact</h2>

        <div className="flex justify-center gap-6">
          <a href="https://github.com/shreykeshari26-ops" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/shreyansh-keshari-104639362/" target="_blank">LinkedIn</a>
          <a href="mailto:shrey.keshari26@gmail.com">Email</a>
          <a href="tel:+917042249976">📞 +91-7042249976</a>
        </div>
      </section>

    </div>
  );
}