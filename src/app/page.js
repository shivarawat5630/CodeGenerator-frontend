'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from '../lib/auth';
import Button from '../components/Button';
import { Code, Sparkles, Zap, Download, Shield, Users, ArrowRight, CheckCircle, Star } from 'lucide-react';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated()) {
      router.push('/generate');
    }
  }, [router]);

  const features = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'AI-Powered Generation',
      description: 'Generate React components using natural language descriptions powered by advanced AI.',
      color: 'text-green-600'
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'React + Tailwind CSS',
      description: 'Get production-ready React components with beautiful Tailwind CSS styling.',
      color: 'text-blue-600'
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: 'Easy Export',
      description: 'Download your generated components as ready-to-use files with a single click.',
      color: 'text-green-600'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure & Private',
      description: 'Your code and data are kept secure and private with enterprise-grade security.',
      color: 'text-red-600'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Lightning Fast',
      description: 'Generate components in seconds with our optimized AI processing pipeline.',
      color: 'text-yellow-600'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Developer Friendly',
      description: 'Built by developers, for developers. Clean, maintainable code every time.',
      color: 'text-indigo-600'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Frontend Developer',
      company: 'TechCorp',
      content: 'CodeGenerator has revolutionized our development workflow. We can now prototype components in minutes instead of hours.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'UI/UX Designer',
      company: 'DesignStudio',
      content: 'The AI understands design requirements perfectly. The generated components are always clean and well-structured.',
      rating: 5
    },
    {
      name: 'Alex Rodriguez',
      role: 'Full Stack Developer',
      company: 'StartupXYZ',
      content: 'This tool has saved us countless hours. The code quality is excellent and ready for production.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-chatgpt">
      {/* Navigation */}
      <nav className="chatgpt-header">
        <div className="container-responsive">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-600 rounded-lg">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-semibold text-gray-900">CodeGenerator</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#features" className="nav-link">Features</a>
              <a href="#testimonials" className="nav-link">Testimonials</a>
              <a href="#pricing" className="nav-link">Pricing</a>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm" onClick={() => router.push('/login')}>
                Sign In
              </Button>
              <Button size="sm" onClick={() => router.push('/signup')}>
                Get Started
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-responsive">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Code Generation
            </div>
            <h1 className="text-responsive-3xl font-semibold text-gray-900 mb-6 leading-tight">
              Generate React Components
              <span className="text-gradient block"> with AI</span>
            </h1>
            <p className="text-responsive-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your ideas into beautiful React components instantly. 
              Just describe what you want, and our AI will create production-ready code with Tailwind CSS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" onClick={() => router.push('/signup')}>
                Start Generating Free
                <Sparkles className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => router.push('/login')}>
                Try Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-semibold text-green-600 mb-2">10K+</div>
                <div className="text-gray-600">Components Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-semibold text-green-600 mb-2">5K+</div>
                <div className="text-gray-600">Happy Developers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-semibold text-green-600 mb-2">99%</div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Demo */}
        <div className="container-responsive mt-16">
          <div className="max-w-5xl mx-auto">
            <div className="chatgpt-card hover-scale">
              <div className="card-content">
                <div className="bg-gray-900 rounded-lg p-6 mb-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-400 text-sm ml-2">Terminal</span>
                  </div>
                  <div className="text-green-400 font-mono text-sm space-y-2">
                    <div>// Describe your component</div>
                    <div className="text-gray-300">"Create a modern login form with email and password fields"</div>
                    <div className="text-blue-400 mt-4">→ Generating component...</div>
                    <div className="text-green-400">✓ Component ready!</div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="text-sm text-gray-700 font-medium mb-2">Generated Component Preview</div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="space-y-3">
                      <input type="email" placeholder="Email" className="input w-full" />
                      <input type="password" placeholder="Password" className="input w-full" />
                      <Button fullWidth>Sign In</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-padding bg-white">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-responsive-2xl font-semibold text-gray-900 mb-4">
              Why Choose CodeGenerator?
            </h2>
            <p className="text-responsive-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to accelerate your development workflow
            </p>
          </div>
          
          <div className="grid-responsive">
            {features.map((feature, index) => (
              <div key={index} className="chatgpt-card hover-lift group">
                <div className="card-content">
                  <div className={`${feature.color} mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding bg-gray-50">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-responsive-2xl font-semibold text-gray-900 mb-4">
              Loved by Developers Worldwide
            </h2>
            <p className="text-responsive-xl text-gray-600 max-w-2xl mx-auto">
              See what our users have to say about CodeGenerator
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="chatgpt-card hover-lift">
                <div className="card-content">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600 font-semibold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-green-600">
        <div className="container-responsive text-center">
          <h2 className="text-responsive-2xl font-semibold text-white mb-4">
            Ready to Transform Your Development?
          </h2>
          <p className="text-responsive-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are already building faster with AI-powered code generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => router.push('/signup')}
              className="text-green-600"
            >
              Get Started Free
              <Sparkles className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => router.push('/login')}
              className="border-white text-white hover:bg-white hover:text-green-600"
            >
              Sign In
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="container-responsive">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-green-600 rounded-lg">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-semibold text-gray-900">CodeGenerator</span>
              </div>
              <p className="text-gray-600 mb-4 max-w-md">
                AI-powered code generation platform that helps developers create React components faster and more efficiently.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Product</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">API</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Company</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="divider border-gray-200"></div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © 2024 CodeGenerator. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Privacy</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Terms</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
