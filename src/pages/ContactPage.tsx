import { useState } from 'react';
import VALogo from '../components/VALogo';

const PROJECT_TYPES = [
  'Residential Architecture',
  'Commercial Spaces',
  'Interior Design',
  'Healthcare Architecture',
  'Institutional Architecture',
  'Landscape Design',
  '3D Visualization & Rendering',
  'Other Custom Brief',
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    location: '',
    area: '',
    budget: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Valid email is required';
    if (!form.phone.trim()) errs.phone = 'Phone number is required';
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="bg-charcoal text-ivory pt-32 pb-24 md:pt-40 md:pb-36 min-h-screen">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16">
        {/* Header */}
        <div className="mb-16 border-b border-white/10 pb-12">
          <p className="text-amber-400 text-[10px] font-sans font-medium tracking-[0.25em] uppercase mb-4">
            09 — Project Consultation &amp; Proposal
          </p>
          <h1
            className="font-serif text-ivory leading-none mb-6"
            style={{ fontSize: 'clamp(42px, 6vw, 88px)' }}
          >
            {"Let's Build &"}
            <br />
            <span className="italic text-stone">Create Your</span> Space.
          </h1>
          <p className="text-ivory/60 font-sans font-light text-base md:text-lg max-w-2xl leading-relaxed tracking-wide">
            Have a project in mind? Tell us about your site, your vision, your timeline, and your architectural goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
          {/* Left Column: Direct Studio Information */}
          <div className="lg:col-span-5 space-y-10">
            <div className="bg-espresso p-8 border-l-4 border-amber-500 shadow-lg space-y-4">
              <VALogo size={32} color="#F2EEE8" />
              <p className="text-amber-400 text-[10px] font-sans font-semibold tracking-[0.2em] uppercase">
                Founder &amp; CEO
              </p>
              <p className="font-serif text-3xl text-ivory">Pathik Chandarana</p>
              <p className="text-ivory/60 font-sans text-xs uppercase tracking-widest">
                Visionary Architects · Principal Studio
              </p>
            </div>

            <div className="space-y-6 text-sm font-sans">
              <div className="p-6 bg-stone/5 border border-white/10">
                <p className="text-amber-400 text-[9px] tracking-[0.2em] uppercase mb-2">Visit Our Studio</p>
                <address className="not-italic text-ivory/80 leading-relaxed font-light">
                  Visionary Architects
                  <br />
                  1209, Satyamev Eminence
                  <br />
                  Science City, Ahmedabad – 380060
                  <br />
                  Gujarat, India
                </address>
                <a
                  href="https://maps.google.com/?q=1209+Satyamev+Eminence+Science+City+Ahmedabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-amber-400 text-[10px] tracking-[0.2em] uppercase mt-4 hover:text-ivory transition-colors"
                >
                  Open in Google Maps →
                </a>
              </div>

              <div className="p-6 bg-stone/5 border border-white/10 space-y-4">
                <div>
                  <p className="text-warm-gray text-[9px] tracking-[0.2em] uppercase mb-1">Direct Call</p>
                  <a href="tel:+917984631148" className="text-ivory text-base font-serif hover:text-amber-400 transition-colors">
                    +91 79846 31148
                  </a>
                </div>

                <div>
                  <p className="text-warm-gray text-[9px] tracking-[0.2em] uppercase mb-1">Email Enquiry</p>
                  <a href="mailto:visionaryarchitects.va@gmail.com" className="text-ivory text-base font-serif hover:text-amber-400 transition-colors">
                    visionaryarchitects.va@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-warm-gray text-[9px] tracking-[0.2em] uppercase mb-1">Instagram Feed</p>
                  <a href="https://www.instagram.com/visionaryarchitects_/" target="_blank" rel="noopener noreferrer" className="text-ivory text-xs font-sans hover:text-amber-400 transition-colors">
                    @visionaryarchitects_
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Project Proposal Request Form */}
          <div className="lg:col-span-7 bg-stone/5 border border-white/10 p-8 md:p-12">
            {submitted ? (
              <div className="py-16 text-center">
                <div className="w-16 h-16 rounded-full border border-amber-500 flex items-center justify-center mx-auto mb-6">
                  <span className="text-amber-400 text-2xl">✓</span>
                </div>
                <h3 className="font-serif text-3xl text-ivory mb-4">Project Brief Received</h3>
                <p className="text-ivory/60 font-sans font-light text-sm max-w-md mx-auto leading-relaxed mb-8">
                  Thank you for contacting Visionary Architects. Founder Pathik Chandarana and our senior architectural associates will review your details and respond within 2 business days.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="border border-ivory/40 text-ivory text-[10px] font-sans tracking-[0.2em] uppercase px-6 py-3 hover:bg-ivory hover:text-charcoal transition-all"
                >
                  Submit Another Brief
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Project Consultation Form" className="space-y-6">
                <h3 className="font-serif text-2xl text-ivory mb-2">Request a Customized Proposal</h3>
                <p className="text-ivory/50 font-sans font-light text-xs mb-8">
                  Please provide details about your project to help us prepare an initial consultancy overview.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="sm:col-span-2">
                    <label className="block text-ivory/40 text-[9px] font-sans tracking-[0.2em] uppercase mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: '' }); }}
                      placeholder="Your full name"
                      className="w-full bg-transparent border-b border-white/20 text-ivory text-sm font-sans py-3 outline-none focus:border-amber-400"
                    />
                    {errors.name && <span className="text-red-400 text-[10px] mt-1 block">{errors.name}</span>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-ivory/40 text-[9px] font-sans tracking-[0.2em] uppercase mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: '' }); }}
                      placeholder="your@email.com"
                      className="w-full bg-transparent border-b border-white/20 text-ivory text-sm font-sans py-3 outline-none focus:border-amber-400"
                    />
                    {errors.email && <span className="text-red-400 text-[10px] mt-1 block">{errors.email}</span>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-ivory/40 text-[9px] font-sans tracking-[0.2em] uppercase mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => { setForm({ ...form, phone: e.target.value }); setErrors({ ...errors, phone: '' }); }}
                      placeholder="+91 00000 00000"
                      className="w-full bg-transparent border-b border-white/20 text-ivory text-sm font-sans py-3 outline-none focus:border-amber-400"
                    />
                    {errors.phone && <span className="text-red-400 text-[10px] mt-1 block">{errors.phone}</span>}
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-ivory/40 text-[9px] font-sans tracking-[0.2em] uppercase mb-2">
                      Discipline Service
                    </label>
                    <select
                      value={form.projectType}
                      onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                      className="w-full bg-charcoal border-b border-white/20 text-ivory text-sm font-sans py-3 outline-none focus:border-amber-400"
                    >
                      <option value="">Select Project Service</option>
                      {PROJECT_TYPES.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-ivory/40 text-[9px] font-sans tracking-[0.2em] uppercase mb-2">
                      Project Location
                    </label>
                    <input
                      type="text"
                      value={form.location}
                      onChange={(e) => setForm({ ...form, location: e.target.value })}
                      placeholder="City, State"
                      className="w-full bg-transparent border-b border-white/20 text-ivory text-sm font-sans py-3 outline-none focus:border-amber-400"
                    />
                  </div>

                  {/* Built Area */}
                  <div>
                    <label className="block text-ivory/40 text-[9px] font-sans tracking-[0.2em] uppercase mb-2">
                      Approximate Area
                    </label>
                    <input
                      type="text"
                      value={form.area}
                      onChange={(e) => setForm({ ...form, area: e.target.value })}
                      placeholder="e.g. 4,500 sq ft"
                      className="w-full bg-transparent border-b border-white/20 text-ivory text-sm font-sans py-3 outline-none focus:border-amber-400"
                    />
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-ivory/40 text-[9px] font-sans tracking-[0.2em] uppercase mb-2">
                      Budget Range
                    </label>
                    <input
                      type="text"
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      placeholder="e.g. ₹75L – ₹1.5Cr"
                      className="w-full bg-transparent border-b border-white/20 text-ivory text-sm font-sans py-3 outline-none focus:border-amber-400"
                    />
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <label className="block text-ivory/40 text-[9px] font-sans tracking-[0.2em] uppercase mb-2">
                      Project Vision &amp; Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={form.message}
                      onChange={(e) => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: '' }); }}
                      placeholder="Describe your project — space requirements, site conditions, desired aesthetic..."
                      className="w-full bg-transparent border-b border-white/20 text-ivory text-sm font-sans py-3 outline-none focus:border-amber-400 resize-none"
                    />
                    {errors.message && <span className="text-red-400 text-[10px] mt-1 block">{errors.message}</span>}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-amber-600 text-ivory font-sans text-[10px] font-medium tracking-[0.2em] uppercase px-8 py-4 hover:bg-amber-500 transition-colors"
                >
                  Send Proposal Request <span aria-hidden="true">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
