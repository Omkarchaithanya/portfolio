'use client';

import { useEffect, useState } from 'react';

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

export function useKonami() {
  const [isActive, setIsActive] = useState(false);
  const [keys, setKeys] = useState<string[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKeys((prevKeys) => {
        const newKeys = [...prevKeys, e.key];
        const relevantKeys = newKeys.slice(-KONAMI_CODE.length);
        
        if (relevantKeys.join(',') === KONAMI_CODE.join(',')) {
          setIsActive(true);
          return [];
        }
        
        return relevantKeys;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const deactivate = () => {
    setIsActive(false);
    setKeys([]);
  };

  return { isActive, deactivate };
}
