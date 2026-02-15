'use client';

import { motion } from 'framer-motion';
import { publications } from '@/lib/data';

const Publications = () => {
  return (
    <section id="publications" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Research <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Publications</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">📄</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{pub.title}</h3>
                  <p className="text-foreground/70 mb-2">
                    {pub.authors.join(', ')}
                  </p>
                  <p className="text-primary mb-3">
                    {pub.venue} • {pub.year}
                  </p>
                  {pub.abstract && (
                    <p className="text-sm text-foreground/60 mb-3">{pub.abstract}</p>
                  )}
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm hover:bg-primary/90 transition-colors"
                    >
                      Read Paper
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
