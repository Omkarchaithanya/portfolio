'use client';

import { motion } from 'framer-motion';
import { hackathons } from '@/lib/data';

const Hackathons = () => {
  return (
    <section id="hackathons" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Hackathons & <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Competitions</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hackathons.map((hackathon, index) => (
            <motion.div
              key={hackathon.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl p-6 hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-2">{hackathon.name}</h3>
              <div className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm mb-3">
                {hackathon.achievement}
              </div>
              <p className="text-sm text-foreground/60 mb-3">{hackathon.date}</p>
              <p className="text-foreground/80 mb-4">{hackathon.description}</p>
              {hackathon.link && (
                <a
                  href={hackathon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm"
                >
                  Learn More →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
