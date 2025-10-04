import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">YourBrand</h3>
            <p className="footer-description">
              Building the future of web development with modern tools and technologies.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.9 9.9 0 01-6.115 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 4.624-5.479 4.869.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-title">Product</h4>
              <ul className="footer-list">
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#docs">Documentation</a></li>
                <li><a href="#api">API</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-title">Company</h4>
              <ul className="footer-list">
                <li><a href="#about">About</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-title">Support</h4>
              <ul className="footer-list">
                <li><a href="#help">Help Center</a></li>
                <li><a href="#community">Community</a></li>
                <li><a href="#status">Status</a></li>
                <li><a href="#security">Security</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; 2024 YourBrand. All rights reserved.</p>
          </div>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .footer {
          background: #1a202c;
          color: #e2e8f0;
          padding: 60px 0 20px;
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 60px;
          margin-bottom: 40px;
        }
        
        .footer-brand {
          max-width: 400px;
        }
        
        .footer-logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          margin-bottom: 16px;
        }
        
        .footer-description {
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 24px;
        }
        
        .social-links {
          display: flex;
          gap: 16px;
        }
        
        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: #2d3748;
          border-radius: 8px;
          color: #94a3b8;
          transition: all 0.3s ease;
        }
        
        .social-link:hover {
          background: #667eea;
          color: white;
          transform: translateY(-2px);
        }
        
        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }
        
        .footer-title {
          font-size: 1rem;
          font-weight: 600;
          color: white;
          margin-bottom: 16px;
        }
        
        .footer-list {
          list-style: none;
        }
        
        .footer-list li {
          margin-bottom: 8px;
        }
        
        .footer-list a {
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .footer-list a:hover {
          color: #667eea;
        }
        
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 20px;
          border-top: 1px solid #2d3748;
          flex-wrap: wrap;
          gap: 20px;
        }
        
        .footer-copyright p {
          color: #94a3b8;
          margin: 0;
        }
        
        .footer-legal {
          display: flex;
          gap: 24px;
        }
        
        .footer-legal a {
          color: #94a3b8;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }
        
        .footer-legal a:hover {
          color: #667eea;
        }
        
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .footer-links {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }
          
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
          
          .footer-legal {
            justify-content: center;
          }
        }
        
        @media (max-width: 480px) {
          .footer-links {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer

