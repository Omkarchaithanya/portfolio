'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto rounded-2xl overflow-hidden glass">
              <Image
                src="/profile.jpg"
                alt="Omkar Chaithanya"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold">
              Passionate about <span className="text-primary">Innovation</span>
            </h3>
            
            <p className="text-lg text-foreground/80">
              I&apos;m a multi-faceted engineer with expertise spanning AI/ML, full-stack development, 
              and research. With a strong foundation in computer science and a passion for solving 
              complex problems, I create intelligent systems that bridge the gap between cutting-edge 
              research and practical applications.
            </p>

            <p className="text-lg text-foreground/80">
              My journey in technology has been driven by curiosity and a desire to make a meaningful 
              impact. Whether it&apos;s building scalable web applications, training deep learning models, 
              or publishing research papers, I bring dedication and innovation to every project.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center glass rounded-lg p-4">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-foreground/60">Years Experience</div>
              </div>
              <div className="text-center glass rounded-lg p-4">
                <div className="text-3xl font-bold text-accent">20+</div>
                <div className="text-sm text-foreground/60">Projects</div>
              </div>
              <div className="text-center glass rounded-lg p-4">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-foreground/60">Publications</div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
              >
                Let&apos;s Connect
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
