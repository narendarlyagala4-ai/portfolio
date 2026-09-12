import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, Copy, Check, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';
import { MagneticButton } from './MagneticButton';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="relative w-full py-24 sm:py-32 px-6 sm:px-12 md:px-16 border-b border-zinc-800 bg-[#09090b]">
      <div className="max-w-7xl mx-auto space-y-14 sm:space-y-16">
        {/* Section Header with 07 Numbering */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-zinc-800 pb-6">
          <div>
            <span className="font-mono text-xs tracking-widest text-cyan-400 uppercase block mb-1">
              07 // GET IN TOUCH
            </span>
            <h2 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl tracking-tight text-white">
              CONTACT
            </h2>
          </div>
          <p className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
            AVAILABLE FOR OPPORTUNITIES & COLLABORATIONS
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Email Card */}
            <div className="p-6 rounded-3xl bg-[#121215] border border-zinc-800 hover:border-cyan-500/40 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 text-cyan-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block">EMAIL</span>
                    <a
                      href="mailto:narendarlyagala4@gmail.com"
                      className="text-sm sm:text-base font-bold text-white hover:text-cyan-300 transition-colors"
                    >
                      narendarlyagala4@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy('narendarlyagala4@gmail.com', 'email')}
                  className="p-2.5 text-zinc-400 hover:text-white rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copiedField === 'email' && (
                <p className="text-[11px] text-emerald-400 font-mono mt-3 text-right">Email copied to clipboard!</p>
              )}
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-3xl bg-[#121215] border border-zinc-800 hover:border-cyan-500/40 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 text-indigo-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block">PHONE</span>
                    <a
                      href="tel:+916302311140"
                      className="text-sm sm:text-base font-bold text-white hover:text-indigo-300 transition-colors"
                    >
                      +91-6302311140
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy('+916302311140', 'phone')}
                  className="p-2.5 text-zinc-400 hover:text-white rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors cursor-pointer"
                  title="Copy phone to clipboard"
                  aria-label="Copy phone number"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copiedField === 'phone' && (
                <p className="text-[11px] text-emerald-400 font-mono mt-3 text-right">Phone copied to clipboard!</p>
              )}
            </div>

            {/* Profiles Card */}
            <div className="p-6 rounded-3xl bg-[#121215] border border-zinc-800">
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block mb-4">
                ONLINE PROFILES
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <a
                  href="https://github.com/narendarlyagala4-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-all flex items-center justify-center sm:justify-start gap-2.5 text-zinc-300 hover:text-white text-xs font-mono font-bold group"
                >
                  <GithubIcon className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors shrink-0" />
                  <span>GITHUB</span>
                </a>

                <a
                  href="https://linkedin.com/in/narendar-lyagala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-all flex items-center justify-center sm:justify-start gap-2.5 text-zinc-300 hover:text-sky-400 text-xs font-mono font-bold group"
                >
                  <LinkedinIcon className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform shrink-0" />
                  <span>LINKEDIN</span>
                </a>

                <a
                  href="https://www.instagram.com/the_stranger._04?stkn=MWpvazltbDB4ZzBhNQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-all flex items-center justify-center sm:justify-start gap-2.5 text-zinc-300 hover:text-pink-400 text-xs font-mono font-bold group"
                >
                  <InstagramIcon className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform shrink-0" />
                  <span>INSTAGRAM</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-[#121215] border border-zinc-800 relative">
              <h3 className="font-display text-2xl font-bold text-white mb-2 flex items-center gap-2.5">
                <MessageSquare className="w-6 h-6 text-cyan-400" />
                Let's Build Something Intelligent.
              </h3>
              <p className="text-zinc-400 font-outfit text-sm mb-8 font-light">
                Interested in AI, machine learning, data science, or building intelligent applications? Leave your details below.
              </p>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-display text-xl font-bold text-white">Message Prepared!</h4>
                  <p className="text-sm font-outfit text-zinc-300 max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>! You can also send this note directly via{' '}
                    <a href={`mailto:narendarlyagala4@gmail.com?subject=Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`} className="text-cyan-400 underline">
                      narendarlyagala4@gmail.com
                    </a>.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="px-5 py-2.5 text-xs font-mono font-bold rounded-full bg-white text-black hover:bg-zinc-200 transition-all cursor-pointer uppercase"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Johnson"
                        className="w-full px-4 py-3 rounded-2xl bg-zinc-900 border border-zinc-800 focus:border-cyan-400 focus:outline-none text-sm text-white placeholder-zinc-500 transition-colors font-outfit"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                        YOUR EMAIL *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-2xl bg-zinc-900 border border-zinc-800 focus:border-cyan-400 focus:outline-none text-sm text-white placeholder-zinc-500 transition-colors font-outfit"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                      YOUR MESSAGE *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Discuss an AI project, internship opportunity, or collaboration..."
                      className="w-full px-4 py-3 rounded-2xl bg-zinc-900 border border-zinc-800 focus:border-cyan-400 focus:outline-none text-sm text-white placeholder-zinc-500 transition-colors font-outfit resize-none"
                    ></textarea>
                  </div>

                  <MagneticButton className="w-full">
                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-full bg-white text-black font-mono font-bold text-xs uppercase tracking-widest hover:bg-zinc-200 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-white/5 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>SEND MESSAGE</span>
                    </button>
                  </MagneticButton>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
