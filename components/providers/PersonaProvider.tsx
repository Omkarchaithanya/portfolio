'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Persona } from '@/types';

interface PersonaContextType {
  persona: Persona;
  setPersona: (persona: Persona) => void;
}

const PersonaContext = createContext<PersonaContextType | undefined>(undefined);

export function PersonaProvider({ children }: { children: ReactNode }) {
  const [persona, setPersona] = useState<Persona>('ai');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedPersona = localStorage.getItem('persona') as Persona;
    if (savedPersona && ['ai', 'fullstack', 'research'].includes(savedPersona)) {
      setPersona(savedPersona);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const root = document.documentElement;
    root.classList.remove('persona-ai', 'persona-fullstack', 'persona-research');
    root.classList.add(`persona-${persona}`);
    localStorage.setItem('persona', persona);
  }, [persona, mounted]);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <PersonaContext.Provider value={{ persona, setPersona }}>
      {children}
    </PersonaContext.Provider>
  );
}

export function usePersona() {
  const context = useContext(PersonaContext);
  if (context === undefined) {
    throw new Error('usePersona must be used within a PersonaProvider');
  }
  return context;
}
