import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { 
  CheckCircle, 
  X, 
  Star, 
  Zap, 
  Shield, 
  Users, 
  Crown,
  Building,
  Heart,
  Clock,
  Video,
  BarChart3,
  Brain,
  Smartphone,
  Award,
  Phone,
  MessageCircle,
  Calendar,
  Target,
  TrendingUp,
  Globe,
  Lock,
  Database,
  Headphones
} from 'lucide-react';

const patientPlans = [
  {
    name: "Basic",
    price: { monthly: 15, yearly: 150 },
    description: "Perfect for individuals starting their recovery journey",
    icon: Heart,
    color: "medical-blue",
    popular: false,
    features: [
      "Access to exercise library",
      "Basic progress tracking",
      "Mobile app access",
      "Community support",
      "Educational content"
    ],
    limitations: [
      "Limited to 3 exercises per day",
      "Basic AI feedback",
      "No telehealth sessions"
    ]
  },
  {
    name: "Pro",
    price: { monthly: 30, yearly: 300 },
    description: "Complete rehabilitation with AI guidance and expert support",
    icon: Zap,
    color: "medical-green",
    popular: true,
    features: [
      "Unlimited exercises",
      "Advanced AI movement analysis",
      "Real-time form correction",
      "Progress analytics",
      "2 monthly telehealth sessions",
      "Personalized recovery plans",
      "Priority support",
      "Wearable device integration"
    ],
    limitations: []
  },
  {
    name: "Premium",
    price: { monthly: 50, yearly: 500 },
    description: "Complete care with unlimited expert access",
    icon: Crown,
    color: "medical-blue",
    popular: false,
    features: [
      "Everything in Pro",
      "Unlimited telehealth sessions",
      "Dedicated physiotherapist",
      "Family plan (4 members)",
      "Priority appointment booking",
      "Custom exercise creation",
      "Advanced biometric tracking",
      "24/7 emergency support"
    ],
    limitations: []
  }
];

