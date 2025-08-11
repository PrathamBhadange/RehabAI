import { Link } from 'react-router-dom';
import { Activity, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-medical-navy text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="medical-gradient p-2 rounded-lg">
                <Activity className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">RehabAI</span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Revolutionizing rehabilitation through AI-powered movement analysis and personalized therapy programs.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contact@rehabai.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>1-800-REHAB-AI</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Products</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/for-patients" className="hover:text-white transition-colors">Patient App</Link></li>
              <li><Link to="/for-providers" className="hover:text-white transition-colors">Provider Portal</Link></li>
              <li><Link to="/ai-analysis" className="hover:text-white transition-colors">AI Movement Analysis</Link></li>
              <li><Link to="/telehealth" className="hover:text-white transition-colors">Telehealth Integration</Link></li>
              <li><Link to="/analytics" className="hover:text-white transition-colors">Healthcare Analytics</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Company</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/research" className="hover:text-white transition-colors">Research</Link></li>
              <li><Link to="/partners" className="hover:text-white transition-colors">Partners</Link></li>
              <li><Link to="/news" className="hover:text-white transition-colors">News</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/support" className="hover:text-white transition-colors">Support Center</Link></li>
              <li><Link to="/documentation" className="hover:text-white transition-colors">Documentation</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/compliance" className="hover:text-white transition-colors">HIPAA Compliance</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-600">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-300">
              © 2024 RehabAI. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 text-sm text-gray-300">
              <span>HIPAA Compliant</span>
              <span className="mx-2">•</span>
              <span>FDA Cleared</span>
              <span className="mx-2">•</span>
              <span>SOC 2 Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
