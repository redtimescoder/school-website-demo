import React from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { Heart, Target, BookOpen, ShieldCheck, Quote, GraduationCap } from 'lucide-react';

const faculty = [
  {
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
    name: 'Dr. Meera Kulkarni',
    department: 'Principal',
    qualification: 'Ph.D. in Education · 22 years',
    bio: 'Leads Gyanda with a focus on inclusive, girl-centred education and teacher development.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600',
    name: 'Mrs. Sunita Rao',
    department: 'Head of Science',
    qualification: 'M.Sc. Physics · 16 years',
    bio: 'Makes physics and chemistry come alive through experiments and inquiry-led projects.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600',
    name: 'Ms. Farah Khan',
    department: 'Head of Languages',
    qualification: 'M.A. English · 12 years',
    bio: 'Builds confident readers, writers, and speakers through literature and debate.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600',
    name: 'Mrs. Anita Deshmukh',
    department: 'Head of Arts',
    qualification: 'M.F.A. Visual Arts · 14 years',
    bio: 'Champions creativity through studio practice, exhibitions, and performance.',
  },
];

const AboutPage = () => {
  return (
    <div>
      <PageHeader
        title="About Gyanda Girls"
        subtitle="Dedicated to the holistic growth and empowerment of every student."
      />

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative" data-reveal="left">
            <img
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=800"
              alt="School History"
              className="rounded-3xl shadow-2xl transition-transform duration-700 hover:scale-[1.02]"
            />
            <div className="absolute -bottom-6 -right-6 bg-school-primary text-white p-8 rounded-2xl shadow-xl hidden md:block">
              <p className="text-3xl font-bold">25+</p>
              <p className="text-sm opacity-90">Years of Excellence</p>
            </div>
          </div>
          <div data-reveal="right">
            <h2 className="text-3xl font-bold text-school-dark mb-6">Our Legacy of Learning</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Founded with a vision to provide high-quality education to girls, Gyanda Girls School has grown into a beacon of knowledge and empowerment. We believe that when you educate a girl, you educate a whole nation.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our approach combines traditional values with modern pedagogical techniques, ensuring our students are not only academically proficient but also emotionally resilient and socially responsible.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4 p-4 rounded-xl bg-gray-50">
                <Target className="h-6 w-6 text-school-primary shrink-0" />
                <div><h4 className="font-bold">Our Vision</h4><p className="text-sm text-gray-500">To be a global leader in girls&apos; education.</p></div>
              </div>
              <div className="flex gap-4 p-4 rounded-xl bg-gray-50">
                <Heart className="h-6 w-6 text-school-accent shrink-0" />
                <div><h4 className="font-bold">Our Mission</h4><p className="text-sm text-gray-500">Nurturing confidence and character.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chairman's Message */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-2 relative" data-reveal="left">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600"
                  alt="Arun Gyanda, Chairman"
                  className="w-full h-[420px] object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 z-20 bg-school-primary text-white px-6 py-5 rounded-2xl shadow-xl hidden md:block">
                <p className="text-2xl font-extrabold leading-none">25+</p>
                <p className="text-xs opacity-90 mt-1">Years of Service</p>
              </div>
              <div className="absolute -top-6 -left-6 w-56 h-56 bg-school-primary/10 rounded-full blur-3xl animate-float-slow" />
              <div className="absolute -bottom-6 -right-6 w-56 h-56 bg-school-accent/10 rounded-full blur-3xl animate-float-slower" />
            </div>

            <div className="lg:col-span-3" data-reveal="right">
              <span className="inline-block text-school-primary font-semibold text-sm uppercase tracking-wider mb-3">
                From the Chairman&apos;s Desk
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-school-dark mb-6">
                Education That Empowers Every Girl
              </h2>
              <Quote className="h-10 w-10 text-school-primary/30 mb-4" />
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  At Gyanda Girls School, we believe that education is more than the pursuit of academic
                  success — it is the foundation upon which confidence, character, and purpose are built.
                  Every girl who walks through our gates carries a unique spark, and our responsibility
                  is to help her discover it and let it shine.
                </p>
                <p>
                  For more than two decades, we have worked alongside families to create an environment
                  where curiosity is encouraged, effort is celebrated, and every student feels seen.
                  Our faculty, staff, and parents share one belief: when a girl is empowered, she lifts
                  not only herself but her family and her community.
                </p>
                <p>
                  We remain committed to a learning experience that blends academic rigour with
                  compassion, creativity, and courage. Thank you for being part of this journey.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-school-primary/10 flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-school-primary" />
                </div>
                <div>
                  <p className="font-bold text-school-dark">Arun Gyanda</p>
                  <p className="text-sm text-gray-500">Chairman, Gyanda Girls School</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-school-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-16" data-reveal>Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-reveal-group>
            {[
              { icon: <BookOpen />, title: "Integrity", desc: "Honesty in all we do." },
              { icon: <ShieldCheck />, title: "Respect", desc: "Valuing every individual." },
              { icon: <Target />, title: "Excellence", desc: "Striving for the best." },
              { icon: <Heart />, title: "Compassion", desc: "Serving others with love." },
            ].map((val, i) => (
              <div key={i} className="p-8 rounded-2xl bg-gray-800 border border-gray-700 hover:border-school-primary hover:-translate-y-1 transition-all duration-300">
                <div className="text-school-secondary mb-4 flex justify-center">{val.icon}</div>
                <h3 className="text-xl font-bold mb-2">{val.title}</h3>
                <p className="text-gray-400 text-sm">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-24 bg-school-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16" data-reveal>
            <span className="inline-block text-school-primary font-semibold text-sm uppercase tracking-wider mb-3">
              Our Educators
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-school-dark mb-4">Meet Our Faculty</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Dedicated teachers who bring expertise, warmth, and a genuine love of learning to every
              classroom.
            </p>
            <div className="h-1.5 w-20 bg-school-primary mx-auto rounded-full mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-reveal-group>
            {faculty.map((member) => (
              <article
                key={member.name}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-school-primary mb-1">
                    {member.department}
                  </p>
                  <h3 className="text-lg font-bold text-school-dark">{member.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{member.qualification}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600">
              Interested in joining our team?{' '}
              <Link href="/contact" className="text-school-primary font-semibold hover:underline">
                Get in touch
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
