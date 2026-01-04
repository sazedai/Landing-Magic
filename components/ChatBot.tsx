
import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Bot, Sparkles, Trash2, Mail, MessageSquare } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { BRAND_NAME } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

interface Message {
  role: 'user' | 'bot';
  text: string;
  timestamp: number;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [contactInfo, setContactInfo] = useState('');
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Load existing session from localStorage if available
  useEffect(() => {
    const savedContact = localStorage.getItem('lpm_chat_contact');
    if (savedContact) {
      setContactInfo(savedContact);
      setIsAuthorized(true);
      const savedHistory = localStorage.getItem(`lpm_history_${savedContact}`);
      if (savedHistory) {
        setMessages(JSON.parse(savedHistory));
      } else {
        setMessages([{ 
          role: 'bot', 
          text: `স্বাগতম! আমি ${BRAND_NAME} এর AI সহকারী। আমাদের কোর্স সম্পর্কে যেকোনো প্রশ্ন করতে পারেন।`,
          timestamp: Date.now()
        }]);
      }
    }
  }, []);

  // Save history whenever messages update
  useEffect(() => {
    if (isAuthorized && contactInfo) {
      localStorage.setItem(`lpm_history_${contactInfo}`, JSON.stringify(messages));
    }
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isAuthorized, contactInfo]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactInfo.trim()) return;
    
    setIsAuthorized(true);
    localStorage.setItem('lpm_chat_contact', contactInfo);
    
