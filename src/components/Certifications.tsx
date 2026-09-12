import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certificationsData } from '../data/certifications';
import type { CertificationItem } from '../types';
import {
  Award,
  CheckCircle2,
  ShieldCheck,
  Upload,
  Plus,
  X,
  FileText,
  Trash2,
  Eye,
  ExternalLink,
  Download
} from 'lucide-react';
import { MagneticButton } from './MagneticButton';

const STORAGE_KEY = 'narendar_uploaded_certificates';

export const Certifications: React.FC = () => {
  const [certs, setCerts] = useState<CertificationItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed: CertificationItem[] = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const customOnly = parsed.filter(c => c.isCustom);
          return [...certificationsData, ...customOnly];
        }
      }
    } catch {
      // Fallback to base data if parsing error
    }
    return certificationsData;
  });
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  // Form states for uploading
  const [title, setTitle] = useState('');
  const [issuer, setIssuer] = useState('');
  const [skills, setSkills] = useState('');
  const [fileData, setFileData] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMsg('');
    const file = e.target.files?.[0];
    if (!file) return;

    // Check size limit (max 8MB for localStorage safety)
    if (file.size > 8 * 1024 * 1024) {
      setErrorMsg('File size must be under 8MB.');
      return;
    }

    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = () => {
      setFileData(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSaveCertificate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !issuer.trim()) {
      setErrorMsg('Please enter both Certificate Title and Issuing Organization.');
      return;
    }

    const skillsArray = skills
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);

    const newCert: CertificationItem = {
      id: `custom-${Date.now()}`,
      title: title.trim(),
      issuer: issuer.trim(),
      skillsCovered: skillsArray.length > 0 ? skillsArray : ['Emerging Technologies', 'Applied Skills'],
      badgeColor: 'from-cyan-500/20 to-indigo-500/20',
      fileData: fileData || undefined,
      fileName: fileName || undefined,
      isCustom: true,
    };

    const updated = [...certs, newCert];
    setCerts(updated);

    // Persist custom certs
    const customOnly = updated.filter(c => c.isCustom);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(customOnly));
    } catch {
      // Storage quota exceeded fallback
    }

    // Reset form
    setTitle('');
    setIssuer('');
    setSkills('');
    setFileData(null);
    setFileName('');
    setIsUploadOpen(false);
  };

  const handleDeleteCert = (id?: string) => {
    if (!id) return;
    const filtered = certs.filter(c => c.id !== id);
    setCerts(filtered);
    const customOnly = filtered.filter(c => c.isCustom);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(customOnly));
    if (selectedCert?.id === id) {
      setSelectedCert(null);
    }
  };

  return (
    <section id="certificates" className="relative w-full py-24 sm:py-32 px-6 sm:px-12 md:px-16 border-b border-zinc-800 bg-[#09090b]">
      <div className="max-w-7xl mx-auto space-y-14 sm:space-y-16">
        {/* Section Header with 04 Numbering */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 border-b border-zinc-800 pb-6">
          <div>
            <span className="font-mono text-xs tracking-widest text-cyan-400 uppercase block mb-1">
              04 // CREDENTIALS & SPECIALIZATIONS
            </span>
            <h2 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl tracking-tight text-white">
              CERTIFICATES
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <MagneticButton>
              <button
                onClick={() => setIsUploadOpen(true)}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono tracking-wider uppercase font-bold transition-all shadow-sm cursor-pointer"
              >
                <Upload className="w-4 h-4 text-cyan-400" />
                <span>UPLOAD CERTIFICATE</span>
              </button>
            </MagneticButton>
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, idx) => (
            <motion.div
              key={cert.id || cert.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-7 sm:p-8 rounded-3xl bg-[#121215] border border-zinc-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-zinc-900 border border-zinc-700 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:text-white transition-all">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-2">
                    {cert.isCustom && (
                      <button
                        onClick={() => handleDeleteCert(cert.id)}
                        className="p-1.5 rounded-lg text-zinc-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                        title="Delete certificate"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                    <span className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Verified
                    </span>
                  </div>
                </div>

                {/* Certificate Visual Preview Thumbnail */}
                {cert.fileData && (
                  <div
                    onClick={() => setSelectedCert(cert)}
                    className="mb-5 rounded-2xl overflow-hidden border border-zinc-800 bg-black/40 h-36 relative group/thumb cursor-pointer hover:border-cyan-500/40 transition-all"
                  >
                    {cert.fileData.toLowerCase().includes('.pdf') || cert.fileData.startsWith('data:application/pdf') ? (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#13141f] to-[#0c0d12] text-zinc-300 gap-2 p-3 text-center">
                        <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30">
                          <FileText className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-mono font-bold text-white">Official PDF Credential</span>
                        <span className="text-[10px] font-mono text-cyan-400 flex items-center gap-1">
                          <Eye className="w-3 h-3" /> Click to view document
                        </span>
                      </div>
                    ) : (
                      <div className="w-full h-full relative">
                        <img
                          src={cert.fileData}
                          alt={cert.title}
                          className="w-full h-full object-cover object-top filter brightness-90 group-hover/thumb:brightness-100 group-hover/thumb:scale-105 transition-all duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#121215] via-black/20 to-transparent"></div>
                        <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-full bg-black/80 backdrop-blur-sm border border-zinc-700 text-[10px] font-mono text-cyan-400 flex items-center gap-1">
                          <Eye className="w-3 h-3" /> View Document
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <h3 className="font-display text-xl font-bold text-white mb-2 leading-snug group-hover:text-cyan-300 transition-colors">
                  {cert.title}
                </h3>

                <p className="font-mono text-xs text-cyan-400 uppercase tracking-wider font-semibold mb-5">
                  {cert.issuer}
                </p>

                <div className="space-y-2 mb-6">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block mb-2">
                    CORE COMPETENCIES
                  </span>
                  {cert.skillsCovered.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2.5 text-xs text-zinc-300 font-outfit">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider truncate max-w-[120px]">
                  {cert.fileName ? cert.fileName : 'Verified Certificate'}
                </span>

                <button
                  onClick={() => setSelectedCert(cert)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 hover:scale-105 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-cyan-400" />
                  <span>VIEW CERTIFICATE</span>
                </button>
              </div>
            </motion.div>
          ))}

          {/* Dashed Add New Certificate Card in Grid */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={() => setIsUploadOpen(true)}
            className="p-8 rounded-3xl border-2 border-dashed border-zinc-800 hover:border-cyan-500/50 bg-[#121215]/40 hover:bg-[#121215] transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer group min-h-[320px]"
          >
            <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-400 group-hover:text-cyan-400 group-hover:border-cyan-500/40 group-hover:scale-110 transition-all mb-4">
              <Plus className="w-7 h-7" />
            </div>
            <h4 className="font-display text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
              Upload Certificate
            </h4>
            <p className="font-outfit text-xs text-zinc-400 max-w-xs font-light">
              Add your accredited course certificates, program completion letters, or specialization diplomas.
            </p>
          </motion.div>
        </div>
      </div>

      {/* UPLOAD MODAL */}
      <AnimatePresence>
        {isUploadOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsUploadOpen(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              role="dialog"
              aria-modal="true"
              className="relative w-full max-w-xl bg-[#0c0d12] border border-zinc-800 rounded-3xl shadow-2xl p-6 sm:p-8 z-10 space-y-6"
            >
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Upload className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">Upload Certificate</h3>
                    <p className="text-xs font-mono text-zinc-400">PDF or Images (JPG, PNG, WebP)</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsUploadOpen(false)}
                  className="p-2 text-zinc-400 hover:text-white bg-zinc-900 rounded-xl border border-zinc-700 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {errorMsg && (
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs font-mono text-rose-300">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSaveCertificate} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                    Certificate Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Deep Learning Specialization"
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-cyan-400 focus:outline-none text-sm text-white placeholder-zinc-500 font-outfit"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                    Issuing Organization / Platform *
                  </label>
                  <input
                    type="text"
                    required
                    value={issuer}
                    onChange={(e) => setIssuer(e.target.value)}
                    placeholder="e.g. Coursera / Stanford, AWS, NPTEL"
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-cyan-400 focus:outline-none text-sm text-white placeholder-zinc-500 font-outfit"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                    Key Competencies / Skills (Comma separated)
                  </label>
                  <input
                    type="text"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    placeholder="e.g. Neural Networks, PyTorch, Model Optimization"
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-cyan-400 focus:outline-none text-sm text-white placeholder-zinc-500 font-outfit"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                    Upload Certificate Document / Image
                  </label>
                  <div className="relative border-2 border-dashed border-zinc-800 hover:border-cyan-500/40 rounded-2xl p-6 text-center cursor-pointer bg-zinc-900/30">
                    <input
                      type="file"
                      accept=".pdf,image/png,image/jpeg,image/webp"
                      onChange={handleFileChange}
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    />
                    <FileText className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                    <p className="text-xs font-mono text-zinc-200">
                      {fileName ? (
                        <span className="text-emerald-400 font-bold">{fileName}</span>
                      ) : (
                        'Click to browse or drag & drop PDF, PNG, JPG'
                      )}
                    </p>
                    <p className="text-[10px] text-zinc-500 mt-1">Up to 8MB</p>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsUploadOpen(false)}
                    className="px-5 py-2.5 text-xs font-mono uppercase rounded-full text-zinc-400 hover:text-white border border-zinc-800 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 text-xs font-mono font-bold uppercase rounded-full bg-white text-black hover:bg-zinc-200 transition-colors cursor-pointer"
                  >
                    Save Certificate
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* CERTIFICATE PREVIEW MODAL */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              role="dialog"
              aria-modal="true"
              className="relative w-full max-w-4xl bg-[#0c0d12] border border-zinc-800 rounded-3xl shadow-2xl p-6 sm:p-8 z-10 space-y-6 overflow-hidden max-h-[92vh] flex flex-col"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-800 pb-4 gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20 font-bold">
                      OFFICIAL VERIFIED CREDENTIAL
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">{selectedCert.title}</h3>
                  <p className="text-xs font-mono text-cyan-400 mt-0.5">{selectedCert.issuer}</p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  {selectedCert.fileData && (
                    <a
                      href={selectedCert.fileData}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer shadow-md shadow-cyan-500/20"
                    >
                      <span>OPEN FULL DOCUMENT</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-2 text-zinc-400 hover:text-white bg-zinc-900 rounded-xl border border-zinc-700 cursor-pointer"
                    aria-label="Close certificate viewer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Preview Body */}
              <div className="overflow-y-auto flex-1 space-y-6">
                {selectedCert.fileData ? (
                  <div className="rounded-2xl border border-zinc-800 overflow-hidden bg-black/80 flex items-center justify-center min-h-[400px] p-2 sm:p-4">
                    {selectedCert.fileData.toLowerCase().includes('.pdf') || selectedCert.fileData.startsWith('data:application/pdf') ? (
                      <iframe
                        src={selectedCert.fileData}
                        title={selectedCert.title}
                        className="w-full h-[620px] border-0 rounded-xl bg-zinc-900"
                      />
                    ) : (
                      <img
                        src={selectedCert.fileData}
                        alt={selectedCert.title}
                        className="max-h-[620px] max-w-full object-contain rounded-xl shadow-2xl shadow-black/80"
                      />
                    )}
                  </div>
                ) : (
                  <div className="p-8 rounded-3xl bg-[#121215] border border-zinc-800 text-center space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center mx-auto">
                      <Award className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="font-display text-xl font-bold text-white">{selectedCert.title}</h4>
                      <p className="text-sm font-mono text-cyan-400">{selectedCert.issuer}</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2 pt-2">
                      {selectedCert.skillsCovered.map((s, idx) => (
                        <span key={idx} className="px-3 py-1 text-xs font-mono rounded bg-zinc-900 text-zinc-300 border border-zinc-800">
                          {s}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs font-outfit text-zinc-400 font-light max-w-md mx-auto pt-2">
                      Official accreditation earned following comprehensive curriculum mastery and practical evaluation.
                    </p>
                  </div>
                )}
              </div>

              <div className="border-t border-zinc-800 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-zinc-500">Narendar Lyagala • Verified Portfolio</span>
                  {selectedCert.fileData && (
                    <a
                      href={selectedCert.fileData}
                      download={selectedCert.fileName || 'certificate'}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 underline"
                    >
                      <Download className="w-3 h-3" />
                      <span>Download File</span>
                    </a>
                  )}
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-6 py-2 rounded-full bg-white text-black text-xs font-mono font-bold uppercase hover:bg-zinc-200 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
