'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../providers/ThemeProvider';
import { usePersona } from '../providers/PersonaProvider';
import { Persona } from '@/types';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { persona, setPersona } = usePersona();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              OC
            </div>
          </div>
        </div>
      </nav>
    );
  }

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Labs', href: '#labs' },
    { name: 'Publications', href: '#publications' },
    { name: 'Contact', href: '#contact' },
  ];

  const personas: { value: Persona; label: string; icon: string }[] = [
    { value: 'ai', label: 'AI/ML', icon: '🤖' },
    { value: 'fullstack', label: 'Full-Stack', icon: '💻' },
    { value: 'research', label: 'Research', icon: '🔬' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#hero"
            className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            OC
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Persona Switcher */}
            <div className="hidden lg:flex items-center space-x-2 glass px-3 py-1.5 rounded-full">
              {personas.map((p) => (
                <button
                  key={p.value}
                  onClick={() => setPersona(p.value)}
                  className={`px-3 py-1 rounded-full text-sm transition-all ${
                    persona === p.value
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-secondary/20'
                  }`}
                  title={p.label}
                >
                  <span className="mr-1">{p.icon}</span>
                  <span className="hidden xl:inline">{p.label}</span>
                </button>
              ))}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full glass hover:bg-secondary/20 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '🌞' : '🌙'}
            </button>

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
            >
              Resume
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              <div className="space-y-1.5">
                <span className={`block w-6 h-0.5 bg-foreground transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-6 h-0.5 bg-foreground transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-6 h-0.5 bg-foreground transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 glass rounded-lg p-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-foreground/80 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-foreground/10">
              <div className="flex flex-wrap gap-2">
                {personas.map((p) => (
                  <button
                    key={p.value}
                    onClick={() => {
                      setPersona(p.value);
                      setMobileMenuOpen(false);
                    }}
                    className={`px-3 py-1 rounded-full text-sm transition-all ${
                      persona === p.value
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary/20'
                    }`}
                  >
                    {p.icon} {p.label}
                  </button>
                ))}
              </div>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-center px-4 py-2 bg-primary text-primary-foreground rounded-full"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
