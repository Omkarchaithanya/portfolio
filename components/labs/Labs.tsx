'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const VisionLab = () => {
  const [isActive, setIsActive] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const startCamera = async () => {
    try {
      setError(null);
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user' },
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsActive(true);
      }
    } catch (err) {
      setError('Camera access denied or unavailable');
      console.error('Error accessing camera:', err);
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
      setIsActive(false);
    }
  };

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  return (
    <div className="glass rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold">🎥 Vision Lab</h3>
        <button
          onClick={isActive ? stopCamera : startCamera}
          className={`px-4 py-2 rounded-full transition-colors ${
            isActive
              ? 'bg-red-500 text-white hover:bg-red-600'
              : 'bg-primary text-primary-foreground hover:bg-primary/90'
          }`}
        >
          {isActive ? 'Stop Camera' : 'Start Camera'}
        </button>
      </div>

      <p className="text-foreground/70 mb-4">
        Real-time computer vision demo. Click &quot;Start Camera&quot; to activate your webcam.
        This is a stub implementation - in production, this would include object detection,
        face recognition, or other CV features.
      </p>

      {error && (
        <div className="bg-red-500/20 border border-red-500 text-red-500 rounded-lg p-3 mb-4">
          {error}
        </div>
      )}

      <div className="relative bg-background/50 rounded-lg overflow-hidden aspect-video">
        {!isActive && !error && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">📹</div>
              <p className="text-foreground/60">Camera is off</p>
            </div>
          </div>
        )}
        
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className={`w-full h-full object-cover ${isActive ? 'block' : 'hidden'}`}
        />
        
        <canvas
          ref={canvasRef}
          className="hidden"
        />

        {isActive && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            LIVE
          </div>
        )}
      </div>

      <div className="mt-4 text-sm text-foreground/60">
        <p className="mb-2">
          <strong>Features (stub):</strong>
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Real-time webcam access</li>
          <li>Object detection overlay (to be implemented)</li>
          <li>Face recognition (to be implemented)</li>
          <li>Pose estimation (to be implemented)</li>
        </ul>
      </div>
    </div>
  );
};

const Labs = () => {
  return (
    <section id="labs" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Interactive <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Labs</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Experimental playground for AI and computer vision projects. 
            Try out live demos and interact with cutting-edge technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <VisionLab />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-foreground/60">
            More interactive labs coming soon! Stay tuned for NLP demos, generative AI experiments, and more.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Labs;
