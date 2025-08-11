import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Brain, 
  Smartphone, 
  Video, 
  BarChart3, 
  Target, 
  Shield, 
  Activity, 
  Camera, 
  Users, 
  Clock, 
  CheckCircle, 
  Zap, 
  Heart, 
  TrendingUp, 
  PlayCircle,
  Monitor,
  Gamepad2,
  Globe,
  Stethoscope,
  Database
} from 'lucide-react';

const mainFeatures = [
  {
    icon: Brain,
    title: "AI-Powered Movement Analysis",
    description: "Advanced computer vision technology tracks patient movements in real-time",
    features: [
      "Real-time posture correction",
      "Movement pattern recognition",
      "Form accuracy scoring",
      "Injury risk assessment",
      "Progress tracking over time"
    ],
    demo: "/start-recovery"
  },
  {
    icon: Target,
    title: "Personalized Rehabilitation Plans",
    description: "AI generates tailored exercise programs based on individual patient needs",
    features: [
      "Condition-specific protocols",
      "Adaptive difficulty adjustment",
      "Medical history integration",
      "Physician input incorporation",
      "Dynamic plan evolution"
    ],
    demo: "/start-recovery"
  },
  {
    icon: Video,
    title: "Telehealth Integration",
    description: "Seamless connection with licensed physiotherapists and healthcare providers",
    features: [
      "Virtual consultations",
      "Real-time session monitoring",
      "EHR system integration",
      "Secure messaging",
      "Appointment scheduling"
    ],
    demo: "/dashboard"
  },
  {
    icon: Gamepad2,
    title: "Gamification & Motivation",
    description: "Engaging rewards system to boost patient adherence and motivation",
    features: [
      "Achievement badges",
      "Progress milestones",
      "Leaderboards",
      "Daily challenges",
      "Social sharing"
    ],
    demo: "/start-recovery"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Comprehensive data insights for patients and healthcare providers",
    features: [
      "Recovery progress tracking",
      "Outcome predictions",
      "Compliance monitoring",
      "Performance benchmarking",
      "Clinical decision support"
    ],
    demo: "/dashboard"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Medical-grade security and compliance for healthcare data protection",
    features: [
      "HIPAA/GDPR compliance",
      "End-to-end encryption",
      "Audit trails",
      "Role-based access",
      "SOC 2 certification"
    ],
    demo: "/compliance"
  }
];

const technicalFeatures = [
  {
    icon: Camera,
    title: "Computer Vision",
    description: "Advanced AI algorithms analyze movement patterns through smartphone cameras and wearable sensors"
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Optimized for smartphones and tablets with offline capabilities for uninterrupted sessions"
  },
  {
    icon: Database,
    title: "Cloud Infrastructure",
    description: "Scalable cloud platform with 99.9% uptime and global content delivery"
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Localized for different languages and healthcare systems worldwide"
  }
];

export default function Features() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 medical-gradient-subtle">
        <div className="container">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge className="bg-medical-blue/10 text-medical-blue border-medical-blue/20">
              Platform Features
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-medical-navy">
              Revolutionary AI Technology for 
              <span className="text-medical-blue"> Better Recovery</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our comprehensive platform combines cutting-edge artificial intelligence, 
              computer vision, and clinical expertise to deliver personalized rehabilitation experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="medical-gradient text-white" asChild>
                <Link to="/start-recovery">Try Demo Now</Link>
              </Button>
              <Button size="lg" variant="outline">
                <PlayCircle className="mr-2 h-4 w-4" />
                Watch Video
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-medical-navy mb-4">
              Core Platform Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every feature is designed to improve patient outcomes and streamline healthcare delivery
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-2 hover:border-medical-blue/50 transition-all group">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-4">
                        <div className="h-12 w-12 bg-medical-blue/10 rounded-lg flex items-center justify-center group-hover:bg-medical-blue group-hover:text-white transition-colors">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{feature.title}</CardTitle>
                          <CardDescription className="text-base">{feature.description}</CardDescription>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-medical-green flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to={feature.demo}>Try This Feature</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-medical-navy mb-4">
              Technical Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built with the latest technology stack for reliability, scalability, and performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="h-12 w-12 bg-medical-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-medical-green" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-medical-navy mb-4">
              Why Choose RehabAI?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how our platform compares to traditional rehabilitation methods
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Traditional Method */}
            <Card className="border-2 border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl text-gray-600">Traditional Rehabilitation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">Limited session frequency</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">Subjective progress tracking</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">Generic exercise programs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">High travel requirements</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">Limited accessibility</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* RehabAI Method */}
            <Card className="border-2 border-medical-blue bg-medical-blue/5">
              <CardHeader>
                <CardTitle className="text-xl text-medical-blue">RehabAI Platform</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-medical-green" />
                    <span className="text-sm">24/7 accessible sessions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-medical-green" />
                    <span className="text-sm">AI-powered objective tracking</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-medical-green" />
                    <span className="text-sm">Personalized adaptive programs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-medical-green" />
                    <span className="text-sm">Home-based convenience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-medical-green" />
                    <span className="text-sm">Global accessibility</span>
                  </div>
                </div>
                <Button className="w-full medical-gradient text-white mt-4" asChild>
                  <Link to="/start-recovery">Experience the Difference</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integration Showcase */}
      <section className="py-20 bg-medical-light-blue">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-medical-navy mb-4">
              Seamless Integration
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Works with your existing healthcare infrastructure and systems
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Stethoscope className="h-12 w-12 text-medical-blue mx-auto mb-4" />
                <CardTitle>EHR Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Integrates with Epic, Cerner, AllScripts, and other major electronic health record systems
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Monitor className="h-12 w-12 text-medical-blue mx-auto mb-4" />
                <CardTitle>Wearable Devices</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Compatible with Apple Watch, Fitbit, Garmin, and other fitness tracking devices
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Video className="h-12 w-12 text-medical-blue mx-auto mb-4" />
                <CardTitle>Telehealth Platforms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Works with Zoom Health, Teladoc, Doxy.me, and other telemedicine solutions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 medical-gradient text-white">
        <div className="container text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of healthcare providers and patients who are already experiencing 
            better outcomes with our AI-powered platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-medical-blue hover:bg-gray-100" asChild>
              <Link to="/for-providers">For Healthcare Providers</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-medical-blue" asChild>
              <Link to="/for-patients">For Patients</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
