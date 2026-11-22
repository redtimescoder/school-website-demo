import React from 'react';
import PageHeader from '@/components/PageHeader';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  return (
    <div>
      <PageHeader
        title="Get In Touch"
        subtitle="We are here to answer your questions and guide you."
      />

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8" data-reveal="left">
            <h2 className="text-3xl font-bold text-school-dark">Contact Information</h2>
            <p className="text-gray-600 leading-relaxed">
              Whether you are a prospective parent, a current student, or an alumnus, we would love to hear from you.
              Our administrative office is open Monday to Friday, 8:00 AM to 4:00 PM.
            </p>

            <div className="space-y-6" data-reveal-group>
              <div className="group flex items-center gap-4 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="p-3 bg-school-primary/10 rounded-full text-school-primary transition-transform duration-300 group-hover:scale-110"><Phone className="h-6 w-6" /></div>
                <div><h4 className="font-bold">Phone</h4><p className="text-gray-600">+91 123 456 7890</p></div>
              </div>
              <div className="group flex items-center gap-4 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="p-3 bg-school-accent/10 rounded-full text-school-accent transition-transform duration-300 group-hover:scale-110"><Mail className="h-6 w-6" /></div>
                <div><h4 className="font-bold">Email</h4><p className="text-gray-600">info@gyandagirls.com</p></div>
              </div>
              <div className="group flex items-center gap-4 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="p-3 bg-school-secondary/10 rounded-full text-school-secondary transition-transform duration-300 group-hover:scale-110"><MapPin className="h-6 w-6" /></div>
                <div><h4 className="font-bold">Address</h4><p className="text-gray-600">School Campus, Main Road, Your City, State</p></div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100" data-reveal="right">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input type="text" className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-school-primary outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input type="text" className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-school-primary outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-school-primary outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows={4} className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-school-primary outline-none"></textarea>
              </div>
              <button className="w-full bg-school-primary text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all transform hover:scale-105 active:scale-95">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
