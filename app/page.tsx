import type { ReactNode } from 'react';
import {
  ArrowRight,
  BookOpen,
  Users,
  Award,
  Palette,
  Trophy,
  GraduationCap,
  FlaskConical,
  Sprout,
  Quote,
  Star,
  CalendarDays,
  ChevronDown,
  HeartHandshake,
} from 'lucide-react';
import Link from 'next/link';

const stats = [
  { value: '25+', label: 'Years of Excellence' },
  { value: '1,200+', label: 'Students Empowered' },
  { value: '98%', label: 'Board Pass Rate' },
  { value: '40+', label: 'Expert Educators' },
];

const programs = [
  {
    icon: <Sprout className="h-7 w-7 text-green-600" />,
    badge: 'Pre-K – Grade 2',
    title: 'Early Years',
    description:
      'Play-based learning that builds curiosity, language, and confidence in our youngest learners.',
    color: 'bg-green-50',
  },
  {
    icon: <BookOpen className="h-7 w-7 text-school-primary" />,
    badge: 'Grades 3 – 5',
    title: 'Primary School',
    description:
      'Strong foundations in literacy, numeracy, and inquiry through hands-on classroom experiences.',
    color: 'bg-indigo-50',
  },
  {
    icon: <FlaskConical className="h-7 w-7 text-school-accent" />,
    badge: 'Grades 6 – 8',
    title: 'Middle School',
    description:
      'A broadening curriculum in sciences, languages, and the arts that develops independent thinking.',
    color: 'bg-pink-50',
  },
  {
    icon: <GraduationCap className="h-7 w-7 text-yellow-600" />,
    badge: 'Grades 9 – 12',
    title: 'Senior School',
    description:
      'Board-focused academics, career guidance, and leadership opportunities that prepare girls for university and beyond.',
    color: 'bg-yellow-50',
  },
];

const testimonials = [
  {
    quote:
      'Gyanda has transformed my daughter from a shy student into a confident young leader. The teachers genuinely know and nurture every child.',
    name: 'Priya Sharma',
    role: 'Parent, Grade 8',
    initials: 'PS',
    color: 'bg-indigo-100 text-indigo-700',
  },
  {
    quote:
      'The encouragement I received here gave me the courage to pursue engineering. I still carry the lessons and friendships from Gyanda.',
    name: 'Ananya Verma',
    role: 'Alumna, Class of 2021',
    initials: 'AV',
    color: 'bg-pink-100 text-pink-700',
  },
  {
    quote:
      'There is always a club, a competition, or a cause to pour yourself into. Gyanda taught me that learning does not stop when the bell rings.',
    name: 'Riya Mehta',
    role: 'Student, Grade 11',
    initials: 'RM',
    color: 'bg-yellow-100 text-yellow-700',
  },
];

const events = [
  {
    day: '28',
    month: 'Nov',
    category: 'Academics',
    title: 'Annual Science & Innovation Fair',
    description:
      'Students present research projects, robotics builds, and creative solutions to real-world problems.',
    time: '10:00 AM · Main Campus',
    color: 'bg-indigo-50 text-school-primary',
  },
  {
    day: '12',
    month: 'Dec',
    category: 'Sports',
    title: 'Inter-School Sports Meet',
    description:
      'A day of athletics, team spirit, and friendly competition with schools from across the city.',
    time: '8:30 AM · Sports Complex',
    color: 'bg-green-50 text-green-700',
  },
  {
    day: '20',
    month: 'Dec',
    category: 'Arts',
    title: 'Winter Concert & Art Exhibition',
    description:
      'An evening of music, dance, and student artwork celebrating the creativity of our school community.',
    time: '5:00 PM · Auditorium',
    color: 'bg-pink-50 text-school-accent',
  },
];

