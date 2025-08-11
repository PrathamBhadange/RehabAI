import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Stethoscope, 
  BarChart3, 
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
  Hospital,
  Activity,
  Database,
  Monitor,
  DollarSign,
  UserCheck,
  Workflow,
  ChartBar,
  Settings,
  Lock,
  Globe,
  Phone
} from 'lucide-react';

const providerBenefits = [
  {
    icon: TrendingUp,
    title: "Improved Patient Outcomes",
    description: "30% faster recovery times with AI-guided rehabilitation",
    metrics: ["98% goal achievement", "45% fewer readmissions", "92% patient satisfaction"]
  },
  {
    icon: Clock,
    title: "Reduced Workload",
    description: "Automate routine monitoring and focus on complex cases",
    metrics: ["60% less admin time", "3x more patients managed", "24/7 patient monitoring"]
  },
  {
    icon: BarChart3,
    title: "Data-Driven Insights",
    description: "Comprehensive analytics to optimize treatment protocols",
    metrics: ["Real-time progress tracking", "Outcome predictions", "Evidence-based adjustments"]
  },
  {
    icon: DollarSign,
    title: "Revenue Growth",
    description: "Expand patient capacity without additional staff",
    metrics: ["40% revenue increase", "Lower operational costs", "Scalable patient management"]
  }
];

const integrations = [
  {
    name: "Epic",
    logo: "🏥",
    description: "Seamless integration with Epic EHR systems"
  },
  {
    name: "Cerner",
    logo: "📊",
    description: "Direct data sync with Cerner platforms"
  },
  {
    name: "AllScripts",
    logo: "📋",
    description: "Compatible with AllScripts workflows"
  },
  {
    name: "Athenahealth",
    logo: "⚡",
    description: "Integrated with Athenahealth systems"
  },
  {
    name: "Zoom Health",
    logo: "📹",
    description: "Telehealth integration via Zoom Health"
  },
  {
    name: "Teladoc",
    logo: "💻",
    description: "Connect through Teladoc platform"
  }
];

const caseStudies = [
  {
    facility: "Metro General Hospital",
    type: "Large Hospital System",
    patients: "2,500+ patients",
    results: {
      outcomeImprovement: "35%",
      costReduction: "28%",
      staffEfficiency: "50%",
      patientSatisfaction: "96%"
    },
    quote: "RehabAI has transformed our rehabilitation department. We're treating more patients with better outcomes while reducing costs.",
    doctor: "Dr. Sarah Chen, Chief of Rehabilitation"
  },
  {
    facility: "Westside Physical Therapy",
    type: "Private Practice",
    patients: "800+ patients",
    results: {
      outcomeImprovement: "42%",
      costReduction: "15%",
      staffEfficiency: "65%",
      patientSatisfaction: "98%"
    },
    quote: "The AI guidance allows us to provide consistent, high-quality care to more patients than ever before.",
    doctor: "Dr. Michael Torres, PT, DPT"
  }
];

const features = [
  {
    category: "Patient Management",
    items: [
      {
        name: "Centralized Dashboard",
        description: "Monitor all patients from a single, intuitive interface"
      },
      {
        name: "Progress Analytics",
        description: "Detailed insights into patient recovery trajectories"
      },
      {
        name: "Automated Alerts",
        description: "Real-time notifications for patient concerns or milestones"
      },
      {
        name: "Custom Protocols",
        description: "Create and modify rehabilitation protocols for specific conditions"
      }
    ]
  },
  {
    category: "Clinical Tools",
    items: [
      {
        name: "AI Assessment Engine",
        description: "Automated movement analysis and form correction"
      },
      {
        name: "Outcome Predictions",
        description: "ML-powered forecasting of patient recovery timelines"
      },
      {
        name: "Evidence-Based Protocols",
        description: "Treatment plans based on latest clinical research"
      },
      {
        name: "Virtual Consultations",
        description: "Integrated telehealth for remote patient interactions"
      }
    ]
  },
  {
    category: "Integration & Compliance",
    items: [
      {
        name: "EHR Integration",
        description: "Seamless data flow with major electronic health records"
      },
      {
        name: "HIPAA Compliance",
        description: "Full compliance with healthcare privacy regulations"
      },
      {
        name: "API Access",
        description: "RESTful APIs for custom integrations"
      },
      {
        name: "Audit Trails",
        description: "Complete logging for compliance and quality assurance"
      }
    ]
  }
];

