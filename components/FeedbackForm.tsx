
import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, AlertCircle, X } from 'lucide-react';

const FeedbackForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [errors, setErrors] = useState({ name: '', phone: '', message: '' });
  const [touched, setTouched] = useState({ name: false, phone: false, message: false });

  const validateField = (name: string, value: string) => {
    let error = '';
    if (name === 'name') {
      if (value.length === 0) error = 'নাম প্রয়োজন';
      else if (value.length < 3) error = 'নাম অন্তত ৩ অক্ষরের হতে হবে';
      // Basic check for letters and spaces (Bengali and English)
      else if (!/^[A-Za-z\u0980-\u09FF\s]+$/.test(value)) error = 'নামে শুধুমাত্র অক্ষর ব্যবহার করুন';
    }
    if (name === 'phone') {
      const phoneRegex = /^01[3-9]\d{8}$/;
      if (value.length === 0) error = 'ফোন নম্বর প্রয়োজন';
      else if (!phoneRegex.test(value)) error = 'সঠিক বাংলাদেশী ফোন নম্বর দিন (যেমন: 01712345678)';
    }
    if (name === 'message') {
      if (value.length === 0) error = 'মেসেজ প্রয়োজন';
      else if (value.length < 10) error = 'মেসেজ অন্তত ১০ অক্ষরের হতে হবে';
    }
    setErrors(prev => ({ ...prev, [name]: error }));
    return error === '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    let processedValue = value;
    if (name === 'name') {
      // Real-time filtering to accept only letters and spaces
      processedValue = value.replace(/[^A-Za-z\u0980-\u09FF\s]/g, '');
    }

    setFormData(prev => ({ ...prev, [name]: processedValue }));
    
    if (touched[name as keyof typeof touched]) {
      validateField(name, processedValue);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    validateField(name, value);
  };

  const dismissError = (name: keyof typeof errors) => {
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fields = ['name', 'phone', 'message'] as const;
    const isTouched = { name: true, phone: true, message: true };
    setTouched(isTouched);
    
    const isValid = fields.every(field => validateField(field, formData[field]));
    
    if (isValid) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
      }, 1500);
    }
  };

  return (
    <section id="feedback" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-10 md:p-14 shadow-2xl border border-slate-100 dark:border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
          
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-4xl font-black mb-4 dark:text-white">আপনার মতামত দিন</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">কোর্স সম্পর্কে কিছু জানার থাকলে আমাদের লিখে জানান।</p>
          </div>

          {submitted ? (
            <div className="text-center py-16 animate-fade-in">
              <div className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-accent/10 text-accent mb-8">
                <CheckCircle size={56} />
              </div>
              <h3 className="text-3xl font-black mb-4 dark:text-white">সফল হয়েছে!</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg">আমরা শীঘ্রই আপনার সাথে যোগাযোগ করবো।</p>
              <button 
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', phone: '', message: '' });
                  setTouched({ name: false, phone: false, message: false });
                  setErrors({ name: '', phone: '', message: '' });
                }}
                className="mt-10 text-accent font-black hover:underline text-lg"
              >
                নতুন একটি মেসেজ পাঠান
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-sm font-black text-slate-700 dark:text-slate-300 ml-1">আপনার নাম</label>
                  <input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-6 py-5 rounded-3xl border bg-slate-50 dark:bg-slate-800/50 outline-none transition-all duration-300 shadow-sm ${
                      errors.name 
                      ? 'border-red-500 focus:ring-4 focus:ring-red-500/10' 
                      : 'border-slate-100 dark:border-slate-700 focus:border-accent focus:ring-4 focus:ring-accent/15'
                    } dark:text-white`}
                    placeholder="নাম লিখুন (অক্ষর ও স্পেস)"
                  />
                  {errors.name && (
                    <div className="flex items-center justify-between text-red-500 text-xs font-bold bg-red-50 dark:bg-red-950/20 px-3 py-2 rounded-xl animate-fade-in border border-red-100 dark:border-red-900/30">
                      <div className="flex items-center gap-1.5">
                        <AlertCircle size={14} /> 
                        {errors.name}
                      </div>
                      <button 
                        type="button" 
                        onClick={() => dismissError('name')}
                        className="hover:bg-red-100 dark:hover:bg-red-900/40 p-1 rounded-full transition-colors"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-black text-slate-700 dark:text-slate-300 ml-1">ফোন নম্বর</label>
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-6 py-5 rounded-3xl border bg-slate-50 dark:bg-slate-800/50 outline-none transition-all duration-300 shadow-sm ${
                      errors.phone 
                      ? 'border-red-500 focus:ring-4 focus:ring-red-500/10' 
                      : 'border-slate-100 dark:border-slate-700 focus:border-accent focus:ring-4 focus:ring-accent/15'
                    } dark:text-white`}
                    placeholder="01XXXXXXXXX"
                  />
                  {errors.phone && (
                    <div className="flex items-center justify-between text-red-500 text-xs font-bold bg-red-50 dark:bg-red-950/20 px-3 py-2 rounded-xl animate-fade-in border border-red-100 dark:border-red-900/30">
                      <div className="flex items-center gap-1.5">
                        <AlertCircle size={14} /> 
                        {errors.phone}
                      </div>
                      <button 
                        type="button" 
                        onClick={() => dismissError('phone')}
                        className="hover:bg-red-100 dark:hover:bg-red-900/40 p-1 rounded-full transition-colors"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-black text-slate-700 dark:text-slate-300 ml-1">বার্তা</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-6 py-5 rounded-3xl border bg-slate-50 dark:bg-slate-800/50 outline-none transition-all duration-300 shadow-sm ${
                    errors.message 
                    ? 'border-red-500 focus:ring-4 focus:ring-red-500/10' 
                    : 'border-slate-100 dark:border-slate-700 focus:border-accent focus:ring-4 focus:ring-accent/15'
                  } dark:text-white`}
                  placeholder="আপনার প্রশ্ন বা মতামত..."
                ></textarea>
                {errors.message && (
                  <div className="flex items-center justify-between text-red-500 text-xs font-bold bg-red-50 dark:bg-red-950/20 px-3 py-2 rounded-xl animate-fade-in border border-red-100 dark:border-red-900/30">
                    <div className="flex items-center gap-1.5">
                      <AlertCircle size={14} /> 
                      {errors.message}
                    </div>
                    <button 
                      type="button" 
                      onClick={() => dismissError('message')}
                      className="hover:bg-red-100 dark:hover:bg-red-900/40 p-1 rounded-full transition-colors"
                    >
                      <X size={14} />
                    </button>
                  </div>
                )}
              </div>
              <button
                disabled={loading}
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-accent hover:bg-secondary text-slate-900 font-black py-6 rounded-[2rem] transition-all disabled:opacity-50 active:scale-95 shadow-xl shadow-accent/20"
              >
                {loading ? (
                  <div className="w-7 h-7 border-4 border-slate-900/30 border-t-slate-900 rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Send size={22} />
                    মেসেজ পাঠান
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeedbackForm;