const providerPlans = [
  {
    name: "Starter",
    price: "Custom",
    description: "For small practices getting started with AI rehabilitation",
    icon: Building,
    patients: "Up to 100 patients",
    features: [
      "Basic patient management dashboard",
      "Standard AI movement analysis",
      "EHR integration (basic)",
      "Monthly outcome reports",
      "Email support",
      "Basic training included"
    ]
  },
  {
    name: "Professional",
    price: "Custom",
    description: "For growing practices ready to scale rehabilitation care",
    icon: TrendingUp,
    patients: "Up to 500 patients",
    popular: true,
    features: [
      "Advanced analytics dashboard",
      "Real-time patient monitoring",
      "Full EHR integration",
      "Custom protocol creation",
      "Telehealth platform integration",
      "Weekly outcome reports",
      "Phone & email support",
      "Comprehensive training program",
      "API access"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For health systems and large organizations",
    icon: Globe,
    patients: "Unlimited patients",
    features: [
      "Everything in Professional",
      "Multi-location management",
      "Advanced compliance tools",
      "Custom integrations",
      "Dedicated success manager",
      "24/7 priority support",
      "On-site training",
      "Custom reporting",
      "White-label options",
      "SLA guarantees"
    ]
  }
];

const addOns = [
  {
    name: "Family Plan",
    price: "$20/month",
    description: "Add up to 3 additional family members"
  },
  {
    name: "Nutrition Coaching",
    price: "$25/month",
    description: "Personalized nutrition plans for recovery"
  },
  {
    name: "Mental Health Support",
    price: "$30/month",
    description: "Counseling sessions for holistic recovery"
  },
  {
    name: "Advanced Biometrics",
    price: "$15/month",
    description: "Heart rate, sleep, and stress monitoring"
  }
];

const faqs = [
  {
    question: "Can I switch plans anytime?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle."
  },
  {
    question: "Is there a free trial?",
    answer: "We offer a 14-day free trial for all patient plans and a 30-day trial for healthcare providers."
  },
  {
    question: "What devices are supported?",
    answer: "RehabAI works on smartphones, tablets, and computers. Our mobile app is available for iOS and Android."
  },
  {
    question: "How does billing work for providers?",
    answer: "Provider plans are billed based on active patient count with flexible monthly or annual options."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we're HIPAA compliant with end-to-end encryption and enterprise-grade security measures."
  },
  {
    question: "Can I integrate with my existing EHR?",
    answer: "We integrate with major EHR systems including Epic, Cerner, AllScripts, and many others."
  }
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const [activeTab, setActiveTab] = useState("patients");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 medical-gradient-subtle">
        <div className="container">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge className="bg-medical-blue/10 text-medical-blue border-medical-blue/20">
              Pricing Plans
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-medical-navy">
              Choose the Perfect Plan for
              <span className="text-medical-blue"> Your Needs</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Flexible pricing options for patients and healthcare providers. 
              Start your rehabilitation journey with confidence.
            </p>
            <div className="flex items-center justify-center space-x-4 bg-white rounded-full p-2 max-w-sm mx-auto">
              <span className={`px-4 py-2 rounded-full transition-colors ${!isYearly ? 'bg-medical-blue text-white' : 'text-muted-foreground'}`}>
                Monthly
              </span>
              <Switch 
                checked={isYearly} 
                onCheckedChange={setIsYearly}
                className="data-[state=checked]:bg-medical-green"
              />
              <span className={`px-4 py-2 rounded-full transition-colors ${isYearly ? 'bg-medical-green text-white' : 'text-muted-foreground'}`}>
                Yearly
              </span>
              {isYearly && (
                <Badge className="bg-medical-green/10 text-medical-green">Save 17%</Badge>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
              <TabsTrigger value="patients">For Patients</TabsTrigger>
              <TabsTrigger value="providers">For Providers</TabsTrigger>
            </TabsList>
            
            {/* Patient Plans */}
            <TabsContent value="patients">
              <div className="grid lg:grid-cols-3 gap-8">
                {patientPlans.map((plan, index) => {
                  const Icon = plan.icon;
                  const monthlyPrice = plan.price.monthly;
                  const yearlyPrice = plan.price.yearly;
                  const displayPrice = isYearly ? yearlyPrice : monthlyPrice;
                  const period = isYearly ? 'year' : 'month';
                  
                  return (
                    <Card 
                      key={index} 
                      className={`relative overflow-hidden transition-all ${
                        plan.popular 
                          ? 'border-2 border-medical-green shadow-lg scale-105' 
                          : 'border-2 hover:border-medical-blue/50'
                      }`}
                    >
                      {plan.popular && (
                        <div className="absolute top-0 left-0 right-0 bg-medical-green text-white text-center py-2 text-sm font-semibold">
                          Most Popular
                        </div>
                      )}
                      
                      <CardHeader className={plan.popular ? 'pt-12' : ''}>
                        <div className="flex items-center space-x-3">
                          <div className={`h-10 w-10 bg-${plan.color}/10 rounded-lg flex items-center justify-center`}>
                            <Icon className={`h-5 w-5 text-${plan.color}`} />
                          </div>
                          <CardTitle className="text-xl">{plan.name}</CardTitle>
                        </div>
                        <CardDescription className="text-base">{plan.description}</CardDescription>
                        
                        <div className="pt-4">
                          <div className="flex items-baseline space-x-1">
                            <span className="text-4xl font-bold text-medical-navy">${displayPrice}</span>
                            <span className="text-muted-foreground">/{period}</span>
                          </div>
                          {isYearly && (
                            <div className="text-sm text-medical-green">
                              Save ${(monthlyPrice * 12) - yearlyPrice} per year
                            </div>
                          )}
                        </div>
                      </CardHeader>
                      
                      <CardContent className="space-y-6">
                        <div className="space-y-3">
                          <h4 className="font-semibold text-medical-navy">Included:</h4>
                          {plan.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-3">
                              <CheckCircle className="h-4 w-4 text-medical-green flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        {plan.limitations.length > 0 && (
                          <div className="space-y-3">
                            <h4 className="font-semibold text-muted-foreground">Limitations:</h4>
                            {plan.limitations.map((limitation, idx) => (
                              <div key={idx} className="flex items-center space-x-3">
                                <X className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{limitation}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        
                        <Button 
                          className={`w-full ${
                            plan.popular 
                              ? 'medical-gradient text-white' 
                              : 'border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white'
                          }`}
                          variant={plan.popular ? 'default' : 'outline'}
                          asChild
                        >
                          <Link to="/start-recovery">
                            {plan.popular ? 'Start Free Trial' : 'Get Started'}
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
            
            {/* Provider Plans */}
            <TabsContent value="providers">
              <div className="grid lg:grid-cols-3 gap-8">
                {providerPlans.map((plan, index) => {
                  const Icon = plan.icon;
                  
                  return (
                    <Card 
                      key={index} 
                      className={`relative overflow-hidden transition-all ${
                        plan.popular 
                          ? 'border-2 border-medical-blue shadow-lg scale-105' 
                          : 'border-2 hover:border-medical-blue/50'
                      }`}
                    >
                      {plan.popular && (
                        <div className="absolute top-0 left-0 right-0 bg-medical-blue text-white text-center py-2 text-sm font-semibold">
                          Recommended
                        </div>
                      )}
                      
                      <CardHeader className={plan.popular ? 'pt-12' : ''}>
                        <div className="flex items-center space-x-3">
                          <div className="h-10 w-10 bg-medical-blue/10 rounded-lg flex items-center justify-center">
                            <Icon className="h-5 w-5 text-medical-blue" />
                          </div>
                          <CardTitle className="text-xl">{plan.name}</CardTitle>
                        </div>
                        <CardDescription className="text-base">{plan.description}</CardDescription>
                        
                        <div className="pt-4">
                          <div className="text-2xl font-bold text-medical-navy">{plan.price}</div>
                          <div className="text-sm text-muted-foreground">{plan.patients}</div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="space-y-6">
                        <div className="space-y-3">
                          {plan.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-3">
                              <CheckCircle className="h-4 w-4 text-medical-green flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <Button 
                          className={`w-full ${
                            plan.popular 
                              ? 'medical-gradient text-white' 
                              : 'border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white'
                          }`}
                          variant={plan.popular ? 'default' : 'outline'}
                          asChild
                        >
                          <Link to="/get-started">
                            Contact Sales
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
              
              <Alert className="mt-12 max-w-4xl mx-auto">
                <Calendar className="h-4 w-4" />
                <AlertDescription>
                  <strong>Enterprise Solutions:</strong> All provider plans include custom pricing based on your patient volume, 
                  integration requirements, and support needs. Contact our sales team for a personalized quote.
                </AlertDescription>
              </Alert>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Add-ons Section */}
      {activeTab === "patients" && (
        <section className="py-20 bg-muted/50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-medical-navy mb-4">
                Optional Add-ons
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Enhance your recovery experience with specialized services
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addon, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{addon.name}</CardTitle>
                    <div className="text-2xl font-bold text-medical-blue">{addon.price}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{addon.description}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      Add to Plan
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Comparison Table */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-medical-navy mb-4">
              Compare All Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See exactly what's included in each plan
            </p>
          </div>

          {activeTab === "patients" && (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-medical-light-blue">
                    <th className="border border-gray-200 p-4 text-left">Feature</th>
                    <th className="border border-gray-200 p-4 text-center">Basic</th>
                    <th className="border border-gray-200 p-4 text-center">Pro</th>
                    <th className="border border-gray-200 p-4 text-center">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Exercise Library Access", basic: true, pro: true, premium: true },
                    { feature: "Mobile App", basic: true, pro: true, premium: true },
                    { feature: "Basic Progress Tracking", basic: true, pro: true, premium: true },
                    { feature: "AI Movement Analysis", basic: "Limited", pro: true, premium: true },
                    { feature: "Real-time Form Correction", basic: false, pro: true, premium: true },
                    { feature: "Telehealth Sessions", basic: false, pro: "2/month", premium: "Unlimited" },
                    { feature: "Personalized Plans", basic: false, pro: true, premium: true },
                    { feature: "Dedicated Physiotherapist", basic: false, pro: false, premium: true },
                    { feature: "Family Plan (4 members)", basic: false, pro: false, premium: true },
                    { feature: "24/7 Emergency Support", basic: false, pro: false, premium: true }
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="border border-gray-200 p-4 font-medium">{row.feature}</td>
                      <td className="border border-gray-200 p-4 text-center">
                        {typeof row.basic === 'boolean' ? (
                          row.basic ? <CheckCircle className="h-5 w-5 text-medical-green mx-auto" /> : <X className="h-5 w-5 text-gray-400 mx-auto" />
                        ) : (
                          <span className="text-sm">{row.basic}</span>
                        )}
                      </td>
                      <td className="border border-gray-200 p-4 text-center">
                        {typeof row.pro === 'boolean' ? (
                          row.pro ? <CheckCircle className="h-5 w-5 text-medical-green mx-auto" /> : <X className="h-5 w-5 text-gray-400 mx-auto" />
                        ) : (
                          <span className="text-sm">{row.pro}</span>
                        )}
                      </td>
                      <td className="border border-gray-200 p-4 text-center">
                        {typeof row.premium === 'boolean' ? (
                          row.premium ? <CheckCircle className="h-5 w-5 text-medical-green mx-auto" /> : <X className="h-5 w-5 text-gray-400 mx-auto" />
                        ) : (
                          <span className="text-sm">{row.premium}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-medical-light-blue">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-medical-navy mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to know about our pricing and plans
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white">
                <MessageCircle className="mr-2 h-4 w-4" />
                Live Chat
              </Button>
              <Button variant="outline" className="border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white">
                <Phone className="mr-2 h-4 w-4" />
                Call Sales: 1-800-REHAB-AI
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 medical-gradient text-white">
        <div className="container text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Recovery?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of patients and healthcare providers who are already experiencing 
            better outcomes with RehabAI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" variant="secondary" className="bg-white text-medical-blue hover:bg-gray-100" asChild>
              <Link to="/start-recovery">Start Free Trial</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-medical-blue" asChild>
              <Link to="/get-started">Contact Sales</Link>
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6 text-sm opacity-80">
            <div className="flex items-center space-x-1">
              <Shield className="h-4 w-4" />
              <span>No Setup Fees</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>Cancel Anytime</span>
            </div>
            <div className="flex items-center space-x-1">
              <Headphones className="h-4 w-4" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