export default function ForProviders() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 medical-gradient-subtle">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-medical-blue/10 text-medical-blue border-medical-blue/20">
                For Healthcare Providers
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-medical-navy">
                Scale Your Practice with
                <span className="text-medical-blue"> AI-Powered</span> Rehabilitation
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Enhance patient outcomes, reduce costs, and expand your capacity with our comprehensive 
                AI rehabilitation platform designed specifically for healthcare providers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="medical-gradient text-white" asChild>
                  <Link to="/get-started">Request Demo <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white">
                  <PlayCircle className="mr-2 h-4 w-4" />
                  Watch Case Study
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-medical-green" />
                  <span>HIPAA Compliant</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-medical-green" />
                  <span>EHR Integration</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-medical-green" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Card className="p-6 border-2 border-medical-blue/20 bg-white">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-medical-navy">Dashboard Overview</h3>
                    <Badge className="bg-medical-green/10 text-medical-green">Live</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-medical-light-blue rounded-lg">
                      <div className="text-2xl font-bold text-medical-blue">847</div>
                      <div className="text-xs text-muted-foreground">Active Patients</div>
                    </div>
                    <div className="text-center p-3 bg-medical-light-blue rounded-lg">
                      <div className="text-2xl font-bold text-medical-green">96%</div>
                      <div className="text-xs text-muted-foreground">Compliance Rate</div>
                    </div>
                    <div className="text-center p-3 bg-medical-light-blue rounded-lg">
                      <div className="text-2xl font-bold text-medical-blue">15min</div>
                      <div className="text-xs text-muted-foreground">Avg Session</div>
                    </div>
                    <div className="text-center p-3 bg-medical-light-blue rounded-lg">
                      <div className="text-2xl font-bold text-medical-green">4.8★</div>
                      <div className="text-xs text-muted-foreground">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </Card>
              <div className="absolute -top-4 -right-4 bg-medical-green text-white p-4 rounded-2xl">
                <Stethoscope className="h-8 w-8" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-medical-blue text-white p-4 rounded-2xl">
                <BarChart3 className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-medical-navy mb-4">
              Transform Your Practice Today
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join leading healthcare providers who have improved outcomes while reducing costs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {providerBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="h-16 w-16 bg-medical-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-medical-blue" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {benefit.metrics.map((metric, idx) => (
                        <div key={idx} className="text-sm text-muted-foreground flex items-center justify-center space-x-2">
                          <CheckCircle className="h-3 w-3 text-medical-green" />
                          <span>{metric}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-medical-navy mb-4">
              Proven Results Across Healthcare Settings
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real outcomes from healthcare providers using RehabAI
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border-2 hover:border-medical-blue/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">{study.facility}</CardTitle>
                      <CardDescription className="text-base">{study.type} • {study.patients}</CardDescription>
                    </div>
                    <Hospital className="h-8 w-8 text-medical-blue" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-medical-light-blue rounded-lg">
                      <div className="text-xl font-bold text-medical-green">+{study.results.outcomeImprovement}</div>
                      <div className="text-xs text-muted-foreground">Outcome Improvement</div>
                    </div>
                    <div className="text-center p-3 bg-medical-light-blue rounded-lg">
                      <div className="text-xl font-bold text-medical-blue">-{study.results.costReduction}</div>
                      <div className="text-xs text-muted-foreground">Cost Reduction</div>
                    </div>
                    <div className="text-center p-3 bg-medical-light-blue rounded-lg">
                      <div className="text-xl font-bold text-medical-green">+{study.results.staffEfficiency}</div>
                      <div className="text-xs text-muted-foreground">Staff Efficiency</div>
                    </div>
                    <div className="text-center p-3 bg-medical-light-blue rounded-lg">
                      <div className="text-xl font-bold text-medical-blue">{study.results.patientSatisfaction}</div>
                      <div className="text-xs text-muted-foreground">Patient Satisfaction</div>
                    </div>
                  </div>
                  <blockquote className="italic text-muted-foreground border-l-4 border-medical-blue pl-4">
                    "{study.quote}"
                  </blockquote>
                  <div className="text-sm font-medium text-medical-navy">
                    — {study.doctor}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-medical-navy mb-4">
              Comprehensive Platform Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to deliver exceptional rehabilitation care
            </p>
          </div>

          <Tabs defaultValue="patient-management" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="patient-management">Patient Management</TabsTrigger>
              <TabsTrigger value="clinical-tools">Clinical Tools</TabsTrigger>
              <TabsTrigger value="integration">Integration & Compliance</TabsTrigger>
            </TabsList>
            
            {features.map((category) => (
              <TabsContent key={category.category.toLowerCase().replace(' ', '-')} value={category.category.toLowerCase().replace(' & ', '-').replace(' ', '-')}>
                <div className="grid md:grid-cols-2 gap-6">
                  {category.items.map((item, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center">
                          <CheckCircle className="mr-3 h-5 w-5 text-medical-green" />
                          {item.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Integration Partners */}
      <section className="py-20 bg-medical-light-blue">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-medical-navy mb-4">
              Seamless Integration with Your Systems
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect with the platforms you already use
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-2">{integration.logo}</div>
                  <CardTitle className="text-lg">{integration.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{integration.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white">
              <Settings className="mr-2 h-4 w-4" />
              View All Integrations
            </Button>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-medical-navy mb-4">
              Simple Implementation Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get up and running in weeks, not months
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-medical-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-medical-navy mb-2">Discovery & Planning</h3>
              <p className="text-sm text-muted-foreground">Assess your needs and create implementation plan</p>
              <div className="text-xs text-medical-blue font-medium mt-2">Week 1</div>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-medical-green text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-medical-navy mb-2">System Integration</h3>
              <p className="text-sm text-muted-foreground">Connect with your EHR and existing workflows</p>
              <div className="text-xs text-medical-green font-medium mt-2">Week 2-3</div>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-medical-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-medical-navy mb-2">Staff Training</h3>
              <p className="text-sm text-muted-foreground">Comprehensive training for your clinical team</p>
              <div className="text-xs text-medical-blue font-medium mt-2">Week 3-4</div>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-medical-green text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-medical-navy mb-2">Go Live & Support</h3>
              <p className="text-sm text-muted-foreground">Launch with dedicated support and monitoring</p>
              <div className="text-xs text-medical-green font-medium mt-2">Week 4+</div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Preview */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-bold text-medical-navy">
                Calculate Your ROI
              </h2>
              <p className="text-xl text-muted-foreground">
                See how RehabAI can impact your practice's bottom line while improving patient care.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-medical-green" />
                  <span>Reduce staff workload by 60%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-medical-green" />
                  <span>Manage 3x more patients</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-medical-green" />
                  <span>Increase revenue by 40%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-medical-green" />
                  <span>Improve outcomes by 35%</span>
                </div>
              </div>
              <Button size="lg" className="medical-gradient text-white">
                <BarChart3 className="mr-2 h-4 w-4" />
                Calculate Your ROI
              </Button>
            </div>

            <Card className="p-6 border-2 border-medical-blue/20">
              <CardHeader>
                <CardTitle>Potential Annual Savings</CardTitle>
                <CardDescription>Based on 500-patient practice</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-medical-light-blue rounded-lg">
                    <div className="text-2xl font-bold text-medical-green">$240K</div>
                    <div className="text-xs text-muted-foreground">Staff Cost Savings</div>
                  </div>
                  <div className="text-center p-4 bg-medical-light-blue rounded-lg">
                    <div className="text-2xl font-bold text-medical-blue">$180K</div>
                    <div className="text-xs text-muted-foreground">Increased Revenue</div>
                  </div>
                  <div className="text-center p-4 bg-medical-light-blue rounded-lg">
                    <div className="text-2xl font-bold text-medical-green">$95K</div>
                    <div className="text-xs text-muted-foreground">Reduced Readmissions</div>
                  </div>
                  <div className="text-center p-4 bg-medical-light-blue rounded-lg">
                    <div className="text-2xl font-bold text-medical-blue">$515K</div>
                    <div className="text-xs text-muted-foreground">Total Annual Benefit</div>
                  </div>
                </div>
                <Alert>
                  <TrendingUp className="h-4 w-4" />
                  <AlertDescription>
                    ROI typically achieved within 6-8 months of implementation
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 medical-gradient text-white">
        <div className="container text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to Transform Patient Care?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join the hundreds of healthcare providers already using RehabAI to deliver 
            better outcomes with greater efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" variant="secondary" className="bg-white text-medical-blue hover:bg-gray-100">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-medical-blue">
              <Phone className="mr-2 h-4 w-4" />
              Speak with Expert
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6 text-sm opacity-80">
            <div className="flex items-center space-x-1">
              <Shield className="h-4 w-4" />
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>500+ Providers</span>
            </div>
            <div className="flex items-center space-x-1">
              <Award className="h-4 w-4" />
              <span>FDA Cleared</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
