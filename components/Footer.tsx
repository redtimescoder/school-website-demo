import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-school-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12" data-reveal-group>
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold tracking-tight">
                GYANDA <span className="text-school-secondary">GIRLS</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Dedicated to nurturing curiosity, confidence, and character in every girl. Building a foundation for lifelong learning and leadership.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full transition-all duration-300 hover:bg-school-primary hover:-translate-y-1"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="p-2 bg-gray-800 rounded-full transition-all duration-300 hover:bg-school-primary hover:-translate-y-1"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="p-2 bg-gray-800 rounded-full transition-all duration-300 hover:bg-school-primary hover:-translate-y-1"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 border-b-2 border-school-primary w-fit">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/academics" className="hover:text-white transition-colors">Academics</Link></li>
              <li><Link href="/admissions" className="hover:text-white transition-colors">Admissions</Link></li>
              <li><Link href="/campus-life" className="hover:text-white transition-colors">Campus Life</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 border-b-2 border-school-primary w-fit">Resources</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Academic Calendar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Student Portal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Parent Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 border-b-2 border-school-primary w-fit">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-school-secondary shrink-0" />
                <span>School Campus, Main Road, Your City, State, ZIP</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-school-secondary shrink-0" />
                <span>+91 123 456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-school-secondary shrink-0" />
                <span>info@gyandagirls.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm" data-reveal>
          © {new Date().getFullYear()} Gyanda Girls School. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
