import { useState } from 'react';

const HomePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // ✅ Updated to Formspree
      const response = await fetch('https://formspree.io/f/xnnoeadp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      {/* Enhanced Space Background with Higher Visibility */}
      <div className="absolute inset-0">
        {/* Deep Space Stars - More Visible */}
        <div className="absolute inset-0">
          {[...Array(200)].map((_, i) => (
            <div
              key={`space-star-${i}`}
              className="absolute rounded-full bg-white space-star-twinkle"
              style={{
                width: `${1 + Math.random() * 3}px`,
                height: `${1 + Math.random() * 3}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${3 + Math.random() * 6}s`,
                opacity: 0.6 + Math.random() * 0.4,
                boxShadow: `0 0 ${4 + Math.random() * 8}px rgba(255, 255, 255, ${0.6 + Math.random() * 0.4})`
              }}
            />
          ))}
        </div>

        {/* Bright Stars - Much More Visible */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={`bright-star-${i}`}
              className="absolute rounded-full bg-white bright-star-pulse"
              style={{
                width: `${3 + Math.random() * 6}px`,
                height: `${3 + Math.random() * 6}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${4 + Math.random() * 8}s`,
                opacity: 0.8,
                boxShadow: `0 0 ${15 + Math.random() * 25}px rgba(255, 255, 255, 0.9), 0 0 ${30 + Math.random() * 40}px rgba(255, 255, 255, 0.5)`
              }}
            />
          ))}
        </div>

        {/* Distant Galaxies - Enhanced Visibility */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={`galaxy-${i}`}
              className="absolute rounded-full galaxy-glow"
              style={{
                width: `${40 + Math.random() * 100}px`,
                height: `${40 + Math.random() * 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, rgba(255, 255, 255, 0.3), rgba(200, 200, 255, 0.15), rgba(100, 150, 255, 0.05), transparent)`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${20 + Math.random() * 15}s`,
                filter: 'blur(0.5px)',
                opacity: 0.7
              }}
            />
          ))}
        </div>

        {/* Nebula Clouds - More Colorful and Visible */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => {
            const colors = [
              'rgba(0, 255, 245, 0.08), rgba(138, 43, 226, 0.06)',
              'rgba(255, 100, 150, 0.08), rgba(100, 200, 255, 0.06)',
              'rgba(150, 255, 100, 0.08), rgba(255, 200, 100, 0.06)',
              'rgba(200, 100, 255, 0.08), rgba(100, 255, 200, 0.06)'
            ];
            const colorPair = colors[Math.floor(Math.random() * colors.length)];
            
            return (
              <div
                key={`nebula-${i}`}
                className="absolute nebula-drift"
                style={{
                  width: `${200 + Math.random() * 400}px`,
                  height: `${150 + Math.random() * 300}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: `radial-gradient(ellipse, ${colorPair}, transparent)`,
                  borderRadius: '50%',
                  animationDelay: `${Math.random() * 20}s`,
                  animationDuration: `${30 + Math.random() * 20}s`,
                  filter: 'blur(1px)',
                  opacity: 0.6
                }}
              />
            );
          })}
        </div>

        {/* Enhanced Neural Network Particles */}
        <div className="absolute inset-0">
          {[...Array(80)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute rounded-full bg-cyan-400 neural-pulse-advanced"
              style={{
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
                boxShadow: `0 0 ${8 + Math.random() * 12}px rgba(0, 255, 245, 0.8)`
              }}
            />
          ))}
        </div>

        {/* Dynamic Flowing Lines */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={`line-${i}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent line-flow-advanced"
              style={{
                width: `${300 + Math.random() * 500}px`,
                left: `-${200 + Math.random() * 100}px`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 6}s`,
                opacity: 0.4 + Math.random() * 0.3,
                boxShadow: `0 0 ${4 + Math.random() * 8}px rgba(0, 255, 245, 0.6)`
              }}
            />
          ))}
        </div>

        {/* Enhanced Constellation Effect */}
        <div className="absolute inset-0">
          {[...Array(60)].map((_, i) => (
            <div
              key={`star-${i}`}
              className="absolute rounded-full bg-white constellation-twinkle-advanced"
              style={{
                width: `${1 + Math.random() * 3}px`,
                height: `${1 + Math.random() * 3}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${4 + Math.random() * 5}s`,
                boxShadow: `0 0 ${6 + Math.random() * 10}px rgba(255, 255, 255, 0.9)`
              }}
            />
          ))}
        </div>

        {/* Synaptic Connection Lines */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={`synapse-${i}`}
              className="absolute synapse-connection"
              style={{
                width: `${100 + Math.random() * 200}px`,
                height: '1px',
                left: `${Math.random() * 80}%`,
                top: `${Math.random() * 80}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                background: 'linear-gradient(90deg, transparent, rgba(0, 255, 245, 0.4), transparent)',
                animationDelay: `${Math.random() * 10}s`,
                boxShadow: '0 0 4px rgba(0, 255, 245, 0.3)'
              }}
            />
          ))}
        </div>

        {/* Floating Orbs */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={`orb-${i}`}
              className="absolute rounded-full floating-orb"
              style={{
                width: `${20 + Math.random() * 40}px`,
                height: `${20 + Math.random() * 40}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, rgba(0, 255, 245, 0.2), transparent)`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${12 + Math.random() * 8}s`
              }}
            />
          ))}
        </div>

        {/* Shooting Stars */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <div
              key={`shooting-star-${i}`}
              className="absolute shooting-star"
              style={{
                width: '2px',
                height: '2px',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 50}%`,
                background: 'white',
                borderRadius: '50%',
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: '3s',
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)'
              }}
            />
          ))}
        </div>

        {/* Reduced Gradient Overlay for Better Visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/70 to-black/65" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/30 to-black/50" />
      </div>

      {/* Main Content with more top spacing */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto pt-32">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-wide leading-tight hero-glow">
            This domain is available for acquisition.
          </h1>
          
          <div className="space-y-4">
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed hidden md:block subtitle-glow">
              Web360Agency.com is part of a digital AI ecosystem. If you're interested in purchasing it, contact us below.
            </p>
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed md:hidden subtitle-glow">
              Interested in this domain? Let's talk.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-black/40 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-8 shadow-2xl form-glow-container mb-32">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-cyan-400/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-all duration-300 text-sm input-glow-effect"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-cyan-400/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-all duration-300 text-sm input-glow-effect"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  maxLength={500}
                  rows={4}
                  className="w-full px-4 py-3 bg-transparent border border-cyan-400/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-all duration-300 resize-none text-sm input-glow-effect"
                />
                <div className="text-right text-xs text-gray-500 mt-1">
                  {formData.message.length}/500
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-transparent border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 font-medium tracking-wide disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer button-glow-effect"
              >
                {isSubmitting ? 'Sending...' : 'Send Inquiry'}
              </button>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-400/20 flex items-center justify-center success-glow">
                <i className="ri-check-line text-2xl text-cyan-400"></i>
              </div>
              <h3 className="text-xl text-white mb-2">Thank you</h3>
              <p className="text-gray-300">We'll get back to you shortly.</p>
            </div>
          )}
        </div>
      </div>

      {/* Footer with increased spacing */}
      <footer className="absolute bottom-8 left-0 right-0 text-center">
        <p className="text-sm text-gray-500 footer-text">
          © 2025 — Owned by Web360 Group.
        </p>
      </footer>

      {/* Advanced CSS Animations and Effects - truncated for brevity, keep all existing styles */}
      <style jsx>{`
        @keyframes space-star-twinkle {
          0%, 100% { opacity: 0.4; transform: scale(0.8); }
          25% { opacity: 0.9; transform: scale(1.3); }
          50% { opacity: 0.6; transform: scale(1.0); }
          75% { opacity: 1; transform: scale(1.6); }
        }
        @keyframes bright-star-pulse {
          0%, 100% { opacity: 0.8; transform: scale(1); filter: brightness(1.2); }
          50% { opacity: 1; transform: scale(1.5); filter: brightness(2.2); }
        }
        @keyframes galaxy-glow {
          0%, 100% { opacity: 0.5; transform: scale(1) rotate(0deg); }
          50% { opacity: 0.8; transform: scale(1.2) rotate(180deg); }
        }
        @keyframes nebula-drift {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          25% { transform: translate(30px, -20px) scale(1.1); opacity: 0.8; }
          50% { transform: translate(-20px, -40px) scale(0.9); opacity: 0.5; }
          75% { transform: translate(-40px, 10px) scale(1.2); opacity: 0.7; }
        }
        @keyframes shooting-star {
          0% { transform: translateX(-100px) translateY(0px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(1000px) translateY(300px); opacity: 0; }
        }
        @keyframes neural-pulse-advanced {
          0%, 100% { opacity: 0.3; transform: scale(0.8); filter: brightness(0.8); }
          25% { opacity: 0.7; transform: scale(1.2); filter: brightness(1.2); }
          50% { opacity: 1; transform: scale(1.5); filter: brightness(1.5); }
          75% { opacity: 0.8; transform: scale(1.1); filter: brightness(1.1); }
        }
        @keyframes constellation-twinkle-advanced {
          0%, 100% { opacity: 0.2; transform: scale(0.5) rotate(0deg); filter: brightness(0.5); }
          20% { opacity: 0.9; transform: scale(1.3) rotate(72deg); filter: brightness(1.5); }
          40% { opacity: 0.4; transform: scale(0.8) rotate(144deg); filter: brightness(0.8); }
          60% { opacity: 1; transform: scale(1.6) rotate(216deg); filter: brightness(2.0); }
          80% { opacity: 0.7; transform: scale(1.0) rotate(288deg); filter: brightness(1.0); }
        }
        @keyframes line-flow-advanced {
          0% { transform: translateX(-100%) rotate(0deg); opacity: 0; filter: blur(2px); }
          10% { opacity: 0.4; filter: blur(1px); }
          50% { opacity: 0.9; filter: blur(0px); transform: translateX(50vw) rotate(180deg); }
          90% { opacity: 0.4; filter: blur(1px); }
          100% { transform: translateX(120vw) rotate(360deg); opacity: 0; filter: blur(2px); }
        }
        @keyframes synapse-connection {
          0%, 100% { opacity: 0.2; transform: scaleX(0.5); }
          50% { opacity: 0.7; transform: scaleX(1.3); }
        }
        @keyframes floating-orb {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          25% { transform: translate(20px, -30px) scale(1.1); opacity: 0.5; }
          50% { transform: translate(-15px, -60px) scale(0.9); opacity: 0.7; }
          75% { transform: translate(-30px, -20px) scale(1.2); opacity: 0.4; }
        }
        @keyframes hero-pulse {
          0%, 100% { text-shadow: 0 0 10px rgba(255, 255, 255, 0.3); }
          50% { text-shadow: 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(0, 255, 245, 0.2); }
        }
        @keyframes subtitle-glow {
          0%, 100% { text-shadow: 0 0 5px rgba(255, 255, 255, 0.2); }
          50% { text-shadow: 0 0 15px rgba(255, 255, 255, 0.4); }
        }
        .space-star-twinkle { animation: space-star-twinkle 6s ease-in-out infinite; }
        .bright-star-pulse { animation: bright-star-pulse 8s ease-in-out infinite; }
        .galaxy-glow { animation: galaxy-glow 25s ease-in-out infinite; }
        .nebula-drift { animation: nebula-drift 35s ease-in-out infinite; }
        .shooting-star { animation: shooting-star 3s linear infinite; }
        .neural-pulse-advanced { animation: neural-pulse-advanced 4s ease-in-out infinite; }
        .constellation-twinkle-advanced { animation: constellation-twinkle-advanced 6s ease-in-out infinite; }
        .line-flow-advanced { animation: line-flow-advanced 12s linear infinite; }
        .synapse-connection { animation: synapse-connection 8s ease-in-out infinite; }
        .floating-orb { animation: floating-orb 15s ease-in-out infinite; }
        .hero-glow { animation: hero-pulse 4s ease-in-out infinite; }
        .subtitle-glow { animation: subtitle-glow 6s ease-in-out infinite; }
        .form-glow-container {
          box-shadow: 0 0 30px rgba(0, 255, 245, 0.1);
          transition: all 0.3s ease;
        }
        .form-glow-container:hover {
          box-shadow: 0 0 50px rgba(0, 255, 245, 0.2);
          transform: translateY(-2px);
        }
        .input-glow-effect:focus {
          box-shadow: 0 0 0 2px rgba(0, 255, 245, 0.3), 0 0 20px rgba(0, 255, 245, 0.2), inset 0 0 10px rgba(0, 255, 245, 0.1);
          transform: translateY(-1px);
        }
        .input-glow-effect:hover {
          box-shadow: 0 0 15px rgba(0, 255, 245, 0.15);
          border-color: rgba(0, 255, 245, 0.7);
        }
        .button-glow-effect:hover {
          box-shadow: 0 0 30px rgba(0, 255, 245, 0.4), 0 0 60px rgba(0, 255, 245, 0.2);
          transform: translateY(-2px) scale(1.02);
        }
        .success-glow {
          animation: neural-pulse-advanced 2s ease-in-out infinite;
        }
        .footer-text {
          text-shadow: 0 0 8px rgba(128, 128, 128, 0.3);
        }
        .bg-gradient-radial {
          background: radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.5) 100%);
        }
      `}</style>
    </div>
  );
};

export default HomePage;
