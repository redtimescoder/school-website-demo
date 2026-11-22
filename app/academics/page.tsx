import React from 'react';
import PageHeader from '@/components/PageHeader';
import { Book, Microscope, Music, Globe } from 'lucide-react';

const AcademicsPage = () => {
  const programs = [
    {
      title: "Primary Education",
      desc: "Building strong foundations in literacy, numeracy, and social skills through play-based and inquiry-led learning.",
      icon: <Book className="h-8 w-8 text-school-primary" />,
      color: "bg-indigo-50"
    },
    {
      title: "Secondary Education",
      desc: "A comprehensive curriculum focusing on critical thinking, advanced mathematics, and scientific exploration.",
      icon: <Microscope className="h-8 w-8 text-school-accent" />,
      color: "bg-pink-50"
    },
    {
      title: "Arts & Humanities",
      desc: "Cultivating creativity and cultural awareness through music, literature, and social sciences.",
      icon: <Music className="h-8 w-8 text-school-secondary" />,
      color: "bg-yellow-50"
    },
    {
      title: "Global Studies",
      desc: "Preparing students for a connected world with foreign language learning and international exchange programs.",
      icon: <Globe className="h-8 w-8 text-green-600" />,
      color: "bg-green-50"
    },
  ];

  return (
    <div>
      <PageHeader
        title="Academic Excellence"
        subtitle="A curriculum designed to challenge the mind and expand the horizons."
      />

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="p-12 rounded-3xl bg-school-primary text-white" data-reveal="left">
            <h2 className="text-3xl font-bold mb-6">Our Teaching Philosophy</h2>
            <p className="text-lg opacity-90 leading-relaxed mb-6">
              We believe in student-centered learning. Our classrooms are dynamic spaces where curiosity is encouraged,
              questions are celebrated, and every student is guided to find their own unique path to success.
            </p>
            <ul className="space-y-3 opacity-90">
              <li className="flex items-center gap-2">✓ Project-Based Learning</li>
              <li className="flex items-center gap-2">✓ Interdisciplinary Approach</li>
              <li className="flex items-center gap-2">✓ Individualized Support</li>
            </ul>
          </div>
          <div className="flex items-center" data-reveal="right">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800"
              alt="Classroom"
              className="rounded-3xl shadow-xl transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>
        </div>

        <h3 className="text-3xl font-bold text-center mb-12" data-reveal>Our Programs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-reveal-group>
          {programs.map((p, i) => (
            <div key={i} className={`p-8 rounded-3xl border border-transparent hover:border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${p.color}`}>
              <div className="mb-6">{p.icon}</div>
              <h4 className="text-xl font-bold mb-3">{p.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AcademicsPage;
