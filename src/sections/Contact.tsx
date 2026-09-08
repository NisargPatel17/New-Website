import { useState, useRef } from 'react';
import { useReveal } from '../hooks/useReveal';

const PROJECT_TYPES = [
  'Residential Architecture',
  'Commercial Spaces',
  'Interior Design',
  'Healthcare Design',
  'Institutional Architecture',
  'Landscape Design',
  '3D Visualisation',
  'Other',
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  location: string;
  area: string;
  budget: string;
  message: string;
}

type FieldStatus = 'idle' | 'error' | 'success';

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const visible = useReveal(ref);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    location: '',
    area: '',
    budget: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = () => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Valid email is required';
    if (!form.phone.trim()) newErrors.phone = 'Phone is required';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    try {
      await fetch('https://formsubmit.co/ajax/visionaryarchitects.va@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          Name: form.name,
          Email: form.email,
          Phone: form.phone,
          'Project Type': form.projectType || 'Not specified',
          Location: form.location || 'Not specified',
          Area: form.area || 'Not specified',
          Budget: form.budget || 'Not specified',
          Message: form.message,
          _subject: `New Architectural Enquiry: ${form.name}`,
          _template: 'table',
        }),
      });
    } catch (err) {
      console.error('Form submission error:', err);
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  const fieldStatus = (key: keyof FormState): FieldStatus => {
    if (errors[key]) return 'error';
    if (form[key] && !errors[key]) return 'success';
    return 'idle';
  };

  const inputClass = (key: keyof FormState) => {
    const status = fieldStatus(key);
    const base =
      'w-full bg-transparent border-b text-ivory placeholder-ivory/30 text-sm font-sans font-light py-3 outline-none transition-all duration-300 tracking-wide focus:placeholder-ivory/10';
    if (status === 'error') return `${base} border-red-400/60 focus:border-red-400`;
    if (status === 'success') return `${base} border-ivory/30 focus:border-ivory/60`;
    return `${base} border-white/20 focus:border-ivory/50`;
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="bg-charcoal py-24 md:py-36 lg:py-44 relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Architectural line decoration */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <rect x="60" y="60" width="300" height="500" stroke="#F2EEE8" strokeWidth="0.5" fill="none" />
        <rect x="1080" y="200" width="300" height="400" stroke="#F2EEE8" strokeWidth="0.5" fill="none" />
        <line x1="0" y1="450" x2="1440" y2="450" stroke="#F2EEE8" strokeWidth="0.5" />
      </svg>

      <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Heading column */}
          <div
            className={`lg:col-span-5 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {/* <p className="text-warm-gray text-[10px] font-sans font-medium tracking-[0.22em] uppercase mb-8">
              09 — Contact
            </p> */}

            <h2
              id="contact-heading"
              className="font-serif text-ivory leading-[0.95] mb-10"
              style={{ fontSize: 'clamp(40px, 6vw, 88px)' }}
            >
              {"Let's Build &"}
              <br />
              <span className="italic">Create Your</span>
              <br />
              Space.
            </h2>

            <div className="w-8 h-px bg-warm-gray mb-8" />

            <p className="text-ivory/60 font-sans font-light text-sm leading-loose mb-12 tracking-wide max-w-xs">
              Welcome to Visionary Architects. Have a project in mind? Tell us about your space, your vision and what you want to create.
            </p>

            {/* Studio info */}
            <div className="space-y-6">
              <div>
                <p className="text-warm-gray text-[9px] font-sans tracking-[0.22em] uppercase mb-2">
                  Visit Our Studio
                </p>
                <address className="not-italic text-ivory/70 font-sans font-light text-sm leading-relaxed tracking-wide">
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
                  className="inline-flex items-center gap-2 text-warm-gray text-[9px] font-sans tracking-[0.18em] uppercase mt-4 hover:text-ivory transition-colors duration-300 group"
                >
                  Get Directions
                  <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
                </a>
              </div>

              <div>
                <p className="text-warm-gray text-[9px] font-sans tracking-[0.22em] uppercase mb-2">Email Us</p>
                <a
                  href="mailto:visionaryarchitects.va@gmail.com"
                  className="text-ivory/80 font-sans text-sm tracking-wide hover:text-ivory transition-colors duration-300"
                >
                  visionaryarchitects.va@gmail.com
                </a>
              </div>

              <div>
                <p className="text-warm-gray text-[9px] font-sans tracking-[0.22em] uppercase mb-2">Call Us</p>
                <a
                  href="tel:+917984631148"
                  className="text-ivory/80 font-sans text-sm tracking-wide hover:text-ivory transition-colors duration-300"
                >
                  +91 79846 31148
                </a>
              </div>

              <div>
                <p className="text-warm-gray text-[9px] font-sans tracking-[0.22em] uppercase mb-2">Instagram</p>
                <a
                  href="https://www.instagram.com/visionaryarchitects_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ivory/70 font-sans text-sm tracking-wide hover:text-ivory transition-colors duration-300"
                >
                  @visionaryarchitects_
                </a>
              </div>
            </div>
          </div>

          {/* Form column */}
          <div
            className={`lg:col-span-6 lg:col-start-7 transition-all duration-1000 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {submitted ? (
              <div className="h-full flex flex-col items-start justify-center py-20">
                <div className="w-12 h-12 border border-ivory/30 flex items-center justify-center mb-8">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10L8 14L16 6" stroke="#F2EEE8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-serif text-ivory text-3xl mb-4">Enquiry Received</h3>
                <p className="text-ivory/40 font-sans font-light text-sm leading-relaxed tracking-wide max-w-xs">
                  Thank you for reaching out. We will review your enquiry and be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Project enquiry form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 mb-8">
                  {/* Full Name */}
                  <div className="md:col-span-2">
                    <label htmlFor="name" className="block text-ivory/30 text-[9px] font-sans tracking-[0.2em] uppercase mb-2">
                      Full Name <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: '' }); }}
                      className={inputClass('name')}
                      placeholder="Your full name"
                      aria-required="true"
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && <p id="name-error" className="text-red-400/70 text-[9px] font-sans mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-ivory/30 text-[9px] font-sans tracking-[0.2em] uppercase mb-2">
                      Email <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: '' }); }}
                      className={inputClass('email')}
                      placeholder="your@email.com"
                      aria-required="true"
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && <p id="email-error" className="text-red-400/70 text-[9px] font-sans mt-1">{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-ivory/30 text-[9px] font-sans tracking-[0.2em] uppercase mb-2">
                      Phone <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) => { setForm({ ...form, phone: e.target.value }); setErrors({ ...errors, phone: '' }); }}
                      className={inputClass('phone')}
                      placeholder="+91 00000 00000"
                      aria-required="true"
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                    />
                    {errors.phone && <p id="phone-error" className="text-red-400/70 text-[9px] font-sans mt-1">{errors.phone}</p>}
                  </div>

                  {/* Project Type */}
                  <div>
                    <label htmlFor="projectType" className="block text-ivory/30 text-[9px] font-sans tracking-[0.2em] uppercase mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      value={form.projectType}
                      onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                      className="w-full bg-transparent border-b border-white/20 text-ivory text-sm font-sans font-light py-3 outline-none transition-all duration-300 focus:border-ivory/50 cursor-pointer appearance-none tracking-wide"
                      style={{ color: form.projectType ? '#F2EEE8' : 'rgba(242,238,232,0.3)' }}
                    >
                      <option value="" className="bg-charcoal text-ivory/50">Select service type</option>
                      {PROJECT_TYPES.map((t) => (
                        <option key={t} value={t} className="bg-charcoal text-ivory">{t}</option>
                      ))}
                    </select>
                  </div>

                  {/* Project Location */}
                  <div>
                    <label htmlFor="location" className="block text-ivory/30 text-[9px] font-sans tracking-[0.2em] uppercase mb-2">
                      Project Location
                    </label>
                    <input
                      id="location"
                      type="text"
                      value={form.location}
                      onChange={(e) => setForm({ ...form, location: e.target.value })}
                      className={inputClass('location')}
                      placeholder="City, State"
                      autoComplete="off"
                    />
                  </div>

                  {/* Approximate Area */}
                  <div>
                    <label htmlFor="area" className="block text-ivory/30 text-[9px] font-sans tracking-[0.2em] uppercase mb-2">
                      Approximate Area
                    </label>
                    <input
                      id="area"
                      type="text"
                      value={form.area}
                      onChange={(e) => setForm({ ...form, area: e.target.value })}
                      className={inputClass('area')}
                      placeholder="e.g. 2500 sq ft"
                    />
                  </div>

                  {/* Budget Range */}
                  <div>
                    <label htmlFor="budget" className="block text-ivory/30 text-[9px] font-sans tracking-[0.2em] uppercase mb-2">
                      Budget Range
                    </label>
                    <input
                      id="budget"
                      type="text"
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      className={inputClass('budget')}
                      placeholder="e.g. ₹50L – ₹1Cr"
                    />
                  </div>

                  {/* Message */}
                  <div className="md:col-span-2">
                    <label htmlFor="message" className="block text-ivory/30 text-[9px] font-sans tracking-[0.2em] uppercase mb-2">
                      Message <span aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: '' }); }}
                      className={`${inputClass('message')} resize-none`}
                      placeholder="Tell us about your project — what you want to create, your vision, your space."
                      aria-required="true"
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && <p id="message-error" className="text-red-400/70 text-[9px] font-sans mt-1">{errors.message}</p>}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-3 border border-ivory/40 text-ivory text-[10px] font-sans font-medium tracking-[0.2em] uppercase px-8 py-4 hover:bg-ivory hover:text-charcoal transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-ivory/50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Sending...' : 'Send Enquiry'}
                  <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
                </button>

                <p className="text-ivory/20 text-[9px] font-sans tracking-[0.1em] mt-4">
                  * Required fields. We respond within 2 business days.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
