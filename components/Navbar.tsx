
import React, { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { BRAND_NAME } from '../constants';
import Logo from './Logo';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  currentView: string;
  setView: (view: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme, currentView, setView }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'হোম', id: 'home', hash: '#' },
    { name: 'সাপোর্ট', id: 'support', hash: '#support' },
    { name: 'মডিউল', id: 'modules', hash: '#modules' },
    { name: 'ফিডব্যাক', id: 'feedback', hash: '#feedback' },
  ];

  const handleNav = (id: string, hash: string) => {
    setIsOpen(false);
    if (id === 'home' || currentView !== 'home') {
      setView('home');
      // Delay scrolling slightly to allow state change/render if switching views
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else if (hash === '#') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white/70 dark:bg-dark/70 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div 
            className="flex-shrink-0 cursor-pointer group"
            onClick={() => handleNav('home', '#')}
          >
            <Logo />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id, item.hash)}
                className={`transition-all font-bold text-sm hover:scale-105 active:scale-95 ${
                  currentView === item.id 
                    ? 'text-accent' 
                    : 'text-slate-500 dark:text-slate-300 hover:text-accent dark:hover:text-accent'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-sm"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a
              href="https://chat.whatsapp.com/JBXuMy5PmcjHMiAawJStDw"
              className="bg-accent hover:bg-secondary text-slate-900 px-7 py-3 rounded-2xl transition-all font-black shadow-lg shadow-accent/20 active:scale-95"
            >
              জয়েন করুন
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-dark border-b border-slate-100 dark:border-slate-800 px-4 py-6 space-y-4 shadow-2xl animate-fade-in">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id, item.hash)}
              className={`block w-full text-left px-4 py-3 rounded-2xl text-lg font-bold transition-colors ${
                currentView === item.id 
                  ? 'text-accent bg-accent/5' 
                  : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              {item.name}
            </button>
          ))}
          <a
            href="https://chat.whatsapp.com/JBXuMy5PmcjHMiAawJStDw"
            className="block w-full text-center bg-accent text-slate-900 py-4 rounded-2xl font-black shadow-xl"
          >
            WhatsApp গ্রুপে জয়েন করুন
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
