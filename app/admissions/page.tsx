import React from 'react';
import PageHeader from '@/components/PageHeader';
import { ClipboardCheck, UserPlus, FileText, HelpCircle } from 'lucide-react';

const AdmissionsPage = () => {
  return (
    <div>
      <PageHeader
        title="Admissions"
        subtitle="Start your journey towards a bright future with Gyanda Girls School."
      />

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12" data-reveal="left">
            <div>
              <h2 className="text-3xl font-bold mb-6">The Admissions Process</h2>
              <div className="space-y-8" data-reveal-group>
                {[
                  { step: "01", title: "Inquiry", desc: "Fill out the inquiry form to receive a prospectus and schedule a visit.", icon: <HelpCircle /> },
                  { step: "02", title: "Application", desc: "Submit the formal application form along with required documents.", icon: <FileText /> },
                  { step: "03", title: "Assessment", desc: "A friendly interaction and assessment to understand the child's needs.", icon: <ClipboardCheck /> },
                  { step: "04", title: "Admission", desc: "Receive the admission offer and complete the enrollment process.", icon: <UserPlus /> },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                    <div className="text-4xl font-black text-school-primary/20">{item.step}</div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-school-primary">{item.icon}</span>
                        <h4 className="text-xl font-bold">{item.title}</h4>
                      </div>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-school-bg p-8 rounded-3xl border-2 border-dashed border-school-primary/30" data-reveal="right">
            <h3 className="text-2xl font-bold mb-6">Quick Inquiry</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Student Name</label>
                <input type="text" className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-school-primary outline-none" placeholder="Enter full name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Grade Applying For</label>
                <select className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-school-primary outline-none">
                  <option>Grade 1</option>
                  <option>Grade 2</option>
                  <option>Grade 3</option>
                  <option>Grade 4-6</option>
                  <option>Grade 7-10</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Parent Email</label>
                <input type="email" className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-school-primary outline-none" placeholder="email@example.com" />
              </div>
              <button className="w-full bg-school-primary text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all transform hover:scale-105 active:scale-95">
                Request Information
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionsPage;
