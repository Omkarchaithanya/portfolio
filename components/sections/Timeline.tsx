'use client';

import { motion } from 'framer-motion';
import { timeline } from '@/lib/data';

const Timeline = () => {
  return (
    <section id="timeline" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-1/2"></div>

            {timeline.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                }`}
              >
                <div className="flex items-start gap-4 md:block">
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 ring-4 ring-background"></div>

                  <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-16' : 'md:ml-16'}`}>
                    <div className="glass rounded-xl p-6">
                      <div className={`inline-block px-3 py-1 rounded-full text-xs mb-2 ${
                        event.type === 'work'
                          ? 'bg-primary/20 text-primary'
                          : event.type === 'education'
                          ? 'bg-accent/20 text-accent'
                          : 'bg-secondary/20 text-secondary'
                      }`}>
                        {event.type === 'work' ? '💼 Work' : event.type === 'education' ? '🎓 Education' : '🏆 Achievement'}
                      </div>
                      <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                      <p className="text-primary font-semibold mb-2">{event.organization}</p>
                      <p className="text-sm text-foreground/60 mb-3">{event.date}</p>
                      <p className="text-foreground/80">{event.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