    const savedHistory = localStorage.getItem(`lpm_history_${contactInfo}`);
    if (savedHistory) {
      setMessages(JSON.parse(savedHistory));
    } else {
      setMessages([{ 
        role: 'bot', 
        text: `আপনার কন্টাক্ট (${contactInfo}) সেভ করা হয়েছে। এখন আপনার প্রশ্নটি করুন।`,
        timestamp: Date.now()
      }]);
    }
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsgText = input;
    setInput('');
    const newUserMsg: Message = { role: 'user', text: userMsgText, timestamp: Date.now() };
    setMessages(prev => [...prev, newUserMsg]);
    setLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsgText,
        config: {
          systemInstruction: `You are the professional AI support assistant for "${BRAND_NAME}".
          - Answer strictly in Bengali.
          - Keep responses short, helpful, and concise.
          - MANDATORY: If the user asks for contact info, wants to call, or needs human help, you MUST provide this phone number: +880 9647 122285.
          - User context: ${contactInfo}.`,
        }
      });
      
      const botMsg: Message = { 
        role: 'bot', 
        text: response.text || "দুঃখিত, আমি বুঝতে পারিনি।", 
        timestamp: Date.now() 
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (err) {
      setMessages(prev => [...prev, { 
        role: 'bot', 
        text: "সাময়িক টেকনিক্যাল সমস্যার কারণে উত্তর দিতে পারছি না। অনুগ্রহ করে কল করুন: +880 9647 122285", 
        timestamp: Date.now() 
      }]);
    } finally {
      setLoading(false);
    }
  };

  const endConversation = () => {
    if (window.confirm('আপনি কি এই চ্যাটটি শেষ করতে চান? আপনার ইতিহাস মুছে যাবে।')) {
      localStorage.removeItem(`lpm_history_${contactInfo}`);
      localStorage.removeItem('lpm_chat_contact');
      setIsAuthorized(false);
      setContactInfo('');
      setMessages([]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="w-[280px] sm:w-[320px] h-[450px] bg-white dark:bg-slate-900 rounded-[1.5rem] shadow-2xl border border-slate-100 dark:border-slate-800 flex flex-col overflow-hidden animate-fade-in transition-all">
          {/* Compact Header */}
          <div className="p-3 bg-accent text-slate-900 flex justify-between items-center shadow-md">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-slate-900 rounded-lg text-accent shadow-sm">
                <Bot size={16} strokeWidth={2.5} />
              </div>
              <div>
                <h4 className="font-black text-sm leading-tight">LPM AI</h4>
                <p className="text-[8px] font-black opacity-70 uppercase tracking-widest">Online</p>
              </div>
            </div>
            <div className="flex gap-1">
              {isAuthorized && (
                <button 
                  onClick={endConversation}
                  className="hover:bg-slate-900/10 p-1.5 rounded-md transition-all text-slate-900"
                  title="চ্যাট মুছুন"
                >
                  <Trash2 size={16} />
                </button>
              )}
              <button onClick={() => setIsOpen(false)} className="hover:bg-slate-900/10 p-1.5 rounded-md transition-all">
                <X size={16} strokeWidth={3} />
              </button>
            </div>
          </div>

          {!isAuthorized ? (
            /* Compact Lead Form */
            <div className="flex-1 p-6 flex flex-col justify-center bg-slate-50 dark:bg-dark/50">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mx-auto mb-3">
                  <MessageSquare size={24} />
                </div>
                <h3 className="text-lg font-black dark:text-white">কথা বলুন</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-bold px-2">
                  শুরু করতে ইমেইল বা ফোন দিন।
                </p>
              </div>
              
              <form onSubmit={handleLogin} className="space-y-3">
                <div className="relative group">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-accent transition-colors">
                    <Mail size={16} />
                  </div>
                  <input 
                    type="text" 
                    required
                    value={contactInfo}
                    onChange={(e) => setContactInfo(e.target.value)}
                    placeholder="Email or Phone"
                    className="w-full pl-10 pr-3 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 text-slate-900 dark:text-white font-bold transition-all text-xs placeholder:text-slate-400 dark:placeholder:text-slate-500"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-accent hover:bg-secondary text-slate-900 py-3 rounded-xl font-black text-sm shadow-md transition-all active:scale-95"
                >
                  চ্যাট শুরু করুন
                </button>
              </form>
            </div>
          ) : (
            /* Compact Chat Interface */
            <>
              <div ref={scrollRef} className="flex-1 overflow-y-auto p-3 space-y-3 bg-slate-50/50 dark:bg-dark/30">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                    <div className={`max-w-[90%] p-3 rounded-xl text-xs font-bold leading-relaxed shadow-sm ${
                      msg.role === 'user' 
                        ? 'bg-accent text-slate-900 rounded-tr-none' 
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-100 rounded-tl-none border border-slate-100 dark:border-slate-700'
                    }`}>
                      {msg.text}
                    </div>
                    <span className="text-[7px] mt-1 font-black uppercase text-slate-400 tracking-widest px-1">
                      {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-white dark:bg-slate-800 p-2 rounded-xl rounded-tl-none flex gap-1 border border-slate-100 dark:border-slate-700">
                      <div className="w-1 h-1 bg-accent rounded-full animate-bounce"></div>
                      <div className="w-1 h-1 bg-accent rounded-full animate-bounce delay-75"></div>
                      <div className="w-1 h-1 bg-accent rounded-full animate-bounce delay-150"></div>
                    </div>
                  </div>
                )}
              </div>

              <form onSubmit={handleSend} className="p-3 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex gap-2">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="প্রশ্ন..."
                  className="flex-1 bg-slate-100 dark:bg-slate-800 border-none rounded-lg px-3 py-2 text-xs font-bold focus:ring-2 focus:ring-accent/20 outline-none text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
                />
                <button 
                  type="submit" 
                  disabled={loading}
                  className="bg-accent text-slate-900 p-2 rounded-lg hover:scale-105 active:scale-90 transition-all shadow-sm disabled:opacity-50"
                >
                  <Send size={14} strokeWidth={2.5} />
                </button>
              </form>
            </>
          )}
        </div>
      ) : (
        /* Minimize to small icon */
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-accent text-slate-900 rounded-xl flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all group relative animate-pulse-slow"
        >
          <div className="absolute -top-10 right-0 bg-slate-900 text-accent px-3 py-1.5 rounded-lg text-[9px] font-black whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all shadow-md pointer-events-none translate-y-2 group-hover:translate-y-0">
            চ্যাট সাপোর্ট
          </div>
          <Sparkles size={24} />
        </button>
      )}
    </div>
  );
};

export default ChatBot;
