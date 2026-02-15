import { Project, Publication, TimelineEvent, Hackathon, Certification, Skill } from '@/types';

export const projects: Project[] = [
  {
    id: 'proj1',
    title: 'AI-Powered Computer Vision System',
    description: 'A real-time object detection and tracking system using YOLO and OpenCV with custom-trained models for specific use cases.',
    image: '/proj1.jpg',
    technologies: ['Python', 'PyTorch', 'OpenCV', 'YOLO', 'FastAPI'],
    github: 'https://github.com/Omkarchaithanya',
    category: 'AI/ML',
  },
  {
    id: 'proj2',
    title: 'Full-Stack E-commerce Platform',
    description: 'Scalable e-commerce solution with microservices architecture, featuring real-time inventory management and payment integration.',
    image: '/proj2.jpg',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    github: 'https://github.com/Omkarchaithanya',
    category: 'Full-Stack',
  },
  {
    id: 'proj3',
    title: 'Natural Language Processing Research',
    description: 'Novel approach to sentiment analysis using transformer models with attention mechanisms for multi-lingual text processing.',
    image: '/proj3.jpg',
    technologies: ['Python', 'TensorFlow', 'BERT', 'Hugging Face', 'Jupyter'],
    category: 'Research',
  },
  {
    id: 'proj4',
    title: 'Distributed System Architecture',
    description: 'High-performance distributed system with fault tolerance, load balancing, and real-time data synchronization.',
    image: '/proj4.jpg',
    technologies: ['Go', 'Kubernetes', 'RabbitMQ', 'MongoDB', 'Prometheus'],
    github: 'https://github.com/Omkarchaithanya',
    category: 'Full-Stack',
  },
];

export const publications: Publication[] = [
  {
    id: 'pub1',
    title: 'Advances in Deep Learning for Computer Vision',
    authors: ['Omkar Chaithanya', 'et al.'],
    venue: 'IEEE Conference on Computer Vision',
    year: 2024,
    abstract: 'This paper presents novel approaches to improving accuracy in real-time object detection systems.',
  },
  {
    id: 'pub2',
    title: 'Scalable Microservices Architecture Patterns',
    authors: ['Omkar Chaithanya', 'et al.'],
    venue: 'ACM Conference on Software Engineering',
    year: 2023,
    abstract: 'An exploration of design patterns for building scalable microservices-based applications.',
  },
];

export const timeline: TimelineEvent[] = [
  {
    id: 'timeline1',
    title: 'Senior Full-Stack Developer',
    organization: 'Tech Company',
    date: '2022 - Present',
    description: 'Leading development of enterprise-scale applications using modern web technologies and cloud infrastructure.',
    type: 'work',
  },
  {
    id: 'timeline2',
    title: 'Machine Learning Engineer',
    organization: 'AI Research Lab',
    date: '2020 - 2022',
    description: 'Developed and deployed ML models for production systems, focusing on computer vision and NLP applications.',
    type: 'work',
  },
  {
    id: 'timeline3',
    title: 'Master of Science in Computer Science',
    organization: 'University',
    date: '2018 - 2020',
    description: 'Specialized in Artificial Intelligence and Machine Learning with thesis on deep learning architectures.',
    type: 'education',
  },
  {
    id: 'timeline4',
    title: 'Bachelor of Technology',
    organization: 'Engineering College',
    date: '2014 - 2018',
    description: 'Computer Science and Engineering with focus on software development and algorithms.',
    type: 'education',
  },
];

export const hackathons: Hackathon[] = [
  {
    id: 'hack1',
    name: 'Global AI Hackathon 2024',
    date: 'March 2024',
    achievement: '1st Place',
    description: 'Developed an AI-powered solution for real-time medical image analysis.',
  },
  {
    id: 'hack2',
    name: 'Web3 Developer Summit',
    date: 'November 2023',
    achievement: 'Best Full-Stack Project',
    description: 'Built a decentralized application with smart contracts and modern web interface.',
  },
  {
    id: 'hack3',
    name: 'Code for Good Marathon',
    date: 'July 2023',
    achievement: 'Runner Up',
    description: 'Created a platform for connecting volunteers with NGOs using location-based services.',
  },
];

export const certifications: Certification[] = [
  {
    id: 'cert1',
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2024',
    credentialId: 'AWS-CSA-2024',
  },
  {
    id: 'cert2',
    name: 'TensorFlow Developer Certificate',
    issuer: 'Google',
    date: '2023',
    credentialId: 'TF-DEV-2023',
  },
  {
    id: 'cert3',
    name: 'Kubernetes Administrator',
    issuer: 'Cloud Native Computing Foundation',
    date: '2023',
    credentialId: 'CKA-2023',
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: 'React/Next.js', category: 'frontend', level: 95 },
  { name: 'TypeScript', category: 'frontend', level: 90 },
  { name: 'Tailwind CSS', category: 'frontend', level: 85 },
  { name: 'Vue.js', category: 'frontend', level: 75 },
  
  // Backend
  { name: 'Node.js', category: 'backend', level: 90 },
  { name: 'Python', category: 'backend', level: 95 },
  { name: 'Go', category: 'backend', level: 80 },
  { name: 'PostgreSQL', category: 'backend', level: 85 },
  { name: 'MongoDB', category: 'backend', level: 80 },
  
  // ML/AI
  { name: 'PyTorch', category: 'ml', level: 90 },
  { name: 'TensorFlow', category: 'ml', level: 85 },
  { name: 'OpenCV', category: 'ml', level: 88 },
  { name: 'Scikit-learn', category: 'ml', level: 82 },
  { name: 'NLP', category: 'ml', level: 85 },
  
  // Tools
  { name: 'Docker', category: 'tools', level: 90 },
  { name: 'Kubernetes', category: 'tools', level: 85 },
  { name: 'Git', category: 'tools', level: 95 },
  { name: 'AWS', category: 'tools', level: 88 },
  { name: 'CI/CD', category: 'tools', level: 85 },
];