const faqs = [
  {
    question: 'Which grades does Gyanda Girls School offer?',
    answer:
      'We welcome girls from Pre-Kindergarten through Grade 12, with a curriculum tailored to each stage of development.',
  },
  {
    question: 'How do I apply for admission?',
    answer:
      'Visit our Admissions page to review key dates, download the application form, and submit the required documents. Our team will guide you through every step.',
  },
  {
    question: 'Do you provide transport facilities?',
    answer:
      'Yes. GPS-enabled school buses cover major routes across the city, with trained attendants on board for every journey.',
  },
  {
    question: 'What extracurricular activities are available?',
    answer:
      'Students can choose from sports, music, dance, theatre, coding, robotics, debate, and community-service clubs, all supported by dedicated faculty.',
  },
  {
    question: 'Are scholarships available?',
    answer:
      'Yes. Merit and need-based scholarships are available for eligible students. Contact the admissions office for eligibility details and application timelines.',
  },
];

const HomePage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-school-bg">
        <div className="absolute inset-0 z-0">
          {/* Decorative colorful blobs */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-school-primary/20 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute top-1/2 -right-24 w-80 h-80 bg-school-accent/20 rounded-full blur-3xl animate-float-slower" />
          <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-school-secondary/20 rounded-full blur-3xl animate-pulse-soft" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block py-1 px-4 rounded-full bg-school-primary/10 text-school-primary font-semibold text-sm mb-6 animate-float">
            Admissions Open for 2026-27
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-school-dark mb-6 tracking-tight animate-fade-up [animation-delay:100ms]">
            Nurturing <span className="text-school-primary">Ambition</span>,<br />
            Inspiring <span className="text-school-accent">Excellence</span>.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up [animation-delay:200ms]">
            Welcome to Gyanda Girls School, where we empower young girls to explore their potential,
            excel in academics, and grow into confident leaders of tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up [animation-delay:300ms]">
            <Link
              href="/admissions"
              className="w-full sm:w-auto bg-school-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-700 transition-all transform hover:scale-105 hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2"
            >
              Enroll Now <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/campus-life"
              className="w-full sm:w-auto bg-white text-school-dark border-2 border-gray-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 hover:-translate-y-0.5 active:scale-95 transition-all flex items-center justify-center"
            >
              Explore Campus
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-school-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8" data-reveal-group>
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl font-extrabold text-white">{stat.value}</p>
                <p className="text-sm md:text-base text-indigo-100 mt-2 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Difference"
            title="Why Choose Gyanda Girls?"
            description="An education designed to help every girl discover her strengths and lead with confidence."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-reveal-group>
            <FeatureCard
              icon={<BookOpen className="h-8 w-8 text-school-primary" />}
              title="Academic Excellence"
              description="A rigorous curriculum designed to challenge and inspire, with a focus on STEM and Humanities."
              color="bg-indigo-50"
            />
            <FeatureCard
              icon={<Users className="h-8 w-8 text-school-accent" />}
              title="Empowered Community"
              description="A supportive environment where every girl is encouraged to lead, speak, and innovate."
              color="bg-pink-50"
            />
            <FeatureCard
              icon={<Award className="h-8 w-8 text-school-secondary" />}
              title="Holistic Growth"
              description="Beyond books—we integrate arts, sports, and emotional intelligence into our core learning."
              color="bg-yellow-50"
            />
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-24 bg-school-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Academics"
            title="A Pathway for Every Stage"
            description="From first steps to final exams, our curriculum grows with your daughter at every stage."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-reveal-group>
            {programs.map((program) => (
              <div
                key={program.title}
                className="group bg-white rounded-3xl border border-gray-100 p-8 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${program.color}`}>
                  {program.icon}
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-school-primary mb-2">
                  {program.badge}
                </span>
                <h3 className="text-xl font-bold text-school-dark mb-3">{program.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{program.description}</p>
                <Link
                  href="/academics"
                  className="inline-flex items-center gap-2 text-school-primary font-semibold text-sm mt-6 hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Showcase Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative" data-reveal="left">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800"
                  alt="School Campus"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-school-primary/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-school-accent/10 rounded-full blur-3xl" />
            </div>
            <div className="lg:w-1/2" data-reveal="right">
              <h2 className="text-4xl font-bold text-school-dark mb-6">
                A Campus Built for <span className="text-school-primary">Discovery</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our modern facilities provide the perfect blend of traditional learning and futuristic innovation.
                From our state-of-the-art science labs to the vibrant arts studio, every corner of our campus
                is designed to spark curiosity.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg"><Trophy className="h-5 w-5 text-green-600" /></div>
                  <span className="font-medium text-gray-700">National Sports Awards</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg"><Palette className="h-5 w-5 text-purple-600" /></div>
                  <span className="font-medium text-gray-700">Creative Arts Hub</span>
                </div>
              </div>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 text-school-primary font-bold hover:gap-4 transition-all"
              >
                View Our Gallery <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-school-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Community Voices"
            title="Stories That Inspire Us"
            description="Hear from the parents, students, and alumnae who make Gyanda a special place."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-reveal-group>
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <Quote className="h-8 w-8 text-school-primary/30 mb-4" />
                <div className="flex gap-1 mb-4" aria-label="Rated 5 out of 5 stars">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-school-secondary text-school-secondary" />
                  ))}
                </div>
                <blockquote className="text-gray-600 leading-relaxed flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-100">
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm ${testimonial.color}`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-bold text-school-dark text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What&apos;s Happening"
            title="News & Upcoming Events"
            description="Stay connected with the moments, milestones, and celebrations that shape our school year."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-reveal-group>
            {events.map((event) => (
              <article
                key={event.title}
                className="group rounded-3xl border border-gray-100 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 rounded-2xl flex flex-col items-center justify-center ${event.color}`}>
                    <span className="text-2xl font-extrabold leading-none">{event.day}</span>
                    <span className="text-xs font-bold uppercase">{event.month}</span>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    {event.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-school-dark mb-3 group-hover:text-school-primary transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                <div className="mt-5 flex items-center gap-2 text-xs text-gray-500">
                  <CalendarDays className="h-4 w-4" /> {event.time}
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/campus-life"
              className="inline-flex items-center gap-2 bg-school-dark text-white px-7 py-3 rounded-full font-semibold hover:bg-school-primary transition-colors"
            >
              Explore Campus Life <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-school-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div data-reveal="left">
              <span className="inline-block text-school-primary font-semibold text-sm uppercase tracking-wider mb-3">
                Admissions & School Life
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-school-dark mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Everything you need to know before joining the Gyanda family. Can&apos;t find your
                answer? Our team is always happy to help.
              </p>

              <div className="bg-white rounded-3xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <HeartHandshake className="h-6 w-6 text-school-primary" />
                  <p className="font-bold text-school-dark">Still have questions?</p>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Speak with our admissions team for personalised guidance.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-school-primary font-semibold text-sm hover:gap-3 transition-all"
                >
                  Contact Us <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="space-y-4" data-reveal-group>
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group bg-white rounded-2xl border border-gray-100 px-6 py-5 open:shadow-md transition-shadow"
                >
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-semibold text-school-dark [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <ChevronDown className="h-5 w-5 text-school-primary shrink-0 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="text-gray-600 text-sm leading-relaxed mt-4">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-school-primary rounded-3xl p-12 text-center text-white relative overflow-hidden" data-reveal="zoom">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full blur-2xl" />
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full blur-3xl" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Join Our Community?</h2>
            <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto">
              Join hundreds of inspired girls who are shaping their own futures at Gyanda Girls School.
            </p>
            <Link
              href="/admissions"
              className="bg-school-secondary text-school-dark px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 hover:-translate-y-0.5 active:scale-95 inline-block"
            >
              Start Your Application
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

const SectionHeading = ({ eyebrow, title, description }: SectionHeadingProps) => (
  <div className="text-center max-w-3xl mx-auto mb-16" data-reveal>
    <span className="inline-block text-school-primary font-semibold text-sm uppercase tracking-wider mb-3">
      {eyebrow}
    </span>
    <h2 className="text-3xl md:text-4xl font-bold text-school-dark mb-4">{title}</h2>
    {description && <p className="text-gray-600 text-lg leading-relaxed">{description}</p>}
    <div className="h-1.5 w-20 bg-school-primary mx-auto rounded-full mt-6" />
  </div>
);

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  color: string;
};

const FeatureCard = ({ icon, title, description, color }: FeatureCardProps) => (
  <div className={`p-8 rounded-3xl border border-transparent hover:border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group ${color}`}>
    <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-school-dark mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

export default HomePage;
