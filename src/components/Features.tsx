"use client";
import React from 'react'
import { Experiment } from '@probat/react'
import { recordClick } from '../../probat/runtime'

interface Feature {
  icon: string
  title: string
  description: string
}

// Control component - original version without "Learn More" buttons
const FeaturesControl: React.FC = () => {
  const features: Feature[] = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Built with performance in mind. Experience blazing fast load times and smooth interactions.'
    },
    {
      icon: '🔒',
      title: 'Secure by Default',
      description: 'Enterprise-grade security features built-in. Your data is protected with industry-leading encryption.'
    },
    {
      icon: '📱',
      title: 'Mobile First',
      description: 'Responsive design that works perfectly on all devices. From mobile phones to large desktop screens.'
    },
    {
      icon: '🎨',
      title: 'Beautiful Design',
      description: 'Modern, clean interface that delights users. Carefully crafted with attention to every detail.'
    },
    {
      icon: '🚀',
      title: 'Easy to Deploy',
      description: 'One-click deployment to any platform. Get your project live in minutes, not hours.'
    },
    {
      icon: '🔧',
      title: 'Developer Friendly',
      description: 'Built for developers, by developers. Extensive documentation and intuitive APIs.'
    }
  ]

  return (
    <section id="features" className="features section">
      <div className="container">
        <div className="features-header text-center">
          <h2 className="features-title">Why Choose Our Platform?</h2>
          <p className="features-subtitle">
            Everything you need to build, deploy, and scale your applications
          </p>
        </div>
        
        <div className="features-grid grid grid-3">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .features {
          background: #f8fafc;
        }
        
        .features-header {
          margin-bottom: 60px;
        }
        
        .features-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 16px;
        }
        
        .features-subtitle {
          font-size: 1.2rem;
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .features-grid {
          margin-top: 40px;
        }
        
        .feature-card {
          background: white;
          padding: 32px 24px;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        
        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .feature-card:hover::before {
          transform: scaleX(1);
        }
        
        .feature-icon {
          font-size: 3rem;
          margin-bottom: 20px;
          display: block;
        }
        
        .feature-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1a202c;
          margin-bottom: 12px;
        }
        
        .feature-description {
          color: #64748b;
          line-height: 1.6;
          font-size: 1rem;
        }
        
        @media (max-width: 768px) {
          .features-title {
            font-size: 2rem;
          }
          
          .features-subtitle {
            font-size: 1.1rem;
          }
          
          .feature-card {
            padding: 24px 20px;
          }
        }
      `}</style>
    </section>
  )
}

// Variant component - version with "Learn More" buttons
const FeaturesVariant: React.FC = () => {
  const features: Feature[] = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Built with performance in mind. Experience blazing fast load times and smooth interactions.'
    },
    {
      icon: '🔒',
      title: 'Secure by Default',
      description: 'Enterprise-grade security features built-in. Your data is protected with industry-leading encryption.'
    },
    {
      icon: '📱',
      title: 'Mobile First',
      description: 'Responsive design that works perfectly on all devices. From mobile phones to large desktop screens.'
    },
    {
      icon: '🎨',
      title: 'Beautiful Design',
      description: 'Modern, clean interface that delights users. Carefully crafted with attention to every detail.'
    },
    {
      icon: '🚀',
      title: 'Easy to Deploy',
      description: 'One-click deployment to any platform. Get your project live in minutes, not hours.'
    },
    {
      icon: '🔧',
      title: 'Developer Friendly',
      description: 'Built for developers, by developers. Extensive documentation and intuitive APIs.'
    }
  ]

  return (
    <section id="features" className="features section">
      <div className="container">
        <div className="features-header text-center">
          <h2 className="features-title">Why Choose Our Platform?</h2>
          <p className="features-subtitle">
            Everything you need to build, deploy, and scale your applications
          </p>
        </div>
        
        <div className="features-grid grid grid-3">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <a 
                href="#features" 
                className="btn btn-secondary feature-btn"
                onClick={() => recordClick('exp_Features_20260316_f7e2a1b9', 'V1', { feature_title: feature.title })}
                aria-label={`Learn more about ${feature.title}`}
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .features {
          background: #f8fafc;
        }
        
        .features-header {
          margin-bottom: 60px;
        }
        
        .features-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 16px;
        }
        
        .features-subtitle {
          font-size: 1.2rem;
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .features-grid {
          margin-top: 40px;
        }
        
        .feature-card {
          background: white;
          padding: 32px 24px 40px;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        
        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .feature-card:hover::before {
          transform: scaleX(1);
        }
        
        .feature-icon {
          font-size: 3rem;
          margin-bottom: 20px;
          display: block;
        }
        
        .feature-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1a202c;
          margin-bottom: 12px;
        }
        
        .feature-description {
          color: #64748b;
          line-height: 1.6;
          font-size: 1rem;
          margin-bottom: 20px;
        }
        
        .feature-btn {
          margin-top: auto;
          transition: all 0.3s ease;
        }
        
        .feature-btn:hover {
          transform: scale(1.05);
        }
        
        @media (max-width: 768px) {
          .features-title {
            font-size: 2rem;
          }
          
          .features-subtitle {
            font-size: 1.1rem;
          }
          
          .feature-card {
            padding: 24px 20px 32px;
          }
        }
      `}</style>
    </section>
  )
}

// Wrapper component that maintains the original export signature
const Features: React.FC = () => {
  return (
    <Experiment
      id="exp_Features_20260316_f7e2a1b9"
      control={<FeaturesControl />}
      variants={{ V1: <FeaturesVariant /> }}
    />
  )
}

export default Features
