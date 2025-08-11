import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Activity, 
  Brain, 
  Smartphone, 
  Users, 
  TrendingUp, 
  Shield, 
  Video, 
  BarChart3, 
  Target, 
  Globe, 
  CheckCircle, 
  ArrowRight,
  Play,
  Star,
  Clock,
  Heart,
  Zap
} from 'lucide-react';

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 medical-gradient-subtle">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-medical-green/10 text-medical-green border-medical-green/20">
                AI-Powered Healthcare
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-medical-navy">
                Transform Recovery with 
                <span className="text-medical-blue"> AI-Guided</span> Rehabilitation
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Personalized, data-driven physical therapy for post-surgery recovery and chronic condition management. 
                Connect with licensed physiotherapists through our intelligent platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="medical-gradient text-white" asChild>
                  <Link to="/start-recovery">Start Your Recovery <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white" asChild>
                  <Link to="/start-recovery">
                    <Play className="mr-2 h-4 w-4" />
                    Watch Demo
                  </Link>
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Shield className="h-4 w-4 text-medical-green" />
                  <span>HIPAA Compliant</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-medical-green" />
                  <span>FDA Cleared</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-medical-green" />
                  <span>98% Patient Satisfaction</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-medical-blue/20 to-medical-green/20 rounded-3xl p-8 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Activity className="h-24 w-24 text-medical-blue mx-auto" />
                  <h3 className="text-2xl font-bold text-medical-navy">Real-time Analysis</h3>
                  <p className="text-muted-foreground">AI monitors your movements for optimal recovery</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-medical-green text-white p-4 rounded-2xl">
                <Brain className="h-8 w-8" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-medical-blue text-white p-4 rounded-2xl">
                <Smartphone className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-medical-blue/10 text-medical-blue border-medical-blue/20">
              Platform Features
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-medical-navy">
              Advanced AI Technology for Better Outcomes
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform combines cutting-edge AI with expert clinical knowledge to deliver personalized rehabilitation programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-medical-blue/50 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 bg-medical-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-medical-blue" />
                </div>
                <CardTitle>AI-Powered Movement Analysis</CardTitle>
                <CardDescription>
                  Advanced computer vision tracks patient movements using smartphone cameras or wearable sensors, 
                  ensuring correct form and detecting issues in real-time.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-medical-green/50 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 bg-medical-green/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-medical-green" />
                </div>
                <CardTitle>Personalized Rehab Plans</CardTitle>
                <CardDescription>
                  AI generates tailored exercise regimens based on patient condition, surgery type, medical history, 
                  and physician inputs. Plans adapt dynamically as patients progress.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-medical-blue/50 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 bg-medical-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <Video className="h-6 w-6 text-medical-blue" />
                </div>
                <CardTitle>Telehealth Integration</CardTitle>
                <CardDescription>
                  Connect with licensed physiotherapists for virtual check-ins and consultations. 
                  Syncs with EHRs for seamless care coordination.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-medical-green/50 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 bg-medical-green/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-medical-green" />
                </div>
                <CardTitle>Progress Tracking & Gamification</CardTitle>
                <CardDescription>
                  Visual dashboards track recovery metrics like range of motion and pain levels. 
                  Gamified rewards and badges boost patient adherence and motivation.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-medical-blue/50 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 bg-medical-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-medical-blue" />
                </div>
                <CardTitle>B2B Analytics</CardTitle>
                <CardDescription>
                  Provides hospitals and insurers with anonymized data to monitor patient outcomes, 
                  optimize rehabilitation protocols, and improve care quality.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-medical-green/50 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 bg-medical-green/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-medical-green" />
                </div>
                <CardTitle>Enterprise Security</CardTitle>
                <CardDescription>
                  HIPAA/GDPR compliant platform with medical-grade AI tools and secure certifications. 
                  Your health data is protected with the highest security standards.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Models Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-medical-green/10 text-medical-green border-medical-green/20">
              Business Solutions
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-medical-navy">
              Flexible Models for Every Healthcare Need
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you're a patient seeking recovery or a healthcare provider optimizing outcomes, 
              we have the right solution for you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-2 border-medical-blue/20">
              <CardHeader className="text-center pb-8">
                <div className="h-16 w-16 bg-medical-blue text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl">B2C: Direct to Patients</CardTitle>
                <CardDescription className="text-lg">
                  Subscription-based app for personalized rehabilitation plans and telehealth sessions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-medical-blue mb-2">$15-30</div>
                  <div className="text-muted-foreground">per month</div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-medical-green" />
                    <span>Personalized exercise plans</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-medical-green" />
                    <span>AI movement analysis</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-medical-green" />
                    <span>Virtual physiotherapist consultations</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-medical-green" />
                    <span>Progress tracking & gamification</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-medical-green" />
                    <span>Freemium model with basic exercises</span>
                  </li>
                </ul>
                <Button className="w-full medical-gradient text-white" size="lg" asChild>
                  <Link to="/start-recovery">Start Free Trial</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-medical-green/20">
              <CardHeader className="text-center pb-8">
                <div className="h-16 w-16 bg-medical-green text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl">B2B: Healthcare Providers</CardTitle>
                <CardDescription className="text-lg">
                  License platform to hospitals, clinics, and insurers for post-surgery rehabilitation programs
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-medical-green mb-2">Custom</div>
                  <div className="text-muted-foreground">enterprise pricing</div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-medical-green" />
                    <span>White-label platform integration</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-medical-green" />
                    <span>Advanced analytics & reporting</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-medical-green" />
                    <span>EHR system integration</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-medical-green" />
                    <span>Outcome tracking & optimization</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-medical-green" />
                    <span>Revenue from analytics services</span>
                  </li>
                </ul>
                <Button className="w-full bg-medical-green text-white" size="lg" asChild>
                  <Link to="/for-providers">Contact Sales</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-medical-blue/10 text-medical-blue border-medical-blue/20">
              Implementation Roadmap
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-medical-navy">
              From MVP to Global Scale
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our strategic implementation plan ensures rapid deployment and scalable growth
            </p>
          </div>

          <div className="space-y-8">
            <div className="grid md:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="h-12 w-12 bg-medical-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    1
                  </div>
                  <CardTitle>MVP (6-12 months)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• AI movement analysis development</li>
                    <li>• Basic exercise plans & telehealth</li>
                    <li>• Hospital pilot partnership</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="h-12 w-12 bg-medical-green text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    2
                  </div>
                  <CardTitle>Pilot Testing</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Post-surgery patient trials</li>
                    <li>• AI refinement & UX optimization</li>
                    <li>• Healthcare provider feedback</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="h-12 w-12 bg-medical-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    3
                  </div>
                  <CardTitle>Regulatory Compliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• HIPAA/GDPR compliance</li>
                    <li>• Medical-grade AI certifications</li>
                    <li>• Security & privacy standards</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="h-12 w-12 bg-medical-green text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    4
                  </div>
                  <CardTitle>Global Scaling</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Chronic condition expansion</li>
                    <li>• Global healthcare partnerships</li>
                    <li>• Market localization</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="py-20 bg-medical-light-blue">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-medical-navy">
              Why Now?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Market timing and technology convergence create the perfect opportunity for AI-powered rehabilitation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-medical-blue text-white rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <CardTitle>Market Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Rehabilitation market projected to reach <strong className="text-medical-blue">$320 billion by 2030</strong>, 
                  driven by aging populations and rising surgeries. 1.5 million knee replacements annually in the US alone.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-medical-green text-white rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6" />
                </div>
                <CardTitle>Technology Readiness</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Telehealth adoption rose <strong className="text-medical-green">78% from 2019-2024</strong>. 
                  Smartphone ubiquity and advanced AI make remote rehabilitation feasible and scalable.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-medical-blue text-white rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6" />
                </div>
                <CardTitle>Healthcare Need</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <strong className="text-medical-blue">30% of rehab patients</strong> face complications due to poor adherence. 
                  Healthcare systems seek cost-effective solutions to reduce readmissions and improve outcomes.
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
            Ready to Transform Recovery?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of patients and healthcare providers who are already experiencing better outcomes 
            with AI-powered rehabilitation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-medical-blue hover:bg-gray-100">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-medical-blue">
              Book a Demo
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center space-x-6 text-sm opacity-80">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>2-minute setup</span>
            </div>
            <div className="flex items-center space-x-1">
              <Zap className="h-4 w-4" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center space-x-1">
              <Shield className="h-4 w-4" />
              <span>HIPAA compliant</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
