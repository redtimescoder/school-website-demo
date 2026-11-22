import React from 'react';
import PageHeader from '@/components/PageHeader';
import { TreePine, Coffee, Gamepad2, Users2 } from 'lucide-react';

const CampusLifePage = () => {
  const facilities = [
    { title: "Green Campus", desc: "Eco-friendly surroundings with gardens and open spaces for relaxation and learning.", icon: <TreePine />, color: "bg-green-100 text-green-600" },
    { title: "Student Lounge", desc: "A comfortable space for peer interaction, collaboration, and creative brainstorming.", icon: <Coffee />, color: "bg-orange-100 text-orange-600" },
    { title: "Sports Complex", desc: "State-of-the-art courts and equipment for basketball, volleyball, and athletics.", icon: <Gamepad2 />, color: "bg-blue-100 text-blue-600" },
    { title: "Leadership Club", desc: "Student-led initiatives that foster governance, empathy, and community service.", icon: <Users2 />, color: "bg-purple-100 text-purple-600" },
  ];

  return (
    <div>
      <PageHeader
        title="Campus Life"
        subtitle="Where learning extends beyond the classroom walls."
      />

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-reveal>
          <h2 className="text-3xl font-bold mb-4">A Vibrant Ecosystem</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Our campus is more than just buildings; it&apos;s a living space where friendships are forged and characters are built.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24" data-reveal-group>
          {facilities.map((f, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${f.color}`}>
                {f.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{f.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" data-reveal-group>
          <div className="relative group overflow-hidden rounded-3xl shadow-lg">
            <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=800" alt="Campus" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <p className="text-white font-bold text-xl">Our Central Library</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-3xl shadow-lg">
            <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800" alt="Sports" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <p className="text-white font-bold text-xl">Athletic Field</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CampusLifePage;
