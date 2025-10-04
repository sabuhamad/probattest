import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Build Something
            <span className="gradient-text"> Amazing</span>
          </h1>
          <p className="hero-description">
            Create stunning web experiences with our modern tools and components. 
            Fast, reliable, and built for the future.
          </p>
          <div className="hero-buttons">
            <a href="#features" className="btn btn-primary">
              Get Started
            </a>
            <a href="#learn-more" className="btn btn-secondary">
              Learn More
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card">
            <div className="card-header">
              <div className="card-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="card-content">
              <div className="code-line">
                <span className="code-keyword">const</span>
                <span className="code-variable"> app</span>
                <span className="code-operator"> = </span>
                <span className="code-function">createApp</span>
                <span className="code-bracket">()</span>
              </div>
              <div className="code-line">
                <span className="code-keyword">app</span>
                <span className="code-operator">.</span>
                <span className="code-function">use</span>
                <span className="code-bracket">(</span>
                <span className="code-string">'modern'</span>
                <span className="code-bracket">)</span>
              </div>
              <div className="code-line">
                <span className="code-keyword">app</span>
                <span className="code-operator">.</span>
                <span className="code-function">mount</span>
                <span className="code-bracket">(</span>
                <span className="code-string">'#app'</span>
                <span className="code-bracket">)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .hero {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 120px 0;
          position: relative;
          overflow: hidden;
        }
        
        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
          opacity: 0.3;
        }
        
        .hero-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 60px;
          position: relative;
          z-index: 1;
        }
        
        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 24px;
          line-height: 1.2;
        }
        
        .gradient-text {
          background: linear-gradient(45deg, #ffd700, #ff6b6b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero-description {
          font-size: 1.25rem;
          margin-bottom: 40px;
          opacity: 0.9;
          line-height: 1.6;
        }
        
        .hero-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .hero-visual {
          display: flex;
          justify-content: center;
          position: relative;
          z-index: 1;
        }
        
        .hero-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          padding: 24px;
          max-width: 400px;
          width: 100%;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .card-header {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .card-dots {
          display: flex;
          gap: 8px;
        }
        
        .card-dots span {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
        }
        
        .card-dots span:nth-child(1) { background: #ff5f56; }
        .card-dots span:nth-child(2) { background: #ffbd2e; }
        .card-dots span:nth-child(3) { background: #27ca3f; }
        
        .code-line {
          margin-bottom: 12px;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          font-size: 14px;
          line-height: 1.5;
        }
        
        .code-keyword { color: #ff79c6; }
        .code-variable { color: #8be9fd; }
        .code-operator { color: #f8f8f2; }
        .code-function { color: #50fa7b; }
        .code-bracket { color: #f8f8f2; }
        .code-string { color: #f1fa8c; }
        
        @media (max-width: 768px) {
          .hero {
            padding: 80px 0;
          }
          
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-description {
            font-size: 1.1rem;
          }
          
          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero

