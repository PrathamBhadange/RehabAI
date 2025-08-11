import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Heart, 
  Smartphone, 
  Activity, 
  Users, 
  Clock, 
  Shield, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  PlayCircle,
  Brain,
  Video,
  Star,
  Calendar,
  Target,
  Zap,
  Award,
  MessageCircle,
  FileText,
  Home,
  Stethoscope
} from 'lucide-react';

const patientJourney = [
  {
    step: 1,
    title: "Assessment & Setup",
    description: "Quick health assessment and personalized plan creation",
    icon: FileText,
    duration: "5 minutes",
    details: [
      "Complete your health history",
      "Set recovery goals",
      "Receive personalized exercise plan",
      "Download mobile app"
    ]
  },
  {
    step: 2,
    title: "Start Exercising",
    description: "Begin your AI-guided rehabilitation journey",
    icon: Activity,
    duration: "20-30 min/day",
    details: [
      "Follow step-by-step exercise videos",
      "Get real-time AI feedback",
      "Track your progress automatically",
      "Earn rewards and badges"
    ]
  },
  {
    step: 3,
    title: "Monitor Progress",
    description: "Watch your recovery metrics improve over time",
    icon: TrendingUp,
    duration: "Ongoing",
    details: [
      "View detailed progress reports",
      "Celebrate milestones",
      "Adjust goals as needed",
      "Share updates with your doctor"
    ]
  },
  {
    step: 4,
    title: "Virtual Check-ins",
    description: "Connect with licensed physiotherapists as needed",
    icon: Video,
    duration: "Weekly",
    details: [
      "Schedule virtual consultations",
      "Get expert guidance",
      "Modify your exercise plan",
      "Ask questions and get support"
    ]
  }
];

const conditions = [
  {
    name: "Knee Replacement Recovery",
    icon: Target,
    description: "Post-surgical rehabilitation for knee replacement patients",
    duration: "8-12 weeks",
    exercises: "15+ specialized exercises"
  },
  {
    name: "Hip Replacement Recovery",
    icon: Target,
    description: "Comprehensive hip rehabilitation program",
    duration: "6-10 weeks",
    exercises: "20+ targeted movements"
  },
  {
    name: "Shoulder Surgery Recovery",
    icon: Target,
    description: "Rotator cuff and shoulder mobility restoration",
    duration: "10-16 weeks",
    exercises: "25+ range-of-motion exercises"
  },
  {
    name: "Stroke Recovery",
    icon: Brain,
    description: "Motor function and coordination improvement",
    duration: "Ongoing",
    exercises: "30+ adaptive exercises"
  },
  {
    name: "Arthritis Management",
    icon: Heart,
    description: "Joint mobility and pain management",
    duration: "Ongoing",
    exercises: "20+ low-impact movements"
  },
  {
    name: "Back Pain Relief",
    icon: Activity,
    description: "Core strengthening and spinal health",
    duration: "4-8 weeks",
    exercises: "18+ strengthening exercises"
  }
];

const testimonials = [
  {
    name: "Sarah M.",
    condition: "Knee Replacement",
    quote: "The AI feedback helped me perfect my form and recover 30% faster than expected. The daily motivation kept me going!",
    rating: 5,
    weeks: 8
  },
  {
    name: "Robert K.",
    condition: "Stroke Recovery",
    quote: "Having 24/7 access to exercises and virtual check-ins with my therapist made all the difference in my recovery.",
    rating: 5,
    weeks: 16
  },
  {
    name: "Maria L.",
    condition: "Hip Surgery",
    quote: "The gamification aspect made rehabilitation fun. I looked forward to earning my daily badges and tracking progress.",
    rating: 5,
    weeks: 10
  }
];

export default function ForPatients() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 medical-gradient-subtle">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-medical-green/10 text-medical-green border-medical-green/20">
                For Patients
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-medical-navy">
                Your Recovery Journey,
                <span className="text-medical-blue"> Powered by AI</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Get personalized rehabilitation from home with real-time AI guidance, 
                virtual physiotherapist support, and proven results that get you back to life faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="medical-gradient text-white" asChild>
                  <Link to="/start-recovery">Start Free Trial <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white">
                  <PlayCircle className="mr-2 h-4 w-4" />
                  Watch Patient Stories
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-medical-green" />
                  <span>No equipment needed</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-medical-green" />
                  <span>Works on any device</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-medical-green" />
                  <span>Licensed therapists</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-medical-blue/20 to-medical-green/20 rounded-3xl p-8 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="h-24 w-24 bg-medical-blue text-white rounded-full flex items-center justify-center mx-auto">
                    <Heart className="h-12 w-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-medical-navy">98% Success Rate</h3>
                  <p className="text-muted-foreground">Patients achieve their recovery goals</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-medical-green text-white p-4 rounded-2xl">
                <Smartphone className="h-8 w-8" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-medical-blue text-white p-4 rounded-2xl">
                <Activity className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Journey */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-medical-navy mb-4">
              Your 4-Step Recovery Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From initial assessment to full recovery - we guide you every step of the way
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {patientJourney.map((step) => {
              const Icon = step.icon;
              return (
                <Card key={step.step} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="absolute top-4 right-4">
                    <div className="h-8 w-8 bg-medical-blue text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <div className="h-12 w-12 bg-medical-green/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-medical-green" />
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                    <Badge variant="outline" className="w-fit text-xs">{step.duration}</Badge>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {step.details.map((detail, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-3 w-3 text-medical-green flex-shrink-0" />
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="medical-gradient text-white" asChild>
              <Link to="/start-recovery">Begin Your Journey Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-medical-navy mb-4">
              Conditions We Specialize In
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI-powered platform supports recovery for a wide range of conditions and surgeries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((condition, index) => {
              const Icon = condition.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 bg-medical-blue/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-5 w-5 text-medical-blue" />
                      </div>
                      <CardTitle className="text-lg">{condition.name}</CardTitle>
                    </div>
                    <CardDescription>{condition.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>Duration: {condition.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Activity className="h-4 w-4" />
                        <span>{condition.exercises}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-medical-navy mb-4">
              How RehabAI Works for You
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced technology made simple for better recovery outcomes
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 bg-medical-blue text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Smartphone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-medical-navy mb-2">Use Your Smartphone</h3>
                  <p className="text-muted-foreground">
                    No special equipment needed. Our AI uses your phone's camera to track your movements 
                    and provide real-time feedback on your form.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 bg-medical-green text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Brain className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-medical-navy mb-2">AI Analyzes Your Movement</h3>
                  <p className="text-muted-foreground">
                    Advanced computer vision technology analyzes your posture, range of motion, and form in real-time, 
                    providing instant corrections and encouragement.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 bg-medical-blue text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-medical-navy mb-2">Track Your Progress</h3>
                  <p className="text-muted-foreground">
                    See detailed metrics on your recovery progress, including range of motion improvements, 
                    pain reduction, and strength gains over time.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 bg-medical-green text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Stethoscope className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-medical-navy mb-2">Connect with Experts</h3>
                  <p className="text-muted-foreground">
                    Schedule virtual consultations with licensed physiotherapists who can review your progress 
                    and adjust your treatment plan as needed.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="p-6 border-2 border-medical-blue/20">
                <div className="text-center space-y-4">
                  <div className="aspect-square bg-gradient-to-br from-medical-blue/10 to-medical-green/10 rounded-2xl flex items-center justify-center">
                    <div className="space-y-4">
                      <Activity className="h-16 w-16 text-medical-blue mx-auto" />
                      <div className="space-y-2">
                        <div className="text-lg font-semibold text-medical-navy">Live AI Feedback</div>
                        <div className="text-sm text-muted-foreground">Form: Excellent</div>
                        <div className="text-sm text-muted-foreground">Range: 95%</div>
                        <div className="text-sm text-muted-foreground">Progress: +8%</div>
                      </div>
                    </div>
                  </div>
                  <Badge className="bg-medical-green/10 text-medical-green border-medical-green/20">
                    Real-time Analysis
                  </Badge>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-20 bg-medical-light-blue">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-medical-navy mb-4">
              Real Patient Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from patients who achieved faster recovery with RehabAI
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 hover:border-medical-blue/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-base italic">
                    "{testimonial.quote}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-medical-navy">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.condition}</div>
                    </div>
                    <Badge variant="outline">{testimonial.weeks} weeks</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-medical-navy mb-4">
              Why Patients Choose RehabAI
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-medical-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-medical-blue" />
              </div>
              <h3 className="text-lg font-semibold text-medical-navy mb-2">Exercise from Home</h3>
              <p className="text-sm text-muted-foreground">No travel required - complete your rehabilitation in the comfort of your own home</p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-medical-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-medical-green" />
              </div>
              <h3 className="text-lg font-semibold text-medical-navy mb-2">24/7 Availability</h3>
              <p className="text-sm text-muted-foreground">Access your exercises anytime, anywhere - fit rehabilitation into your schedule</p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-medical-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-medical-blue" />
              </div>
              <h3 className="text-lg font-semibold text-medical-navy mb-2">Faster Recovery</h3>
              <p className="text-sm text-muted-foreground">Patients recover 30% faster on average with consistent AI-guided exercise</p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-medical-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-medical-green" />
              </div>
              <h3 className="text-lg font-semibold text-medical-navy mb-2">Proven Results</h3>
              <p className="text-sm text-muted-foreground">Clinical studies show 98% of patients achieve their recovery goals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-20 medical-gradient text-white">
        <div className="container">
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Start Your Recovery Journey Today
            </h2>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Join thousands of patients who have transformed their recovery with AI-powered rehabilitation.
            </p>
            
            <Alert className="max-w-2xl mx-auto bg-white/10 border-white/20 text-white">
              <Zap className="h-4 w-4" />
              <AlertDescription>
                <strong>Limited Time:</strong> Get your first month free with any subscription plan. 
                No commitment required - cancel anytime.
              </AlertDescription>
            </Alert>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-medical-blue hover:bg-gray-100" asChild>
                <Link to="/start-recovery">Try Free Demo</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-medical-blue" asChild>
                <Link to="/pricing">View Pricing Plans</Link>
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-6 text-sm opacity-80">
              <div className="flex items-center space-x-1">
                <Shield className="h-4 w-4" />
                <span>HIPAA Secure</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>10,000+ Patients</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4" />
                <span>4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
